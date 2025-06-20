import React, { useState } from "react";
import "../styles/reviews.css";

const reviewsData = [
  {
    id: 1,
    text: "Your company have been great at keeping me in work, they always line something else up.",
    name: "Angelina Depp",
    role: "Designer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    text: "The communication and follow-up have been top-notch every time.",
    name: "Jessica Lynn",
    role: "Photographer",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 3,
    text: "Reliable and friendly. I always feel supported and appreciated.",
    name: "Emily Stone",
    role: "Makeup Artist",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("slide-in-right");

  const handlePrev = () => {
    setAnimationClass("slide-in-left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAnimationClass("slide-in-right");
    setCurrentIndex((prevIndex) =>
      prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentReview = reviewsData[currentIndex];

  return (
    <section className="reviews-section">
      <div className="reviews-left">
        <h2>
          What Our <br />
          <span className="highlight">Customers Say</span>
        </h2>

        <div className={`review-box ${animationClass}`}>
          <p>{currentReview.text}</p>
          <div className="review-profile">
            <img
              src={currentReview.avatar}
              alt={currentReview.name}
              className="review-avatar"
            />
            <div>
              <strong>{currentReview.name}</strong>
              <div className="review-role">{currentReview.role}</div>
            </div>
          </div>
        </div>

        <div className="review-controls">
          <button className="nav-btn" onClick={handlePrev}>
            ◀
          </button>
          <button className="nav-btn" onClick={handleNext}>
            ▶
          </button>
        </div>
      </div>

      <div className="reviews-right">
        <img
          src="https://xtratheme.com/elementor/perfume-shop/wp-content/uploads/sites/80/2021/10/img4.jpg"
          alt="Spraying Perfume"
          className="review-image"
        />
      </div>
    </section>
  );
};

export default Reviews;
