"use client";
import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode";

const QrCodeScanner: React.FC = () => {
    const [scanResult, setScanResult] = useState<string | null>(null);
    const qrCodeRegionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const qrCodeRegion = qrCodeRegionRef.current;
        if (!qrCodeRegion) return;

        const html5QrCode = new Html5Qrcode(qrCodeRegion.id);

        const onScanSuccess = (decodedText: string, decodedResult: any) => {
            console.log("Decoded text:", decodedText);
            setScanResult(decodedText);
            html5QrCode.stop().catch((err) => console.error("Error stopping scanner:", err));
        };

        const onScanError = (error: string) => {
            console.warn("Error scanning:", error);
        };

        html5QrCode
            .start(
                { facingMode: "environment" }, // Back camera
                {
                    fps: 10, // Frames per second
                    qrbox: { width: 250, height: 250 }, // Size of scanning area
                },
                onScanSuccess,
                onScanError
            )
            .catch((err) => console.error("Error starting scanner:", err));

        // Cleanup on component unmount
        return () => {
            html5QrCode.stop().catch((err) => console.error("Error stopping scanner:", err));
        };
    }, []);

    return (
        <div className="bg-orange-50  flex items-center justify-center flex-col py-10 min-h-screen text-center">
            <h2 className="text-base  text-left font-gilroy font-semibold">Scan your ID Card:</h2>
            <div id="qr-code-region" ref={qrCodeRegionRef} style={{ width: "400px"}} />
            <p>{scanResult}</p>
        </div>
    );
};

export default QrCodeScanner;