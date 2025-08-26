import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaRegBell } from 'react-icons/fa';
import '../css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. Your message has been sent.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${newsletterEmail}!`);
    setNewsletterEmail('');
  };

  return (
    <div className="eco-contact-page">
      {/* Header */}
      <section className="eco-contact-header">
        <h1>Contact Us 🌿</h1>
        <p>Let’s work together for a greener future. Drop us a message, suggestion, or collaboration idea!</p>
      </section>

      {/* Main Contact Section */}
      <section className="eco-contact-main">
        <div className="eco-contact-info">
          <div className="eco-contact-item">
            <FaMapMarkerAlt className="eco-icon" />
            <p>EcoIndia HQ, New Delhi, India</p>
          </div>
          <div className="eco-contact-item">
            <FaEnvelope className="eco-icon" />
            <p>support@ecoindia.org</p>
          </div>
          <div className="eco-contact-item">
            <FaPhoneAlt className="eco-icon" />
            <p>+91 9876543210</p>
          </div>
        </div>

        <form className="eco-contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" rows="5" required value={formData.message} onChange={handleChange}></textarea>
          <button type="submit">
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </section>

      {/* Google Map Section */}
      <section className="eco-map-section">
        <h2>Find Us on the Map</h2>
        <div className="eco-map-embed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923139252!2d77.0688994!3d28.527582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38b69a0d1c9%3A0xc3eac0b1f14f1b0b!2sDelhi!5e0!3m2!1sen!2sin!4v1683986436277!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="EcoIndia HQ"
          ></iframe>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="eco-newsletter-section">
        <h2><FaRegBell /> Stay Updated</h2>
        <p>Get the latest updates, eco-stories, and volunteer opportunities.</p>
        <form onSubmit={handleNewsletterSubmit} className="eco-newsletter-form">
          <input
            type="email"
            placeholder="Your Email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
