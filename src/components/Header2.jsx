import React, { useState, useEffect } from 'react';
import '../styles/header.css';
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import {
  FaShoppingCart, FaBars, FaTimes,
  FaFacebookF, FaInstagram, FaEnvelope
} from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import logo2 from '../images/xtra logo.png';

const Header2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [isMobileHeaderHidden, setIsMobileHeaderHidden] = useState(false); // NEW
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Hide/show main navbar on desktop
    if (window.innerWidth > 768) {
      setIsNavbarHidden(currentScrollY > lastScrollY);
    }

    // Hide/show mobile header on mobile
    if (window.innerWidth <= 768) {
      setIsMobileHeaderHidden(currentScrollY > lastScrollY);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav className={`navbar ${isNavbarHidden ? 'hidden' : ''}`}>
        {/* === MOBILE HEADER ROW === */}
        <div className={`mobile-header ${isMobileHeaderHidden ? 'hidden' : ''}`}>
          <div className="mobile-cart">
            <button className="cart-btn">
              <FaShoppingCart />
            </button>
          </div>

          <img src={logo2} alt="Logo" className="logo mobile-logo" />

          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* === Desktop Navigation codes here === */}
        <div className="navbar-left">
          <img src={logo2} alt="Logo" className="logo desktop-logo" />
          <ul className="nav-links">
            <li><a href="#">HOME</a></li>
            <li><a href="#">SHOP</a></li>
            <li><a href="#">CATEGORY</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>
        <div className="navbar-right desktop-icons flex items-center space-x-4">
  <div className="icons flex items-center space-x-2">
    <span className="icon-tag text-3xl"><IoIosSearch /></span>
<span className="icon-tag text-3xl"><IoIosHeartEmpty /></span>

  </div>

  {/* Spacer if you want extra separation */}
 

  <button className="cart-btn flex items-center space-x-1">
    <FaShoppingCart />
    <span className="cart-text">Cart</span>
  </button>
</div>
      </nav>

      {/* === Mobile Navigation Bar styles here === */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} />

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <FaTimes className="close-icon" onClick={toggleMenu} />
        </div>

        <ul className="mobile-nav-links">
          <li><a href="#" className='active'>Home</a></li><hr className='row' />
          <li><a href="#">Shop</a></li><hr className='row' />
          <li><a href="#">Category</a></li><hr className='row'/>
          <li><a href="#">FAQ</a></li><hr className='row'/>
          <li><a href="#">Blog</a></li><hr className='row'/>
          <li><a href="#">About</a></li><hr className='row'/>
          <li><a href="#">Contact</a></li><hr className='row'/>
          <li><a href="#">Buy XTRA Theme</a></li>
        </ul>

        <div className="mobile-menu-footer">
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaEnvelope />
          </div>
          <p>Copyright © 2025</p>
        </div>
      </div>
    </>
  );
};

export default Header2;
