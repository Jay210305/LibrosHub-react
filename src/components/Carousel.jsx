// Carousel.jsx
import React, { useState } from 'react';
import './Carousel.css';

export function Carousel({ products }) {
  const topRatedProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? topRatedProducts.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === topRatedProducts.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>◀</button>
      <div className="carousel-item">
        <img
          src={topRatedProducts[currentIndex].image}
          alt={topRatedProducts[currentIndex].title}
          className="carousel-img"
        />
        <div className="carousel-details">
          <h3>{topRatedProducts[currentIndex].title}</h3>
          <p><strong>Author:</strong> {topRatedProducts[currentIndex].author}</p>
          <p><strong>Rating:</strong> {topRatedProducts[currentIndex].rating}</p>
        </div>
      </div>
      <button className="carousel-button next" onClick={handleNext}>▶</button>
    </div>
  );
}
