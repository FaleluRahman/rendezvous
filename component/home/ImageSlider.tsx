"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/pagination"; // Pagination module styles
import "swiper/css/autoplay"; // Autoplay module styles
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link"; // Correct Link import for navigation

const ImageSlider = () => {
  const images = [
    "/image/301.jpg",
    "/image/505.jpg",
    "/image/712.jpg",
    "/image/300.jpg",
  ];

  return (
    <div className="w-full swiper-sec flex flex-col items-center bg-orange-50 overflow-hidden pb-10 pt-10">
        <Swiper
          modules={[Autoplay, Pagination]} // Pass modules explicitly
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-[85%] rounded-xl"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default ImageSlider;
