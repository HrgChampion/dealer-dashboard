import React, { useState } from "react";
import { initialDealers } from "../helpers/mock-data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PaginationBar = ({ paginatedDealers, totalPages, currentPage, setCurrentPage,recordsPerPage, filteredDealers }) => {

console.log("PaginationBar - paginatedDealers:", paginatedDealers);
  return (
    <div className="px-6 py-4 bg-gray-100 flex items-center justify-between border-rounded-b-lg">
      <p className="text-sm font-semibold text-gray-700">
        Showing{" "}
        {paginatedDealers?.length > 0
          ? (currentPage - 1) * recordsPerPage + 1
          : 0}{" "}
        to {Math.min(currentPage * recordsPerPage, filteredDealers.length)} of{" "}
        {filteredDealers?.length} results
      </p>
      <div className="flex gap-2 items-center">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="p-2 hover:bg-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          <ChevronLeft size={22} />
        </button>
        <div className="flex gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-lg font-bold transition ${
                currentPage === page
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "hover:bg-white text-gray-700"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="p-2 hover:bg-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default PaginationBar;
