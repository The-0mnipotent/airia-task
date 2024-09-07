import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  // Log the products to see if it's being received correctly
  // console.log("Products in ProductList:", products);

  // If products is an empty object, handle it here
  if (!products || Object.keys(products).length === 0) {
    return <div>No products available.</div>;
  }

  // Convert products object to an array
  const productEntries = Object.entries(products).map(([id, product]) => ({
    id,
    ...product,
  }));

  const totalProducts = productEntries.length;

  // Paginate the products
  const currentProducts = productEntries.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard
              title={product.title}
              price={product.price}
              popularity={product.popularity}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
