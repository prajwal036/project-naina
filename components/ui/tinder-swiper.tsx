"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { Autoplay, EffectCards } from "swiper/modules";

const TinderSwiper = ({ picArray }) => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[Autoplay, EffectCards]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {picArray.map((pic, index) => (
        <SwiperSlide key={index}>
          <img
            src={pic}
            alt={`Picture ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
      {/* <SwiperSlide>Slide 1</SwiperSlide> */}
    </Swiper>
  );
};

export default TinderSwiper;
