// src/components/SortOptions.jsx
import React from "react";

const SortOptions = ({ setSortBy }) => {
  return (
    <select
      onChange={(e) => setSortBy(e.target.value)}
      className="px-4 py-2 bg-white rounded-lg"
    >
      <option value="">Sort By</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="popularity-asc">Popularity: Low to High</option>
      <option value="popularity-desc">Popularity: High to Low</option>
    </select>
  );
};

export default SortOptions;
