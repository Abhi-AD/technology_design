import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navbar.css';
import logo from '../../assests/logo.jpg'
import Button from './Button';

const Menu = () => (
     <>
          <p><a className='menu-link' href="#home">Home</a></p>
          <p><a className='menu-link' href="#services">Services</a></p>
          <p><a className='menu-link' href="#join">Join</a></p>
          <p><a className='menu-link' href="#blog">Blog</a></p>
          <p><a className='menu-link' href="#about">About us</a></p>
     </>
)

// BEM ---> Block Element Modifier

const Navbar = () => {
     const [toggleMenu, setToggleMenu] = useState(false);
     return (
          <div className='technology__navbar'>
               <div className='technology__navbar-links'>
                    <div className='technology__navbar-menu'>
                         {toggleMenu
                              ? <RiCloseLine color='#000' size={40} onClick={(e) => setToggleMenu(false)} />
                              : <RiMenu3Line color='#000' size={40} onClick={(e) => setToggleMenu(true)} />
                         }
                         {toggleMenu && (
                              <div className="technology__navbar-menu_container scale-up-center">
                                   <div className="technology__navbar-menu_container-links">
                                        <Menu />
                                   </div>
                              </div>
                         )}
                    </div>
                    <div className='technology__navbar-links_logo'>
                         <a href='#home'><img src={logo} alt='logo' /></a>
                    </div>
                    <div className='technology__navbar-links_container'>
                         <Menu />
                    </div>
               </div>
               <div className='technology__navbar-contact'>
                    <a href='#contact'>
                         <Button />
                    </a>
               </div>
          </div >
     )
}

export default Navbar