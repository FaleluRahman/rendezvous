import Link from 'next/link';
import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";


const EvBtn = () => {
  return (
    <div className='bg-orange-50 pb-5 '>
    <div className='bg-zinc-100 mx-8 py-4  rounded-3xl' >
      <div className='py-2 px-5'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi iure quibusdam unde. 
        Temporibus aliquam voluptatibus sint, eveniet minima in et quis id officia, inventore
        cumque ex voluptates maxime repudiandae provident.</p>
        <Link href="/Events" > <div className='w-full flex justify-end text-right cursor-pointer'><p className='bg-zinc-800 flex px-4 py-3 text-center text-sm font-semibold text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-2 active:scale-95">'>Explore 
        <FaRegArrowAltCircleRight className='ml-1 mt-1 '/> </p></div></Link>
      </div>
      
    </div>
    </div>
  )
}

export default  EvBtn
