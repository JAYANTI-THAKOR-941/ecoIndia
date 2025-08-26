import React from 'react';
import { FaSeedling, FaUsers, FaBullseye, FaGlobe, FaHandsHelping } from 'react-icons/fa';
import '../css/About.css';

const About = () => {
  return (
    <div className="eco-about-container">
      {/* Hero Section */}
      <section className="eco-about-hero">
        <h1>About EcoIndia 🌏</h1>
        <p>Empowering India’s sustainable journey through data, action, and collaboration.</p>
      </section>

      {/* Who We Are */}
      <section className="eco-about-section">
        <div className="eco-about-content">
          <FaSeedling className="eco-about-icon" />
          <h2>Who We Are</h2>
          <p>
            EcoIndia is a citizen-centric platform designed to inspire, track, and scale environmental
            efforts across India. Our mission is to unite communities, policymakers, and eco-warriors
            to build a greener future using the power of technology and transparent data.
          </p>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="eco-about-grid">
        <div className="eco-about-box">
          <FaBullseye className="eco-about-icon" />
          <h3>Our Vision</h3>
          <p>To make India a global leader in environmental sustainability by 2030.</p>
        </div>
        <div className="eco-about-box">
          <FaGlobe className="eco-about-icon" />
          <h3>Our Mission</h3>
          <p>Empowering every citizen with knowledge, tools, and opportunities to act for the planet.</p>
        </div>
      </section>

      {/* What We Do */}
      <section className="eco-about-section eco-about-alt">
        <div className="eco-about-content">
          <FaUsers className="eco-about-icon" />
          <h2>What We Do</h2>
          <ul>
            <li>📊 Provide interactive dashboards on environmental indicators.</li>
            <li>🌱 Promote state-wise eco-projects and volunteer opportunities.</li>
            <li>📚 Share research, case studies, and real-time environmental insights.</li>
            <li>🤝 Partner with local governments, NGOs, and academic institutions.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="eco-about-cta">
        <h2><FaHandsHelping className="eco-about-icon" /> Join the Eco Movement</h2>
        <p>
          Whether you're a student, policymaker, environmentalist, or just someone who cares about the planet —
          EcoIndia is your platform. Let’s build a sustainable India together.
        </p>
        <a href="/contact" className="eco-about-btn">Get Involved</a>
      </section>
    </div>
  );
};

export default About;
