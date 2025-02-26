import React from 'react';
import './ContactUs.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import img1 from "../../assets/contactus.jpg"

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="contact-us">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Please fill out the form below, and our team will get back to you as soon as possible.</p>

        <div className="contact-form-container">
          <div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            
            <div>
            <h3 >Contact Information</h3>
            </div>
            
            <p className='see'>Visit us at our main office on JM Road, Shivajinagar, Pune. Get directions via Google Maps.</p>
            
            <p>Email: info@gurOmDental.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Dental Street, Pune, India</p>
            
          </div>
          {/* <div>
            <img src={img1} alt="" />
          </div> */}
          
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.224940264681!2d73.8426452148774!3d18.529836587408584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07f593b64ad%3A0xefe4d15b9b4aaf08!2sShivaji%20Nagar%2C%20Pune%2C%20Maharashtra%20411005!5e0!3m2!1sen!2sin!4v1630289091845!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        

        {/* <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.224940264681!2d73.8426452148774!3d18.529836587408584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07f593b64ad%3A0xefe4d15b9b4aaf08!2sShivaji%20Nagar%2C%20Pune%2C%20Maharashtra%20411005!5e0!3m2!1sen!2sin!4v1630289091845!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
         */}
      </div>
      <Footer />
    </>
  );
}
