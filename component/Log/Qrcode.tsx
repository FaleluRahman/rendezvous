"use client";
import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode";
import { axiosInstance } from "@/lib/utils";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { IoScanSharp } from "react-icons/io5";
import { MdError } from "react-icons/md";

const QrCodeScanner: React.FC = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const qrCodeRegionRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!error) {
      const qrCodeRegion = qrCodeRegionRef.current;
      if (!qrCodeRegion) return;
console.log(qrCodeRegion);

      const html5QrCode = new Html5Qrcode(qrCodeRegion.id);
      let isScanning = false; // Flag to track scanner state

      const onScanSuccess = (decodedText: string, decodedResult: any) => {
        console.log("Decoded text:", decodedText);
        setScanResult(decodedText);

        if (isScanning) {
          html5QrCode
            .stop()
            .then(() => {
              console.log("Scanner stopped successfully.");
              isScanning = false;
            })
            .catch((err) => console.error("Error stopping scanner:", err));
        }
      };

      const onScanError = (error: string) => {
        console.warn("Error scanning:", error);
      };

      html5QrCode
        .start(
          { facingMode: "environment" },
          {
            fps: 10, // Frames per second
            qrbox: { width: 250, height: 250 }, // Scanning area size
          },
          onScanSuccess,
          onScanError
        )
        .then(() => {
          isScanning = true;
          console.log("Scanner started successfully.");
        })
        .catch((err) => console.error("Error starting scanner:", err));

      // Cleanup on unmount
      return () => {
        if (isScanning) {
          html5QrCode
            .stop()
            .then(() => console.log("Scanner stopped successfully on cleanup."))
            .catch((err) =>
              console.error("Error stopping scanner on cleanup:", err)
            );
        }
      };
    }
  }, [error,]);

  useEffect(() => {
    if (scanResult) {
      setLoading(true);

      axiosInstance
        .post("/login", { jamiaId: scanResult })
        .then((res) => {
          if (res && res.data && res.data.status) {
            Cookies.set("student", JSON.stringify(res.data.student), {
              path: "/",
            });
            return router.push("/");
          } else {
            throw new Error(
              res?.data?.message || res?.data || res || "Something went wrong"
            );
          }
        })
        .catch((e) => {
          setError(e?.message || e || "Something went wrong");
          setLoading(false);

        })
        
    }
  }, [scanResult]);
  return (
    <div className="bg-orange-50 flex items-center justify-center flex-col py-10 min-h-screen text-center">
      {loading ? (
        <>
          <h2 className="text-zinc-700">Authenticating Your Access...</h2>
        
        <div className="flex items-center justify-center">
          <img className="h-20" src="/image/Loader Blobs.gif" alt="" />
          {/* <p>Loading</p> */}
        </div>
        </>
      ) : (
        <>
        <p><IoScanSharp className="text-xl font-bold"/></p>
          <h2 className="font-bold text-zinc-600">Scan your Id card</h2>
          <div
            id="qr-code-region"
            ref={qrCodeRegionRef}
            style={{ width: "400px" }}
          />
        </>
      )}

      {error && !loading && (
        <>
          <p className="text-red-600  flex ">{error }<MdError  className="mt-1"/></p>
          <button
            onClick={() => {
              setError(null);
            }}
            className="bg-red-600 py-0.5 px-2 w-fit font-bold hover:bg-red-700 rounded-xl text-white mt-2"
          >
            Scan Again
          </button>
        </>
      )}
    </div>
  );
};

export default QrCodeScanner;
