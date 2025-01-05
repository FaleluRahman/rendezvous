"use client";

import React, { useState, useEffect } from "react";
import { getRelativeTime } from "../common/DateConvert";

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      head: "Today’s Lunch Special",
      message: "Chicken Mandi awaits you! Don’t miss it! ",
      time: "Sun Jan 05 2025 13:39:40 GMT+0530 (India Standard Time)", // 1 minute ago
    },
    {
      id: 2,
      head: "Attention Students",
      message: "Redeem your Glocal Points at Cafe'25 and  explore Gen Z tech at Glocal VR! Earn points via ProChat, Expert Convos, EduLogin, & more! ",
      time: "Sun Jan 05 2025 11:39:40 GMT+0530 (India Standard Time)", // 1 minute ago
    },

   
  ]);
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 60000); // Update every 1 minute
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-orange-50 h-screen pt-5">
  
      <main className="px-4 py-4">
        {notifications.length > 0 ? (
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className="flex justify-between items-center bg-white shadow-sm rounded-lg p-4  pt-2 border border-gray-200"
              >
                {/* Render message with HTML */}
                <div className="w-10/12 mx-auto">
                  <p className="text-lg font-semibold pt-2 px-2">
                    {notification.head}
                  </p>
                  <p
                    className="text-gray-800 px-2 text-balance text-sm mt-[10px]"
                    dangerouslySetInnerHTML={{ __html: notification.message }}
                  ></p>
                </div>
                <span className="text-sm text-gray-500 ">
                  {getRelativeTime(currentTime, notification.time)}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">
            No notifications available.
          </p>
        )}
      </main>
    </div>
  );
};

export default NotificationPage;
