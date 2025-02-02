"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const SwiperJs = () => {
  const data = [
    "/img/gallery/gallery3.jpg",
    "/img/gallery/gallery4.jpeg",
    "/img/gallery/gallery1.jpg",
    "/img/gallery/gallery5.jpeg",
    "/img/gallery/gallery7.jpg",
    "/img/gallery/gallery8.jpg",
    "/img/gallery/gallery9.jpg",
  ];
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1.5}
      spaceBetween={20}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      breakpoints={{
        800: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
      }}
      pagination={false}
      autoplay={true}
      loop={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {data.map((item, idx) => (
        <SwiperSlide key={idx}>
          <img src={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperJs;
