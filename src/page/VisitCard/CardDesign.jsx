import React, { useRef } from 'react';
import './CardDesign.css';
import { FaDownload } from "react-icons/fa";
import QR from '../../assests/img/QR.png';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const CardDesign = () => {
  const cardRef = useRef(null);

  const handleDownload = () => {
    html2canvas(cardRef.current).then(canvas => {
      canvas.toBlob(blob => {
        saveAs(blob, 'card_design.png');
      });
    });
  };

  return (
    <div>
      <div className="card" ref={cardRef}>
        <div className="front-side">
          <div className="color-grid">
            <div className="color1"></div>
            <div className="color2"></div>
            <div className="color3"></div>
            <div className="color4"></div>
          </div>
          <div className="info-grid">
            <div className="name">
              <h2>Abhishek Dangi</h2>
              <h5>Full Stack Developer</h5>
            </div>
            <div className="addr">
              <p>1/2 Street, <strong>City</strong>, State, <strong>Country</strong></p>
            </div>
            <div className="phoneNo">
              <p>+000 <strong>1234</strong> 4567 7896</p>
            </div>
            <div className="emailId">
              <p className="web"><strong>www</strong>.yourwebsite.<strong>com</strong></p>
              <p className="email">dangiabhi332@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="back-side">
          <div className="color-grid">
            <div className="color1"></div>
            <div className="color2"></div>
            <div className="color3"></div>
            <div className="color4"></div>
          </div>
          <div className="name-tag">
            <img src={QR} alt="QR Code" className="qrcode" />
          </div>
        </div>
      </div>
      <button className="download" onClick={handleDownload}>
        <FaDownload />
        Download
      </button>
    </div>
  );
};

export default CardDesign;
