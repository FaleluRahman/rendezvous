"use client";
import React, { useState } from 'react';
import { BiSolidCoinStack } from "react-icons/bi";
import { IoQrCode } from "react-icons/io5";
import { FaMicrophoneLines } from "react-icons/fa6";
import { TbMicrowaveFilled } from 'react-icons/tb';
import { CgEditUnmask } from 'react-icons/cg';

const Eventset = () => {
  const [currentVisible, setCurrentVisible] = useState<number | string | null>(null);
  const [Expo, setExpo] = useState("Events");

  const toggleVisibility = React.useCallback((index: number) => {
    setCurrentVisible(currentVisible === index ? null : index);
  }, [currentVisible]);

  const event = [
    { id: 1, img: "/image/website1 expert.webg",
    time: "09:30AM",
    location: "Conference Hall", 
    price: "05", 
    topic: "Navigating The Horizon Of Emerging Technologies", 
    mic:"Yasir Arafath Nurani ,Yasir Arafath Nurani ,Yasir Arafath Nurani",
    sec:"Expert Convos"
    },
    { id: 2, img: "/image/shareea seminar 2 copy.jpg",
    time: "10:30AM", location: "Auditorium", 
    price: "07",
    topic: "Navigating The Horizon Of Emerging Horizon Technologies",
    mic:"Yasir Arafath Nurani ",
    sec:"write well clinic"
  },

    { id: 3, img: "/image/505.jpg",
      time: "01:30PM", location: "Masjid",
      price: "08", topic: "Navigating The Horizon Of Emerging Technologies"
      ,mic:"Yasir Arafath Nurani ",
      sec:"Docter's Corner"

    },

    { id: 4, img: "/image/300.jpg", 
      time: "03:30PM", location: "Thaqiyaa ", 
      price: 10, topic: "ഇന്ത്യൻ ചരിത്രത്തിലെ മൻമോഹൻ സിങ് കാലം",
      mic:"Yasir Arafath Nurani" },
  ];


  return (
    <div className='bg-orange-50 flex justify-center items-center flex-col'>
      <div className="flex flex-col justify-between items-end w-full">
      </div>

      {Expo === "Events" && event.map((event, index) => (
        <div
          key={event.id}
          className='bg-white rounded-t-3xl rounded-b-xl pb-2 w-[85%] flex flex-col mt-5 cursor-pointer font-malayalam'
          onClick={() => toggleVisibility(index)}
        >
          <div className='bg-gradient-to-r from-zinc-700 to-zinc-600 py-1 text-white px-5 rounded-t-xl text-md flex justify-between font-bold'>
            <p className='pt-1'>{event.sec}</p> <CgEditUnmask className=' text-3xl py-1' />
          </div>
          {/* <hr className='bg-zinc-700 w-full' /> */}
          <h1 className='font-bold text-md px-5 font-malayalam leading-tight py-2'>{event.topic}</h1>
      
    
          {currentVisible === index && (
            <div>
              <div className='w-full flex-col px-5'>
                <img className='rounded-xl h-full w-full' src={event.img} alt="event" />
                <p className='text-justify text-sm leading-tight w-full py-5'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem a, libero quas atque consectetur iusto necessitatibus voluptate nesciunt ab perferendis dolore tempora earum omnis iste minus corrupti voluptas vitae officiis.
                </p>
              </div>
              <div className='h-8 bg-white text-zinc-700 px-5 rounded-t-xl text-sm flex items-center justify-between font-bold'>
                <div className='flex w-full justify-between'>
                  <div className='flex'><img className='h-4' src="/image/icons8-alarm-clock-94.png" alt="" /><p>{event.time}</p></div>
                  <div className='flex'><img className='h-4' src="/image/icons8-location.gif" alt="" /><p>{event.location}</p></div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

    
    </div>
  );
};

export default Eventset;
