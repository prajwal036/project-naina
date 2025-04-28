"use client";
import React from "react";
// import LayoutGrid from "../../components/ui/layout-grid";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const page = () => {
  const data = [
    "/img/gallery/gallery1.jpg",
    "/img/gallery/gallery2.jpg",
    "/img/gallery/gallery3.jpg",
    "/img/gallery/gallery4.jpeg",
    "/img/gallery/gallery5.jpeg",
    "/img/gallery/gallery6.jpg",
    "/img/gallery/gallery7.jpg",
    "/img/gallery/gallery8.jpg",
    "/img/gallery/gallery9.jpg",
    "/img/gallery/gallery10.jpg",
    "/img/gallery/gallery11.jpg",
    "/img/gallery/gallery12.jpg",
  ];
  const heroGallery = [
    "/img/gallery/gallery1.jpg",
    "/img/gallery/gallery2.jpg",
    "/img/gallery/gallery3.jpg",
    "/img/gallery/gallery4.jpeg",
  ];
  return (
    <>
      <div className="h-screen relative">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          className="mySwiper-hero"
        >
          {heroGallery.map((item, idx) => (
            <SwiperSlide key={idx} className="relative w-full h-screen">
              <Image className="h-100 object-cover bg-center" fill src={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-[99] bg-black/30">
          <h1 className="text-5xl font-semibold py-10 text-center">GALLERY</h1>
        </div>
      </div>
      <div className=" py-10 md:py-20 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-4">
          {data.map((item, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl">
              <Image
                key={item}
                src={item}
                width={500}
                height={600}
                className="hover:scale-105 duration-200"
                alt="Gallery image"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
