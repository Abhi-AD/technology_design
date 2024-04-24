import React, { useState } from 'react';
import './Navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assests/travel logo.png';
import { Link } from 'react-router-dom';
import { PiRectangleThin } from 'react-icons/pi';

const Menu = ({ isServiceOpen, isJoinOpen, serviceDropdown, joinDropdown }) => (
     <>
          <ul className="header-list">
               <li key="home">
                    <Link className='navbar-link' to={`/`}>Home</Link>
               </li>
               <li key="service" onClick={serviceDropdown}>
                    <span className='navbar-link'>Service</span>
                    {isServiceOpen && (
                         <div className={`header_dropdown`}>
                              <Link className='header-sublist' to={`/service`}>
                                   <PiRectangleThin className='header-icon' />
                                   <p className="header__dropdown-title">Products & Technology</p>
                                   <p className="header__dropdown-des">From concept to completion, the design and delivery of technology and products</p>                                   </Link>
                              <Link className='header-sublist'>
                                   <PiRectangleThin className='header-icon' />
                                   <p className="header__dropdown-title">Team Augmentation</p>
                                   <p className="header__dropdown-des">A custom-built group of developers and designers, fine-tuned for delivery</p>
                              </Link>
                              <Link className='header-sublist'>
                                   <PiRectangleThin className='header-icon' />
                                   <p className="header__dropdown-title">Design</p>
                                   <p className="header__dropdown-des">Bring your product vision to life with UI/UX design, prototypes, and videos</p>
                              </Link>
                              <Link className='header-sublist'>
                                   <PiRectangleThin className='header-icon' />
                                   <p className="header__dropdown-title">Data & AI</p>
                                   <p className="header__dropdown-des">Smarter apps and better decisions with data engineering, analytics, ML, and LLM</p>
                              </Link>
                              <Link className='header-sublist'>
                                   <PiRectangleThin className='header-icon' />
                                   <p className="header__dropdown-title">DevOps & Cloud</p>
                                   <p className="header__dropdown-des">Cloud-based solutions for world-class security, scalability and cost-effectiveness</p>
                              </Link>
                         </div>
                    )}
               </li>
               <li key="join" onClick={joinDropdown}>
                    <span className='navbar-link'>Join</span>
                    {isJoinOpen && (
                         <div className={`header_dropdown`}>
                              <Link className='header-sublist'>
                                   <PiRectangleThin className='header-icon' />
                                   <p className="header__dropdown-title">Careers</p>
                                   <p className="header__dropdown-des">From concept to completion, the design and delivery of technology and products</p>                                   </Link>
                              <Link className='header-sublist'>
                                   <PiRectangleThin className='header-icon' />
                                   <p className="header__dropdown-title">Fellowship</p>
                                   <p className="header__dropdown-des">A custom-built group of developers and designers, fine-tuned for delivery</p>
                              </Link>
                         </div>
                    )}
               </li>
               <li key="blog">
                    <Link className='navbar-link' to={`/blog`}>Blog</Link>
               </li>
               <li key="about">
                    <Link className='navbar-link' to={`/about`}>About Us</Link>
               </li>
          </ul>
     </>
);

const Navbar = () => {
     const [toggleMenu, setToggleMenu] = useState(false);
     const [isServiceOpen, setIsServiceOpen] = useState(false); // State to manage dropdown visibility
     const [isJoinOpen, setIsJoinOpen] = useState(false); // State to manage dropdown visibility

     const serviceDropdown = () => {
          setIsServiceOpen(!isServiceOpen);
     };
     const joinDropdown = () => {
          setIsJoinOpen(!isJoinOpen);
     };

     return (
          <div className='header'>
               <Link className='logo' to={`/`}>
                    <img src={logo} alt="logo" />
               </Link>
               <div className="header_link">
                    <Menu
                         isServiceOpen={isServiceOpen}
                         isJoinOpen={isJoinOpen}
                         serviceDropdown={serviceDropdown}
                         joinDropdown={joinDropdown}
                    />
               </div>
               <div className="header-button">
                    <Link className='animation animation-contact' to={`/contact`}>
                         <div className="animation-icon">
                              <PiRectangleThin className='rectangle' />
                              <span className='animation-line'></span>
                         </div>
                         <span>Build with Card</span>
                    </Link>
                    <Link className='animation animation-card' to={`/contact`}>
                         <div className="animation-icon">
                              <PiRectangleThin className='rectangle' />
                              <span className='animation-line'></span>
                         </div>
                         <span>Build with us</span>
                    </Link>
               </div>
               <div className='navbar-menu'>
                    {toggleMenu
                         ? <RiCloseLine color='#fff' size={28} onClick={(e) => setToggleMenu(false)} />
                         : <RiMenu3Line color='#fff' size={28} onClick={(e) => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                         <div className="navbar-menu_container scale-up-center">
                              <div className="navbar-menu_container-links">
                                   <Menu />
                              </div>
                              <div className="header-button">
                                   <Link className='animation animation-contact' to={`/contact`}>
                                        <div className="animation-icon">
                                             <PiRectangleThin className='rectangle' />
                                             <span className='animation-line'></span>
                                        </div>
                                        <span>Build with Card</span>
                                   </Link>
                                   <Link className='animation animation-card' to={`/contact`}>
                                        <div className="animation-icon">
                                             <PiRectangleThin className='rectangle' />
                                             <span className='animation-line'></span>
                                        </div>
                                        <span>Build with us</span>
                                   </Link>
                              </div>
                         </div>
                    )}
               </div>
          </div>
     );
};

export default Navbar;
