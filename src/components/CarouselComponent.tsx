"use client"

import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from "@/styles/Home.module.css"

const CarouselComponent = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
    >
      <Slider className={styles.carouselContainer}>
        <Slide index={0}>
          <img src="/images/carousel1.png" alt="Slide 1" className={styles.carouselImage} />
        </Slide>
        <Slide index={1}>
          <img src="/images/carousel2.jpg" alt="Slide 2" className={styles.carouselImage} />
        </Slide>
        <Slide index={2}>
          <img src="/images/carousel3.jpg" alt="Slide 3" className={styles.carouselImage} />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default CarouselComponent;
