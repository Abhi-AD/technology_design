import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navbar.css';
import logo from '../../assests/travel logo.png'
import Button from './Button';
import { Link } from 'react-router-dom';

const Menu = () => (
     <>
          <p><Link className='menu-link' to="/">Home</Link></p>
          <p><Link className='menu-link' to="/service">Service</Link></p>
          <p><Link className='menu-link' to="/join">Join</Link></p>
          <p><Link className='menu-link' to="/blog">Blog</Link></p>
          <p><Link className='menu-link' to="/about">About us</Link></p>
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
                         <Link to='/'><img src={logo} alt='logo' /></Link>
                    </div>
                    <div className='technology__navbar-links_container'>
                         <Menu />
                    </div>
               </div>
               <div className='technology__navbar-contact'>
                    <Link to='/contact'>
                         <Button />
                    </Link>
               </div>
          </div >
     )
}

export default Navbar