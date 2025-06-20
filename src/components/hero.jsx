import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoBagHandleOutline } from "react-icons/io5";
import '../styles/hero.css';
import image1 from '../images/p1.png';
import image2 from '../images/p2.png';

function Hero() {
  return (
    <div className="custom-carousel-wrapper">
      <Carousel
        data-bs-theme="dark"
        controls={true}
        indicators={false}
        fade={false}
        interval={7000}
        pause={false}
        wrap={true}
      >
        {/* Slide 1 codes */}
        <Carousel.Item>
          <div className="slide-container">
            <div className="content-box left-align">
              <div className="square-behind" />
              <img src={image1} alt="First slide" className="animated-image" />
            </div>
            <Carousel.Caption>
              <h1 className="caption-title rosetitle">
                xtra <br /><span className="ctitle">Royal Rose</span>
              </h1>
              <p className="caption-text">
                Perfume is a mixture of fragrant essential oils or aroma compounds, fixatives and solvents, usually in liquid form, used to give the human body, animals, food, objects, and living-spaces an agreeable scent.
              </p>

              <div className="price-button-wrapper">
                <div className="price caption-price">
                  Price<br /><span className="pnumber">$470</span>
                </div>
                <div className="button-container">
                  <button className="btn-secondary caption-btn-explore">Explore More</button>
                  <button className="btn-primary caption-btn-shop">
                    <IoBagHandleOutline style={{ fontSize: '20px', marginRight: '8px' }} /> Shop Now
                  </button>
                </div>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        {/* Slide 2 codes */}
        <Carousel.Item>
          <div className="slide-container reverse-slide">
            <Carousel.Caption>
              <h1 className="caption-title">
                Aroma<br /><span className="ctitle">Xtra Perfume</span>
              </h1>
              <p className="caption-text">
                Perfume is a mixture of fragrant essential oils or aroma compounds, fixatives and solvents, usually in liquid form, used to give the human body, animals, food, objects, and living-spaces an agreeable scent.
              </p>

              <div className="price-button-wrapper">
                <div className="price caption-price">
                  Price<br /><span className="pnumber">$480</span>
                </div>
                <div className="button-container">
                  <button className="btn-secondary caption-btn-explore">Explore More</button>
                  <button className="btn-primary caption-btn-shop">
                    <IoBagHandleOutline style={{ fontSize: '20px', marginRight: '8px' }} /> Shop Now
                  </button>
                </div>
              </div>
            </Carousel.Caption>
            <div className="content-box right-align">
              <div className="square-behind" />
              <img src={image2} alt="Second slide" className="animated-image" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
