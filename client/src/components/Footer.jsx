import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="eco-footer">
      <div className="eco-footer-container">
        {/* About */}
        <div className="eco-footer-section">
          <h3>🌱 EcoIndia</h3>
          <p>
            EcoIndia is a community-driven platform to explore India’s environmental progress, 
            inspire action, and connect people to sustainability solutions across all states.
          </p>
        </div>

        {/* Quick Links */}
        <div className="eco-footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Projects */}
        <div className="eco-footer-section">
          <h4>Focus Areas</h4>
          <ul>
            <li><Link to="/recycling">Recycling</Link></li>
            <li><Link to="/afforestation">Afforestation</Link></li>
            <li><Link to="/wind-energy">Wind Energy</Link></li>
            <li><Link to="/water-safety">Water Safety</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="eco-footer-section">
          <h4>Contact Us</h4>
          <p><FaMapMarkerAlt /> EcoIndia HQ, New Delhi, India</p>
          <p><FaEnvelope /> support@ecoindia.org</p>
          <p><FaPhoneAlt /> +91 9876543210</p>
          <div className="eco-footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="eco-footer-bottom">
        <p>&copy; {new Date().getFullYear()} EcoIndia. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
