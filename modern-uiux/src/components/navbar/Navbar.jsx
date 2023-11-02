import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import './navbar.css'
import logo from '../../assets/logo.svg'
import { Menu } from '../menu/Menu'


export default function Navbar () {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
               <div className='gpt3__navbar-links_logo'>
                    <img src={logo} alt='logo' />
                </div> 
                <div className='gpt3__navbar-links_container'>
                    <Menu />
                </div>
            </div>

            <div className='gpt3__navbar-sign'>
                <p>Sign in</p>
                <button type='button'> Sign up</button>
            </div>

            <div className='gpt3__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='FFF' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='FFF' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='gpt3__navbar-menu_container scale-up-center'>
                        <div className='gpt3__navbar-menu_container-links'>
                            <Menu />
                            <div className='gpt3__navbar-menu_container-links-sign'>
                                <p>Sign in</p>
                                <button type='button'> Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}