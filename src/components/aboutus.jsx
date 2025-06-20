import React from 'react';
import '../styles/aboutus.css';
import perfumeImage from '../images/perfume1.jpg';

const Card = () => {
  return (
    <div className='about'>
      <div className="card">
        <div className="card-image">
          <img src={perfumeImage} alt="Perfume" />
        </div>
        <div className="card-content">
          <h2 className='title'>Perfume <br /><span className='change'>Matters</span></h2>
          <p className='about_description'>
            Perfume is a mixture of fragrant essential oils or aroma<br />
            compounds, fixatives and solvents, usually in liquid form, used to<br />
            give the human body, animals, food, objects, and living-spaces an<br />
            agreeable scent.
          </p>
          <button className="cardbutton1">OUR STORY</button>
        </div>
        <p className='paboutus'>About us</p>
      </div>
    </div>
  );
};

export default Card;
