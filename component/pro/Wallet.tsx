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
    <div className="bg-amber-50 pt-5 px-6 w-full flex pb-28 flex-col justify-center" id="collect">
      <div className="w-full relative bg-white rounded-3xl flex flex-col overflow-hidden  pb-5 mb-4">
        <div className="flex text-xs justify-between w-full">
          <h1 className="text-zinc-800 font-bold px-5 pt-3 text-lg  flex items-center">
            My Wallet
          </h1>
        </div>


        <div className="text-zinc-700 font-bold text-sm flex w-full justify-between px-5 pt-1">
          <p>Total Points Collected </p>

          <p
            className="bg-yellow-300 text-zinc-500 text-3xl p-2 pl-4 rounded-full border border-yellow-100"
            style={{ borderWidth: "1px 7px 6px 2px" }}
          >
            {points}
          </p>
        </div>
        <button
          className="bg-yellow-300/65 ml-5 text-zinc-700 w-fit pr-[30%] font-bold px-3 py-1 rounded-2xl"
          onClick={() => setScan(true)}
        >
          Redeem
        </button>

        <img
          className="ml-[50%] h-23 w-20 absolute top-24 "
          src="/image/coin.png"
          alt=""
        />
        <img
          className="ml-[42%] h-14 w-17 absolute top-28 "
          src="/image/coin.png"
          alt=""
        />
      </div>

      {/* <div className="w-full flex justify-center bg-orange-50  py-5">
        <div className="w-full relative bg-white rounded-3xl flex flex-col overflow-hidden   pb-5 mb-16">
          <div className="text-zinc-700  flex-col flex w-full px-5 pt-5">
            <p className="font-bold text-[14px]">Collect More Points</p>
            <p className="text-[10px] w-90 mx-auto text-justify leading-[-42px]">
              Scan the QR code to earn points by participating in these
              sessions, and redeem them for delicious items at Cafe and
              reduction at book fair and various exhibitions
            </p>
          </div>

          <button
            className="bg-violet-200 ml-5 text-zinc-700 font-bold px-3 mt-4 py-1 rounded-2xl flex w-fit "
            onClick={() => setScan(true)}
          >
            Collect
          </button>

          <img
            className="ml-[75%] h-13 w-11 absolute top-[68%] "
            src="/image/coinInEgg.svg"
            alt=""
          />
        </div>
      </div> */}
      {scan && <QrScan setScan={setScan} />}
      </div>
    );
  }

  export default Wallet;
