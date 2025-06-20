import React, { useState } from 'react';
import '../styles/popularperfumes.css';
import perfumeImage1 from '../images/p1.png';
import perfumeImage2 from '../images/2perfume.png';
import perfumeImage3 from '../images/3perfume.png';

const perfumes = [
  {
    id: 1,
    title: 'Royal Rose',
    description: 'Perfume is a mixture of fragrant essential oils or aroma compounds, fixatives and solvents, usually in liquid form, used to give the human body, animals, food, objects, and living-spaces an agreeable scent.',
    image: perfumeImage1,
    price: '$470'
  },
  {
    id: 2,
    title: 'Odor of Soul',
    description: 'Perfume is a mixture of fragrant essential oils or aroma compounds, fixatives and solvents, usually in liquid form, used to give the human body, animals, food, objects, and living-spaces an agreeable scent.',
    image: perfumeImage2,
    price: '$59'
  },
  {
    id: 3,
    title: 'Cool Perfume',
    description: 'Perfume is a mixture of fragrant essential oils or aroma compounds, fixatives and solvents, usually in liquid form, used to give the human body, animals, food, objects, and living-spaces an agreeable scent.',
    image: perfumeImage3,
    price: '$118'
  }
];

const PopularPerfumes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % perfumes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? perfumes.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="perfume-section2">
      <h2 className='section-title3'>Best Sellers</h2>
      <h2 className="section-title2">Popular Perfumes</h2>
      <div className="carousel-wrapper2">
        <button className="arrow2 left-arrow2" onClick={prevSlide}>
          &lt;
        </button>
        <div className="carousel2">
          {perfumes.map((perfume, index) => (
            <div
              key={perfume.id}
              className={`slide2 ${index === currentIndex ? 'active2' : ''}`}
            >
              <div className="content2">
                <h3>{perfume.title}</h3>
                <p>{perfume.description}</p>
                <div className="price-button-row">
                  <p className="price2">{perfume.price}</p>
                  <button className="buy-button2">Shop Now</button>
                </div>
              </div>
              <img src={perfume.image} alt={perfume.title} className="image2" />
            </div>
          ))}
        </div>
        <button className="arrow2 right-arrow2" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default PopularPerfumes;
