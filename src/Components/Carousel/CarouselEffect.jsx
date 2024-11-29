import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./data.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import classes from "./Carousel.module.css";

function CarouselEffect() {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((ImageItemLink) => {
          return <img src={ImageItemLink} key={ImageItemLink} />;
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
    </>
  );
}

export default CarouselEffect;
