import React from 'react'

const Wallet = () => {
  return (
    <div className='bg-orange-50 py-5 w-full flex justify-center'>
    <div className='w-[90%] bg-white rounded-3xl flex flex-col pb-5 mb-20'>
      <div className='flex text-xs justify-between w-full'>
      <h1 className='text-zinc-700 font-bold px-5 pt-3 text-lg  flex items-center'>My Wallet </h1>
      <img className='h-12 px-5 pt-5 flex items-center pb-3' src="/image/qr-code-scan.svg" alt="" />
      </div>

      <hr className='bg-zinc-700 w-full' />

      <div className='text-zinc-600 font-bold flex w-full justify-between px-5 py-2'>
        <p>Total Points Collected </p>
        <p>25</p>
      </div>

      <div className='flex px-5 w-full justify-between font-bold text-lg pt-3 text-white'>
        <button className='bg-orange-700 px-3 rounded-2xl'>Collect</button>
        <button className='bg-orange-700 px-3 rounded-2xl'>Redeem</button>

      </div>


     


      
    </div>
    </div>
  )
}

export default Wallet