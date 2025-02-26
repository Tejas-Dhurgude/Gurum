import React from 'react';
import './Hero2.css';
import img2 from "../../assets/pic.jpg"
import { Link } from 'react-router-dom';
export default function Hero2() {
  return (
    <div className="hero2">
      <div className="hero2-content">
        <div className="hero2-image">
          <img src={img2} alt="Dental tools" />
        </div>
        <div className="txt">
        <h1>GurOm Dental in Brief</h1>
          <p>
          GurOm Dental is a multifaceted dental solutions provider based in Pune. From world-class dental clinics and dental labs to premium dental materials trading and innovative equipment manufacturing, we are dedicated to delivering comprehensive, high-quality solutions for dental professionals and patients alike.
          </p>
        </div>
        
      </div>

      {/* <div className="hero2-content">
        
        <div className="txt">
          <div className='p'>
        <h1 className='txt2'>Key Services</h1>
        </div>
        <div className='btn-all'>
          <div>
            <button className="learn-more-btn">Dental Shop</button>
            <p>Cutting-edge dental equipment for modern practices.
            </p>
          </div>
          <div>
            <button className="learn-more-btn">Dental Lab</button>
            <p>Precision, quality, and innovation in dental lab services.
            </p>
          </div>
          <div>
            <button className="learn-more-btn">Dental Clinic</button>
            <p>
            Top-notch dental care for all your needs.
            </p>
          </div>
          <div>
            <button className="learn-more-btn">Dental Material</button>
            <p>Supplying the best materials for your clinic.
            </p>
          </div>
{/*           
          <div></div>
          <div></div>
          <div></div>
          <button className="learn-more-btn">Dental Shop</button>
          <button className="learn-more-btn">Dental Lab</button>
          <button className="learn-more-btn">Dental Clinic</button>
          <button className="learn-more-btn">Dental Materials</button> */}
          {/* </div>
          
        </div> */}
        
      {/* </div> */}


        

      <div className="commitment-info">
  <div className="commitment-details">
    <h2>Our Commitment</h2>
    <p>
      At GurOm Dental, we believe in empowering smiles with customized and innovative
      dental solutions for everyone. Medicine is the field of health and healing. It includes nurses, doctors, and various specialists.
    </p>
    <button className="learn-btn">
      <Link to="/about" className="btn">Learn More</Link>
    </button>
  </div>

  <div className="commitment-stats">
    <div className="commitment-stat-item">
      <h1>100+</h1>
      <p>Quality Services</p>
      <span>Our team has successfully served over 100 satisfied clients.</span>
    </div>
    <div className="commitment-stat-item">
      <h1>24/7</h1>
      <p>Availability</p>
      <span>We offer 24/7 service to cater to all your dental needs anytime, anywhere.</span>
    </div>
  </div>
</div>

    </div>
  );
}
