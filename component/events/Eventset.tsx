// "use client";
// import React, { useState } from "react";
// import { BiSolidCoinStack } from "react-icons/bi";
// import { IoQrCode } from "react-icons/io5";
// import { FaMicrophoneLines } from "react-icons/fa6";
// import { TbMicrowaveFilled } from "react-icons/tb";
// import { CgEditUnmask } from "react-icons/cg";

// const Eventset = () => {
//   const [currentVisible, setCurrentVisible] = useState<number | string | null>(
//     null
//   );
//   const [Expo, setExpo] = useState("Events");

//   const toggleVisibility = React.useCallback(
//     (index: number) => {
//       setCurrentVisible(currentVisible === index ? null : index);
//     },
//     [currentVisible]
//   );

//   const event = [
//     {
//       id: 1,
//       img: "/image/website1 expert.webg",
//       location: "Cosmo sapien",
//       price: "05",
//       topic:
//         "Expert sessions by Noorani alumni on diverse topics at Rendezvous'25.",
//       sec: "Expert Convos",
//     },
//     {
//       id: 2,
//       img: "/image/eduloginb.webg",
//       // time: "10:30AM", 
//       location: "Library ",
//       price: "07",
//       topic:
//         "Noorani-led sessions on career opportunities across SSC, UPSC, PSC, NET, CA, and scholarships.",
//       mic: "Yasir Arafath Nurani ",
//       sec: "Edu Login",
//     },

//     {
//       id: 3,
//       img: "/image/web pro.webg",
//       // time: "01:30PM",
//       location: " opp.Masjid",
//       price: "08",
//       topic: " Student-led sessions on diverse fields at Rendezvous'25",
//       mic: "Yasir Arafath Nurani ",
//       sec: "Pro Chat",

//     },
//     {
//       id: 4,
//       img: "/image/WEB USMAN.webg",
//       // time: "02:00PM",
//       location: "Cosmo sapien",
//       price: "08",
//       topic: "Al-Powered Personalized Learning: Tailoring Education to Individual Needs",
//       mic: "Yasir Arafath Nurani ",
//       sec: "Expert Convos",

//     },
//     {
//       id: 5,
//       img: "/image/website razi.webg",
//       // time: "02:00PM",
//       location: "Cosmo sapien",
//       price: "08",
//       topic: "രിസാല ക്രിയേഷൻ: ഗവേഷണവും ക്രമീകരണ രീതിയും",
//       mic: "Yasir Arafath Nurani ",
//       sec: "Expert Convos",

//     },
//     {
//       id: 6,
//       img: "/image/WEB FALIL.webg",
//       // time: "02:00PM",
//       location: "Cosmo sapien",
//       price: "08",
//       topic: "دروس اللغة العربية الوسائل والإمكانيات",
//       mic: "Yasir Arafath Nurani ",
//       sec: "Expert Convos",

//     },


//     {
//       id: 7,
//       img: "/image/najeeb noor.jpg",
//       // time: "02:00PM",
//       location: "Cosmo sapien",
//       price: "08",
//       topic: "ഷാഫിഈ  ഫിഖ്ഹ് : കേരളീയ ഉലമാഇന്റെ  സമീപന രീതികൾ   ",
//       mic: "Yasir Arafath Nurani ",
//       sec: "Expert Convos",

//     },

//     {
//       id: 8,
//       img: "/image/razi noor.jpg",
//       // time: "02:00PM",
//       location: "Cosmo sapien",
//       price: "08",
//       topic: "ശുറൂഹ്, ഹവാശി: വ്യാഖ്യാന വായനകളുടെ രീതിശാസ്ത്രം  ",
//       mic: "Yasir Arafath Nurani ",
//       sec: "Expert Convos",

//     },


//     {
//       id: 9,
//       img: "/image/yasir .jpg",
//       // time: "02:00PM",
//       location: "Cosmo sapien",
//       price: "08",
//       topic: "പുസ്തക പ്രസാധനം : സമകാലിക പ്രതിസന്ധികളും പ്രതീക്ഷകളും ",
//       mic: "Yasir Arafath Nurani ",
//       sec: "Expert Convos",

//     },

//     {
//       id: 10,
//       img: "/image/amju.jpg",
//       // time: "02:00PM",
//       location: "Cosmo sapien",
//       price: "08",
//       topic: "വായനയുടെ രസതന്ത്രവും എഴുത്തിലെ ആഖ്യാന വൈവിധ്യങ്ങളും ",
//       mic: "Yasir Arafath Nurani ",
//       sec: "Expert Convos",

//     },


//     {
//       id: 11,
//       img: "/image/rang.jpg",
//       // time: "02:00PM",
//       location: "Cosmo sapien",
//       price: "08",
//       topic: "A safe space open heal,and grow ",
//       mic: "Yasir Arafath Nurani ",
//       sec: "Tranquil Wellness Hub ",

//     },
//     {
//       id: 12,
//       img: "/image/care.jpg",
//       // time: "02:00PM",
//       location: "Cosmo sapien",
//       price: "08",
//       topic: "Dr. Care, as part of Rendezvous'25 offers free consultations, wellness workshops,and interactive sessions to empower individuals to overcome physical health challenges. ",
//       mic: "Yasir Arafath Nurani ",
//       sec: "Doctor care",

//     },
//     {
//       id: 13,
//       img: "/image/well english.jpeg",
//       // time: "02:00PM",
//       location: "Near Masjid",
//       price: "08",
//       topic: "Clinics to enhance writing skills in English  tailored for students.",
//       mic: "Yasir Arafath Nurani ",
//       sec: "WriteWell Clinic - English",

//     },
//     {
//       id: 14,
//       img: "image/well urdu.jpeg",
//       // time: "02:00PM",
//       location: "Near Masjid",
//       price: "08",
//       topic: "Clinics to enhance writing skills in Urdu  tailored for students.",
//       mic: "Yasir Arafath Nurani ",
//       sec: "WriteWell Clinic - Urdu",

//     },
//     {
//       id: 15,
//       img: "/image/well malayalam.jpeg",
//       // time: "02:00PM",
//       location: "Near Masjid",
//       price: "08",
//       topic: "Clinics to enhance writing skills in Malayalam  tailored for students.",
//       mic: "Yasir Arafath Nurani ",
//       sec: "WriteWell Clinic - Malayalam",

//     },
//     {
//       id: 16,
//       img: "/image/WhatsApp Image 2025-01-04 at 7.40.34 PM.jpeg",
//       // time: "02:00PM",
//       location: "Near Masjid",
//       price: "08",
//       topic: "Clinics to enhance writing skills in Arabic  tailored for students.",
//       mic: "Yasir Arafath Nurani ",
//       sec: "WriteWell Clinic - Arabic",

//     },
//     {
//       id: 17,
//       img: "/image/well polyglot.jpeg",
//       // time: "02:00PM",
//       location: "Near Masjid",
//       price: "08",
//       topic: "Clinics to enhance writing skills in Polyglot  tailored for students.",
//       mic: "Yasir Arafath Nurani ",
//       sec: "WriteWell Clinic - Polyglot",

//     },
//     {
//       id: 18,
//       img: "/image/well kannada.jpeg",
//       // time: "02:00PM",
//       location: "Near Masjid",
//       price: "08",
//       topic: "Clinics to enhance writing skills in Kannada  tailored for students.",
//       mic: "Yasir Arafath Nurani ",
//       sec: "WriteWell Clinic - Kannada",

//     },
  
//   ];

//   return (
//     <div className="bg-orange-50 flex pb-20 justify-center items-center flex-col">
//       <div className="flex flex-col justify-between items-end w-full"></div>

//       {Expo === "Events" &&
//         event.map((event:any, index) => (
//           <div
//             key={event.id}
//             className="bg-white rounded-t-3xl rounded-b-xl pb-2 w-[85%] flex flex-col mt-5 cursor-pointer font-malayalam"
//             onClick={() => toggleVisibility(index)}
//           >
//             <div className="bg-gradient-to-r from-zinc-700 to-zinc-600 py-1 text-white px-5 rounded-t-xl text-md flex justify-between font-bold">
//               <p className="pt-1">{event.sec}</p>{" "}
//               <CgEditUnmask className=" text-3xl py-1" />
//             </div>
//             <h1 className="font-bold text-xs px-5 font-malayalam leading-tight py-2">
//               {event.topic}
//             </h1>

//             {currentVisible === index && (
//               <div>
//                 <div className="w-full flex-col px-5">
//                   <img
//                     className="rounded-xl h-full w-full"
//                     src={event.img}
//                     alt="event"
//                   />
//                   {/* <p className='text-justify text-sm leading-tight w-full py-5'>
//                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem a, libero quas atque consectetur iusto necessitatibus voluptate nesciunt ab perferendis dolore tempora earum omnis iste minus corrupti voluptas vitae officiis.
//                 </p> */}
//                 </div>
//                 <div className="h-8 bg-white text-zinc-700 px-5 rounded-t-xl text-sm flex items-center justify-between font-bold">
//                   <div className="flex w-full justify-end">
//                     {event.time && (
//                       <div className="flex">
//                         <img
//                           className="h-4"
//                           src="/image/icons8-alarm-clock-94.png"
//                           alt=""
//                         />{" "}
//                         <p>{event.time}</p>
//                       </div>
//                     )}
//                     {event.location && (
//                       <div className="flex">
//                         <img
//                           className="h-4"
//                           src="/image/icons8-location.gif"
//                           alt=""
//                         />{" "}
//                         <p>{event.location}</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Eventset;


"use client";

import React, { useEffect, useState } from "react";
import { Clock, MapPin, MoreVertical, ChevronDown, ChevronUp, Sparkles, Users, GraduationCap, PenTool, MessageCircle, Heart, Calendar, Coins, PencilLine } from "lucide-react";

import { phpInstance } from "@/lib/utils";

interface Event {
  id: number;
  title: string;
  type: string;
  image?: string;
  time?: string;
  place?: string;
  description?: string;
}

export default function Eventset() {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentVisible, setCurrentVisible] = useState<number | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await phpInstance.get(
          "/events/actions.php?api=b1daf1bbc7bbd214045af"
        );
        setEvents(res?.data?.data || []);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const toggleVisibility = React.useCallback(
    (index: number) => {
      setCurrentVisible(currentVisible === index ? null : index);
    },
    [currentVisible]
  );

  // Get points based on event type
  const eventTypes = [
    "Expert Convos",
    "Edu Login",
    "WriteWell Clinic",
    "Pro Chat",
    "Tranquil Wellness Hub"
  ] as const;
  type EventType = typeof eventTypes[number];

  const getEventPoints = (type: string): number => {
    const points: Record<EventType, number> = {
      "Expert Convos": 14,
      "Edu Login": 14,
      "WriteWell Clinic": 10,
      "Pro Chat": 6,
      "Tranquil Wellness Hub": 10,
    };
    return (type in points ? points[type as EventType] : 0);
  };

  // Get icon based on event type
  const getEventTypeIcon = (type: string) => {
    const iconProps = "w-5 h-5 opacity-80";
    switch (type) {
      case "Expert Convos":
        return <Users className={iconProps} />;
      case "Edu Login":
        return <GraduationCap className={iconProps} />;
      case "WriteWell Clinic":
        return <PencilLine  className={iconProps} />;
      case "Pro Chat":
        return <MessageCircle className={iconProps} />;
      case "Tranquil Wellness Hub":
        return <Heart className={iconProps} />;
      default:
        return <Sparkles className={iconProps} />;
    }
  };

  // Single consistent gradient for all events
  const eventGradient = "from-zinc-800 to-red-600";

  return (
    <>
      <div className="min-h-screen pb-28 bg-white py-6 px-4 relative overflow-hidden">
        {/* Background Effects */}
        {/* <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}
        ></div> */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-purple-300/20 to-orange-300/20 rounded-full blur-3xl"></div>

        <div className="max-w-2xl mx-auto relative z-10 ">
          {/* Professional Header */}
          <div className="text-center mb-8  bg-red-700 py-8 rounded-b-3xl">
         
            <h1 className="text-3xl font-bold text-white mb-2">Events</h1>
            <p className="text-amber-50 font-medium">Discover and join exciting events</p>
          </div>

          {/* Empty State - Updated Design */}
          {events.length === 0 && (
            <div className="text-center py-12">
         
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Something  is Coming!</h3>
              <div className="flex justify-center items-center gap-2 text-sm text-gray-500">
                
                <span className="ml-2 font-medium">Stay tuned for updates</span>
              </div>
            </div>
          )}

          {/* Events List */}
          <div className="space-y-4">
            {events.map((event, index) => {
              const imageUrl = event.image
                ? `${phpInstance.defaults.baseURL}/${event.image}`
                : "/api/placeholder/400/300";

              const isExpanded = currentVisible === index;

              return (
                <div
                  key={event.id}
                  className="bg-white/90 backdrop-blur-sm rounded-t-3xl rounded-b-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-white/50"
                  onClick={() => toggleVisibility(index)}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className={`bg-gradient-to-r ${eventGradient} py-3 px-5 rounded-t-3xl text-white flex justify-between items-center shadow-md`}>
                    <div className="flex items-center gap-2">
                      {getEventTypeIcon(event.type)}
                      <span className="font-bold text-sm sm:text-base truncate">
                        {event.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                      )}
                    </div>
                  </div>

                  {/* First View - Always Visible */}
                  <div className="px-5 py-3">
                    {/* Event Title */}
                    <h2 className="font-bold text-gray-800 text-sm sm:text-base leading-tight mb-3 transition-all duration-300">
                      {event.title}
                    </h2>

                    {/* Event Details - Location and Time */}
                    <div className="flex flex-wrap gap-4 justify-between items-center text-sm">
                      {event.time && (
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                            <Clock className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="font-semibold">{event.time}</span>
                        </div>
                      )}
                      
                      {event.place && (
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center">
                            <MapPin className="w-4 h-4 text-red-600" />
                          </div>
                          <span className="font-semibold truncate">{event.place}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Expanded Content - Image and Description */}
                  {isExpanded && (
                    <div className="px-5 pb-4 animate-in slide-in-from-top-2 duration-300">
                      {/* Image */}
                      {event.image && (
                        <div className="relative mb-4 group-hover:scale-[1.02] transition-transform duration-500">
                          <img
                            className="rounded-xl w-full h-48 sm:h-56 object-cover shadow-lg"
                            src={imageUrl}
                            alt={event.title}
                            onError={(e) => {
                              e.currentTarget.src = "/api/placeholder/400/300";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
                        </div>
                      )}

                      {/* Description */}
                      {event.description && (
                        <div className="bg-gradient-to-r from-gray-50 to-orange-50 text-gray-700 px-4 py-3 rounded-xl border border-gray-200/50 mb-4">
                          <p className="text-sm leading-relaxed">{event.description}</p>
                        </div>
                      )}

                     

                      {/* Points Display */}
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-3 rounded-xl border border-green-200/50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                              <Coins className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="font-semibold text-green-800 text-sm">Event Points</span>
                          </div>
                          <span className="font-bold text-green-700 text-lg">{getEventPoints(event.type)}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-t-3xl rounded-b-xl bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}