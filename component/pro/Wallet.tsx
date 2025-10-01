"use client";
import React, { useEffect, useState } from "react";
import QrScan from "./QrScan";
import axios from "axios";
import Cookies from "js-cookie";

const Wallet = () => {
  const [scan, setScan] = useState(false);
  const [points, setPoints] = useState(0);
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