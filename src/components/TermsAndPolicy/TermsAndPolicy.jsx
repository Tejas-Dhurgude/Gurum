import React from 'react';
import './TermsAndPolicy.css'; // Import the CSS file
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function TermsAndPolicy() {
  return (
    <>
    <Navbar/>
    <div className="terms-container">
      <h1>Terms & Conditions</h1>
      <p className="effective-date">Effective Date: October 27, 2024</p>
      <p>
        Welcome to GurOm Dental’s website (“Site”). By accessing and using this Site, you agree to the following Terms and Conditions. If you do not agree to these Terms, please do not use this Site.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By using the GurOm Dental Site, you agree to be bound by these Terms & Conditions and any applicable laws and regulations. GurOm Dental reserves the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting the revised Terms on the Site. It is your responsibility to review these Terms periodically.
      </p>

      <h2>2. Products and Services</h2>
      <p>
        GurOm Dental provides various dental products and services, including clinic appointments, dental materials, and equipment. Availability of products and services may vary, and we reserve the right to modify or discontinue any products or services without notice.
      </p>

      <h2>3. Pricing and Payment</h2>
      <p>
        All prices displayed on the Site are in Indian Rupees (INR) unless otherwise stated. We strive to ensure that pricing is accurate, but errors may occur. In the event of a pricing error, we reserve the right to cancel or refuse any orders placed at the incorrect price. Payments must be made through the methods provided on the Site.
      </p>

      <h2>4. Shipping and Delivery</h2>
      <p>
        We offer shipping to various locations within and outside India. Shipping costs and delivery times may vary depending on the destination. You will be provided with shipping options during the checkout process. GurOm Dental is not responsible for delays caused by third-party couriers or customs.
      </p>

      <h2>5. Returns and Refunds</h2>
      <p>
        If you are not satisfied with a product purchased from the Site, you may request a return within 30 days of receipt. Items must be unused and in original packaging to qualify for a return. Refunds will be processed after inspection, and the original shipping costs will not be refunded. Please review our Return Policy for more information.
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        All content, logos, trademarks, images, and materials on this Site are the intellectual property of GurOm Dental or its licensors. You may not reproduce, distribute, or create derivative works from any content on the Site without our written permission.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        GurOm Dental shall not be liable for any damages resulting from the use of or inability to use the Site, products, or services. This includes, but is not limited to, direct, indirect, incidental, punitive, and consequential damages. In no event shall our total liability exceed the amount paid for the product or service in question.
      </p>

      <h2>8. User Account Responsibilities</h2>
      <p>
        You may be required to create an account to access certain features of the Site. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. GurOm Dental is not responsible for any unauthorized use of your account.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms & Conditions are governed by the laws of India. Any disputes arising from the use of this Site shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
      </p>

      <h2>10. Contact Information</h2>
      <p>If you have any questions about these Terms & Conditions, please contact us at:</p>
      <p>Email: [insert email]</p>
      <p>Phone: [insert phone number]</p>
    </div>
    <Footer/>
    </>
  );
}
