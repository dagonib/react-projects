import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });
    
    try {  
        await newUser.save();
        res.status(201).json({
            message: 'User created successfully!'
        }); 
    } catch (error) {
        next(error);
    }
}

export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(401, 'User not found'));

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Invalid email or password'));

        const { password: pass, ...rest} = validUser._doc;

        const token = jwt.sign({
            id: validUser._id
        }, process.env.JWT_SECRET);

        res
            .cookie('access_token', token, { httpOnly: true})
            .status(200)
            .json(rest)

    } catch (error) {
        next(error);
    }
}

export const google = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            const token = jwt.sign({
                id: user._id
            }, process.env.JWT_SECRET);

            const { password, ...rest } = user._doc;

            return res
                .cookie('access_token', token, { httpOnly: true})
                .status(200)
                .json(rest)
        } else {
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
            console.log(req.body)

            const newUser = new User({
                username: req.body.name.split(' ').join('').toLowerCase() + Math.random().toString(36).slice(-4),
                email: req.body.email,
                password: hashedPassword,
                avatar: req.body.photoURL          
            });

            await newUser.save();

            const token = jwt.sign({
                id: newUser._id
            }, process.env.JWT_SECRET);

            const { password, ...rest } = newUser._doc;

            return res
                .cookie('access_token', token, { httpOnly: true})
                .status(200)
                .json(rest)
        }
    } catch (error) {
        next(error);
    }
}