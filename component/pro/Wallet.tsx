"use client";
import React, { useEffect, useState } from "react";
import QrScan from "./QrScan";
import axios from "axios";
import Cookies from "js-cookie";
import { Info, TrendingUp, Award, Store, Coins } from "lucide-react";

const Wallet = () => {
  const [scan, setScan] = useState(false);
  const [points, setPoints] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  
  useEffect(() => {
    if (scan) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [scan]);
  
  useEffect(() => {
    if (!scan) {
      const student = Cookies.get("student");
      if (student) {
        const jamiaId = JSON.parse(student).jamiaNo;
        axios
          .get(
            "https://rend-application.abaqas.in/qrscans/actions.php?api=b1daf1bbc7bbd214045af&ID=" +
              jamiaId
          )
          .then((res: any) => {
            if (res?.data?.success) {
              setPoints(res?.data.data || 0);
            } else {
              throw new Error(
                res?.data?.message || res?.data || "failed scanning"
              );
            }
          })
          .catch((err) => {
            setPoints(0);
            console.log(err);
          });
      }
    }
  }, [scan]);
  
  return (
    <div className="bg-gray-50 pt-5 px-6 w-full flex pb-28 flex-col justify-center" id="collect">
      {/* Info Card */}
      <div className="w-full mb-4">
        <button 
          onClick={() => setShowInfo(!showInfo)}
          className="w-full bg-gradient-to-br from-red-700 via-rose-600 to-rose-700 rounded-2xl shadow-lg flex items-center justify-between p-5 text-white hover:shadow-xl transition-all"
        >
          <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-gray-50 to-white p-2 rounded-xl shadow-sm">
              <Info className="w-5 h-5  text-red-800" />
            </div>
            <div className="text-left">
              <h2 className="font-bold text-lg">About Glocal Points</h2>
              <p className="text-sm text-white/80">Learn how to earn and redeem</p>
            </div>
          </div>
          <svg 
            className={`w-5 h-5 transition-transform ${showInfo ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {showInfo && (
          <div className="mt-4 space-y-3">
            {/* Value Info */}
            <div className="bg-gradient-to-br from-red-700 via-rose-600 to-rose-700 rounded-xl p-5 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-gray-50 to-white p-3 rounded-xl shadow-sm">
                  <Coins className="w-6 h-6 text-red-800" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-base ">Glocal Point Value</h3>
                  <p className="text-white text-xs font-medium leading-tight">
                    1 Glocal Point equals ₹1. Valid during Rendezvous Silver Edition.
                  </p>
                </div>
              </div>
            </div>

            {/* How to Earn */}
            <div className="bg-gradient-to-br from-red-700 via-rose-600 to-rose-700 rounded-xl p-5 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                 <div className="bg-gradient-to-br from-gray-50 to-white p-3 rounded-xl shadow-sm">
                  <TrendingUp className="w-6 h-6 text-red-800" />
                </div>
                <div className="flex-1">
                   
                  <h3 className="font-bold text-white text-base">How to Earn Glocal Points</h3>
                  <p className="text-white text-xs font-medium leading-tight">
 Win competitions to earn Glocal points for first, second, and third place 100, 80, 60 respectively.   Attend sessions and get points by showing your participant card to coordinators for scanning.                 </p>
                </div>
              </div>
            </div>

            {/* Where to Redeem */}
            <div className="bg-gradient-to-br from-red-700 via-rose-600 to-rose-700 rounded-xl p-5 shadow-md border border-gray-100">
              <div className="flex items-start gap-4">
                   
                  <div className="bg-gradient-to-br from-gray-50 to-white p-3 rounded-xl shadow-sm">
                  <Store className="w-6 h-6 text-red-800" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-base">Partner Merchants</h3>
                  <p className="text-white text-xs font-medium leading-tight">
Redeem your points at Papyrus Reading Carnival, Tajammul Mart, MG Cafe, and VR Hub located throughout the Rendezvous venue.
                              </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Wallet Card */}
      <div className="w-full relative bg-gradient-to-br from-red-700 via-rose-600 to-rose-700 rounded-3xl flex flex-col overflow-hidden pb-5 mb-4 shadow-xl">
        <div className="flex text-xs justify-between w-full">
          <h1 className="text-white font-bold px-5 pt-3 text-lg flex items-center">
            My Wallet
          </h1>
        </div>

        <div className="text-white font-bold text-sm flex w-full justify-between px-5 pt-1">
          <p>Total Points Collected</p>

          <p
            className="bg-white text-red-700 text-3xl p-2 pl-4 rounded-full border-4 border-violet-200 shadow-lg"
          >
            {points}
          </p>
        </div>
        <button
          className="bg-white/90 hover:bg-white ml-5 font-2xl text-red-800 w-fit pr-[30%] font-bold px-3 py-1 rounded-2xl shadow-md transition-all"
          onClick={() => setScan(true)}
        >
          Redeem
        </button>

        <img
          className="ml-[50%] h-23 w-20 absolute top-24"
          src="/image/coin.png"
          alt=""
        />
        <img
          className="ml-[42%] h-14 w-17 absolute top-28"
          src="/image/coin.png"
          alt=""
        />
      </div>

      {scan && <QrScan setScan={setScan} />}
    </div>
  );
};

export default Wallet;