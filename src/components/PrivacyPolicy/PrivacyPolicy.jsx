import React from 'react';
import './PrivacyPolicy.css'; // Import the CSS file
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function PrivacyPolicy() {
  return (
    <>
    <Navbar/>
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p className="effective-date">Effective Date: October 27, 2024</p>

      <p>
        At GurOm Dental, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of personal information:</p>
      <ul>
        <li>Personal Identifiable Information: Name, email address, phone number, and shipping address when you create an account, place an order, or subscribe to our newsletter.</li>
        <li>Payment Information: Credit card details or other payment-related information when you purchase a product or service.</li>
        <li>Browsing Information: IP address, browser type, operating system, and pages you visit on the Site.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Process your orders and deliver products or services.</li>
        <li>Respond to your inquiries and provide customer support.</li>
        <li>Send you promotional offers, newsletters, and updates (only if you have opted in).</li>
        <li>Improve the functionality of our website and personalize your experience.</li>
      </ul>

      <h2>3. Data Sharing and Disclosure</h2>
      <p>We do not sell or rent your personal information to third parties. However, we may share your data with:</p>
      <ul>
        <li>Service Providers: Third-party companies that help us deliver services, such as payment processors and shipping providers.</li>
        <li>Legal Obligations: If required by law or to comply with legal processes, we may disclose your information to authorities.</li>
      </ul>

      <h2>4. Cookies and Tracking Technologies</h2>
      <p>
        Our Site uses cookies and other tracking technologies to improve your browsing experience and gather data about your visit. Cookies help us understand user preferences and provide personalized content. You can control cookie settings through your browser, but disabling cookies may affect your ability to use certain features of the Site.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We take reasonable steps to protect your personal information from unauthorized access, alteration, or disclosure. We use encryption technology and secure servers to safeguard your payment and personal information. However, no method of data transmission over the internet is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>6. Your Rights</h2>
      <p>You have the following rights regarding your personal information:</p>
      <ul>
        <li>Access and Correction: You may access and update your personal information by logging into your account.</li>
        <li>Data Deletion: You can request that we delete your personal information, except where we are legally required to retain it.</li>
        <li>Opt-out: You may unsubscribe from our marketing emails at any time by clicking the "unsubscribe" link in the email.</li>
      </ul>

      <h2>7. Third-Party Links</h2>
      <p>
        Our Site may contain links to third-party websites. GurOm Dental is not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party websites you visit.
      </p>

      <h2>8. Children’s Privacy</h2>
      <p>
        Our website is not intended for children under the age of 13, and we do not knowingly collect personal information from children.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Effective Date.” We encourage you to review this policy regularly.
      </p>

      <h2>10. Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
      <p>Email: [insert email]</p>
      <p>Phone: [insert phone number]</p>
    </div>
    <Footer/>
    </>
  );
}
