import React from 'react'

const Filter = () => {
  const pro=[]
  return (
    <div className='bg-orange-50 py-5 w-full flex justify-center'>
    <div className='w-[90%] bg-white rounded-3xl flex flex-col  pb-5'>
      <div className='flex text-xs justify-between w-full'>
      <h1 className='text-zinc-700 font-bold px-5 pt-3 text-lg pb-5 flex items-center'>My Programmes</h1>
      <img className='h-10 px-5 pt-5' src="/image/technical-support.png" alt="" />
      {/* <div className='flex flex-col px-5 py-5 gap-1 font-normal  '>
      <div className='flex gap-1'><p className='bg-green-600 w-fit px-1 rounded-full text-white'>F</p> <p>Finshed</p></div>
      <div className='flex gap-1'><p className='bg-red-600 w-fit px-1 rounded-full text-white'>P</p> Pending</div>
      </div> */}
      </div>
      <hr className='bg-zinc-700 w-full' />
      <div className='gap-8 text-zinc-700  font-gilroy font-semibold'>
      <p className='bg-green-50 w-full  text-green-900 mt-1 text-center'>Finshed</p>   
      {/* <hr className='bg-zinc-700 w-full' /> */}


      <div className='flex justify-between w-full px-3 py-1'><p>Talk Master Arabic</p> </div>
      <div className='flex justify-between w-full px-3 py-1'><p>Talk Master English</p></div>
      <p className='bg-red-50 w-full  text-red-900 text-center'>Pending</p>
      <div className='flex justify-between w-full px-3 py-1'><p>Poem Arabic</p> </div>
      <div className='flex justify-between w-full px-3  py-1'><p>Essay Arabic</p> </div>
      <p className='bg-yellow-50 w-full text-yellow-900 text-center'>Ongoing</p>
      <div className='flex justify-between w-full px-3 py-1'><p>Song Arabic</p></div>
      <div className='flex justify-between w-full px-3 py-1'><p>Talk Master Arabic</p></div>

      <p className='bg-blue-50  w-full text-blue-900 text-center'>Anounced</p>

      <div className='flex justify-between w-full px-3 py-1'><p>Song Arabic</p></div>
      <div className='flex justify-between w-full px-3 py-1'><p>Talk Master Arabic</p></div>
      </div>


      
    </div>
    </div>
  )
}

export default Filter
