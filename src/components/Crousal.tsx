import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CrousalCard from "./CardCarousel";

const CrousalBanner = () => {
  return (
    <Carousel centerMode={true} showArrows={true} swipeable={true}>
      <CrousalCard />
      <CrousalCard />
      <CrousalCard />
    </Carousel>
  );
};
export default CrousalBanner;
