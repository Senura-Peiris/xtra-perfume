import React from 'react';
import '../styles/sponsor.css';

const Sponsor = () => {
  return (
    <header className="sponsor">
      <div className="logo">
       
        <span className="brand-name">
          <span className="highlight">Xtra</span>Perfume
        </span>
      </div>

      <nav className="nav-links">
        <a href="#">Perfumes</a>
        <a href="#">About Us</a>
        <a href="#">Stores</a>
        <a href="#">Brands</a>
      </nav>

      <div className="badges">
        <div className="badge">
          <img
            src="https://xtratheme.com/elementor/perfume-shop/wp-content/uploads/sites/80/2021/10/img6.jpg"
            alt="payments image"
          />
        </div>
      </div>
    </header>
  );
};

export default Sponsor;
