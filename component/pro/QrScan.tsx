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

  const collect = async () => {
    const student = Cookies.get("student");
    if (!student) {
      setStatus({ success: false, message: "Student data not found" });
      return;
    }

    try {
      const jamiaId = JSON.parse(student).jamiaNo;
      setLoading(true);

      console.log("Raw QR Data:", data);

      let eventId: string | null = null;
      let token: string | null = null;

      if (typeof data === "string" && data.includes("=")) {
        try {
          const decodedData = decodeURIComponent(data);
          console.log("Decoded QR Data:", decodedData);

          const urlParams = new URLSearchParams(decodedData);
          eventId = urlParams.get("event");
          token = urlParams.get("token");

          if (!eventId) {
            const params = decodedData.split("&");
            for (const param of params) {
              const [key, value] = param.split("=");
              if (key === "event") eventId = value;
              if (key === "token") token = value;
            }
          }
        } catch (parseError) {
          console.error("Parsing error:", parseError);
          throw new Error("Invalid QR code format");
        }
      }

      console.log("Parsed - Event ID:", eventId, "Token:", token);

      if (!eventId) {
        throw new Error("Invalid QR code format. Missing event ID.");
      }

      if (!/^\d+$/.test(eventId)) {
        throw new Error("Invalid event ID format");
      }

      let apiUrl = `https://rend-application.abaqas.in/qrscans/actions.php?api=b1daf1bbc7bbd214045af&event=${eventId}&student=${jamiaId}`;
      if (token) {
        apiUrl += `&token=${token}`;
      }

      console.log("API URL:", apiUrl);

      const response = await axios.get(apiUrl, {
        timeout: 15000,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      console.log("API Response:", response.data);

      if (response?.data?.success) {
        let message = `Congratulations! You earned ${response.data.points} points`;

        if (response.data.event_type) {
          message += ` for ${response.data.event_type}`;
        }

        if (response.data.token_regenerated) {
          message += `. QR code has been refreshed for security.`;
        } else if (response.data.scan_count) {
          message += `. (Scan ${response.data.scan_count}/10 for this QR)`;
        }

        setStatus({
          success: true,
          message: message + ".",
        });
      } else {
        throw new Error(response?.data?.message || "Failed to scan QR code");
      }
    } catch (error: any) {
      console.error("Collection Error:", error);

      let errorMessage = "Something went wrong while collecting points";

      if (error?.response?.status === 401) {
        errorMessage = "Unauthorized access. Please check API configuration.";
      } else if (error?.response?.status === 404) {
        errorMessage =
          "API endpoint not found. Check if your backend server is running.";
      } else if (error?.response?.status >= 500) {
        errorMessage = "Server error. Please try again later.";
      } else if (error?.code === "ECONNABORTED") {
        errorMessage =
          "Request timeout. Please check your internet connection.";
      } else if (error?.code === "ERR_NETWORK") {
        errorMessage =
          "Network error. Make sure your backend server is running on localhost.";
      } else if (error?.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error?.message) {
        errorMessage = error.message;
      }

      setStatus({
        success: false,
        message: errorMessage,
      });
    } finally {
      setLoading(false);
      setTimeout(() => setScan(false), 4000);
    }
  };

  const redeem = () => {
    const validMerchants = ["pay=vr", "pay=cafe"];

    if (!data || !validMerchants.includes(data)) {
      setStatus({
        success: false,
        message:
          "Invalid merchant QR code. Please scan a valid payment QR.",
      });
      setTimeout(() => setScan(false), 3000);
      return;
    }

    setPayment(true);
  };

  useEffect(() => {
    if (!data) return;

    console.log("Scanned QR Data:", data);

    if (data.startsWith("event=")) {
      collect();
    } else if (data.startsWith("pay=")) {
      redeem();
    } else {
      setStatus({
        success: false,
        message:
          "Invalid QR code format. Please scan a valid event or payment QR code.",
      });
      setTimeout(() => setScan(false), 3000);
    }
  }, [data]);

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
        `https://rend-application.abaqas.in/qrscans/payment.php?api=b1daf1bbc7bbd214045af&${data}&student=${jamiaId}&points=${points}`,
        {
          timeout: 10000,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
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
      console.error("Payment Error:", error);
      let errorMessage = "Payment processing failed. Please try again.";

      if (error?.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error?.message) {
        errorMessage = error.message;
      }

      setStatus({
        success: false,
        message: errorMessage,
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
    console.error("QR Scan Error:", error);
    setStatus({
      success: false,
      message: "Camera access failed. Please check permissions and try again.",
    });
  };

  return (
    <div className="fixed inset-0 h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="relative max-w-md w-full">
        {status === "scanning" ? (
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            {payment ? (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Make Payment
                  </h3>
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
              <div className="relative">
                <div className="p-6 text-center border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Scan Secure QR Code
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Position the QR code within the frame to scan. Event QR
                    codes can be simple (event=12) or secure
                    (event=12&token=...).
                  </p>
                </div>

                <div className="p-6 bg-gray-50">
                  <div className="relative bg-white rounded-lg border-2 border-dashed border-gray-300 overflow-hidden">
                    <Scanner
                      onScan={(result) => {
                        if (result?.[0]?.rawValue) {
                          console.log("Scanner detected:", result[0].rawValue);
                          setData(result[0].rawValue);
                        }
                      }}
                      onError={handleScanError}
                      styles={{
                        container: {
                          width: "300px",
                          height: "300px",
                          margin: "0 auto",
                          position: "relative",
                        },
                        video: {
                          width: "300px",
                          height: "300px",
                          objectFit: "cover",
                        },
                        finderBorder: 20,
                      }}
                    />
                  </div>

                  <div className="mt-6 flex justify-center">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors"
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
                      <p className="text-gray-600">
                        Processing secure QR code...
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div
            className={`bg-white rounded-xl shadow-2xl p-6 text-center ${
              status.success
                ? "border-l-4 border-green-500"
                : "border-l-4 border-red-500"
            }`}
          >
            <div className="flex items-center justify-center mb-4">
              {status.success ? (
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              ) : (
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
              )}
            </div>

            <h3
              className={`text-xl font-bold mb-2 ${
                status.success ? "text-green-800" : "text-red-800"
              }`}
            >
              {status.success ? "Success!" : "Error"}
            </h3>

            <p
              className={`text-sm mb-4 ${
                status.success ? "text-green-700" : "text-red-700"
              }`}
            >
              {status.message}
            </p>

            <button
              onClick={handleClose}
              className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>

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
