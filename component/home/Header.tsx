import { Span } from 'next/dist/trace';
import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <div className='bg-white overflow-hidden'>
      <div className='bg-none'>
        <div className='max-w-auto h-80 flex flex-col justify-center items-center relative rounded-bl-3xl rounded-br-3xl'
           style={{
  background: `
    radial-gradient(ellipse 800px 1200px at -200px 50%, rgba(50, 0, 0, 0.6) 0%, transparent 70%),
    radial-gradient(ellipse 800px 1200px at calc(100% + 200px) 50%, rgba(0, 0, 50, 0.7) 0%, transparent 70%),
    radial-gradient(ellipse 600px 800px at 85% 85%, rgba(25, 0, 25, 0.5) 0%, transparent 60%),
    radial-gradient(ellipse 400px 600px at 50% 45%, rgba(5, 5, 10, 0.95) 0%, rgba(10, 0, 15, 0.8) 50%, transparent 100%),
    linear-gradient(145deg, 
      rgba(10, 0, 0, 1) 0%,
      rgba(5, 5, 15, 1) 30%,
      rgba(0, 0, 20, 1) 60%,
      rgba(15, 0, 25, 1) 100%
    )
  `
}}>
          
          {/* Additional gradient layers */}
          <div className="absolute inset-0 rounded-bl-3xl rounded-br-3xl"
               style={{
                 background: `
                   linear-gradient(90deg, rgba(255, 140, 80, 0.15) 0%, transparent 30%),
                   linear-gradient(270deg, rgba(80, 140, 255, 0.2) 0%, transparent 30%)
                 `
               }}></div>
          
          <div className="absolute inset-0 rounded-bl-3xl rounded-br-3xl"
               style={{
                 background: `radial-gradient(ellipse 70% 80% at 50% 50%, transparent 40%, rgba(5, 5, 15, 0.6) 100%)`
               }}></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full">
            {/* H1 Tag */}
            {/* <h1 className='font-gilroy font-light flex italic text-lg text-center pt-10 text-white/60'>
              Flair of Freedom,Freedom of Flair
            </h1> */}

            {/* Image Tag */}
            <img
              src="/image/logo-03 copy.png"
              alt="Rendezvous"
              className='h-[80%] pb-10'
            />
          </div>

          <div className='bg-amber-50 rounded-3xl mx-5 py-1 absolute top-72 z-[2]'>
            <div className='text-red-500 w-full items-center flex'>  
              <h1 className='mx-auto font-gilroy font-bold text-4xl w-fit mt-10 text-red-700 text-left ml-8 mb-0 leading-[10px] animate-colorPulse'>
                Transcending<br/> illusions
                <span className='text-stone-800 text-5xl h-fit'>.</span>
              </h1> 
            </div>

            <div className='text-black/85 m-8 flex text-justify text-xs leading-[14px] font-base'>
              <p className='font-gilroy'>
                <span className='font-semibold text-black/95'>Rendezvous Life Festival</span> is an annual arts and cultural event organized by Jamia Madeenathunnoor
                to nurture and enhance the artistic talents of its students. This event not only promotes individual artistic development but also aims to build a supportive, 
                and vibrant community around the arts at Jamia Madeenathunnoor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white pt-48'>
        <div className="flex flex-col">
          <div className="h-8 w-screen bg-[url('/image/Logomark.png.png')] bg-repeat-x bg-contain animate-move"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;