import React from 'react';
import './Footer.css';
import {footer_button,lf_logo_white} from './imports';
import { FaCodeBranch, FaFacebook, FaGraduationCap, FaInstagram, FaLinkedin, FaPodcast, FaUserFriends } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container footer1">
                <div className="footer_subscription">
                    <span className='title_sub'>Stay in the loop</span>
                </div>
                <hr className='line' />
                <div className="footer__menu">
                    <div className="row">
                        <div className="col-lg-3">
                            <img src={lf_logo_white} alt="lf_logo_white" className='footer_logo' />
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_block">
                                <h3 className="footer_title">We are Leapfrog</h3>
                                <ul>
                                    <li><a href='/about-us'><span>About us</span></a></li>
                                    <li><a href='/resources'><span>Resource</span></a></li>
                                    <li><a href='/case-studies'><span>Case Studies</span></a></li>
                                    <li><a href='/security-compliance'><span>Security and Compliance</span></a></li>
                                    <li><a href='/contact'><span>Contact Us</span></a></li>
                                    <li><a href='/blog'><span>Blog</span></a></li>
                                </ul>
                            </div>
                            <div className="footer_block">
                                <h3 className="footer_title">Work With Us</h3>
                                <ul>
                                    <li><a href='/careers'><span>Careers</span></a></li>
                                    <li><a href='/fellowship'><span>Fellowship</span></a></li>
                                    <li><a href='/life-at-leapfrog'><span>Life at Leapfrog</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_block">
                                <h3 className="footer_title">What We Do</h3>
                                <ul>
                                    <li><a href='/products'><span>Products & Technology</span></a></li>
                                    <li><a href='/team-augmentation'><span>Team Augmentation</span></a></li>
                                    <li><a href='/design'><span>Design</span></a></li>
                                    <li><a href='/data-and-ai'><span>Data and AI</span></a></li>
                                    <li><a href='/devops-and-cloud'><span>DevOps & Cloud</span></a></li>
                                </ul>
                            </div>
                            <div className="footer_block">
                                <h3 className="footer_title">Industries</h3>
                                <ul>
                                    <li><a href='/healthtech'><span>Healthtech</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer_block">
                                <h3 className="footer_title">Connect with Us</h3>
                                <ul>
                                    <li><a href='/podcast'><FaPodcast className='icon' /><span>Podcast</span></a></li>
                                    <li><a href='https://www.facebook.com/'><FaFacebook className='icon' /><span>Facebook</span></a></li>
                                    <li><a href='https://www.instagram.com/'><FaInstagram className='icon' /><span>Instagram</span></a></li>
                                    <li><a href='https://www.linkedin.com/'><FaLinkedin className='icon' /><span>LinkedIn</span></a></li>
                                </ul>
                            </div>
                            <div className="footer_block">
                                <ul>
                                    <li><a href='/leapfrog-brand'><FaCodeBranch className='icon' /><span>Leapfrog Brand</span></a></li>
                                    <li><a href='/education-mission'><FaGraduationCap className='icon' /><span>Education Mission</span></a></li>
                                    <li><a href='/student-partnership'><FaUserFriends className='icon' /><span>Student Partnership</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='line' />
                <div className="footer__copyright">
                    <img src={footer_button} alt="footer_button" />
                    <p className='footer_copyright_text'>Copyright, Leapfrog Technology Inc. </p>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Data Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
