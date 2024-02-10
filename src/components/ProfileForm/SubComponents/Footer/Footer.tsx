import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">

      <div className="footer-links">
        <a href="/terms">Terms & Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/faq">FAQ</a>
        <a href="/contact">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
