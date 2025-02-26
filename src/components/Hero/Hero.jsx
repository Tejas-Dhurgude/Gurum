import React from 'react';
import './Hero.css';
import img from './dental.png';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
export default function Hero() {
  return (
    <>
      
      <div className="hero">
        <div className="text-content">
          <h4>Innovative Solutions</h4>
          <h1>
            <span className="line1">Elevating</span>
            <span className="line2">Dental Care</span>
          </h1>
          <p>
            Welcome to GurOm Dental – Your trusted partner in dental solutions.
            From advanced dental care to premium dental materials and equipment,
            we’re here to bring excellence to your clinic and beyond.
          </p>
          <button className="get-started-btn">
          <Link to="/services" className='btn'>Explore Our Services</Link>
          
          </button>
          <button></button>
        </div>

        <div className="image-content">
          <img src={img} alt="Doctor and Dental Care" className="main-image" />
        </div>
      </div>
    </>
  );
}
