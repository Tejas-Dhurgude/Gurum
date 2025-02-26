import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
        <Link to="/" className='nav-txt'>GurOm Dental</Link>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className='nav-txt'>Home</Link>
          </li>
          <li>
            <Link to="/services" className='nav-txt'>Our Services</Link>
          </li>
          <li>
            <Link to="/blog" className='nav-txt'>Blogs</Link>
          </li>
          
          
          <li>
            <Link to="/about" className='nav-txt'>About Us</Link>
          </li>
          <li>
            <Link to="/contact" className='nav-txt'>Contact Us</Link>
          </li>
          
          
        </div>

        <button className="shop-now-btn">
          <Link to="/shop" className='see'>Shop Now</Link>

        </button>

        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          &#9776; {/* This is the hamburger icon */}
        </div>
      </nav>
    </div>
  );
}
