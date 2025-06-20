import React from 'react';
import '../styles/products.css';
import { FaRegHeart, FaExchangeAlt, FaSearch, FaShoppingCart, FaStar, FaRegStar } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Royal Rose',
    price: '$470',
    rating: 5, 
    image: 'https://xtratheme.com/elementor/perfume-shop/wp-content/uploads/sites/80/2021/10/p22-600x600.png',
  },
  {
    id: 2,
    name: 'Odour of Soul',
    price: '$69',
    originalPrice: '$59',
    rating: 4, 
    image: 'https://xtratheme.com/elementor/perfume-shop/wp-content/uploads/sites/80/2021/10/p33-600x600.png',
  },
  {
    id: 3,
    name: 'Red Cologne',
    price: '$79',
    rating: 5, 
    image: 'https://xtratheme.com/elementor/perfume-shop/wp-content/uploads/sites/80/2021/10/p4-Copy.png',
  },
  {
    id: 4,
    name: 'Cool Perfume',
    price: '$118',
    rating: 4, 
    image: 'https://xtratheme.com/elementor/perfume-shop/wp-content/uploads/sites/80/2021/10/p5-Copy-600x600.png',
  },
  {
    id: 5,
    name: 'Gold Royal',
    price: '$99',
    rating: 4, 
    image: 'https://xtratheme.com/elementor/perfume-shop/wp-content/uploads/sites/80/2021/10/p6-Copy-600x600.png',
  },
  {
    id: 6,
    name: 'Pink Sport',
    price: '$25',
    rating: 5,  
    image: 'https://xtratheme.com/elementor/perfume-shop/wp-content/uploads/sites/80/2021/10/p7-Copy-600x600.png',
  },
];

const Products = () => {
  return (
    <div className="products-container">
      <h1 className="main-heading">Products</h1>
      <h2 className="sub-heading">New Perfumes</h2>
      <div className="products-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="image-container">
              <div className="rating">
                {[...Array(product.rating)].map((_, index) => (
                  <FaStar key={index} className="star" />
                ))}
                {[...Array(5 - product.rating)].map((_, index) => (
                  <FaRegStar key={index + product.rating} className="star" />
                ))}
              </div>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="hover-icons">
                <FaRegHeart title="Add to Wishlist" />
                <FaExchangeAlt title="Add to Compare" />
                <FaSearch title="Quick View" />
              </div>
              <div className="cart-btn-container">
                <button className="cart-btn">
                  <FaShoppingCart className="cart-icon" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">
              {product.originalPrice && (
                <span className="strike-price">{product.originalPrice}</span>
              )}
              {product.price}
            </p>
          </div>
        ))}
      </div>
      <div className="discover-more-container">
        <button className="discover-more-btn">Discover More</button>
      </div>
    </div>
  );
};

export default Products;
