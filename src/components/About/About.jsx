import React from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function About() {
  return (
    <>
    <Navbar />


    <div className="about-page">
      
      <div className="about-container">

        {/* History & Overview Section */}
        <div className="about-section">
          <h2>History & Overview</h2>
          <p>
            Established in 2019, GurOm Dental has rapidly grown into a comprehensive dental solutions provider, catering to clinics, labs, and dental professionals across India. Our goal is simple: to bring innovation and excellence to every aspect of dental care – from clinic services to materials and equipment.
          </p>
        </div>

        {/* Vision Section */}
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            To revolutionize the dental industry by providing world-class, innovative dental care and solutions that improve patient outcomes and the quality of dental practices.
          </p>
        </div>

        {/* Mission Section */}
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We are committed to delivering exceptional dental services, superior materials, and cutting-edge equipment to ensure that every patient receives the best care, and every clinic operates at the highest standard of excellence.
          </p>
        </div>

        {/* Our Team Section */}
        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            Our team includes experienced dental professionals, skilled lab technicians, and cutting-edge engineers dedicated to developing the best dental solutions available. From our clinicians to our material experts, we ensure every aspect of our service reflects our commitment to quality.
          </p>
        </div>

        {/* Certifications & Achievements Section */}
        <div className="about-section">
          <h2>Certifications & Achievements</h2>
          <ul>
            <li>ISO Certified Dental Labs, 2020</li>
            <li>Recognized as Pune’s Most Innovative Dental Service Provider, 2022</li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="about-section">
          <h2>Join Us in Revolutionizing Dental Care</h2>
          <p>
            At GurOm Dental, we are constantly striving to push the boundaries of dental care and innovation. Whether you're a clinic looking for high-quality materials, a professional seeking cutting-edge dental equipment, or a patient in need of exceptional service, we're here for you. Together, let's create a healthier, brighter future for dental care.
          </p>
          <button className="cta-button">Contact Us</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
