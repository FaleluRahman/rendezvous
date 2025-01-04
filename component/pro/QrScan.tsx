"use client";
import axios from "axios";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export default function QrScan({ setScan }: { setScan: any }) {
  const [data, setData] = useState<any>(null);
  const [status, setStatus] = useState<any>("scanning");
  const [payment, setPayment] = useState(false);

  function collect() {
    const student = Cookies.get("student");
    if (student) {
      const jamiaId = JSON.parse(student).jamiaNo;
      // console.log(jamiaId);
      axios
        .post(
          "https://application.abaqus.in/qrscans/actions.php?api=b1daf1bbc7bbd214045af&" +
            data +
            "&student=" +
            jamiaId
        )
        .then((res: any) => {
          if (res?.data?.success) {
            setStatus({
              success: true,
              message: ` Congratulations, You got ${res.data.points} points.`,
            });
          } else {
            throw new Error(
              res?.data?.message || res?.data || "failed scanning"
            );
          }
        })
        .catch((err) => {
          setStatus({
            success: false,
            message: err?.message || err || "Somomething went wrong",
          });
        })
        .finally(() => {
          setTimeout(() => {
            setScan(false);
          }, 2000);
        });
    }
  }
  function redeem() {
    if (!["pay=vr", "pay=cafe"].includes(data)) {
      setStatus({ success: false, message: "Merchant not found" });
      setTimeout(() => {
        setScan(false);
      }, 3000);
      return;
    }

    setPayment(true);
  }
  useEffect(() => {
    if (data && data.startsWith("event=")) {
      collect();
    }
    if (data && data.startsWith("pay=")) {
      redeem();
    }
  }, [data]);
  const handlePay = async (e: any) => {
    e.preventDefault();
    const student = Cookies.get("student");
    if (student) {
      const jamiaId = JSON.parse(student).jamiaNo;
      try {
        const points = e.target.amount.value;
        const res = await axios.post(
          "https://application.abaqas.in/qrscans/payment.php?api=b1daf1bbc7bbd214045af&" +
            data +
            "&student=" +
            jamiaId +
            "&points=" +
            points
        );
        if (res?.data?.success) {
          setStatus({
            success: true,
            message: `${points} points transferred successfully`,
          });
        } else {
          throw new Error(
            res?.data?.message || res.data || "Something went wrong"
          );
        }
      } catch (error: any) {
        setStatus({
          success: false,
          message: error?.message || error || "Something went wrong",
        });
      } finally {
        setTimeout(() => {
          setScan(false);
        }, 2000);
      }
    }
  };
  return (
    <>
      <div className="fixed inset-0 h-screen w-full bg-black bg-opacity-80 grid place-content-center">
        {status == "scanning" ? (
          <div className=" w-[300px]  aspect-sqaure p-2 bg-white rounded-md relative overflow-hidden">
            {payment ? (
              <div className="flex flex-col gap-3 z-50">
                <h3 className="text-2xl font-bold text-center">Payment</h3>
                <form onSubmit={handlePay}>
                  <div className="flex flex-col gap-2">
                    <input
                      type="number"
                      placeholder="Enter points count.."
                      name="amount"
                      className="px-1 py-2 rounded w-full border-2 border-slate-200"
                      required
                    />
                  </div>
                  <div className="flex justify-between gap-2 items-center">
                    <button
                      type="button"
                      className="px-3 py-1 mt-3 text-sm  rounded-md bg-gray-500 hover:bg-opacity-80 duration-300 text-white font-semibold"
                      onClick={() => setScan(false)}
                    >
                      Close
                    </button>
                    <button className="px-3 py-1 mt-3 text-sm  rounded-md bg-green-500 hover:bg-opacity-80 duration-300 text-white font-semibold">
                      Pay
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <>
                {" "}
                <div
                  className="absolute w-full bg-white opacity-50 border-b-4 border-red-500 h-full "
                  style={{
                    animation: "upDown 5s ease-in-out infinite",
                  }}
                ></div>
                <BarcodeScannerComponent
                  width={500}
                  height={500}
                  onUpdate={(err, result) => {
                    if (result) setData(result.getText());
                    else setData("Not Found");
                  }}
                  onError={(err) => console.log(err)}
                  stopStream={true}
                />
              </>
            )}
          </div>
        ) : status.success ? (
          <div className="bg-zinc-50 text-green-700 px-3 py-2 rounded-md flex font-bold ">
             <img className="h-5 w-5 pr-2" src="/image/checked.png" alt="s" /> {status.message}
          </div>
        ) : (
          <div className="bg-zinc-50 text-red-700 px-3 py-2 rounded-md flex  font-semibold ">
             <img className="h-5 w-5 pr-2" src="/image/cancel.png" alt="s" /> {status.message}
          </div>
        )}
      </div>
      {!payment && (
        <div
          className="inset-0 fixed h-screen z-40"
          onClick={() => setScan(false)}
        ></div>
      )}
    </>
  );
}
