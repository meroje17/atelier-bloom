import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./PictureCarousel.style.css";

function PictureCarousel({
  picturesArray,
  title,
  subtitle,
  link,
  paragraph,
  alt,
}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const items = picturesArray.map((picture) => {
    return (
      <Carousel.Item interval={3000}>
        <img className="d-block w-100 slide" src={picture} alt="slide" />
      </Carousel.Item>
    );
  });

  return (
    <div id={link} className="block-carousel">
      <div className="left-carousel">
        {!alt ? (
          <>
            <h2 id={link} className="carousel-title">
              {title}
            </h2>
            <p className="carousel-subtitle">{subtitle}</p>
            <p className="paragraph">{paragraph}</p>
          </>
        ) : (
          <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {items}
            </Carousel>
          </>
        )}
      </div>
      <div className="right-carousel">
        {alt ? (
          <>
            <h2 className="carousel-title">{title}</h2>
            <p className="carousel-subtitle">{subtitle}</p>
            <p className="paragraph">{paragraph}</p>
          </>
        ) : (
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {items}
          </Carousel>
        )}
      </div>
    </div>
  );
}

export default PictureCarousel;
