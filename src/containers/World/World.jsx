import React from 'react'
import './World.css'
import { FaGlobe, FaArrowRight, FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const World = () => {
     return (
          <div className='world'>
               <img src="https://www.lftechnology.com/_next/image?url=%2Fimages%2Fleapfrog-family.webp&w=384&q=75" alt="world1" />
               <div className="world_card">
                    <FaGlobe className='world_card-icon' />
                    <h2>450+</h2>
                    <p>talented people who make up the Leapfrog family</p>
                    <p>Innovating straight out of Nepal, USA, India, Philippines, Mexico and Europe.</p>
                    <Link className='world-link'>
                         <FaLinkedin />
                         <span>see on linkedin</span>
                         <FaArrowRight />
                    </Link>
               </div>
          </div>
     )
}

export default World
