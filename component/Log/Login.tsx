import React from 'react'
import { PiStudentFill } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";


function Login() {
    
    
    

  return (
    
    <div className='bg-orange-50 min-h-screen pb-60'>
    
      <section className='w-9/12 mx-auto flex   flex-col '>
        
        <div className='pt-40 pb-4'>
            <p className='text-black text-left text-3xl font-bold'>Hey,<br/>
            Login Now!</p>
            <p className='opacity-80 w-10/12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, rerum!</p>
        </div>
        <div  className='text-left px-1'>
            <p className='text-sm font-medium '>login as a</p>
                <div className='w-full  '>

                    <a href="/qrcode"><div className='bg-white w-10/12 h-12 mb-1 flex items-center justify-center rounded-md cursor-pointer'>
                        <PiStudentFill className='text-2xl' />
                        <p className='px-1'>Student</p>
        
                    </div></a>
                    <div id="reader" style={{ marginTop: "20px" }}></div>
                    <div className='bg-white w-10/12 h-12 my-4 flex items-center justify-center rounded-md cursor-pointer'>
                        
                        <FaRegUser className='text-xl' />
                        <p className='px-1'>Guest</p>

        
                    </div>
                    
                    
                </div>
        </div>
      </section>
        
    </div>
  )
}

export default Login