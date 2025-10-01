// "use client";

// import Cookies from "js-cookie";
// import { useEffect, useState } from "react";
// import { User, ChevronRight, Bell, Watch } from "lucide-react";
// import Logout from "./Logout";
// type StudentDetails = {
//   name?: string;
//   campus?: string;
//   jamiaNo?: string;
//   category?: string;
// };

// const campusMapping: Record<string, string> = {
//   "JM007": "Baithul Izza Narikkuni",
//   "JM019": "CM Markaz Mambeethi",
//   "JM008": "Dalaelul Khairath Kakkidippuram",
//   "JM004": "Darul Hidaya Collage Engappuzha",
//   "JM013": "Markazul huda Chenganasseri",
//   "JMI001": "Erthunnabavi Campuses",
//   "JM018": "Hasaniyya Aykarappadi",
//   "JM022": "Hasanul Basari Muttam",
//   "JM002": "Imam Rabbani Collage Kanthapuram",
//   "JM003": "Imam Shafi Collage Busthanabad",
//   "JM006": "ISRA Vatanappally",
//   "JM011": "Jamalullaily Campus Chelari",
//   "JM014": "Kamaliyya Campus Mayyil",
//   "JM010": "Markasunnajath Ekarool",
//   "JM009": "Markaz Bilal Pattambi",
//   "JM012": "Markaz Al Munavara Manappally",
//   "JM021": "Dunnoorain Science Academy",
//   "JM001A": "MARKAZ GARDEN PG-1",
//   "JM001B": "MARKAZ GARDEN PG-2",
//   "JM001": "Markaz Garden Poonoor",
//   "JM015A": "Sayyid Madani College Ullal PG1",
//   "JM005": "Shuhada Edu Campus Omanoor",
//   "JM024": "Mambaul Huda Kechery",
//   "JM015B": "Sayyid Madani College Ullal PG2",
//   "JM016": "Al Zahra Academy Paleri",
//   "JM017": "Darul Fateh Thodupuzha",
//   "JM023": "PMSM Islamic Centre Kuttassery",
//   "JM025": "Badrul Huda Academy Panamaram",
//   "JMI003": "Jamiaul Areesh",
//   "JM333": "TEST Campus",
//   "JMI005": "Academia Ashabul Badr, Calicut",
//   "JM027": "Markaz Miraj, Malayil",
//   "JMIN002": "Markaz Garden interstate"
// };

// const Pdetails = () => {
//   const [details, setDetails] = useState<StudentDetails | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const student = Cookies.get("student");
//     if (student) {
//       try {
//         setDetails(JSON.parse(student));
//       } catch (error) {
//         console.error("Error parsing student data:", error);
//       }
//     }
//     setLoading(false);
//   }, []);

//   const getCampusName = () => {
//     if (!details?.campus) return "Campus Not Set";
    
//     const campusName = campusMapping[details.campus];
//     if (campusName) {
//       return campusName
//         .split(" ")
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//         .join(" ");
//     }
//     return details.campus
//       .split(" ")
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//       .join(" ");
//   };

//   if (loading) {
//     return (
//       <div className="bg-gray-50 min-h-screen flex items-center justify-center">
//         <div className="flex gap-2">
//           <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
//           <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
//           <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 h-auto ">
//                <Logout />
     

//       <div className="px-6 pt-8">
//         {/* Profile Section */}
//         <div className="flex flex-col items-center mb-8">
//           <div className="relative pb-4">
//             <div className="w-28 h-28 rounded-full bg-gradient-to-br from-violet-700 to-blue-600 p-1">
//               <div className="w-full h-full rounded-full bg-white p-0.5">
//                 <img
//                   className="w-full h-full rounded-full object-cover"
//                   src="/image/icons8-test-account.gif"
//                   alt="Profile"
//                 />
//               </div>
//             </div>
         
//           </div>
//           <h2 className="text-xl font-bold text-gray-900 mb-1">
//             {details?.name
//               ? details.name
//                   .split(" ")
//                   .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//                   .join(" ")
//               : "Guest User"}
//           </h2>
//           <p className="text-sm text-gray-500">{getCampusName()}</p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           {/* Jamia ID Card */}
//           <div className="bg-white rounded-2xl p-4 shadow-sm">
//             <div className="flex items-center gap-2 mb-2">
//               <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
//                 <User className="w-4 h-4 text-blue-600" />
//               </div>
//             </div>
//             <div className="text-xs text-gray-500 mb-1">Jamia ID</div>
//             <div className="text-base font-bold text-gray-900">
//               {details?.jamiaNo || "N/A"}
//             </div>
//           </div>

//           {/* Category Card */}
//           <div className="bg-white rounded-2xl p-4 shadow-sm">
//             <div className="flex items-center gap-2 mb-2">
//               <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
//                 <User className="w-4 h-4 text-purple-600" />
//               </div>
//             </div>
//             <div className="text-xs text-gray-500 mb-1">Category</div>
//             <div className="text-base font-bold text-gray-900">
//               {details?.category
//                 ? details.category.charAt(0).toUpperCase() + details.category.slice(1)
//                 : "N/A"}
//             </div>
//           </div>

         
//         </div>

       
//       </div>

     
//     </div>
//   );
// }

// export default Pdetails;

"use client";


import { useEffect, useState } from "react";
import { User, LogOut } from "lucide-react";
import Logout from "./Logout";

type StudentDetails = {
  name?: string;
  campus?: string;
  jamiaNo?: string;
  category?: string;
};

const campusMapping: Record<string, string> = {
  "JM007": "Baithul Izza Narikkuni",
  "JM019": "CM Markaz Mambeethi",
  "JM008": "Dalaelul Khairath Kakkidippuram",
  "JM004": "Darul Hidaya Collage Engappuzha",
  "JM013": "Markazul huda Chenganasseri",
  "JMI001": "Erthunnabavi Campuses",
  "JM018": "Hasaniyya Aykarappadi",
  "JM022": "Hasanul Basari Muttam",
  "JM002": "Imam Rabbani Collage Kanthapuram",
  "JM003": "Imam Shafi Collage Busthanabad",
  "JM006": "ISRA Vatanappally",
  "JM011": "Jamalullaily Campus Chelari",
  "JM014": "Kamaliyya Campus Mayyil",
  "JM010": "Markasunnajath Ekarool",
  "JM009": "Markaz Bilal Pattambi",
  "JM012": "Markaz Al Munavara Manappally",
  "JM021": "Dunnoorain Science Academy",
  "JM001A": "MARKAZ GARDEN PG-1",
  "JM001B": "MARKAZ GARDEN PG-2",
  "JM001": "Markaz Garden Poonoor",
  "JM015A": "Sayyid Madani College Ullal PG1",
  "JM005": "Shuhada Edu Campus Omanoor",
  "JM024": "Mambaul Huda Kechery",
  "JM015B": "Sayyid Madani College Ullal PG2",
  "JM016": "Al Zahra Academy Paleri",
  "JM017": "Darul Fateh Thodupuzha",
  "JM023": "PMSM Islamic Centre Kuttassery",
  "JM025": "Badrul Huda Academy Panamaram",
  "JMI003": "Jamiaul Areesh",
  "JM333": "TEST Campus",
  "JMI005": "Academia Ashabul Badr, Calicut",
  "JM027": "Markaz Miraj, Malayil",
  "JMIN002": "Markaz Garden interstate"
};

const StudentProfilePage = () => {
  const [details, setDetails] = useState<StudentDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [programs, setPrograms] = useState([]);
  const [programsLoading, setProgramsLoading] = useState(true);
  const [programsError, setProgramsError] = useState<string | null>(null);

  useEffect(() => {
    // Load student data from cookies
    // Note: In production, use js-cookie library
    // For now, student data needs to be stored in a cookie named "student"
    const studentCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('student='));
    
    if (studentCookie) {
      try {
        const studentData = JSON.parse(decodeURIComponent(studentCookie.split('=')[1]));
        setDetails(studentData);
        
        // Fetch programs if jamiaNo exists
        if (studentData.jamiaNo) {
          fetchPrograms(studentData.jamiaNo);
        } else {
          setProgramsError("Jamia ID not available");
          setProgramsLoading(false);
        }
      } catch (error) {
        console.error("Error parsing student data:", error);
        setProgramsError("Failed to load student data");
        setProgramsLoading(false);
      }
    } else {
      setProgramsError("Student data not found");
      setProgramsLoading(false);
    }
    
    setLoading(false);
  }, []);

  const fetchPrograms = async (jamiaNo: string) => {
    try {
      setProgramsLoading(true);
      setProgramsError(null);
      const response = await fetch(
        `https://rendezvous.abaqas.in/students/action.php?action=profileDetails&id=${jamiaNo}`
      );
      const data = await response.json();
      
      if (data.success && data.data.programs) {
        setPrograms(data.data.programs);
      } else {
        setProgramsError("Failed to load programs");
      }
    } catch (err) {
      setProgramsError("Failed to fetch programs");
      console.error("Error fetching programs:", err);
    } finally {
      setProgramsLoading(false);
    }
  };

  const getCampusName = () => {
    if (!details?.campus) return "Campus Not Set";
    
    const campusName = campusMapping[details.campus];
    if (campusName) {
      return campusName
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    }
    return details.campus
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const handleLogout = () => {
    // Add logout logic here
    alert("Logout functionality");
  };

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 h-auto">
      {/* Logout Button */}
      <Logout/>

      <div className="px-6 pt-4">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative pb-4">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-red-700 to-red-600 p-1">
              <div className="w-full h-full rounded-full bg-white p-0.5">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-red-700 to-rose-600 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            {details?.name
              ? details.name
                  .split(" ")
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                  .join(" ")
              : "Guest User"}
          </h2>
          <p className="text-sm font-semibold text-gray-700">{getCampusName()}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Jamia ID Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                <User className="w-4 h-4 text-red-600" />
              </div>
            </div>
            <div className="text-xs text-gray-500 mb-1">Jamia ID</div>
            <div className="text-base font-bold text-gray-900">
              {details?.jamiaNo || "N/A"}
            </div>
          </div>

          {/* Category Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
                <User className="w-4 h-4 text-rose-600" />
              </div>
            </div>
            <div className="text-xs text-gray-500 mb-1">Category</div>
            <div className="text-base font-bold text-gray-900">
              {details?.category
                ? details.category.charAt(0).toUpperCase() + details.category.slice(1)
                : "N/A"}
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-5 w-full flex justify-center font-sans">
        <div className="w-[90%] bg-white rounded-3xl shadow-xl flex flex-col pb-6 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-red-800 px-5 py-4 flex justify-between items-center">
            <h1 className="text-white font-bold text-xl flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              My Programmes
            </h1>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-white font-semibold text-sm">Total: {programs.length}</span>
            </div>
          </div>

          {/* Loading State */}
          {programsLoading && (
            <div className="flex flex-col items-center justify-center py-12 px-4">
              <div className="w-12 h-12 border-4 border-violet-200 border-t-red-500 rounded-full animate-spin mb-4"></div>
              <p className="text-gray-500 font-medium">Loading programmes...</p>
            </div>
          )}

          {/* Error State */}
          {programsError && !programsLoading && (
            <div className="flex flex-col items-center justify-center py-12 px-4">
              <svg className="w-16 h-16 text-red-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-500 font-medium text-lg">{programsError}</p>
              <p className="text-gray-400 text-sm mt-1">Please try again later</p>
            </div>
          )}

          {/* Programs List */}
          {!programsLoading && !programsError && programs.length > 0 && (
            <div className="px-4 pt-4 space-y-3">
              {programs.map((program: any) => (
                <div 
                  key={program.id} 
                  className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-4 border border-gray-200 hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <h3 className="text-gray-800 font-semibold text-base">
                        {program.program}
                      </h3>
                    </div>
                   <div className="flex items-center gap-2">
  {program.status === "finished" ? (
    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
      
      Finished
    </span>
  ) : program.status === "pending" ? (
    <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
  
      Pending
    </span>
  ) : program.status === "reporting" ? (
    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
   
      Reporting
    </span>
  ) : program.status === "ongoing" ? (
    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
      <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
      Ongoing
    </span>
  ) : null}
</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!programsLoading && !programsError && programs.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 px-4">
              <svg className="w-20 h-20 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-500 font-medium text-lg">No programmes yet</p>
              <p className="text-gray-400 text-sm mt-1">Your enrolled programmes will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentProfilePage;