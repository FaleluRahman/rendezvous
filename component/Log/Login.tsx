
function Login() {
  return (
    <div className="flex  items-center justify-center px-10">
      <div className="bg-white shadow-md rounded-lg p-8 w-full  ">
        <h2 className="text-2xl font-bold text-gray-800 text-start mb-2">
          Hey,
          <br />
          Login Now!
        </h2>
        <p className="leading-tight font-bold text-zinc-800 pb-2 text-xs">
          {" "}
          Participants can Login to get more details about programmes.
        </p>

        {/* Student Login Button */}
        <div className="flex flex-col  text-center">
          <a
            className="w-full bg-blue-700 text-gray-50 hover:bg-blue-800 hover:text-white py-2 rounded-lg mb-2 font-semibold transition duration-200"
            href="/qrcode"
          >
            Students Login
          </a>

        </div>

        <div className="mt-6 text-center">
          <p className="text-xs font-semibold text-gray-600">
            Having Problem to Login?
            <a
              href="https://wa.me/+918289882240"
              className="text-blue-500 hover:underline ml-0.5 font-xl"
            >
              Contact
            </a>
          </p>
        </div>
      </div>

    </div>
  );
}

export default Login;
