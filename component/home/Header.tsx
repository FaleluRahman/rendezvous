import { Span } from 'next/dist/trace';
import Image from 'next/image';
import React from 'react';


function Header() {
  return (
    <div className='bg-orange-50 overflow-hidden '>
      <div className='bg-none  '>
      <div className=' max-w-auto h-80 flex flex-col justify-center items-center  relative
      rounded-bl-3xl rounded-br-3xl bg-gradient-to-r from-black via-red-700 via-red-500 via-amber-200 via-amber-300 via-blue-500 via-blue-700 to-red-600'>
        {/* H1 Tag */}
        <h1 className='font-gilroy  font-light flex italic text-lg text-center pt-10 text-white/60 '>
          Flair of Freedom,Freedom of Flair
        </h1>

        {/* Image Tag */}
        <img
          src="/image/logo-03 copy.png"
          alt="Rendezvous"
          className='h-[60%] pb-10'
        />

<div  className='bg-white rounded-3xl mx-5 py-1 absolute top-72   '>
      <div className='text-red-500 w-full items-center flex '>  
        <h1 className='mx-auto font-gilroy font-bold text-4xl w-fit mt-10 text-red-700 text-left ml-8 mb-0 leading-[10px] animate-colorPulse'>
          LIBRATIVE<br/>SUBMISSONS
          <span className='text-orange-500 text-5xl h-fit'>.</span>
        </h1> 
      </div>

      <div className='text-black/35 m-8 flex text-justify text-xs leading-[14px] font-base'>
  <p className='font-gilroy'> <span className='font-semibold text-black/45'> Rendezvous Life Festival </span> is an annual arts and cultural event organized by Jamia Madeenathunnoor
    to nurture and enhance the artistic talents of its students. This event not only promotes individual artistic development but also aims to build a supportive, 
    and vibrant community around the arts at Jamia Madeenathunnoor.
  </p>
</div>
</div>

      </div >
    
</div>










        <div className='bg-orange-50 pt-64'>
      <div className=" flex flex-col">
          <div className="h-8 w-screen bg-[url('/image/Logomark.png.png')] bg-repeat-x bg-contain animate-move"></div>
      </div>
    </div>
    

    </div>
  );
}

export default Header;
