import React from 'react';
import './DentalClinic.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
export default function DentalClinic() {
  return (
    <>
    <Navbar/>
    <div className="dental-clinic">
      {/* Header Section */}
      <header className="header">
        <h1>Comprehensive Dental Care for a Healthier, Brighter Smile</h1>
        <p>Explore our full range of dental services, tailored to meet the unique needs of every patient.</p>
        <div className="header-buttons">
          <button onClick={() => window.scrollTo(0, document.getElementById('appointment-section').offsetTop)}>
            Book an Appointment
          </button>
          <button onClick={() => window.scrollTo(0, document.getElementById('services-section').offsetTop)}>
            Explore Services
          </button>
        </div>
      </header>

      {/* Section 1: Why Choose GurOm Dental Clinic */}
      <section className="why-choose">
        <h2>Why Choose GurOm Dental Clinic?</h2>
        <p>
          At GurOm Dental Clinic, we’re dedicated to providing exceptional care and personalized treatment options to support your oral health.
        </p>
        <ul>
          <li><strong>Experienced Team of Specialists:</strong> From general dentistry to specialized treatments, our team covers a wide range of expertise.</li>
          <li><strong>Advanced Technology:</strong> We utilize the latest in dental technology for accurate diagnoses and comfortable treatments.</li>
          <li><strong>Patient-Centered Care:</strong> Personalized care and comfort for each patient, ensuring the best experience.</li>
        </ul>
      </section>

      {/* Section 2: Our Dental Services */}
      <section id="services-section" className="services">
        <h2>Comprehensive Treatments Tailored for You</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Preventive Dentistry</h3>
            <p>Regular check-ups, cleanings, and preventive care to keep your teeth and gums healthy.</p>
            <button>Learn More</button>
          </div>
          <div className="service-item">
            <h3>Cosmetic Dentistry</h3>
            <p>A range of cosmetic solutions to enhance the look of your smile.</p>
            <button>Learn More</button>
          </div>
          <div className="service-item">
            <h3>Restorative Dentistry</h3>
            <p>Solutions to restore functionality and aesthetics to damaged or missing teeth.</p>
            <button>Learn More</button>
          </div>
          <div className="service-item">
            <h3>Orthodontics</h3>
            <p>Treatment options for teeth alignment and jaw correction.</p>
            <button>Learn More</button>
          </div>
          <div className="service-item">
            <h3>Pediatric Dentistry</h3>
            <p>Specialized dental care tailored for children.</p>
            <button>Learn More</button>
          </div>
          <div className="service-item">
            <h3>Emergency Dental Care</h3>
            <p>Immediate care for unexpected dental issues.</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      {/* Section 3: Patient Journey */}
      <section className="patient-journey">
        <h2>What to Expect When You Visit Us</h2>
        <ul>
          <li>Initial Consultation: During your first visit, our dental professionals assess your oral health, discuss any concerns, and create a personalized treatment plan.</li>
          <li>Customized Treatment: Based on your needs, our team provides treatments using advanced techniques and top-quality materials.</li>
          <li>Follow-Up Care: After treatment, we offer continuous support to maintain and monitor your oral health.</li>
        </ul>
        <button>Schedule Your First Appointment</button>
      </section>

      {/* Section 4: Meet Our Team */}
      <section className="meet-team">
        <h2>Experts You Can Trust</h2>
        <p>Our team of highly skilled dentists and dental hygienists is here to provide you with quality care.</p>
        <button>Learn More About Our Team</button>
      </section>

      {/* Section 5: Book an Appointment */}
      <section id="appointment-section" className="appointment-form">
        <h2>Ready to Take the Next Step?</h2>
        <form>
          <label>Name</label>
          <input type="text" required />

          <label>Email</label>
          <input type="email" required />

          <label>Phone Number</label>
          <input type="tel" required />

          <label>Select Service</label>
          <select>
            <option>Preventive</option>
            <option>Cosmetic</option>
            <option>Restorative</option>
            <option>Orthodontics</option>
            <option>Pediatric</option>
            <option>Emergency</option>
          </select>

          <label>Preferred Date & Time</label>
          <input type="date" required />
          <input type="time" required />

          <label>Additional Notes</label>
          <textarea></textarea>

          <button type="submit">Confirm Appointment</button>
        </form>
      </section>

      {/* Section 6: Patient Testimonials */}
      <section className="testimonials">
        <h2>What Our Patients Are Saying</h2>
        <p>"Amazing service and great care by the dental team!"</p>
        <p>"My experience at GurOm Dental Clinic was wonderful and painless."</p>
      </section>

      {/* Section 7: FAQ */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What services are covered in the initial consultation?</h3>
          <p>The initial consultation includes a comprehensive dental exam, discussion of any concerns, and treatment recommendations.</p>
        </div>
        <div className="faq-item">
          <h3>What payment options are available?</h3>
          <p>We accept all major payment methods, including credit/debit cards, digital wallets, and insurance.</p>
        </div>
        <div className="faq-item">
          <h3>How do I reschedule or cancel an appointment?</h3>
          <p>To reschedule or cancel, please contact us at least 24 hours in advance.</p>
        </div>
        <div className="faq-item">
          <h3>Do you offer emergency services?</h3>
          <p>Yes, we provide emergency dental care. Contact us immediately if you have an urgent issue.</p>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}
