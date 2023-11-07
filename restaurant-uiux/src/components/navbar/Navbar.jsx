import { useToggleMenu } from '../../hooks/useToggleMenu'
import { Links } from '../../components'

import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images'

import './navbar.css'

export default function Navbar () {
    const { toggleMenu, handleToggleMenu } = useToggleMenu()

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.gericht} alt='app logo' />
            </div>

            <ul className='app__navbar-links'>
                <Links />
            </ul>

            <div className='app__navbar-login'>
                <a href='#login' className='p__opensans'>Log In / Register</a>
                <div />
                <a href='/' className='p__opensans'>Book Table</a>
            </div>

            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu 
                    color='#FFF' 
                    fontSize={27} 
                    onClick={handleToggleMenu} 
                />

                {toggleMenu && (
                    <div className='app__navbar-smallscreen_overlay flex-center slide-bottom'>
                        <MdOutlineRestaurantMenu 
                            fontSize={27} 
                            className='overlay__close' 
                            onClick={handleToggleMenu} 
                        />
                        <ul className='app__navbar-smallscreen_links'>
                            <Links />
                        </ul>
                    </div>
                )}
                
            </div> 
        </nav>
    )
}
    
