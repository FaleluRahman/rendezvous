"use client";
import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode";
import { axiosInstance } from "@/lib/utils";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const QrCodeScanner: React.FC = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const qrCodeRegionRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [loading, setLoading]=useState<boolean>(false)
  useEffect(() => {
    const qrCodeRegion = qrCodeRegionRef.current;
    if (!qrCodeRegion) return;

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
          .catch((err) => console.error("Error stopping scanner on cleanup:", err));
      }
    };
  }, []);

  useEffect(() => {
    if (scanResult) {
      try {
setLoading(true)


        axiosInstance.post("/login", { jamiaId: scanResult }).then((res) => {
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
        });
      } catch (e: any) {
        setError(e?.message || e || "Something went wrong");
      }finally{
        setLoading(false)
      }
    }
  }, [scanResult]);
  return (
    <div className="bg-orange-50 flex items-center justify-center flex-col py-10 min-h-screen text-center">
        <div className="flex items-center justify-center">
          <div className="loader"></div>
         <img className="h-20" src="/image/Loader Blobs.gif" alt="" />
          {/* <p>Loading</p> */}
        </div>
     
      <div
        id="qr-code-region"
        ref={qrCodeRegionRef}
        style={{ width: "400px" }}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default QrCodeScanner;
