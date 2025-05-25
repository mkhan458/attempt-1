import { useState } from 'react';
import './Carousel.css';

const images = [
  '/src/examples/pic1.jpg',
  '/src/examples/pic2.jpg',
  '/src/examples/pic3.jpg',
];

function Carousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="carousel-container">
      <button className="carousel-arrow left" onClick={prev}>&lt;</button>
      <div className="carousel-card">
        <img src={images[index]} alt={`Card ${index + 1}`} className="carousel-img" />
      </div>
      <button className="carousel-arrow right" onClick={next}>&gt;</button>
    </div>
  );
}

export default Carousel; 