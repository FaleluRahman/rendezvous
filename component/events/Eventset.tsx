"use client";
import React, { useState } from 'react';
import { BiSolidCoinStack } from "react-icons/bi";
import { IoQrCode } from "react-icons/io5";
import { FaMicrophoneLines } from "react-icons/fa6";

const Eventset = () => {
  const [currentVisible, setCurrentVisible] = useState<number | string | null>(null);
  const [Expo, setExpo] = useState("Events");

  const toggleVisibility = React.useCallback((index: number) => {
    setCurrentVisible(currentVisible === index ? null : index);
  }, [currentVisible]);

  const event = [
    { id: 1, img: "/image/debate poster copy.jpg", time: "09:30AM", location: "Conference Hall", price: "05", topic: "Navigating The Horizon Of Emerging Technologies" },
    { id: 2, img: "/image/shareea seminar 2 copy.jpg", time: "10:30AM", location: "Auditorium", price: "07", topic: "Navigating The Horizon Of Emerging Horizon Technologies" },
    { id: 3, img: "/image/505.jpg", time: "01:30PM", location: "Masjid", price: "08", topic: "Navigating The Horizon Of Emerging Technologies" },
    { id: 4, img: "/image/300.jpg", time: "03:30PM", location: "Thaqiyaa ", price: 10, topic: "Navigating The Horizon Of Emerging Technologies" },
  ];

  const news = [
    {
      id: 1,
      img: "/image/300.jpg",
      time: "10:30AM",
      location: "Auditorium",
      price: "07",
      topic: "Exploring Emerging Horizons in Technology",
    },
    {
      id: 2,
      img: "/image/505.jpg",
      time: "01:30PM",
      location: "Masjid",
      price: "08",
      topic: "Technology and Ethics",
    },
  ];

  return (
    <div className='bg-orange-50 flex justify-center items-center flex-col pb-10'>
      <div className="flex flex-col justify-between items-end w-full">
        <div className="flex gap-1 w-11/12 mx-auto overflow-x-auto">
          {["Events", "News"].map((item: any) => (
            <div
              onClick={() => setExpo(item)}
              key={item}
              className={`py-1 rounded-lg text-white text-xs text-center w-full my-4 ${Expo === item ? "bg-red-700 text-xs font-bold" : "bg-zinc-500 font-sans"}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {Expo === "Events" && event.map((event, index) => (
        <div
          key={event.id}
          className='bg-white rounded-t-3xl rounded-b-xl pb-2 w-[85%] flex flex-col mt-5 cursor-pointer'
          onClick={() => toggleVisibility(index)}
        >
          <div className='bg-gradient-to-r from-zinc-700 to-zinc-600 pt-2 text-white px-5 rounded-t-xl text-lg flex justify-between font-bold'>
            <p>Expert Convos</p> <IoQrCode className='py-1 text-3xl' />
          </div>
          <hr className='bg-zinc-700 w-full' />
          <h1 className='font-bold text-lg px-5 leading-tight py-2'>{event.topic}</h1>
          <div className='flex px-5 gap-1 text-zinc-600'>
            <FaMicrophoneLines className='font-bold mt-1' />
            <p className='font-bold text-lg pb-2'>Yasir Arafath Nurani</p>
          </div>
          {currentVisible === index && (
            <div>
              <div className='w-full flex-col px-5'>
                <img className='rounded-xl h-full w-full' src={event.img} alt="event" />
                <p className='text-justify text-sm leading-tight w-full py-5'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem a, libero quas atque consectetur iusto necessitatibus voluptate nesciunt ab perferendis dolore tempora earum omnis iste minus corrupti voluptas vitae officiis.
                </p>
              </div>
              <div className='h-8 bg-white text-zinc-700 px-5 rounded-t-xl mb-2 text-sm flex items-center justify-between font-bold'>
                <div className='flex flex-col'>
                  <div className='flex'><img className='h-4' src="/image/Timer.gif" alt="" /><p>{event.time}</p></div>
                  <div className='flex'><img className='h-4' src="/image/Location.gif" alt="" /><p>{event.location}</p></div>
                </div>
                <div className='flex'><BiSolidCoinStack className='text-3xl mt-3' /><p className='text-3xl mt-2'>{event.price}</p></div>
              </div>
            </div>
          )}
        </div>
      ))}

      {Expo === "News" && news.map((news, index) => (
        <div
          key={news.id}
          className='bg-white rounded-t-3xl rounded-b-xl pb-2 w-[85%] flex flex-col mt-5 cursor-pointer'
          onClick={() => toggleVisibility(index)}
        >
          <div className='bg-gradient-to-r from-zinc-700 to-zinc-600 pt-2 text-white px-5 rounded-t-xl text-lg flex justify-between font-bold'>
            <p>Expert Convos</p> <IoQrCode className='py-1 text-3xl' />
          </div>
          <hr className='bg-zinc-700 w-full' />
          <h1 className='font-bold text-lg px-5 leading-tight py-2'>{news.topic}</h1>
          <img className='rounded-xl h-full w-full'
              src={news.img} alt="news" />
          {currentVisible === index && (
            <div>
              <div className='w-full flex-col px-5'>
              
                <p className='text-justify text-sm leading-tight w-full py-5'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem a, libero quas atque consectetur iusto necessitatibus voluptate nesciunt ab perferendis dolore tempora earum omnis iste minus corrupti voluptas vitae officiis.
                </p>
              </div>
              <div className='h-8 bg-white text-zinc-700 px-5 rounded-t-xl mb-2 text-sm flex items-center justify-between font-bold'>
                <div className='flex flex-col'>
                  <div className='flex'><img className='h-4' src="/image/Timer.gif" alt="" /><p>{news.time}</p></div>
                  <div className='flex'><img className='h-4' src="/image/Location.gif" alt="" /><p>{news.location}</p></div>
                </div>
                <div className='flex'><BiSolidCoinStack className='text-3xl mt-3' /><p className='text-3xl mt-2'>{news.price}</p></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Eventset;
