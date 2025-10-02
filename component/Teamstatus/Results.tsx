// "use client";
// import React, { useEffect, useState } from "react";
// import { IoIosArrowDropdown } from "react-icons/io";
// import { CiSearch } from "react-icons/ci";
// import { LoaderCircle, X } from "lucide-react";

// const ItemResult = () => {
//   const [expandedItem, setExpandedItem] = useState<string | null>(null);
//   const [search, setSearch] = useState<string>("");
//   const [result, setResult] = useState<any>(null);
//   const [programs, setPrograms] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     setLoading(true);
//     fetch("https://rendezvous.abaqas.in/programs/action.php?action=pagination&status=announced")
//       .then((response) => response.json())
//       .then((data) => {
//         setPrograms(data.data || []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching programs:", err);
//         setPrograms([]);
//         setLoading(false);
//       });
//   }, []);

//   const toggleItem = (id: string) => {
//     setExpandedItem(expandedItem === id ? null : id);
//   };

//   useEffect(() => {
//     if (expandedItem) {
//       setResult("loading");
//       fetch(
//         `https://rendezvous.abaqas.in/programs/results.php?action=resultCheck&program=${expandedItem}`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           setResult(data.data || null);
//         })
//         .catch((err) => {
//           console.error("Error fetching results:", err);
//           setResult(null);
//         });
//     } else {
//       setResult(null);
//     }
//   }, [expandedItem]);

//   const filteredPrograms = programs.filter((program) =>
//     search
//       ? program.name.toUpperCase().includes(search.toUpperCase())
//       : true
//   );

//   const getRankBadgeClass = (rank: number) => {
//     switch (rank) {
//       case 1:
//         return "bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 text-gray-900";
//       case 2:
//         return "bg-gradient-to-br from-green-400 via-green-500 to-green-600 text-white";
//       case 3:
//         return "bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 text-white";
//       default:
//         return "bg-gradient-to-br from-gray-400 to-gray-600 text-white";
//     }
//   };

//   if (loading) {
//     return (
//       <div className="result mt-0 flex h-screen items-center justify-center w-full bg-amber-50">
//         <div className="text-center">
//           <LoaderCircle className="text-purple-600 animate-spin text-5xl mx-auto mb-4" />
//           <p className="text-gray-700 text-lg font-medium">Loading programs...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="result mt-0 flex flex-wrap h-full items-start justify-center w-full gap-6 bg-amber-50 p-6 mb-10 pb-28"
//       id="result"
//     >
//       <div className="flex relative items-center rounded-2xl bg-white pl-5 shadow-lg border border-purple-100 focus-within:ring-2 focus-within:ring-purple-400 focus-within:border-transparent w-[90%] transition-all">
//         <CiSearch className="text-2xl text-purple-400 mr-3" />
//         <input
//           id="search"
//           name="search"
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//             setSearch(e.target.value)
//           }
//           type="text"
//           placeholder="Search programs..."
//           className="block min-w-0 grow py-4 pr-5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none font-medium"
//         />
//       </div>

//       <div className="w-[90%] flex items-center justify-center mb-2">
//         <h4 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
//           {filteredPrograms.length} Results
//         </h4>
//       </div>

//       {filteredPrograms.map((program: any) => (
//         <div
//           key={program.id}
//           className="relative w-[90%] mx-auto bg-white border-2 border-purple-100 
//           rounded-3xl p-7 box-border overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
//         >
//           <div className="cursor-pointer" onClick={() => toggleItem(program.id)}>
//             <IoIosArrowDropdown
//               className={`${
//                 expandedItem === program.id ? "rotate-180" : ""
//               } absolute text-3xl top-9 font-semibold right-7 transition-all duration-300 text-purple-600`}
//             />

//             <section className="header w-10/12 flex flex-col gap-2">
//               <span className="text-xs font-bold text-purple-600 uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full w-fit">
//                 {program.category}
//               </span>
//               <h6 className="text-2xl font-bold leading-tight bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
//                 {program.name}
//               </h6>
//             </section>
//           </div>

//           {expandedItem === program.id && (
//             <div className="w-full mx-auto py-6 mt-6 border-t-2 border-gradient-to-r from-pink-200 to-purple-200">
//               {!result ? (
//                 <div className="text-center py-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                 
//                   <p className="text-purple-700 font-bold text-xl">Results not announced yet!</p>
//                   <p className="text-gray-600 text-sm mt-2">Check back later for updates</p>
//                 </div>
//               ) : result === "loading" ? (
//                 <div className="grid h-32 place-content-center">
//                   <LoaderCircle className="text-purple-600 animate-spin text-4xl" />
//                 </div>
//               ) : (
//                 <div className="bg-gradient-to-br from-purple-50/30 to-pink-50/30 rounded-2xl p-1">
//                   <div className="bg-white rounded-xl overflow-hidden">
//                     {result
//                       .sort((a: any, b: any) => a.rank - b.rank)
//                       .filter(
//                         (rst: any) =>
//                           rst.rank == "1" || rst.rank == "2" || rst.rank == "3"
//                       )
//                       .map((prize: any, index: number) => (
//                         <div
//                           key={`${prize.id}-${index}`}
//                           className={`flex items-center justify-between px-6 py-5 border-b border-gray-100 last:border-b-0 hover:bg-gradient-to-r ${
//                             prize.rank == 1 ? "hover:from-yellow-50 hover:to-yellow-50/50" :
//                             prize.rank == 2 ? "hover:from-green-50 hover:to-green-50/50" :
//                             "hover:from-pink-50 hover:to-pink-50/50"
//                           } transition-colors duration-200`}
//                         >
//                           <div className="flex items-center gap-5">
//                             <div className={`${getRankBadgeClass(prize.rank)} w-14 h-14 rounded-xl flex items-center justify-center text-xl font-black shadow-lg`}>
//                               {prize.rank}
//                             </div>
                            
//                             <div className="flex flex-col">
//                               <p className="text-lg font-bold text-gray-900 leading-tight mb-1">
//                                 {prize.student}
//                               </p>
//                               <div className="flex items-center gap-2">
//                                 {/* <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span> */}
//                                 <p className="text-sm text-gray-600 font-medium">
//                                   {prize.team}
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemResult;

"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { LoaderCircle, Award } from "lucide-react";

const ItemResult = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState<any>(null);
  const [programs, setPrograms] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://rendezvous.abaqas.in/programs/action.php?action=pagination&status=announced")
      .then((response) => response.json())
      .then((data) => {
        setPrograms(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching programs:", err);
        setPrograms([]);
        setLoading(false);
      });
  }, []);

  const toggleItem = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  useEffect(() => {
    if (expandedItem) {
      setResult("loading");
      fetch(
        `https://rendezvous.abaqas.in/programs/results.php?action=resultCheck&program=${expandedItem}`
      )
        .then((response) => response.json())
        .then((data) => {
          setResult(data.data || null);
        })
        .catch((err) => {
          console.error("Error fetching results:", err);
          setResult(null);
        });
    } else {
      setResult(null);
    }
  }, [expandedItem]);

  const filteredPrograms = programs.filter((program) =>
    search
      ? program.name.toUpperCase().includes(search.toUpperCase())
      : true
  );

  const getRankImage = (rank: any) => {
    const placeImage: any = {
      1: "/image/1.png",
      2: "/image/2.png",
      3: "/image/3.png",
    };
    return placeImage[Number(rank)] || null;
  };

  if (loading) {
    return (
      <div className="result flex min-h-screen items-center justify-center w-full bg-gray-50">
        <div className="text-center px-4">
          <LoaderCircle className="text-red-600 animate-spin text-5xl mx-auto mb-4" />
          <p className="text-gray-700 text-base font-semibold">Loading programs...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="result flex flex-col items-center w-full bg-gray-50 min-h-screen px-4 py-6 pb-24"
      id="result"
    >
      {/* Search Bar - Professional Design */}
      <div className="w-full max-w-md mb-6">
        <div className="relative">
          <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
          <input
            id="search"
            name="search"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            type="text"
            placeholder="Search programs..."
            className="w-full pl-12 pr-4 py-3.5 text-sm bg-white rounded-2xl shadow-sm focus:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all text-gray-900 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Results Count
      <div className="w-full max-w-md mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            Programs
          </h2>
          <span className="text-sm font-semibold text-gray-500">
            {filteredPrograms.length} {filteredPrograms.length === 1 ? 'result' : 'results'}
          </span>
        </div>
      </div> */}

      {/* Programs List - Professional Cards */}
      <div className="w-full max-w-md space-y-3">
        {filteredPrograms.map((program: any) => (
          <div
            key={program.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <div 
              className="cursor-pointer p-5 active:bg-gray-50 transition-colors"
              onClick={() => toggleItem(program.id)}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[10px] font-semibold text-gray-600 uppercase tracking-wider bg-gray-50 px-2.5 py-1 rounded-md mb-2.5">
                    {program.category}
                  </span>
                  <h3 className="text-base font-semibold leading-snug text-red-800 break-words">
                    {program.name}
                  </h3>
                </div>
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 transition-transform duration-300">
                  <IoIosArrowDropdown
                    className={`${
                      expandedItem === program.id ? "rotate-180" : ""
                    } text-xl transition-transform duration-300 text-gray-600`}
                  />
                </div>
              </div>
            </div>

            {/* Expanded Results Section */}
            {expandedItem === program.id && (
              <div className="relative px-5 pb-5 bg-white overflow-hidden">
                <div className="relative pt-4">
                  {!result ? (
                    <div className="text-center py-10 px-4 bg-white backdrop-blur-sm rounded-xl">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-sm flex items-center justify-center">
                        <Award className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-gray-900 font-semibold text-base mb-1">Results pending</p>
                      <p className="text-gray-500 text-xs">Check back soon for updates</p>
                    </div>
                  ) : result === "loading" ? (
                    <div className="flex justify-center py-10">
                      <LoaderCircle className="text-red-600 animate-spin text-3xl" />
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      {result
                        .sort((a: any, b: any) => a.rank - b.rank)
                        .filter(
                          (rst: any) =>
                            rst.rank == "1" || rst.rank == "2" || rst.rank == "3"
                        )
                        .map((prize: any, index: number) => {
                          const rankImage = getRankImage(prize.rank);
                          return (
                            <div
                              key={`${prize.id}-${index}`}
                              className="flex items-center gap-3.5 p-4 rounded-xl bg-white shadow-sm"
                            >
                              {rankImage && (
                                <img 
                                  src={rankImage} 
                                  alt={`Rank ${prize.rank}`}
                                  className="w-12 h-12 rounded-xl object-contain flex-shrink-0"
                                />
                              )}
                              
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-gray-900 leading-tight ">
                                  {prize.student}
                                </p>
                                <p className="text-xs text-gray-600 font-semibold">
                                  {prize.team}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemResult;