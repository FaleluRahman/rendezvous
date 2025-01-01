"use client";

import React from 'react';

const StudentsLogin = () => {
  // Function to handle the "Sign Up" action
  const popsSign = () => {
    // Logic for sign-up popup goes here
    // alert('Sign-up modal will be triggered');
  };

  return (
    <div className='bg-orange-50 h-fit flex pt-10'>
    <div className="px-5 h-fit mx-5 bg-white rounded-2xl w-[90%] text-xs font-gilroy py-2 flex flex-col ">
      <p className="text-gray-600 text-sm mb-1 leading-tight">
        Students can Login to get more details about programmes.
      </p>
      <h6
        onClick={popsSign}
        className="text-white w-fit py-1 px-3 font-bold bg-orange-700 rounded-2xl  cursor-pointer hover:bg-green-700 transition-colors"
      >
        Login
      </h6>
    </div>
    </div>
  );
};

export default StudentsLogin;
