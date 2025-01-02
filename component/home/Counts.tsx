import React from 'react'
import { PiStudentBold } from "react-icons/pi";
import { MdMicExternalOn } from "react-icons/md";
import { BiCard } from "react-icons/bi";




const Counts = () => {
  return (
    <div className='bg-orange-50 grid grid-cols-2  grid-rows-3 px-5 py-4 w-full mx-auto text-center   '>

        <div className='bg-yellow-50 mb-3  px-3 py-3 rounded-3xl relative  mx-1  overflow-hidden row-span-2'>
            <h1 className='text-yellow-600 text-3xl text-left font-extrabold'>1500+</h1>
            <p className='text-zinc-700 text-md  text-left '>Participates</p>
            <PiStudentBold className='absolute w-20 h-20  bottom-[-8px] right-0 text-[#dda338] opacity-15 cursor-pointer'/>

        </div>
        <div className='bg-red-50  px-3 py-5 rounded-3xl relative mx-1  overflow-hidden'>
            <h1 className='text-red-600 text-3xl text-left font-bold'>250+</h1>
            <p className='text-zinc-700 text-md  text-left p'>Programs</p>
            <MdMicExternalOn className='absolute w-20 h-20 top-5  right-0 text-red-400 opacity-15 cursor-pointer'/>

        </div>
        <div className='bg-green-50  mb-0 mt-3   px-3 py-5 rounded-3xl relative  mx-1  overflow-hidden row-span-2'>
            <h1 className='text-green-600 text-3xl text-left font-extrabold'>42+</h1>
            <p className='text-zinc-700 text-md  text-left '>Institutions</p>
            <img className='absolute w-28 h-28  bottom-[-12px] right-0 text-green-600 opacity-15 cursor-pointer' src="/image/jm-logo.png" alt="" />

        </div>
        <div className='bg-green-50  px-3 py-5 rounded-3xl relative  mx-1  overflow-hidden row-span-2'>
            <h1 className='text-blue-600 text-3xl text-left font-extrabold'>10+</h1>
            <p className='text-zinc-700 text-md  text-left '>Venues</p>
            <BiCard className='absolute w-20 h-20  bottom-[-12px] right-0 text-blue-600 opacity-15 cursor-pointer' />

        </div>
       
        
       

        
    </div>
  )
}

export default Counts
