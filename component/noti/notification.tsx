// "use client";

// import React, { useState, useEffect } from "react";
// import { getRelativeTime } from "../common/DateConvert";

// const NotificationPage = () => {
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       head: "Today’s Lunch Special",
//       message: "Chicken Mandi awaits you! Don’t miss it! ",
//       time: "Sun Jan 05 2025 13:39:40 GMT+0530 (India Standard Time)", // 1 minute ago
//     },
//     {
//       id: 2,
//       head: "Attention Students",
//       message: "Redeem your Glocal Points at Cafe'25 and  explore Gen Z tech at Glocal VR! Earn points via ProChat, Expert Convos, EduLogin, & more! ",
//       time: "Sun Jan 05 2025 11:39:40 GMT+0530 (India Standard Time)", // 1 minute ago
//     },

   
//   ]);
//   const [currentTime, setCurrentTime] = useState(Date.now());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(Date.now());
//     }, 60000); // Update every 1 minute
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="bg-gray-50 h-screen pt-5">
  
//       <main className="px-4 py-4">
//         {notifications.length > 0 ? (
//           <ul className="space-y-4">
//             {notifications.map((notification) => (
//               <li
//                 key={notification.id}
//                 className="flex justify-between items-center bg-white shadow-sm rounded-lg p-4  pt-2 border border-gray-200"
//               >
//                 {/* Render message with HTML */}
//                 <div className="w-10/12 mx-auto">
//                   <p className="text-lg font-semibold pt-2 px-2">
//                     {notification.head}
//                   </p>
//                   <p
//                     className="text-gray-800 px-2 text-balance text-sm mt-[10px]"
//                     dangerouslySetInnerHTML={{ __html: notification.message }}
//                   ></p>
//                 </div>
//                 <span className="text-sm text-gray-500 ">
//                   {getRelativeTime(currentTime, notification.time)}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-center text-gray-600">
//             No notifications available.
//           </p>
//         )}
//       </main>
//     </div>
//   );
// };

// export default NotificationPage;

// "use client";

// import React, { useState, useEffect } from "react";
// import { Bell, Clock, X, Trash2 } from "lucide-react";

// // Mock getRelativeTime function
// const getRelativeTime = (currentTime, timeString) => {
//   const notificationTime = new Date(timeString).getTime();
//   const diffMs = currentTime - notificationTime;
//   const diffMins = Math.floor(diffMs / 60000);
//   const diffHours = Math.floor(diffMs / 3600000);
//   const diffDays = Math.floor(diffMs / 86400000);

//   if (diffMins < 1) return "Just now";
//   if (diffMins < 60) return `${diffMins}m ago`;
//   if (diffHours < 24) return `${diffHours}h ago`;
//   return `${diffDays}d ago`;
// };

// const NotificationPage = () => {
//   const [notifications, setNotifications] = useState([
  
//     {
//       id: 1,
//       head: "Attention Students",
//       message: "Redeem your Glocal Points at MG Cafe'25 ,papyrus Reading Carnival and Tajammul Mart Earn points via EduLogin, Expert Convos,ProChat , & more!",
//       time: "Friday Oct 03 2025 21:55:40 GMT+0530 (India Standard Time)",
//       unread: true,
//     },
//   ]);
//   const [currentTime, setCurrentTime] = useState(Date.now());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(Date.now());
//     }, 60000);
//     return () => clearInterval(timer);
//   }, []);

//   const removeNotification = (id) => {
//     setNotifications(notifications.filter((n) => n.id !== id));
//   };

//   const markAsRead = (id) => {
//     setNotifications(
//       notifications.map((n) =>
//         n.id === id ? { ...n, unread: false } : n
//       )
//     );
//   };

//   const clearAll = () => {
//     setNotifications([]);
//   };

//   const unreadCount = notifications.filter((n) => n.unread).length;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className=" shadow-lg">
//         <div className="max-w-5xl mx-auto px-4 py-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <div className="bg-white/20 p-3 rounded-full">
//                   <Bell className="w-7 h-7 text-white" />
//                 </div>
//                 {unreadCount > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-yellow-400 text-red-900 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-red-600">
//                     {unreadCount}
//                   </span>
//                 )}
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-red-600">Notifications</h1>
//                 {/* <p className="text-gray-700 text-sm mt-0.5">
//                   {notifications.length} {notifications.length === 1 ? 'notification' : 'notifications'}
//                 </p> */}
//               </div>
//             </div>
//             {/* {notifications.length > 0 && (
//               <button
//                 // onClick={clearAll}
//                 // className="flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
//               >
//                 {/* <Trash2 className="w-4 h-4" />
//                 Clear All */}
//               {/* </button>
//             )}  */}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <main className="max-w-5xl mx-auto px-4 py-6">
//         {notifications.length > 0 ? (
//           <div className="space-y-4">
//             {notifications.map((notification) => (
//               <div
//                 key={notification.id}
//                 onClick={() => markAsRead(notification.id)}
//                 className={`group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 ${
//                   notification.unread
//                     ? "border-l-red-600"
//                     : "border-l-gray-300"
//                 } overflow-hidden cursor-pointer`}
//               >
//                 <div className="p-5">
//                   <div className="flex items-start justify-between gap-4">
//                     <div className="flex-1 min-w-0">
//                       {/* Title with Badge */}
//                       <div className="flex items-center gap-3 mb-2">
//                         <h3 className="text-lg font-semibold text-gray-900">
//                           {notification.head}
//                         </h3>
//                         {/* {notification.unread && (
//                           // <span className="bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
//                             // NEW
//                           // </span>
//                         ) */}
//                       </div>

//                       {/* Message */}
//                       <p
//                         className="text-gray-700 text-sm leading-relaxed mb-3"
//                         dangerouslySetInnerHTML={{ __html: notification.message }}
//                       ></p>

//                       {/* Time */}
//                       <div className="flex items-center gap-1.5 text-gray-500 text-xs">
//                         <Clock className="w-4 h-4" />
//                         <span className="font-medium">{getRelativeTime(currentTime, notification.time)}</span>
//                       </div>
//                     </div>

//                     {/* Delete Button */}
//                     {/* <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         removeNotification(notification.id);
//                       }}
//                       className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-red-50 rounded-lg text-red-600 hover:text-red-700"
//                       aria-label="Remove notification"
//                     >
//                       <X className="w-5 h-5" />
//                     </button> */}
//                   </div>
//                 </div>

//                 {/* Unread Background Highlight */}
//                 {notification.unread && (
//                   <div className="absolute inset-0 bg-red-50/30 pointer-events-none"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-20">
//             <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-5">
//               <Bell className="w-12 h-12 text-red-600" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-2">
//               All caught up!
//             </h3>
//             <p className="text-gray-600 text-lg">You have no notifications at the moment.</p>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default NotificationPage;