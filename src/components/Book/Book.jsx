import React, { useState } from 'react';
import './Book.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Book() {
  const [formData, setFormData] = useState({
    consultationType: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    clinicName: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Consultation booked successfully!'); // Replace with actual submission logic
  };

  return (
    <>
    <Navbar/>
    <div className="book-consultation">
      <header className="header-section">
        <h1>Schedule Your Consultation with GurOm’s Dental Experts</h1>
        <p>Get personalized guidance for your dental needs, from expert advice to custom solutions.</p>
        <div className="cta-buttons">
          <button onClick={() => window.scrollTo(0, document.getElementById('booking-form').offsetTop)}>Book Now</button>
          <button onClick={() => window.scrollTo(0, document.getElementById('consultation-options').offsetTop)}>Explore Our Services</button>
        </div>
      </header>

      <section id="consultation-options">
        <h2>Why Book a Consultation with GurOm?</h2>
        <p>At GurOm, we believe in providing patient-centered, expert-driven dental solutions tailored to meet individual needs. From clinic consultations to material selection guidance and dental treatment planning, our specialists ensure every client receives the highest standard of care.</p>
        
        <h2>Choose the Consultation That Fits Your Needs</h2>
        <div className="consultation-options">
          <div className="consultation-option">
            <h3>Initial Dental Consultation</h3>
            <p><strong>Ideal for:</strong> New clients looking to explore GurOm’s services.</p>
            <p><strong>What’s Included:</strong> Overview of offerings, personalized assessment, initial recommendations.</p>
          </div>
          <div className="consultation-option">
            <h3>Treatment Planning Consultation</h3>
            <p><strong>Ideal for:</strong> Dentists and clinics developing customized treatment plans.</p>
            <p><strong>What’s Included:</strong> Case assessment, tailored recommendations, material guidance.</p>
          </div>
          <div className="consultation-option">
            <h3>Material Selection Consultation</h3>
            <p><strong>Ideal for:</strong> Clinics needing advice on the best materials for patients.</p>
            <p><strong>What’s Included:</strong> Overview of materials, durability guidance, and suitability.</p>
          </div>
          <div className="consultation-option">
            <h3>Follow-Up Consultation</h3>
            <p><strong>Ideal for:</strong> Existing clients seeking additional recommendations.</p>
            <p><strong>What’s Included:</strong> Review of ongoing treatment and follow-up recommendations.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Quick and Easy Booking Process</h2>
        <ol>
          <li>Choose Your Consultation Type – Select the consultation that best suits your needs.</li>
          <li>Pick a Date & Time – View available slots and pick one that’s convenient.</li>
          <li>Submit Your Details – Fill in your contact information and specify any questions or special requirements.</li>
          <li>Confirm & Meet – Once booked, you’ll receive a confirmation email with all necessary details.</li>
        </ol>
        <button onClick={() => window.scrollTo(0, document.getElementById('booking-form').offsetTop)}>Book Now</button>
      </section>

      <section id="booking-form">
        <h2>Schedule Your Consultation</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Consultation Type:
            <select name="consultationType" value={formData.consultationType} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="Initial Consultation">Initial Consultation</option>
              <option value="Treatment Planning">Treatment Planning</option>
              <option value="Material Selection">Material Selection</option>
              <option value="Follow-Up">Follow-Up</option>
            </select>
          </label>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Phone Number:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </label>
          <label>
            Preferred Date & Time:
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            <input type="time" name="time" value={formData.time} onChange={handleChange} required />
          </label>
          <label>
            Clinic/Organization Name (optional):
            <input type="text" name="clinicName" value={formData.clinicName} onChange={handleChange} />
          </label>
          <label>
            Additional Information (optional):
            <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange}></textarea>
          </label>
          <p>Your personal information is securely stored and will only be used for consultation purposes. View our <a href="/privacy-policy">Privacy Policy</a>.</p>
          <button type="submit">Confirm Consultation</button>
        </form>
      </section>

      <section>
        <h2>Our Commitment to Quality Care</h2>
        <p>With GurOm, you are choosing a team dedicated to excellence, personalized care, and precision. Our consultations provide you with tailored advice, product options, and expert recommendations.</p>
      </section>

      <section>
        <h2>Frequently Asked Questions (FAQ)</h2>
        <div className="faq">
          <h3>What happens after I book a consultation?</h3>
          <p>You’ll receive a confirmation email with all necessary details.</p>
          <h3>Can I reschedule my consultation?</h3>
          <p>Yes, just reply to the confirmation email or contact us directly.</p>
          <h3>Are virtual consultations available?</h3>
          <p>Yes, we offer both virtual and in-person consultations.</p>
          <h3>How much do consultations cost?</h3>
          <p>Initial consultations are free. Certain in-depth consultations may have fees, which will be communicated beforehand.</p>
        </div>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>For any questions or immediate assistance, feel free to reach out to us via phone or email. Our team is here to help!</p>
        <p>Phone: [Contact Number]</p>
        <p>Email: [Contact Email]</p>
      </section>
    </div>
    <Footer/>
    </>
  );
}
