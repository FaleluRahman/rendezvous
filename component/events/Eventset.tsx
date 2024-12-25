"use client";
import React, { useState } from 'react';
import { BiSolidCoinStack } from "react-icons/bi";


const Eventset = () => {
  const [currentVisible, setCurrentVisible] = useState<number | string | null>(null);

  const toggleVisibility = React.useCallback((index: number) => {
    setCurrentVisible(currentVisible === index ? null : index);
  }, [currentVisible]);



  const event = [
    { id: 1, img: "/image/debate poster copy.jpg", time: "09:30AM", location: "Conference Hall", price: "05",topic:"Navigating The Horizon Of Emerging Technologies" },
    { id: 2, img: "/image/shareea seminar 2 copy.jpg", time: "10:30AM", location: "Auditorium", price: "07",topic:"Navigating The Horizon Of Emerging Technologies" },
    { id: 3, img: "/image/505.jpg", time: "01:30PM", location: "Masjid", price: "08",topic:"Navigating The Horizon Of Emerging Technologies" },
    { id: 4, img: "/image/300.jpg", time: "03:30PM", location: "Thaqiyaa ", price: 10,topic:"Navigating The Horizon Of Emerging Technologies" },
  ];


  return (
    <div className='bg-orange-50 flex justify-center items-center flex-col '>
      {/* event/1 */}
      {event.map((event, index) => (

        <div
          key={event.id}
          className='bg-white rounded-t-3xl rounded-b-xl  w-[85%] flex flex-col mt-5 gap-3 cursor-pointer'
          onClick={() => toggleVisibility(index)}>

          <div className='pt-3 bg-white  text-zinc-700 px-5  rounded-t-xl text-lg flex  justify-between font-bold'>
            <p>Expert Convos</p> <img className='h-6' src="/image/qr-code-scan.svg" alt="" />
          </div>
      <hr className='bg-zinc-700 w-full' />
      <h1 className='font-bold text-lg px-5 leading-tight'>{event.topic}</h1>
          
{currentVisible === index && (
  <div className='w-full flex-col px-5 '>
    <img
      className='rounded-xl h-full w-full' 
      src={event.img}
      alt="wwwww" />
    <p className=' text-justify text-sm leading-tight w-full py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Voluptatem a, libero quas atque consectetur iusto necessitatibus voluptate nesciunt ab perferendis dolore
      tempora earum omnis iste minus corrupti voluptas vitae officiis.</p>
  </div>
)}

          <div className='h-8 bg-white text-zinc-700 px-5 rounded-t-xl mb-2 text-sm flex items-center justify-between font-bold'>
            <div className='flex flex-col'>
              <div className='flex'><img className='h-4' src="/image/Timer.gif" alt="" /><p>{event.time}</p></div>
              <div className='flex'><img className='h-4' src="/image/Location.gif" alt="" /><p>{event.location}</p></div>
            </div>

            <div className='flex'><BiSolidCoinStack className='text-3xl mt-3'/><p className='text-3xl mt-2'>{event.price}</p></div>
          </div>
        </div>


      ))}
    </div>



  );
};
export default Eventset;
