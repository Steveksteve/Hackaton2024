import React, { useState, useEffect } from 'react';
import '../styles/CustomCarousel.css';

const CustomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch('http://localhost/jeux/php/read_games.php');
        const data = await response.json();
        const filteredSlides = data.filter(game => [4, 5, 6].includes(parseInt(game.GameId)));
        const formattedSlides = filteredSlides.map(game => ({
          title: game.GameName,
          text: game.Description,
          link: `/game/${game.GameId}`,
          image: game.GameImage
        }));
        setSlides(formattedSlides);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchSlides();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  if (slides.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>&lt;</button>
      <div className="carousel-slide">
        <div className="carousel-content">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].text}</p>
          <a href={slides[currentSlide].link}>Voir plus</a>
        </div>
        <div className="carousel-image">
          <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
        </div>
      </div>
      <button className="carousel-button next" onClick={nextSlide}>&gt;</button>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
