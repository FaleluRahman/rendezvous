"use client";

import React from 'react';
import { AiOutlineLogin } from "react-icons/ai";

const StudentsLogin = () => {
  // Function to handle the "Sign Up" action
  const popsSign = () => {
    // Logic for sign-up popup goes here
    // alert('Sign-up modal will be triggered');
  };

  return (
    <div className='bg-gray-50 h-screen flex pt-10 mt-5'>
    <div className="p-5 h-fit mx-auto bg-white rounded-xl w-[80%] font-gilroy flex flex-col relative">
      <p className="text-gray-700 text-balance text-baset- w-8/12  mb-1 leading-tight">
        Participants can Login to get more details about programmes.
      </p>
      <a href="/login" 
        onClick={popsSign}
        className="text-white text-center w-2/5 mt-5 mb-2 text-base  py-2 px-3 font-bold bg-red-700 rounded-2xl  cursor-pointer hover:opacity-80 transition-colors"
      >
        Login
      </a>
      <img src="/image/wired-outline-500-fingerprint-security-hover-pinch.gif" className='w-28 absolute top-7 right-4' alt="Login icon" />

    </div>
    </div>
  );
};

export default StudentsLogin;