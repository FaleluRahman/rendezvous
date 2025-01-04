// pages/notification.js
import React from "react";

const NotificationPage = () => {
  const notifications = [
    { id: 1, message: "Cultural Gala scheduled for Today at 4 AM.", time: "3 mints ago"  },
    { id: 2, message: "Food alert:Your meal awaits! ", time: "2 hours ago" },
    // { id: 3, message: " ", time: "1 day ago" },
    // { id: 4, message: " ", time: "1 hour ago" },
  ];

  return (
    <div className=" bg-orange-50 h-screen pt-5">
      {/* Header */}
      {/* <div className="w-full  flex justify-center">
      <header className= "  bg-zinc-600 text-white w-fit px-2 rounded-3xl shadow-md">
        <h1 className="text-center text-xl font-bold">Notifications</h1>
      </header>
      </div> */}

      {/* Notification List */}
      <main className="px-4 py-4">
        {notifications.length > 0 ? (
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className="flex justify-between items-center bg-white shadow-sm rounded-lg p-4 border border-gray-200"
              >
                <p className="text-gray-800">{notification.message}</p>
                <span className="text-sm text-gray-500">{notification.time}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">No notifications available.</p>
        )}
      </main>
    </div>
  );
};

export default NotificationPage;
