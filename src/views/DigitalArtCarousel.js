import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
    { src: require("assets/img/digitalart/1.png"), altText: "1" },
    { src: require("assets/img/digitalart/2.png"), altText: "2" },
    { src: require("assets/img/digitalart/3.png"), altText: "3" },
    { src: require("assets/img/digitalart/4.png"), altText: "4" },
  ];
  
  function DigitalArtCarousel(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className="d-block w-100" />
        </CarouselItem>
      );
    });
  
    return (
      <div className="digital-art-carousel-wrapper">
        <Carousel activeIndex={activeIndex} next={next} previous={previous} {...args}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      </div>
    );
  }
  
  export default DigitalArtCarousel;
  