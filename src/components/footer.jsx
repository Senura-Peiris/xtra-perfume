import React from 'react';
import '../styles/footer.css';
import { FaFacebookF, FaInstagram, FaXTwitter, FaEnvelope } from 'react-icons/fa6';
import { FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-circle">
          <span className="footer-circle-inner">💬</span>
        </div>
        <p>© 2025 XTRA WordPress Theme.</p>
      </div>

      <div className="footer-center">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaXTwitter /></a>
        <a href="mailto:info@xtraperfume.com"><FaEnvelope /></a>
      </div>

      <div className="footer-right">
        <a href="mailto:info@xtraperfume.com">info@xtraperfume.com</a>
        <button className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaChevronUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
