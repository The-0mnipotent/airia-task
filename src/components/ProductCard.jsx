import React from "react";

const ProductCard = ({ title, price, popularity }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">{title}</h2>
        <p className="text-gray-700 text-lg mb-2">
          Price: <span className="font-bold">${price}</span>
        </p>
        <p className="text-gray-500 text-sm">
          Popularity: <span className="font-medium">{popularity}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
