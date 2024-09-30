import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section products">
          <h3>Our Products</h3>
          <ul>
            <li><a href="#notebooks">Notebooks & Journals</a></li>
            <li><a href="#pens">Pens & Markers</a></li>
            <li><a href="#art">Art Supplies</a></li>
            <li><a href="#office">Office Essentials</a></li>
            <li><a href="#accessories">Stationery Accessories</a></li>
          </ul>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Get in Touch</h3>
          <p>Email: support@stationerypal.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 293 Bouran Street,Mumbai City</p>
        </div>

        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Stationery Pal World | Designed with love and creativity</p>
      </div>
    </footer>
  );
};

export default Footer;
