// src/pages/ProductPage.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductPage = ({ products }) => {
  const { id } = useParams();
  const product = products[id] || {};

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4 text-center">
        {product.title || "Product Title"}
      </h1>
      <div className="mb-2 text-center">
        <strong>Price:</strong> ${product.price || "N/A"}
      </div>
      <div className="mb-2 text-center">
        <strong>Popularity:</strong> {product.popularity || "N/A"}
      </div>
      <div className="mb-4 text-center">
        <strong>Description:</strong>{" "}
        {product.description ||
          "This is a placeholder description for the product."}
      </div>
      <Link to="/" className="mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ProductPage;
