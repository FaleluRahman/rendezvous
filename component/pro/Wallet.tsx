import React from 'react'

const Wallet = () => {
  return (
    <div className='bg-orange-50 pt-5 px-6 w-full flex pb-20 flex-col justify-center'>
    <div className='w-full relative bg-white rounded-3xl flex flex-col overflow-hidden  pb-5 mb-4'>
      <div className='flex text-xs justify-between w-full'>
      <h1 className='text-zinc-800 font-bold px-5 pt-3 text-lg  flex items-center'>My Wallet </h1>
      {/* <img className='h-12 px-5 pt-5 flex items-center pb-3' src="/image/qr-code-scan.svg" alt="" /> */}
      </div>

      {/* <hr className='bg-zinc-700 w-full' /> */}

      <div className='text-zinc-800 font-bold flex w-full justify-between px-5 pt-1'>
        <p>Total Points Collected </p>
        
        <p className='bg-yellow-300 text-zinc-500 text-3xl p-2 pl-4 rounded-full border border-yellow-100' style={{ borderWidth: '1px 7px 6px 2px' }}>25</p>
      </div>
              <button className='bg-yellow-300/65 ml-5 text-zinc-700 w-fit pr-36 font-bold px-3 py-1 rounded-2xl'>Redeem</button>

      <img className='ml-[50%] h-23 w-20 absolute top-24 ' src="/image/coin.png" alt="" />
      <img className='ml-[42%] h-14 w-17 absolute top-28 ' src="/image/coin.png" alt="" />
  

      {/* <div className=' px-5 w-full justify-between font-bold text-lg pt-3 text-white'>
        {/* <button className='bg-orange-700 px-3 rounded-2xl'>Collect</button> */}
        {/* <button className='bg-orange-700 px-3 rounded-2xl'>Redeem</button> */}

      {/* </div> */} 


     


      
    </div>

    <div className='w-full relative bg-white rounded-3xl flex flex-col overflow-hidden  pb-5 mb-4'>
      <div className='flex text-xs justify-between w-full'>
      {/* <h1 className='text-zinc-800 font-bold px-5 pt-3 text-lg  flex items-center'>My Wallet </h1> */}
      {/* <img className='h-12 px-5 pt-5 flex items-center pb-3' src="/image/qr-code-scan.svg" alt="" /> */}
      </div>

      {/* <hr className='bg-zinc-700 w-full' /> */}

      <div className='text-zinc-700 font-bold flex w-full px-5 pt-5 text-xl  '>
        <p>Collect More Points</p>
        
      </div>
  
        <button className='bg-violet-200 ml-5 text-zinc-700   font-bold px-3 my-4 py-1.5 rounded-2xl flex w-fit '>Collect</button>
        
      <img className='ml-[70%] h-23 w-20 absolute  top-5  ' src="/image/coinInEgg.svg" alt="" />
      {/* <img className='ml-[42%] h-14 w-17 absolute top-28 ' src="/image/coin.png" alt="" /> */}
  

      {/* <div className=' px-5 w-full justify-between font-bold text-lg pt-3 text-white'>
        {/* <button className='bg-orange-700 px-3 rounded-2xl'>Collect</button> */}
        {/* <button className='bg-orange-700 px-3 rounded-2xl'>Redeem</button> */}

      {/* </div> */} 


     


      
    </div>

   

    </div>
  )
}

export default Wallet