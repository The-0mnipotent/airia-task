// src/components/Pagination.jsx
import React from "react";

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const handlePrevious = () => {
    if (currentPage > 1) paginate(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) paginate(currentPage + 1);
  };

  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`px-3 py-2 mx-1 rounded-lg ${
          currentPage === 1
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-gray-300 text-gray-800 hover:bg-gray-400"
        }`}
        aria-label="Previous Page"
      >
        Previous
      </button>
      <button className="px-3 py-2 mx-1 bg-gray-300 rounded-lg font-bold text-gray-800">
        {currentPage}
      </button>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 mx-1 rounded-lg ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-gray-300 text-gray-800 hover:bg-gray-400"
        }`}
        aria-label="Next Page"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
