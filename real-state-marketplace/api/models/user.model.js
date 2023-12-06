import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/dqtp9um6k/image/upload/v1629121252/real-estate-marketplace/default-avatar.png',
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;