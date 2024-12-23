"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/pagination"; // Pagination module styles
import "swiper/css/autoplay"; // Autoplay module styles
import { Autoplay, Pagination } from "swiper/modules";

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









// "use client";

// import React, { useState, useEffect } from "react";

// const ImageSlider = () => {
//   const images = [
//     "/image/301.jpg",
//     "/image/505.jpg",
//     "/image/712.jpg",
//   ]; 

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval); // Clean up interval on unmount
//   }, [images.length]);

//   return (
//     <div className="w-full flex flex-col items-center bg-orange-50 overflow-hidden pb-10">
//       <img src={images[currentIndex]}
//         className="bg-cover w-[85%] bg-center transition-all duration-500 rounded-xl"
//         style={{ backgroundImage: `url(${images[currentIndex]})` }}
//       ></img>
      
//     </div>
//   );
// };

// export default ImageSlider;


