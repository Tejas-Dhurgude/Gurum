import React from 'react';
import './Blog.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Blog() {
  return (
    <>
    <Navbar/>
    <div className="blog-container">
      <h1 className="blog-title">Welcome to GurOm Insights!</h1>
      <p className="blog-intro">
        Dive into our collection of expert articles and latest updates in the world of dental care. Here, you’ll find valuable insights, wellness tips, industry news, and innovative solutions that empower dental professionals and enrich the lives of patients. Whether you’re looking for at-home care tips, advice on dental procedures, or a closer look at the latest dental technology, GurOm Insights has you covered.
      </p>

      <h2 className="section-title">Featured Blogs Categories:</h2>

      <div className="category">
        <h3>Dental Health Tips</h3>
        <p>From preventative care to oral hygiene best practices, explore expert tips on maintaining a healthy, beautiful smile.</p>
        <ul>
          <li>5 Essential Dental Care Tips for Healthy Teeth</li>
          <li>The Do’s and Don’ts of At-Home Teeth Whitening</li>
          <li>How to Handle Dental Emergencies: A Quick Guide</li>
        </ul>
      </div>

      <div className="category">
        <h3>For Dental Professionals</h3>
        <p>Insights and resources tailored to dentists, dental technicians, and other professionals in the industry.</p>
        <ul>
          <li>Emerging Trends in Dental Materials and Equipment</li>
          <li>The Benefits of 3D Printing in Modern Dental Labs</li>
          <li>How Digital Dentistry is Transforming Patient Experience</li>
        </ul>
      </div>

      <div className="category">
        <h3>Dental Equipment & Material Reviews</h3>
        <p>In-depth reviews and comparisons of the latest dental equipment, tools, and materials available through GurOm Dental.</p>
        <ul>
          <li>Top 5 Must-Have Dental Tools for a Modern Clinic</li>
          <li>Choosing the Right Dental Material: A Guide for Beginners</li>
          <li>Our Product Spotlight: The Best Dental Chair for Patient Comfort</li>
        </ul>
      </div>

      <div className="category">
        <h3>Patient Education</h3>
        <p>Articles and guides designed to inform and empower patients on common dental procedures and care.</p>
        <ul>
          <li>Understanding Root Canals: What to Expect During the Procedure</li>
          <li>Dental Implants vs. Bridges: Which Option is Best for You?</li>
          <li>The Importance of Regular Dental Check-Ups for Long-Term Health</li>
        </ul>
      </div>

      <div className="category">
        <h3>GurOm News & Events</h3>
        <p>Stay updated on the latest happenings at GurOm Dental, including new clinic openings, product launches, and event participation.</p>
        <ul>
          <li>GurOm Dental Opens a New Clinic on JM Road, Pune</li>
          <li>Highlights from Our Participation in the Pune Dental Expo</li>
          <li>New Product Launch: Innovative Solutions in Dental Equipment</li>
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
}
