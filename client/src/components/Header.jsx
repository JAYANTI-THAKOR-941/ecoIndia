import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGlobeAsia,
  FaLeaf,
  FaPenNib,
  FaEnvelope,
  FaInfoCircle,
  FaHome
} from "react-icons/fa";
import "./main.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="eco-header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="ticker">
          🌱 EcoIndia: Maharashtra launches Clean Air Campaign • Ganga Rejuvenation Phase II begins
        </div>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>🌿 EcoIndia</Link>
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}><FaHome /> Home</Link>
          <Link to="/states" onClick={closeMenu}><FaGlobeAsia /> States</Link>
          <Link to="/projects" onClick={closeMenu}><FaLeaf /> Projects</Link>
          <Link to="/blog" onClick={closeMenu}><FaPenNib /> Blog</Link>
          <Link to="/about" onClick={closeMenu}><FaInfoCircle /> About</Link>
          <Link to="/contact" onClick={closeMenu}><FaEnvelope /> Contact</Link>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
