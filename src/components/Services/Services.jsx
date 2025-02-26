import React from 'react';
import './Services.css'; // Make sure to link the appropriate styles
import Navbar from '../Navbar/Navbar'; // Assuming you have a Navbar component
import img1 from "../../assets/dentalclinic.jpg"
import img2 from "../../assets/dentallab.jpg"
import img3 from "../../assets/dentalshop.jpg"
import img4 from "../../assets/dentalequipment.jpg"
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
export default function Services() {
  return (
<>
<Navbar /> {/* Add your Navbar component here */}

<div className="services-page">

      <div className="services-container">

        {/* Dental Clinics Section */}
        <div className="service-section">
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
          <h2>Pune Dental Shop (GurOm Dental World)</h2>
          <p>
            GurOm Dental World offers a wide range of high-quality materials to dental clinics and labs. From consumables like impression materials to advanced restorative solutions, we provide everything you need to keep your practice running smoothly.
          </p>
          <h3>Materials Available:</h3>
          <ul>
            <li>Impression Materials</li>
            <li>Dental Cements</li>
            <li>Restorative Materials (Composites, Amalgam)</li>
            <li>Disposable Consumables</li>
          </ul>
          <button className="cta-button"><Link to="/shop" className='btn'>Shop Now On Pune Dental Shop</Link></button> {/* Call to action button */}
          </div>
        </div>

        <div className="service-section">
          <div>
          <h2>Dental Lab</h2>
          <p>
            At GurOm Dental Lab, precision and quality come first. Our lab is equipped with the latest CAD/CAM technology, allowing us to create custom crowns, bridges, dentures, and more with unparalleled accuracy. Partner with us to ensure your patients receive the best prosthetic care.
          </p>
          <h3>Our Services:</h3>
          <ul>
            <li>Custom Crowns & Bridges</li>
            <li>Denture Fabrication</li>
            <li>Implant-Supported Prosthetics</li>
            <li>Full-mouth Reconstructions</li>
          </ul>
          <button className="cta-button"><Link to="/dentallab" className='btn'>Explore more</Link></button> 
          </div>
          <div>
            <img src={img2} alt="" />
          </div>

        </div>
        

        <div className="service-section">
        <div>
            <img src={img1} alt="" />
          </div>
          <div>
          <h2>Dental Clinic</h2>
          <p>
            Our clinic is equipped with the latest technology, delivering top-tier dental care for patients of all ages. Whether you need preventive care, cosmetic enhancements, or restorative procedures, GurOm Dental Clinics provide personalized, compassionate service that ensures you leave with a smile.
          </p>
          <h3>Services Offered:</h3>
          <ul>
            <li>Routine Check-ups and Cleaning</li>
            <li>Cosmetic Dentistry (Teeth Whitening, Veneers)</li>
            <li>Restorative Dentistry (Crowns, Bridges, Implants)</li>
            <li>Orthodontic Services (Braces, Aligners)</li>
          </ul>
          <button className="cta-button"><Link to="/dentalclinic" className='btn'>Book Now</Link></button> {/* Call to action button */}
          </div>
        </div>

        {/* Dental Lab Section */}
        

        {/* Dental Material Trading Section */}

        {/* Dental Equipment Manufacturing Section */}
        <div className="service-section">
          <div>
          <h2>Dental Equipment Manufacturing</h2>
          <p>
            Our team of engineers works tirelessly to bring cutting-edge dental equipment to the market. From ergonomic dental chairs to advanced diagnostic tools, we provide reliable, innovative solutions that empower clinics to deliver the best possible care.
          </p>
          <h3>Our Products:</h3>
          <ul>
            <li>Dental Chairs and Units</li>
            <li>Imaging and Diagnostic Equipment</li>
            <li>Sterilization Systems</li>
            <li>Handpieces and Tools</li>
          </ul>
          <button className="cta-button"><Link to="/services" className='btn'>Explore More</Link></button> 
          </div>
          <div>
            <img src={img4} alt="" />
            </div> 
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
