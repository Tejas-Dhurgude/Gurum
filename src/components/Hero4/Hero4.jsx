import React from 'react';
import './Hero4.css'; // Import the CSS file

export default function Hero4() {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src="/path/to/your/image.png" alt="Dental Solutions" />
      </div>
      <div className="hero-content">
        <h5 className="hero-subtitle">Comprehensive Dental Solutions</h5>
        <h1 className="hero-title">Innovative Dental Solutions for Everyone</h1>
        <p className="hero-description">
          Gur0m Dental provides a full range of services including dental clinics, labs, and high-quality dental materials.
        </p>
        <button className="hero-button">Explore More</button>
      </div>
    </div>
  );
}
