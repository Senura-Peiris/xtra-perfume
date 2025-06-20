import React, { useState } from 'react';
import '../styles/offers.css';

const Offers = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
  };

  return (
    <div className="offers-container">
      <div className="offers-content">
        <h2>
          Get Latest <span className="highlight">Offers</span>
        </h2>
        <p>Enter your email to get monthly special offers and great deals!</p>
        <form className="email-subscribe" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="ENTER EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="subbtn">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Offers;
