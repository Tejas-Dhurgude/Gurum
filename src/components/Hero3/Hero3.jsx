import React from 'react';
import './Hero3.css';
import img3 from "../../assets/hero3.png";
import img1 from "../../assets/hero2dentalclinic.jpg"
import img2 from "../../assets/hero3dentalshop.jpg"
import img4 from "../../assets/hero3dentallab.jpg"
import img5 from "../../assets/hero3dentalmaterial.jpg"
import { Link } from 'react-router-dom';
export default function Hero3() {
  return (
    <div className="hero3">
      <h3>Exceptional Dental Care</h3>
      <h1>Our Core Services</h1>
      <p className="description">
        Experience unparalleled dental care designed for your unique needs.
      </p>

      <div className="services-cards">
        <div className="service-card">
          <img src={img2} alt="Dental Shop" />
          <h2>
          <Link to="/shop" className='nav-txt'>Dental Shop</Link>
            </h2>

          <p>
            Cutting-edge dental equipment for modern practices.
          </p>
        </div>

        <div className="service-card">
          <img src={img4} alt="Dental Lab" />
          <h2>
          <Link to="/dentallab" className='nav-txt'>Dental Lab</Link>
          </h2>
          <p>
            Precision, quality, and innovation in dental lab services.
          </p>
        </div>

        <div className="service-card">
          <img src={img1} alt="Dental Clinic" />
          <h2>
          <Link to="/dentalclinic" className='nav-txt'>Dental Clinic</Link>
          </h2>
          <p>
            Top-notch dental care for all your needs.
          </p>
        </div>

        <div className="service-card">
          <img src={img5} alt="Dental Material" />
          <h2>
          <Link to="/services" className='nav-txt'>Dental Material</Link>
          </h2>
          <p>
            Supplying the best materials for your clinic.
          </p>
        </div>
      </div>
    </div>
  );
}
