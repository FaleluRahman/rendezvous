
function Login() {
  return (
    <div className=" pb-60 flex  items-center justify-center px-10">
      <div className="bg-white shadow-md rounded-lg p-8 w-full  ">
        <h2 className="text-2xl font-bold text-gray-800 text-start mb-2">
          Hey,
          <br />
          Login Now!
        </h2>
        <p className="leading-tight font-bold text-zinc-400 pb-2 text-xs">
          {" "}
          Students can Login to get more details about programmes.
        </p>

        {/* Student Login Button */}
        <div className="flex flex-col  text-center">
          <a
            className="w-full bg-orange-200 text-gray-800 hover:bg-orange-600 hover:text-white py-2 rounded-lg mb-2 font-semibold transition duration-200"
            href="/qrcode"
          >
            Participant
          </a>

          {/* Guest Login Button */}
          <a
            className="w-full bg-gray-300 text-gray-800  hover:bg-gray-700 hover:text-white py-2 rounded-lg font-semibold transition duration-200"
            href="/guest"
          >
            Guest
          </a>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Having Problem to Login?
            <a
              href="https://wa.me/+918289882240"
              className="text-blue-500 hover:underline ml-0.5"
            >
              Contact
            </a>
          </p>
        </div>
      </div>

      {/* <section className='w-9/12 mx-auto flex   flex-col '>
        
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
      </section> */}
    </div>
  );
}

export default Login;
