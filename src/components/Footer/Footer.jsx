import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>GurOm Dental</h3>
          <p>Unique Dental Solutions</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your Email" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/search">More Search</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/events">Events</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Helpful Links</h3>
          <ul>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/term">Terms & Condition</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Phone: +91 9999 999 999</p>
          <p>Email: youremail@gmail.com</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
