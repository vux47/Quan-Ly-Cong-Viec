import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel className="hero-banner" indicators controls>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1470004914212-05527e49370b?auto=format&fit=crop&w=1400&q=80"
          alt="Campus"
        />
        <Carousel.Caption>
          <h3>Good Afternoon</h3>
          <p>Spaces and Cybers.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80"
          alt="Library"
        />
        <Carousel.Caption>
          <h3>Student Portal</h3>
          <p>All classes in one dashboard.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=1400&q=80"
          alt="Classroom"
        />
        <Carousel.Caption>
          <h3>Welcome</h3>
          <p>Track student records quickly.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;