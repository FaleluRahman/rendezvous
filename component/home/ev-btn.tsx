import Link from 'next/link';
import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";


const EvBtn = () => {
  return (
    <div className='bg-orange-50 pb-5'>
    <div className='bg-zinc-100 mx-8  rounded-3xl' >
      <div className='py-2 px-5'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi iure quibusdam unde. 
        Temporibus aliquam voluptatibus sint, eveniet minima in et quis id officia, inventore
        cumque ex voluptates maxime repudiandae provident.</p>
        <Link href="/Events" > <div className='w-full flex justify-end text-right cursor-pointer'><p className='px-2 py-2 text-white font-bold bg-zinc-800 rounded-xl w-fit text-right flex '>Explore 
        <FaRegArrowAltCircleRight className='ml-1 mt-1.5 '/> </p></div></Link>
      </div>
      
    </div>
    </div>
  )
}

export default  EvBtn
