"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/pagination"; // Pagination module styles
import "swiper/css/autoplay"; // Autoplay module styles
import { Autoplay, Pagination } from "swiper/modules";


const AdSlider = () => {
  const images = [
    "/image/ad1.jpg",
    "/image/ad2.jpg",
    "/image/ad3.jpg",
    
  ];

  return (
    <div className="w-full swiper-sec flex flex-col items-center bg-orange-50 overflow-hidden pb-3">
      
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
        <div className="bg-orange-50 py-3 ">
        <div className="flex flex-col">
          <div className="h-8 w-screen bg-[url('/image/Logomark.png')] bg-repeat-x bg-contain animate-rightToLeft"></div>
        </div>
      </div>
    </div>
  );
};

export default AdSlider;