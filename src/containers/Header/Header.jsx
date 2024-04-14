import React, { useEffect, useRef } from 'react';
import './Header.css';
import src from '../../assests/video/Header.mp4';
import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div className="technology__header section__padding" id="home">
      <div className="technology__header-content">
        <h1 className="gradient__text">Innovate better,<br />
          <span>faster.</span>
        </h1>
        <p>We help businesses imagine and create the digital experiences of tomorrow. We succeed together, through the fusion of startup agility, enterprise standards, and world-class engineering.</p>
        <div className='technology__header-link-btn'>
          <a href="#contact" className='centered-link'><span>Build With us</span><FaArrowRight className='arrow-icon' /></a>
          <a href="#join" className='centered-link'><span>Join us</span><FaArrowRight className='arrow-icon' /></a>
        </div>

      </div>
      <div className="technology__header-video">
        <video ref={videoRef} controls muted className='video-size'>
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Header;
