"use client";

import React,{ useState } from 'react'


const Eventset = () => {
  const [currentVisible, setCurrentVisible] = useState<number | string | null>(null);

  const toggleVisibility = React.useCallback((index: number) => {
    setCurrentVisible(currentVisible === index ? null : index);
  }, [currentVisible]);
  
  

  const event = [
    { id: 1, img: "/image/712.jpg", time: "09:30AM", location: "Conference Hall", price: "05" },
    { id: 2, img: "/image/301.jpg", time: "10:30AM", location: "Auditorium", price: "07" },
    { id: 3, img: "/image/505.jpg", time: "01:30PM", location: "Masjid", price: "08" },
    { id: 4, img: "/image/300.jpg", time: "03:30PM", location: "Thaqiyaa ", price: 10 },

  ]


  return (
    <div className='bg-orange-50 flex justify-center items-center flex-col '>
    {/* event/1 */}
    {event.map((event,index)=>(

<div
key={event.id}
className='bg-white rounded-3xl w-[85%] flex flex-col mt-5 gap-3 px-5 cursor-pointer'
    onClick={()=> toggleVisibility(index)}>
    
    <div className='h-fit py-2 bg-white mx-1 text-zinc-700  rounded-t-3xl text-lg flex  justify-between font-bold'>
    <p>Expert Convos</p> <img className='h-6' src="/image/qr-code-scan.svg" alt="" />
      </div>
      <img 
        className='rounded-3xl  w-auto' 
        src={event.img} 
        alt="wwwww" 
      /> 
      {currentVisible === index  && (
        <p className=' text-justify text-sm leading-tight pt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Voluptatem a, libero quas atque consectetur iusto necessitatibus voluptate nesciunt ab perferendis dolore 
        tempora earum omnis iste minus corrupti voluptas vitae officiis.</p>


      )}
      
        <div className='h-8 bg-white mt-5 text-zinc-700  rounded-t-3xl mb-2 text-sm flex items-center justify-between font-bold'>
        <div className='flex flex-col'>
        <div className='flex'><img className='h-4' src="/image/Timer.gif" alt="" /><p>{event.time}</p></div> 
        <div className='flex'><img className='h-4' src="/image/Location.gif" alt="" /><p>{event.location}</p></div>
        </div>

        <div className='flex'><img className='h-10' src="/image/Dollar Donation.gif" alt="" /><p className='text-3xl mt-2'>{event.price}</p></div> 
      </div>
    </div>
  
  
     ))}
  </div>
  
  
  
  )
}

export default Eventset
