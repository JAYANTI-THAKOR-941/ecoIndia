import React from 'react';
import HeroSlider from '../components/HeroSlider';
import StateCards from '../components/StateCards';
import { Link } from 'react-router-dom';
import {
  FaLeaf,
  FaChartLine,
  FaRecycle,
  FaTree,
  FaMapMarkedAlt,
  FaProjectDiagram,
  FaUsers,
  FaHandsHelping
} from 'react-icons/fa';
import "../css/Home.css";


const Home = () => {
  return (
    <div className="eco-home-container">
      <HeroSlider />
      <StateCards />

      {/* Intro Section */}
      <section className="eco-home-intro">
        <h2>Welcome to EcoIndia 🌿</h2>
        <p>
          EcoIndia is a national platform promoting awareness, data transparency,
          and community engagement in India’s environmental journey — from local
          action to national transformation.
        </p>
      </section>

      {/* Features */}
      <section className="eco-home-features">
        <div className="eco-home-feature-card">
          <FaLeaf className="eco-icon" />
          <h3>Sustainability</h3>
          <p>Greener cities and cleaner villages — India is turning green, one step at a time.</p>
        </div>
        <div className="eco-home-feature-card">
          <FaRecycle className="eco-icon" />
          <h3>Eco Projects</h3>
          <p>From waste to wealth — dive into projects focused on clean air, water, and energy.</p>
        </div>
        <div className="eco-home-feature-card">
          <FaChartLine className="eco-icon" />
          <h3>Insights & Data</h3>
          <p>State-level dashboards, growth trends, and environmental health metrics.</p>
        </div>
      </section>

      {/* Statistics */}
      <section className="eco-home-stats">
        <div className="eco-stat-box">
          <FaProjectDiagram className="eco-stat-icon" />
          <h3>120+</h3>
          <p>Eco Projects Nationwide</p>
        </div>
        <div className="eco-stat-box">
          <FaMapMarkedAlt className="eco-stat-icon" />
          <h3>28</h3>
          <p>Indian States Covered</p>
        </div>
        <div className="eco-stat-box">
          <FaTree className="eco-stat-icon" />
          <h3>10M+</h3>
          <p>Trees Planted</p>
        </div>
        <div className="eco-stat-box">
          <FaUsers className="eco-stat-icon" />
          <h3>5K+</h3>
          <p>Active Volunteers</p>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="eco-home-blogs">
        <h2>Latest from Our Blog</h2>
        <div className="eco-home-blog-grid">
          <div className="eco-home-blog-card">
            <img src="https://www.ibef.org/uploads/banner/1735876432_729233f762646aeb71a1.jpg" alt="Solar" />
            <h4>India’s Renewable Energy Boom</h4>
            <p>How the country is racing ahead with solar and wind initiatives.</p>
          </div>
          <div className="eco-home-blog-card">
            <img src="https://neer.co.in/wp-content/uploads/2024/01/NEER-Rainwater-Harvesting-Success-Stories-from-Around-the-Globe.jpg" alt="Water Harvesting" />
            <h4>Water Harvesting Success Stories</h4>
            <p>Innovative community models reviving India's dry belts.</p>
          </div>
        </div>
        <Link to="/blog" className="eco-home-view-btn">Read All Blogs</Link>
      </section>

      {/* Video Section */}
      <section className="eco-home-video">
        <h2>Spotlight: India’s Green Future</h2>
        <div className="eco-home-video-frame">
          <iframe width="760" height="415" src="https://www.youtube.com/embed/xfiVnSmsnRE?si=lzhxUCJ8qG9QPcrr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>

      {/* Testimonials */}
      <section className="eco-home-testimonials">
        <h2>Voices from the Ground</h2>
        <div className="eco-home-testimonial-grid">
          <div className="eco-home-testimonial-card">
            <p>"EcoIndia showed us how grassroots action can lead to real change."</p>
            <span>- Asha Devi, Bihar</span>
          </div>
          <div className="eco-home-testimonial-card">
            <p>"The site gives me real-time data on my state’s environmental health."</p>
            <span>- Rohit Patel, Gujarat</span>
          </div>
          <div className="eco-home-testimonial-card">
            <p>"It’s a brilliant platform for policy insights and community inspiration."</p>
            <span>- Dr. Neha Sharma, Delhi</span>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="eco-home-partners">
        <h2>Our Supporting Partners</h2>
        <div className="eco-home-partner-logos">
          <img src="https://diplo-media.s3.eu-central-1.amazonaws.com/UNDP_2.jpg" alt="UNDP" />
          <img src="https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/MoEFCC_Green_Credit_Programme_Corpseed.webp" alt="MoEFCC" />
          <img src="https://static.theprint.in/wp-content/uploads/2024/09/Wikipedia.jpg" alt="Wikipedia" />
        </div>
      </section>

      {/* Newsletter */}
      <section className="eco-home-newsletter">
        <h2>Subscribe for Updates</h2>
        <p>Get weekly updates on projects, news, and environmental tips straight to your inbox.</p>
        <form className="eco-newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* CTA Reminder */}
      <section className="eco-home-cta-footer">
        <FaHandsHelping className="eco-cta-icon" />
        <h3>Every action matters. Be the change today 🌍</h3>
        <Link to="/contact" className="eco-home-footer-btn">Volunteer Now</Link>
      </section>
    </div>
  );
};

export default Home;
