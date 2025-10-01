"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { User } from "lucide-react";

type DetailItemProps = {
  label: string;
  value?: string;
};

const DetailItem = ({ label, value }: DetailItemProps) => (
  <div className="flex items-center justify-between py-3 border-b border-amber-100 last:border-b-0">
    <span className="text-sm font-medium text-gray-500">{label}</span>
    <span className="text-sm font-semibold text-gray-800">
      {value || "Not Set"}
    </span>
  </div>
);

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

const Pdetails = () => {
  const [details, setDetails] = useState<StudentDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const student = Cookies.get("student");
    if (student) {
      try {
        setDetails(JSON.parse(student));
      } catch (error) {
        console.error("Error parsing student data:", error);
      }
    }
    setLoading(false);
  }, []);

  // Get campus name from jamiaNo
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

  if (loading) {
    return (
      <div className="bg-amber-50 min-h-screen py-8 w-full flex items-center justify-center">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 h-auto py-10 px-4 w-full flex flex-col items-center">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-amber-200 overflow-hidden">
          <div className="p-8">
            {/* Profile Header Section */}
            <div className="flex flex-col items-center mb-8">
              <div className="relative mb-4">
                {/* Profile Image */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-red-100 to-orange-100 p-1 shadow-xl">
                  <img
                    className="w-full h-full rounded-full object-cover"
                    src="/image/user-c.png"
                    alt="User Profile"
                  />
                </div>
              </div>
              <h1 className="text-3xl font-extrabold text-gray-900 text-center">
                {(details?.name
                  ? details.name
                    .split(" ")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                    .join(" ")
                  : "Guest User")}
              </h1>
              <p className="text-md font-semibold text-orange-600 mt-1">
                {getCampusName()}
              </p>
            </div>

            {/* Separator */}
            <hr className="border-amber-100 mb-6" />

            {/* Details Section - Grouped Compactly */}
            <div className="space-y-2">
              <DetailItem
                label="Jamia Id"
                value={
                  details?.jamiaNo && typeof details.jamiaNo === "string"
                    ? details.jamiaNo.charAt(0).toUpperCase() + details.jamiaNo.slice(1)
                    : "N/A"
                }
              />
              <DetailItem
                label="Category"
                value={
                  details?.category && typeof details.category === "string"
                    ? details.category.charAt(0).toUpperCase() + details.category.slice(1)
                    : "N/A"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pdetails;