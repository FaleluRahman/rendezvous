"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { LoaderCircle, Award, ChevronLeft, ChevronRight } from "lucide-react";

const ItemResult = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState<any>(null);
  const [allPrograms, setAllPrograms] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Fetch all programs once to get categories
  useEffect(() => {
    fetch("https://rendezvous.abaqas.in/programs/action.php?action=pagination&status=announced&limit=1000")
      .then((response) => response.json())
      .then((data) => {
        setAllPrograms(data.data || []);
      })
      .catch((err) => {
        console.error("Error fetching all programs:", err);
      });
  }, []);

  // Filter programs based on search and category (client-side)
  const filteredPrograms = allPrograms.filter((program) => {
    const matchesSearch = search
      ? program.name.toUpperCase().includes(search.toUpperCase())
      : true;
    const matchesCategory = selectedCategory === "all" 
      ? true 
      : program.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const allCategories = Array.from(new Set(allPrograms.map(p => p.category)));

  // Calculate pagination from filtered results
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPrograms = filteredPrograms.slice(startIndex, endIndex);

  // Update loading state
  useEffect(() => {
    setLoading(allPrograms.length === 0);
  }, [allPrograms]);

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

  // Reset to page 1 when search or category changes
  useEffect(() => {
    setCurrentPage(1);
    setExpandedItem(null);
  }, [search, selectedCategory]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    setExpandedItem(null);
    // Scroll to top of results
    document.getElementById('result')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getRankImage = (rank: any) => {
    const placeImage: any = {
      1: "/image/1.png",
      2: "/image/2.png",
      3: "/image/3.png",
    };
    return placeImage[Number(rank)] || null;
  };

  // Prepare categories list with "all" option
  const categories = ["all", ...allCategories];

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
      {/* Search Bar */}
      <div className="w-full max-w-md mb-4">
        <div className="relative">
          <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400" />
          <input
            id="search"
            name="search"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            type="text"
            placeholder="Search programs..."
            className="w-full pl-12 pr-4 py-3.5 text-sm bg-white rounded-2xl shadow-sm focus:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all text-gray-900 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Category Filter */}
      {categories.length > 1 && (
        <div className="w-full max-w-md mb-6">
          <div className="bg-white rounded-2xl shadow-sm p-3">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-gradient-to-br from-red-700 via-rose-600 to-rose-700 text-white shadow-sm capitalize'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95 capitalize'
                  }`}
                >
                  {category === "all" ? "All Categories" : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="w-full max-w-md mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-600">
            {filteredPrograms.length} {filteredPrograms.length === 1 ? 'result' : 'results'}
          </span>
          {totalPages > 1 && (
            <span className="text-sm text-gray-500">
              Page {currentPage} of {totalPages}
            </span>
          )}
        </div>
      </div>

      {/* Programs List */}
      <div className="w-full max-w-md space-y-3 mb-6">
        {currentPrograms.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
            <p className="text-gray-600 font-medium">No programs found</p>
            <p className="text-gray-400 text-sm mt-1">Try adjusting your search or filter</p>
          </div>
        ) : (
          currentPrograms.map((program: any) => (
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
                    <h3 className="text-base font-semibold leading-snug bg-gradient-to-br from-red-700 via-rose-600 to-rose-700 bg-clip-text text-transparent break-words">
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
                        <LoaderCircle className="bg-gradient-to-br from-red-700 via-rose-600 to-rose-700 bg-clip-text text-transparent animate-spin text-3xl" />
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
                                  <p className="text-sm font-semibold text-gray-900 leading-tight">
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
          ))
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <div className="flex items-center justify-between gap-2">
              {/* Previous Button */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-br from-red-700 via-rose-600 to-rose-700  text-white hover:bg-red-700 active:scale-95'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(page => {
                    // Show first page, last page, current page, and pages around current
                    return (
                      page === 1 ||
                      page === totalPages ||
                      Math.abs(page - currentPage) <= 1
                    );
                  })
                  .map((page, index, array) => {
                    // Add ellipsis if there's a gap
                    const prevPage = array[index - 1];
                    const showEllipsis = prevPage && page - prevPage > 1;

                    return (
                      <React.Fragment key={page}>
                        {showEllipsis && (
                          <span className="px-2 text-gray-400 text-sm">...</span>
                        )}
                        <button
                          onClick={() => goToPage(page)}
                          className={`w-10 h-10 rounded-xl font-semibold text-sm transition-all ${
                            currentPage === page
                              ? 'bg-gradient-to-br from-red-700 via-rose-600 to-rose-700  text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95'
                          }`}
                        >
                          {page}
                        </button>
                      </React.Fragment>
                    );
                  })}
              </div>

              {/* Next Button */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-br from-red-700 via-rose-600 to-rose-700 text-white hover:bg-red-700 active:scale-95'
                }`}
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemResult;