import React, { useState, useRef, useEffect } from "react";
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
  const [leftTitleClass, setLeftTitleClass] = useState(
    "carousel-title left-title"
  );
  const [rightTitleClass, setRightTitleClass] = useState(
    "carousel-title right-title"
  );
  const [subtitleClass, setSubtitleClass] = useState("carousel-subtitle");
  const [paragraphClass, setParagraphClass] = useState("paragraph");
  const [carouselClass, setCarouselClass] = useState("carousel");
  const carousel = useRef(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const launchAnim = () => {
    setLeftTitleClass("carousel-title left-title anim");
    setRightTitleClass("carousel-title right-title anim");
    setSubtitleClass("carousel-subtitle anim");
    setParagraphClass("paragraph anim");
    setCarouselClass("carousel anim");
  };

  const items = picturesArray.map((picture) => {
    return (
      <Carousel.Item interval={3000} key={"key" + Math.random() + "unique"}>
        <img className="d-block w-100 slide" src={picture} alt="slide" />
      </Carousel.Item>
    );
  });

  useEffect(() => {
    let options = {
      threshold: 0.1,
    };

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) launchAnim();
      });
    }, options);

    observer.observe(carousel.current);
  }, []);

  return (
    <div ref={carousel} id={link} className="block-carousel">
      <div className="left-carousel">
        {!alt ? (
          <>
            <h2 className={leftTitleClass}>{title}</h2>
            <p className={subtitleClass}>{subtitle}</p>
            <p className={paragraphClass}>{paragraph}</p>
          </>
        ) : (
          <>
            <Carousel
              indicators={true}
              className={carouselClass}
              activeIndex={index}
              onSelect={handleSelect}
            >
              {items}
            </Carousel>
          </>
        )}
      </div>
      <div className="right-carousel">
        {alt ? (
          <>
            <h2 className={rightTitleClass}>{title}</h2>
            <p className={subtitleClass}>{subtitle}</p>
            <p className={paragraphClass}>{paragraph}</p>
          </>
        ) : (
          <Carousel
            indicators={true}
            className={carouselClass}
            activeIndex={index}
            onSelect={handleSelect}
          >
            {items}
          </Carousel>
        )}
      </div>
    </div>
  );
}

export default PictureCarousel;
