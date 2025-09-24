// "use client";
// import axios from "axios";
// import { Scanner } from "@yudiel/react-qr-scanner";
// import Cookies from "js-cookie";
// import { useEffect, useState } from "react";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";

// export default function QrScan({ setScan }: { setScan: any }) {
//   const [data, setData] = useState<any>(null);
//   const [status, setStatus] = useState<any>("scanning");
//   const [payment, setPayment] = useState(false);

//   function collect() {
//     const student = Cookies.get("student");
//     if (student) {
//       const jamiaId = JSON.parse(student).jamiaNo;
//       console.log(jamiaId);
//       axios
//         .post(
//           "http://localhost/students_backend/qrscans/actions.php?api=b1daf1bbc7bbd214045af&" +
//             data +
//             "&student=" +
//             jamiaId
//         )
//         .then((res: any) => {
//           if (res?.data?.success) {
//             setStatus({
//               success: true,
//               message: ` Congratulations, You got ${res.data.points} points.`,
//             });
//           } else {
//             throw new Error(
//               res?.data?.message || res?.data || "failed scanning"
//             );
//           }
//         })
//         .catch((err) => {
//           setStatus({
//             success: false,
//             message: err?.message || err || "Somomething went wrong",
//           });
//         })
//         .finally(() => {
//           setTimeout(() => {
//             setScan(false);
//           }, 2000);
//         });
//     }
//   }
//   function redeem() {
//     if (!["pay=vr", "pay=cafe"].includes(data)) {
//       setStatus({ success: false, message: "Merchant not found" });
//       setTimeout(() => {
//         setScan(false);
//       }, 3000);
//       return;
//     }

//     setPayment(true);
//   }
//   useEffect(() => {
//     if (data && data.startsWith("event=")) {
//       collect();
//     }
//     if (data && data.startsWith("pay=")) {
//       redeem();
//     }
//   }, [data]);
//   const handlePay = async (e: any) => {
//     e.preventDefault();
//     const student = Cookies.get("student");
//     if (student) {
//       const jamiaId = JSON.parse(student).jamiaNo;
//       try {
//         const points = e.target.amount.value;
//         const res = await axios.post(
//           "http://localhost/students_backend/qrscans/payment.php?api=b1daf1bbc7bbd214045af&" +
//             data +
//             "&student=" +
//             jamiaId +
//             "&points=" +
//             points
//         );
//         if (res?.data?.success) {
//           setStatus({
//             success: true,
//             message: `${points} points transferred successfully`,
//           });
//         } else {
//           throw new Error(
//             res?.data?.message || res.data || "Something went wrong"
//           );
//         }
//       } catch (error: any) {
//         setStatus({
//           success: false,
//           message: error?.message || error || "Something went wrong",
//         });
//       } finally {
//         setTimeout(() => {
//           setScan(false);
//         }, 2000);
//       }
//     }
//   };
//   return (
//     <>
//       <div className="fixed inset-0 h-screen w-full bg-black bg-opacity-80 grid place-content-center">
//         {status == "scanning" ? (
//           <div className="relative ">
//             {payment ? (
//               <div className="flex flex-col gap-3 z-50">
//                 <h3 className="text-2xl font-bold text-center">Payment</h3>
//                 <form onSubmit={handlePay}>
//                   <div className="flex flex-col gap-2">
//                     <input
//                       type="number"
//                       placeholder="Enter points count.."
//                       name="amount"
//                       className="px-1 py-2 rounded w-full border-2 border-slate-200"
//                       required
//                     />
//                   </div>
//                   <div className="flex justify-between gap-2 items-center">
//                     <button
//                       type="button"
//                       className="px-3 py-1 mt-3 text-sm  rounded-md bg-gray-500 hover:bg-opacity-80 duration-300 text-white font-semibold"
//                       onClick={() => setScan(false)}
//                     >
//                       Close
//                     </button>
//                     <button className="px-3 py-1 mt-3 text-sm  rounded-md bg-green-500 hover:bg-opacity-80 duration-300 text-white font-semibold">
//                       Pay
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             ) : (
//               <Scanner
//                 onScan={(result) => setData(result[0]?.rawValue)}
//                 styles={{
//                   container: { width: "150px", translate: "-25% -50%" },
//                   video: {
//                     width: "220px",
//                     translate: "0 35%",
//                     maxWidth: "300px",
//                     border: "4px white solid",
//                   },
//                   finderBorder: 10,
//                 }}
//               />
//             )}
//           </div>
//         ) : status.success ? (
//           <div className="bg-zinc-50 text-green-700 px-3 py-2 rounded-md flex font-bold ">
//             <img className="h-5 w-5 pr-2" src="/image/checked.png" alt="s" />{" "}
//             {status.message}
//           </div>
//         ) : (
//           <div className="bg-zinc-50 text-red-700 px-3 py-2 rounded-md flex  font-semibold ">
//             <img className="h-5 w-5 pr-2" src="/image/cancel.png" alt="s" />{" "}
//             {status.message}
//           </div>
//         )}
//       </div>
//       {!payment && (
//         <div
//           className="inset-0 fixed  h-screen z-40"
//           onClick={() => setScan(false)}
//         ></div>
//       )}
//     </>
//   );
// }


"use client";
import axios from "axios";
import { Scanner } from "@yudiel/react-qr-scanner";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function QrScan({ setScan }: { setScan: any }) {
  const [data, setData] = useState<string | null>(null);
  const [status, setStatus] = useState<"scanning" | { success: boolean; message: string }>("scanning");
  const [payment, setPayment] = useState(false);

  /** ---------- COLLECT POINTS ---------- **/
  function collect() {
    const student = Cookies.get("student");
    if (!student) return;

    const jamiaId = JSON.parse(student).jamiaNo;

    setStatus("scanning");
    axios
      .get(
        `http://localhost/students_backend/qrscans/actions.php?api=b1daf1bbc7bbd214045af&${data}&student=${jamiaId}`
      )
      .then((res: any) => {
        if (res?.data?.success) {
          setStatus({
            success: true,
            message: `Congratulations, You got ${res.data.points} points.`,
          });
        } else {
          throw new Error(res?.data?.message || res?.data || "Failed scanning");
        }
      })
      .catch((err) => {
        setStatus({
          success: false,
          message: err?.message || "Something went wrong",
        });
      })
      .finally(() => {
        setTimeout(() => setScan(false), 2000);
      });
  }

  /** ---------- REDEEM / PAYMENT ---------- **/
  function redeem() {
    if (!["pay=vr", "pay=cafe"].includes(data || "")) {
      setStatus({ success: false, message: "Merchant not found" });
      setTimeout(() => setScan(false), 3000);
      return;
    }
    setPayment(true);
  }

  /** ---------- WHEN QR DATA CHANGES ---------- **/
  useEffect(() => {
    if (data?.startsWith("event=")) collect();
    if (data?.startsWith("pay=")) redeem();
  }, [data]);

  /** ---------- HANDLE PAYMENT SUBMIT ---------- **/
  const handlePay = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const student = Cookies.get("student");
    if (!student) return;

    const jamiaId = JSON.parse(student).jamiaNo;
    const form = e.target as HTMLFormElement;
    const points = (form.elements.namedItem("amount") as HTMLInputElement).value;

    try {
      const res = await axios.get(
        `http://localhost/students_backend/qrscans/payment.php?api=b1daf1bbc7bbd214045af&${data}&student=${jamiaId}&points=${points}`
      );
      if (res?.data?.success) {
        setStatus({
          success: true,
          message: `${points} points transferred successfully`,
        });
      } else {
        throw new Error(res?.data?.message || res.data || "Something went wrong");
      }
    } catch (error: any) {
      setStatus({
        success: false,
        message: error?.message || "Something went wrong",
      });
    } finally {
      setTimeout(() => setScan(false), 2000);
    }
  };

  return (
    <>
      <div className="fixed inset-0 h-screen w-full bg-black bg-opacity-80 grid place-content-center">
        {status === "scanning" ? (
          <div className="relative">
            {payment ? (
              <div className="flex flex-col gap-3 z-50 bg-white p-4 rounded-md shadow-md">
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
                  <div className="flex justify-between gap-2 items-center mt-3">
                    <button
                      type="button"
                      className="px-3 py-1 text-sm rounded-md bg-gray-500 hover:bg-opacity-80 duration-300 text-white font-semibold"
                      onClick={() => setScan(false)}
                    >
                      Close
                    </button>
                    <button className="px-3 py-1 text-sm rounded-md bg-green-500 hover:bg-opacity-80 duration-300 text-white font-semibold">
                      Pay
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <Scanner
                onScan={(result) => {
                  if (result?.[0]?.rawValue) setData(result[0].rawValue);
                }}
                styles={{
                  container: { width: "150px", translate: "-25% -50%" },
                  video: {
                    width: "220px",
                    translate: "0 35%",
                    maxWidth: "300px",
                    border: "4px white solid",
                  },
                  finderBorder: 10,
                }}
              />
            )}
          </div>
        ) : status.success ? (
          <div className="bg-zinc-50 text-green-700 px-3 py-2 rounded-md flex font-bold">
            <img className="h-5 w-5 pr-2" src="/image/checked.png" alt="ok" />{" "}
            {status.message}
          </div>
        ) : (
          <div className="bg-zinc-50 text-red-700 px-3 py-2 rounded-md flex font-semibold">
            <img className="h-5 w-5 pr-2" src="/image/cancel.png" alt="err" />{" "}
            {status.message}
          </div>
        )}
      </div>
      {!payment && (
        <div className="inset-0 fixed h-screen z-40" onClick={() => setScan(false)}></div>
      )}
    </>
  );
}
