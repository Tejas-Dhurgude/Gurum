import React from 'react';
import "./DentalLab.css";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function DentalLab() {
  return (
    <>
    <Navbar/>
    <div className="lab-container">
      {/* Header Section */}
      <header className="lab-header">
        <h1>GurOm Dental Lab: Expert Solutions for Precision Dental Care</h1>
        <h2>Advanced Dental Lab Services for Reliable Results</h2>
        <p>Expertly crafted dental materials and solutions tailored for clinics and dental professionals.</p>
        <div className="cta-buttons">
          <button className="cta-btn">Get a Consultation</button>
          <button className="cta-btn">Explore Our Services</button>
        </div>
      </header>

      {/* Section 1: Introduction */}
      <section className="lab-section">
        <h2>Introduction to GurOm Dental Lab</h2>
        <p>
          Welcome to GurOm Dental Lab, where precision meets expertise. Our lab is dedicated to providing high-quality dental materials, custom restorations, and expert support to clinics and dental professionals. With state-of-the-art technology and a team of skilled technicians, we ensure top-notch craftsmanship and reliability in every product we deliver.
        </p>
      </section>

      {/* Section 2: Lab Capabilities & Core Services */}
      <section className="lab-section">
        <h2>Our Services for Dental Professionals</h2>
        <ul>
          <li>Custom Restorations: Tailor-made crowns, bridges, veneers, and implants designed to fit each patient perfectly.</li>
          <li>Orthodontic Appliances: High-quality retainers, mouthguards, and aligners for effective orthodontic treatment.</li>
          <li>Digital Dental Solutions: Incorporating CAD/CAM technology, digital impressions, and 3D printing to streamline processes and enhance accuracy.</li>
          <li>Shade Matching & Aesthetic Design: Precise color matching for a seamless and natural look that meets patient satisfaction.</li>
        </ul>
      </section>

      {/* Section 3: Materials We Use */}
      <section className="lab-section">
        <h2>Premium Dental Materials for Superior Quality</h2>
        <p>We prioritize quality and durability, using only the best materials in our dental lab. Our team works with trusted suppliers and advanced manufacturing techniques to produce high-grade dental products. Some of our commonly used materials include:</p>
        <ul>
          <li>Zirconia - Known for its durability and aesthetic appeal.</li>
          <li>Porcelain Fused to Metal (PFM) - An excellent option for strength and esthetics.</li>
          <li>Lithium Disilicate (eMax) - Perfect for natural-looking crowns and veneers.</li>
          <li>Acrylic and Resin Composites - Ideal for temporary restorations and orthodontic appliances.</li>
        </ul>
        <button className="cta-btn">Learn More About Our Materials</button>
      </section>

      {/* Section 4: Key Clients & Partnerships */}
      <section className="lab-section">
        <h2>Trusted by Leading Clinics and Dental Professionals</h2>
        <div className="partners-carousel">
          {/* Here you can add a carousel or logo slider for clinics */}
          <p>Showcase partner clinics and testimonials.</p>
        </div>
      </section>

      {/* Section 5: Book a Consultation */}
      <section className="lab-section consultation-section">
        <h2>Book a Consultation</h2>
        <form className="consultation-form">
          <label>Name:</label>
          <input type="text" placeholder="Your Name" required />

          <label>Clinic Name:</label>
          <input type="text" placeholder="Clinic Name" />

          <label>Email Address:</label>
          <input type="email" placeholder="Your Email" required />

          <label>Phone Number:</label>
          <input type="tel" placeholder="Your Phone Number" required />

          <label>Preferred Consultation Type:</label>
          <select required>
            <option value="virtual">Virtual Consultation</option>
            <option value="in-person">In-Person Visit</option>
          </select>

          <label>Date & Time Preferences:</label>
          <input type="datetime-local" required />

          <label>Additional Comments or Questions:</label>
          <textarea placeholder="Your Message"></textarea>

          <button type="submit" className="submit-btn">Request Consultation</button>
        </form>
      </section>

      {/* Section 6: Why Choose Us */}
      <section className="lab-section">
        <h2>Why Choose GurOm Dental Lab?</h2>
        <ul>
          <li>Experienced Technicians: Our team has years of expertise in dental lab work, ensuring reliable results.</li>
          <li>Cutting-Edge Technology: From 3D printing to digital impressions, we utilize the latest advancements to serve you better.</li>
          <li>Customized Solutions: Every product is customized to meet specific clinical needs, ensuring a precise fit and lasting quality.</li>
        </ul>
      </section>
    </div>
    <Footer/>
    </>
  );
}
