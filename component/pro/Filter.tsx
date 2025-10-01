"use client";

import { useEffect, useState } from "react";

interface FilterProps {
  studentId?: string;
}

const Filter = ({ studentId = "2019JF083" }: FilterProps) => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [jamiaNo, setJamiaNo] = useState<string | null>(null);

  // First, fetch jamiaNo from the QR scan API
  useEffect(() => {
    const fetchJamiaNo = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://rend-application.abaqas.in/qrscans/actions.php?api=b1daf1bbc7bbd214045af&ID=${studentId}`
        );
        const data = await response.json();
        
        if (data.jamiaNo) {
          setJamiaNo(data.jamiaNo);
        } else {
          setError("Failed to retrieve Jamia ID");
          setLoading(false);
        }
      } catch (err) {
        setError("Failed to fetch student information");
        console.error("Error fetching jamiaNo:", err);
        setLoading(false);
      }
    };

    fetchJamiaNo();
  }, [studentId]);

  // Then, fetch programs using the jamiaNo
  useEffect(() => {
    const fetchPrograms = async () => {
      if (!jamiaNo) {
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://rendezvous.abaqas.in/students/action.php?action=profileDetails&id=${jamiaNo}`
        );
        const data = await response.json();
        
        if (data.success && data.data.programs) {
          setPrograms(data.data.programs);
        } else {
          setError("Failed to load programs");
        }
      } catch (err) {
        setError("Failed to fetch programs");
        console.error("Error fetching programs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, [jamiaNo]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-5 w-full flex justify-center font-sans">
      <div className="w-[90%] bg-white rounded-3xl shadow-xl flex flex-col pb-6 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-800 to-rose-500 px-5 py-4 flex justify-between items-center">
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
        {loading && (
          <div className="flex flex-col items-center justify-center py-12 px-4">
            <div className="w-12 h-12 border-4 border-violet-200 border-t-red-500 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-500 font-medium">Loading programmes...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-12 px-4">
            <svg className="w-16 h-16 text-red-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-red-500 font-medium text-lg">{error}</p>
            <p className="text-gray-400 text-sm mt-1">Please try again later</p>
          </div>
        )}

        {/* Programs List */}
        {!loading && !error && programs.length > 0 && (
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
                    {program.status === "completed" ? (
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Completed
                      </span>
                    ) : program.status === "pending" ? (
                      <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                        Pending
                      </span>
                    ) : (
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        Ongoing
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && programs.length === 0 && (
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
  );
};

export default Filter;