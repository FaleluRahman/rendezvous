import React from 'react'



function Navigation() {
  return (
    <div id="footer" className='m-0 mx-auto fixed bottom-0 z-[5] w-[min(100vw,375px)] flex items-center justify-center bg-[rgb(221,221,221)] rounded-t-[15px] shadow-[1px_-3px_10px_rgba(0,0,0,0.116)] h-16 text-black'>
        <nav id="icon-a" className=" flex flex-col items-center justify-center w-[19%] h-[40px] ">          
            <svg 
                width="50"
                height="50" 
                fill="none" 
                stroke="currentColor"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="1.5" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className='h-[30px] w-[25px] mb-[10px] transition duration-500 text-black' >
                <path
                    d="M17 21.002H7a4 4 0 0 1-4-4V10.71a4 4 0 0 1 1.927-3.42l5-3.031a4 4 0 0 1 4.146 0l5 3.03A4 4 0 0 1 21 10.71v6.292a4 4 0 0 1-4 4Z">
                </path>
                <path d="M9 17h6"></path>
            </svg>
            <p className='text-[10px]  mt-[4px] absolute bottom-[5px] opacity-100 transition duration-500 bg-transparent'>Home</p>
        </nav>

        <nav id="icon-b" className="flex flex-col items-center justify-center w-[19%] h-[40px] left-[87px]">
            <svg 
                width="46" 
                height="46" 
                fill="none" 
                stroke="currentColor"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="1.5" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" 
                className='h-[30px] w-[30px] mb-[8px] transition duration-500'>
                <path
                    d="M6.745 4h10.568s-.88 13.257-5.284 13.257c-2.151 0-3.461-3.164-4.24-6.4C6.977 7.468 6.746 4 6.746 4Z">
                </path>
                <path
                    d="M17.313 4s.922-.982 1.687-1c1.5-.033 1.777 1 1.777 1 .294.61.529 2.195-.88 3.658-1.41 1.463-2.986 2.743-3.628 3.2">
                </path>
                <path
                    d="M6.745 4S5.785 3.006 5 3c-1.5-.012-1.777 1-1.777 1-.294.61-.529 2.194.88 3.657a29.897 29.897 0 0 0 3.687 3.2">
                </path>
                <path d="M8.507 20c0-1.828 3.522-2.742 3.522-2.742s3.523.914 3.523 2.743H8.507Z"></path>
            </svg>
           
            <p className='text-[10px]  mt-[4px] absolute bottom-[5px] opacity-100 transition duration-500 bg-transparent'>Results</p>
        </nav>
        <nav id="icon-c" className="flex flex-col items-center justify-center w-[19%] h-[40px] left-[158px]">
            <svg
                width={46}
                height={46}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className='h-[30px] w-[25px] mb-[8px] transition duration-500'
                >
                <path d="M22 12.6v7.8a.6.6 0 0 1-.6.6h-7.8a.6.6 0 0 1-.6-.6v-7.8a.6.6 0 0 1 .6-.6h7.8a.6.6 0 0 1 .6.6Z"></path>
                <path d="m19.5 14.511.01-.011" />
                <path d="m13 18.2 3.5-1.2 5.5 2" />
                <path d="M22 9V6.6a.6.6 0 0 0-.6-.6h-8.678a.6.6 0 0 1-.39-.144L9.168 3.144A.6.6 0 0 0 8.778 3H2.6a.6.6 0 0 0-.6.6v14.8a.6.6 0 0 0 .6.6H10"></path>
                <path d="M2 10h8" />
            </svg>
            <p className='text-[10px] text-black mt-[4px] absolute bottom-[5px] opacity-100 transition duration-500 bg-transparent'>Gallery</p>
        </nav>
        <nav id="icon-d"  className="flex flex-col items-center justify-center w-[19%] h-[40px]">
            <svg
                width={46}
                height={46}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className='h-[25px] mb-[8px] transition duration-500'
                >
                <path d="M18.134 11C18.715 16.375 21 18 21 18H3s3-2.133 3-9.6c0-1.697.632-3.325 1.757-4.525C8.883 2.675 10.41 2 12 2c.337 0 .672.03 1 .09"></path>
                <path d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path d="M13.73 21a1.999 1.999 0 0 1-3.46 0" />
            </svg>
            <p className='text-[10px] text-black mt-[4px] absolute bottom-[5px] opacity-100 transition duration-500 bg-transparent'>Notification</p>
        </nav>
        <nav id="icon-f" className="flex flex-col items-center justify-center w-[19%] h-[40px]">
            <svg
                width={46}
                height={46}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className='h-[25px] mb-[8px] transition duration-500'
                >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z" />
                <path d="M4.271 18.346s2.23-2.846 7.73-2.846 7.729 2.846 7.729 2.846" />
                <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
            <p className='text-[10px] text-black mt-[4px] absolute bottom-[5px] opacity-100 transition duration-500 bg-transparent'>Profile</p>
        </nav>
        <section id="nav-act" className='absolute bg-gradient-to-br from-[#e9ca3f] to-[#1bb38f] shadow-[3px_3px_10px_#bebebe] w-[60px] h-[60px] rounded-[18px] -z-10 left-[15px] translate-y-[-20px] transition duration-500' />
    </div>

  )
}

export default Navigation