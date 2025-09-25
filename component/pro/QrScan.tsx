"use client";
import axios from "axios";
import { Scanner } from "@yudiel/react-qr-scanner";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

interface QrScanProps {
  setScan: (value: boolean) => void;
}

interface StatusState {
  success: boolean;
  message: string;
}

export default function QrScan({ setScan }: QrScanProps) {
  const [data, setData] = useState<string | null>(null);
  const [status, setStatus] = useState<"scanning" | StatusState>("scanning");
  const [payment, setPayment] = useState(false);
  const [loading, setLoading] = useState(false);

  /** ---------- COLLECT POINTS ---------- **/
  const collect = async () => {
    const student = Cookies.get("student");
    if (!student) {
      setStatus({ success: false, message: "Student data not found" });
      return;
    }

    try {
      const jamiaId = JSON.parse(student).jamiaNo;
      setLoading(true);
      
      const response = await axios.get(
        `https://rend-application.abaqas.in//qrscans/actions.php?api=b1daf1bbc7bbd214045af&${data}&student=${jamiaId}`
      );
      
      if (response?.data?.success) {
        setStatus({
          success: true,
          message: `Congratulations! You earned ${response.data.points} points.`,
        });
      } else {
        throw new Error(response?.data?.message || "Failed to scan QR code");
      }
    } catch (error: any) {
      setStatus({
        success: false,
        message: error?.message || "Something went wrong while collecting points",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setScan(false), 3000);
    }
  };

  /** ---------- REDEEM / PAYMENT ---------- **/
  const redeem = () => {
    const validMerchants = ["pay=vr", "pay=cafe"];
    
    if (!data || !validMerchants.includes(data)) {
      setStatus({ 
        success: false, 
        message: "Invalid merchant QR code. Please scan a valid payment QR." 
      });
      setTimeout(() => setScan(false), 3000);
      return;
    }
    
    setPayment(true);
  };

  /** ---------- WHEN QR DATA CHANGES ---------- **/
  useEffect(() => {
    if (!data) return;
    
    if (data.startsWith("event=")) {
      collect();
    } else if (data.startsWith("pay=")) {
      redeem();
    } else {
      setStatus({
        success: false,
        message: "Invalid QR code format. Please scan a valid QR code."
      });
      setTimeout(() => setScan(false), 3000);
    }
  }, [data]);

  /** ---------- HANDLE PAYMENT SUBMIT ---------- **/
  const handlePay = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const student = Cookies.get("student");
    if (!student) {
      setStatus({ success: false, message: "Student data not found" });
      return;
    }

    const form = e.target as HTMLFormElement;
    const pointsInput = form.elements.namedItem("amount") as HTMLInputElement;
    const points = parseInt(pointsInput.value);
    
    if (!points || points <= 0) {
      setStatus({ success: false, message: "Please enter a valid points amount" });
      return;
    }

    try {
      setLoading(true);
      const jamiaId = JSON.parse(student).jamiaNo;
      
      const response = await axios.get(
        `https://rend-application.abaqas.in/qrscans/payment.php?api=b1daf1bbc7bbd214045af&${data}&student=${jamiaId}&points=${points}`
      );
      
      if (response?.data?.success) {
        setStatus({
          success: true,
          message: `Payment successful! ${points} points transferred.`,
        });
      } else {
        throw new Error(response?.data?.message || "Payment failed");
      }
    } catch (error: any) {
      setStatus({
        success: false,
        message: error?.message || "Payment processing failed. Please try again.",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setScan(false), 3000);
    }
  };

  const handleClose = () => {
    setScan(false);
  };

  const handleScanError = (error: unknown) => {
    if (error instanceof Error) {
      console.error("QR Scan Error:", error);
    } else {
      console.error("QR Scan Error:", String(error));
    }
    setStatus({
      success: false,
      message: "Camera access failed. Please check permissions and try again."
    });
  };

  return (
    <div className="fixed inset-0 h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-md w-full">
        {status === "scanning" ? (
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            {payment ? (
              // Payment Form
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">Make Payment</h3>
                  <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
                    disabled={loading}
                  >
                    ×
                  </button>
                </div>
                
                <form onSubmit={handlePay} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Points Amount
                    </label>
                    <input
                      type="number"
                      placeholder="Enter points to transfer..."
                      name="amount"
                      min="1"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      required
                      disabled={loading}
                    />
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      className="flex-1 px-4 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors disabled:opacity-50"
                      onClick={handleClose}
                      disabled={loading}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={loading}
                    >
                      {loading ? "Processing..." : "Pay Now"}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              // QR Scanner
              <div className="relative">
                <div className="p-6 text-center border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Scan QR Code</h3>
                  <p className="text-gray-600 text-sm">
                    Position the QR code within the frame to scan
                  </p>
                </div>
                
                <div className="p-6 bg-gray-50">
                  <div className="relative bg-white rounded-lg border-2 border-dashed border-gray-300 overflow-hidden">
                    <Scanner
                      onScan={(result) => {
                        if (result?.[0]?.rawValue) {
                          setData(result[0].rawValue);
                        }
                      }}
                      onError={handleScanError}
                      styles={{
                        container: { 
                          width: "300px", 
                          height: "300px",
                          margin: "0 auto",
                          position: "relative"
                        },
                        video: {
                          width: "300px",
                          height: "300px",
                          objectFit: "cover"
                        },
                        finderBorder: 20
                      }}
                    />
                    
                   
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors "
                      disabled={loading}
                    >
                      Cancel Scan
                    </button>
                  </div>
                </div>
                
                {loading && (
                  <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center rounded-xl">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                      <p className="text-gray-600">Processing...</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          // Status Messages
          <div className={`bg-white rounded-xl shadow-2xl p-6 text-center ${
            status.success ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'
          }`}>
            <div className="flex items-center justify-center mb-4">
              {status.success ? (
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              ) : (
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
              )}
            </div>
            
            <h3 className={`text-xl font-bold mb-2 ${
              status.success ? 'text-green-800' : 'text-red-800'
            }`}>
              {status.success ? 'Success!' : 'Error'}
            </h3>
            
            <p className={`text-sm ${
              status.success ? 'text-green-700' : 'text-red-700'
            }`}>
              {status.message}
            </p>
            
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
      
      {/* Background overlay - only closeable when not in payment mode and not loading */}
      {!payment && !loading && status === "scanning" && (
        <div 
          className="absolute inset-0 -z-10" 
          onClick={handleClose}
          aria-label="Close scanner"
        />
      )}
    </div>
  );
}