"use client";
import React from 'react'
import { useState } from 'react';

const Shedule = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpenNav1, setIsNav1] = useState(false);
    const [isOpenNav2, setIsNav2] = useState(false);
    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    const toggleNav1 = () => {
        setIsNav1(!isOpenNav1)
      };
      const toggleNav2 = () => {
        setIsNav2(!isOpenNav2)
      };
    
    
  return (
    <section className="w-full bg-white my-[5px] shadow-[0_2px_10px_rgba(0,0,0,0.13)] py-[10px] box-border transition-all ease-in-out duration-500">
        <p className='text-[15px] w-11/12 flex justify-between items-center m-0 ml-[25px] text-[rgba(19,104,55,0.747)] cursor-pointer'
            onClick={toggleMenu}>
            View Full Schedule
        <svg
            id="svg-ig"
            width={46}
            height={46}
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" className={`h-8 transition-all duration-500 cursor-pointer ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            >
            <path
                fillRule="evenodd"
                d="M16.53 8.97a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L12 12.44l3.47-3.47a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
            />
        </svg>
    </p>
    {/* ---- DAY 1 ---- */}
    <nav className="flex flex-col justify-start items-center transition-all duration-500 overflow-hidden cursor-pointer" id="Schedule-item"
        onClick={toggleNav1}>
        <nav className='flex w-full px-[25px] py-[5px] box-border justify-between flex-row mt-[5px] bg-[#0000000a]'>
        <h6 className='m-0 text-[20px] font-semibold text-[#116197c4]'>Day 02</h6>
        <h6 className='m-0 text-[15px] font-medium  text-[#424242c4]'>01 Jan. 2023 <b className='text-[16px] font-medium ml-1'>Sunday</b></h6>
    </nav>
    <nav id="schedulee-bar" className={`flex flex-row overflow-scroll px-4 snap-x snap-mandatory w-full gap-[10px] transition-all duration-500 ease-in-out  h-24 mt-2 ${ isOpenNav1 ? "max-h-screen" : "max-h-0"} ${
          isMenuOpen ? "max-h-screen" : "max-h-0"} `}>
      <h5 className='w-full font-normal text-center flex items-center bg-gradient-to-br from-[#49ffd5] to-[#4eb8ff] px-[7px] text-white text-[17px] transition-all duration-500 ease-in-out rounded-r-[12px] rounded-bl-[28px] shadow-[3px_3px_10px_rgba(0,0,0,0.096)]'>Stage 01</h5>
      <section className='w-[350px] snap-center flex h-[90%] flex-row items-center justify-center' >
        <p className='w-[75px] text-[13px] relative -rotate-[90deg] text-[#7e7e7e] m-0 p-[-10px] flex justify-baseline font-medium'>08:30 am</p>
        <p className="text-[20px] relative leading-[20px] font-semibold m-0 w-[160px] text-[#1ab38f] item">General Arabic Jalsa</p>
      </section>
      <section className='w-[350px] snap-center flex h-[90%] flex-row items-center justify-center'>
        <p className='w-[75px] text-[13px] relative -rotate-[90deg] text-[#7e7e7e] m-0 p-[-10px] flex justify-baseline font-medium'>08:30 am</p>
        <p className="text-[20px] relative leading-[20px] font-semibold m-0 w-[160px] text-[#1ab38f] item">General Arabic Jalsa</p>
      </section>
      <section className='w-[350px] snap-center flex h-[90%] flex-row items-center justify-center'>
        <p className='w-[75px] text-[13px] relative -rotate-[90deg] text-[#7e7e7e] m-0 p-[-10px] flex justify-baseline  font-medium'>08:30 am</p>
        <p className="text-[20px] relative leading-[20px] font-semibold m-0 w-[160px] text-[#1ab38f] item">General Arabic Jalsa</p>
      </section>
      <section className='w-[350px] snap-center flex h-[90%] flex-row items-center justify-center'>
        <p className='w-[75px] text-[13px] relative -rotate-[90deg] text-[#7e7e7e] m-0 p-[-10px] flex justify-baseline font-medium'>08:30 am</p>
        <p className="text-[20px] relative leading-[20px] font-semibold m-0 w-[160px] text-[#1ab38f] item">General Arabic Jalsa</p>
      </section>
      <section className='w-[350px] snap-center flex h-[90%] flex-row items-center justify-center'>
        <p className='w-[75px] text-[13px] relative -rotate-[90deg] text-[#7e7e7e] m-0 p-[-10px] flex justify-baseline font-medium'>08:30 am</p>
        <p className="text-[20px] relative leading-[20px] font-semibold m-0 w-[160px] text-[#1ab38f] item">General Arabic Jalsa</p>
      </section>
      
      
      
    </nav>
    
    </nav>

    {/* ---- DAY 2 ---- */}
    <nav className="flex flex-col justify-start items-center transition-all duration-500 overflow-hidden cursor-pointer" id="Schedule-item"
        onClick={toggleNav2}>
        <nav className='flex w-full px-[25px] py-[5px] box-border justify-between flex-row mt-[5px] bg-[#0000000a]'>
        <h6 className='m-0 text-[20px] font-semibold text-[#116197c4]'>Day 02</h6>
        <h6 className='m-0 text-[15px] font-medium  text-[#424242c4]'>01 Jan. 2023 <b className='text-[16px] font-medium ml-1'>Sunday</b></h6>
    </nav>
    <nav id="schedulee-bar" className={`flex flex-row overflow-scroll px-4 snap-x snap-mandatory w-full gap-[10px] transition-all duration-500 ease-in-out  h-24 mt-2 ${ isOpenNav2 ? "max-h-screen" : "max-h-0"} ${
          isMenuOpen ? "max-h-screen" : "max-h-0"} `}>
      <h5 className='w-full font-normal text-center flex items-center bg-gradient-to-br from-[#49ffd5] to-[#4eb8ff] px-[7px] text-white text-[17px] transition-all duration-500 ease-in-out rounded-r-[12px] rounded-bl-[28px] shadow-[3px_3px_10px_rgba(0,0,0,0.096)]'>Stage 01</h5>
      <section className='w-[350px] snap-center flex h-[90%] flex-row items-center justify-center' >
        <p className='w-[75px] text-[13px] relative -rotate-[90deg] text-[#7e7e7e] m-0 p-[-10px] flex justify-baseline font-medium'>08:30 am</p>
        <p className="text-[20px] relative leading-[20px] font-semibold m-0 w-[160px] text-[#1ab38f] item">General Arabic Jalsa</p>
      </section>
      <section className='w-[350px] snap-center flex h-[90%] flex-row items-center justify-center'>
        <p className='w-[75px] text-[13px] relative -rotate-[90deg] text-[#7e7e7e] m-0 p-[-10px] flex justify-baseline font-medium'>08:30 am</p>
        <p className="text-[20px] relative leading-[20px] font-semibold m-0 w-[160px] text-[#1ab38f] item">General Arabic Jalsa</p>
      </section>
      <section className='w-[350px] snap-center flex h-[90%] flex-row items-center justify-center'>
        <p className='w-[75px] text-[13px] relative -rotate-[90deg] text-[#7e7e7e] m-0 p-[-10px] flex justify-baseline  font-medium'>08:30 am</p>
        <p className="text-[20px] relative leading-[20px] font-semibold m-0 w-[160px] text-[#1ab38f] item">General Arabic Jalsa</p>
      </section>
      <section className='w-[350px] snap-center flex h-[90%] flex-row items-center justify-center'>
        <p className='w-[75px] text-[13px] relative -rotate-[90deg] text-[#7e7e7e] m-0 p-[-10px] flex justify-baseline font-medium'>08:30 am</p>
        <p className="text-[20px] relative leading-[20px] font-semibold m-0 w-[160px] text-[#1ab38f] item">General Arabic Jalsa</p>
      </section>
      <section className='w-[350px] snap-center flex h-[90%] flex-row items-center justify-center'>
        <p className='w-[75px] text-[13px] relative -rotate-[90deg] text-[#7e7e7e] m-0 p-[-10px] flex justify-baseline font-medium'>08:30 am</p>
        <p className="text-[20px] relative leading-[20px] font-semibold m-0 w-[160px] text-[#1ab38f] item">General Arabic Jalsa</p>
      </section>
      
      
      
    </nav>
    
    </nav>
    
   
  
</section>

  )
}

export default Shedule