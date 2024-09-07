// src/components/SearchBar.jsx
import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="px-4 py-2 rounded-lg bg-gray-700 text-white w-full sm:w-auto"
    />
  );
};

export default SearchBar;
