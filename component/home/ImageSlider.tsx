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
    // "/image/website themetalk.webg",
    "/image/expert.jpg",
    "/image/20250104_174302.jpg",
    // "/image/eduloginb.webg",
    "/image/scholarly Exchange lnd.jpg",
    "/image/scholarly Exchange lnd eng.jpg",
    "/image/20250104_172018.jpg",
    "/image/20250104_173205.jpg",
    "/image/20250104_174833.jpg",
];

  return (
    <div className="w-full swiper-sec flex flex-col items-center bg-white overflow-hidden pb-6">
      <div className="flex justify-between px-7 w-full pb-2  text-zinc-700 font-bold">
      <p className=' text-lg rounded-badge '>Events</p>
      <Link href="/Events"> <p className='font-bold text-xs text-red-700 rounded-badge  bg-red-100  px-2 py-1 cursor-pointer'>View More</p>
      </Link>



       
      </div>
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
        <div className="bg-white py-3 ">
        <div className="flex flex-col">
          <div className="h-8 w-screen bg-[url('/image/Logomark.png')] bg-repeat-x bg-contain animate-rightToLeft"></div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
