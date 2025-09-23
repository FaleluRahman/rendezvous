"use client";
import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { axiosInstance } from "@/lib/utils";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
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

      const html5QrCode = new Html5Qrcode(qrCodeRegion.id);
      let isScanning = false;

   const onScanSuccess = (decodedText: string) => {
  console.log("Raw scanned text:", decodedText);


  let finalData = decodedText;
  try {
    finalData = atob(decodedText); 
    console.log("Decoded to original:", finalData);
  } catch (err) {
    console.warn("Not Base64, using raw text");
  }

  setScanResult(finalData);

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


      const onScanError = (errMsg: string) => {
        console.warn("Error scanning:", errMsg);
      };

      html5QrCode
        .start(
          { facingMode: "environment" },
          { fps: 10, qrbox: { width: 250, height: 250 } },
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
            .then(() => console.log("Scanner stopped on cleanup."))
            .catch((err) =>
              console.error("Error stopping scanner on cleanup:", err)
            );
        }
      };
    }
  }, [error]);

  useEffect(() => {
    if (scanResult) {
      setLoading(true);

      axiosInstance
        .post("/login", { jamiaId: scanResult }) // send encoded value
        .then((res) => {
          if (res?.data?.status) {
            Cookies.set("student", JSON.stringify(res.data.student), {
              path: "/",
            });
            localStorage.setItem(
              "programs",
              JSON.stringify(res.data.programs)
            );
            router.push("/");
          } else {
            throw new Error(
              res?.data?.message || "Something went wrong"
            );
          }
        })
        .catch((e) => {
          setError(e?.message || "Something went wrong");
          setLoading(false);
        });
    }
  }, [scanResult, router]);

  return (
    <div className="bg-orange-50 flex items-center justify-center flex-col py-10 min-h-screen text-center">
      {loading ? (
        <>
          <h2 className="text-zinc-700">Authenticating Your Access...</h2>
          <div className="flex items-center justify-center">
            <img className="h-20" src="/image/Loader Blobs.gif" alt="" />
          </div>
        </>
      ) : (
        <div className="relative h-full">
          <h2 className="font-bold text-zinc-600">Scan your Id card</h2>
          <div
            id="qr-code-region"
            ref={qrCodeRegionRef}
            style={{ width: "400px" }}
          />
          <a
            href="/login"
            className="p-2 px-5 absolute -bottom-10 -translate-x-20 translate-y-5 font-bold
          text-zinc-50 rounded-xl bg-red-500 mt-10"
          >
            Back to login
          </a>
        </div>
      )}

      {error && !loading && (
        <>
          <p className="text-red-600 flex">
            {error}
            <MdError className="mt-1" />
          </p>
          <button
            onClick={() => setError(null)}
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
