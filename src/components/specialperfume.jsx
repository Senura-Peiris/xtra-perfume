import React from 'react';
import '../styles/Specialperfume.css';

const Specialperfume = () => {
  return (
    <div className="perfume-container">
      <div className="image-section">
        <img
          src="https://xtratheme.com/elementor/perfume-shop/wp-content/uploads/sites/80/2021/10/img5.png"
          alt="Perfume Bottle"
          className="perfume-image"
        />
      </div>

      <div className="content-wrapper">
        <div className="yellow-square"></div>

        <div className="content-section">
          <h2>
            Get Your Own<br /> special perfume
          </h2>
          <p>
            Perfume is a mixture of fragrant essential oils or aroma compounds,
            fixatives and solvents, usually in liquid form, used to give the human
            body, animals, food, objects, and living-spaces an agreeable scent.
          </p>

          <ul className="features-list">
            <div className="feature-column">
              <li><span className="check-icon"></span>Special Perfume</li>
              <li><span className="check-icon"></span>For Women</li>
            </div>
            <div className="feature-column">
              <li><span className="check-icon"></span>Made from best flowers</li>
              <li><span className="check-icon"></span>High Durability</li>
            </div>
          </ul>

          <div className="buttons">
            <button className="shop-button">SHOP NOW</button>
            <a href="#" className="learn-link">LEARN MORE &gt;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialperfume;
