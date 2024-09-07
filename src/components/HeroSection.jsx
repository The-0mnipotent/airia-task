// // import React, { useMemo, useState } from "react";
// // import Filters from "./Filters";
// // import ProductList from "./ProductList";
// // import SearchBar from "./SearchBar";
// // import SortOptions from "./SortOptions";

// // const HeroSection = ({ products }) => {
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [priceRange, setPriceRange] = useState("");
// //   const [popularityRange, setPopularityRange] = useState("");
// //   const [sortBy, setSortBy] = useState("");

// //   const filteredProducts = useMemo(() => {
// //     return products
// //       .filter((product) => {
// //         // Filter by search query
// //         const matchesSearch = product.name
// //           .toLowerCase()
// //           .includes(searchQuery.toLowerCase());

// //         // Filter by price range
// //         const matchesPriceRange = priceRange
// //           ? product.price >= parseFloat(priceRange.split("-")[0]) &&
// //             (priceRange.includes("+")
// //               ? true
// //               : product.price <= parseFloat(priceRange.split("-")[1]))
// //           : true;

// //         // Filter by popularity range
// //         const matchesPopularityRange = popularityRange
// //           ? product.popularity >= parseFloat(popularityRange.split("-")[0]) &&
// //             (popularityRange.includes("+")
// //               ? true
// //               : product.popularity <= parseFloat(popularityRange.split("-")[1]))
// //           : true;

// //         return matchesSearch && matchesPriceRange && matchesPopularityRange;
// //       })
// //       .sort((a, b) => {
// //         if (sortBy === "price-asc") return a.price - b.price;
// //         if (sortBy === "price-desc") return b.price - a.price;
// //         if (sortBy === "popularity-asc") return a.popularity - b.popularity;
// //         if (sortBy === "popularity-desc") return b.popularity - a.popularity;
// //         return 0;
// //       });
// //   }, [products, searchQuery, priceRange, popularityRange, sortBy]);

// //   return (
// //     <section className="p-4 bg-gray-100">
// //       <div className="flex justify-between items-center mb-4">
// //         <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
// //         <Filters
// //           setPriceRange={setPriceRange}
// //           setPopularityRange={setPopularityRange}
// //         />
// //         <SortOptions setSortBy={setSortBy} />
// //       </div>
// //       <ProductList products={filteredProducts} />
// //       <div className="mt-4 flex justify-center">
// //         <button className="px-3 py-2 mx-1 bg-gray-300 rounded-lg">
// //           Previous
// //         </button>
// //         <button className="px-3 py-2 mx-1 bg-gray-300 rounded-lg">1</button>
// //         <button className="px-3 py-2 mx-1 bg-gray-300 rounded-lg">2</button>
// //         <button className="px-3 py-2 mx-1 bg-gray-300 rounded-lg">Next</button>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;

// import React, { useMemo, useState } from "react";
// import Filters from "./Filters";
// import ProductList from "./ProductList";
// import SearchBar from "./SearchBar";
// import SortOptions from "./SortOptions";

// const HeroSection = ({ products }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [priceRange, setPriceRange] = useState("");
//   const [popularityRange, setPopularityRange] = useState("");
//   const [sortBy, setSortBy] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 20;

//   // Convert products object to an array
//   const productEntries = useMemo(
//     () => Object.entries(products).map(([id, product]) => ({ id, ...product })),
//     [products]
//   );

//   const filteredProducts = useMemo(() => {
//     return productEntries
//       .filter((product) => {
//         // Filter by search query
//         const matchesSearch = product.title
//           .toLowerCase()
//           .includes(searchQuery.toLowerCase());

//         // Filter by price range
//         const matchesPriceRange = priceRange
//           ? product.price >= parseFloat(priceRange.split("-")[0]) &&
//             (priceRange.includes("+")
//               ? true
//               : product.price <= parseFloat(priceRange.split("-")[1]))
//           : true;

//         // Filter by popularity range
//         const matchesPopularityRange = popularityRange
//           ? product.popularity >= parseFloat(popularityRange.split("-")[0]) &&
//             (popularityRange.includes("+")
//               ? true
//               : product.popularity <= parseFloat(popularityRange.split("-")[1]))
//           : true;

//         return matchesSearch && matchesPriceRange && matchesPopularityRange;
//       })
//       .sort((a, b) => {
//         if (sortBy === "price-asc") return a.price - b.price;
//         if (sortBy === "price-desc") return b.price - a.price;
//         if (sortBy === "popularity-asc") return a.popularity - b.popularity;
//         if (sortBy === "popularity-desc") return b.popularity - a.popularity;
//         return 0;
//       });
//   }, [productEntries, searchQuery, priceRange, popularityRange, sortBy]);

//   // Paginate the filtered products
//   const totalProducts = filteredProducts.length;
//   const currentProducts = filteredProducts.slice(
//     (currentPage - 1) * productsPerPage,
//     currentPage * productsPerPage
//   );

//   const totalPages = Math.ceil(totalProducts / productsPerPage);

//   const paginate = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   return (
//     <section className="p-4 bg-gray-100">
//       <div className="flex justify-between items-center mb-4">
//         <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//         <Filters
//           setPriceRange={setPriceRange}
//           setPopularityRange={setPopularityRange}
//         />
//         <SortOptions setSortBy={setSortBy} />
//       </div>
//       <ProductList products={currentProducts} />
//       <div className="mt-4 flex justify-center">
//         <button
//           onClick={() => paginate(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-3 py-2 mx-1 bg-gray-300 rounded-lg"
//         >
//           Previous
//         </button>
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => paginate(index + 1)}
//             className={`px-3 py-2 mx-1 ${
//               currentPage === index + 1 ? "font-bold" : "bg-gray-300"
//             } rounded-lg`}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button
//           onClick={() => paginate(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-3 py-2 mx-1 bg-gray-300 rounded-lg"
//         >
//           Next
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useMemo, useState } from "react";
import Filters from "./Filters";
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
import SortOptions from "./SortOptions";

const HeroSection = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [popularityRange, setPopularityRange] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  // Convert products object to an array
  const productEntries = useMemo(
    () => Object.entries(products).map(([id, product]) => ({ id, ...product })),
    [products]
  );

  const filteredProducts = useMemo(() => {
    return productEntries
      .filter((product) => {
        // Filter by search query
        const matchesSearch = product.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        // Filter by price range
        const matchesPriceRange = priceRange
          ? product.price >= parseFloat(priceRange.split("-")[0]) &&
            (priceRange.includes("+")
              ? true
              : product.price <= parseFloat(priceRange.split("-")[1]))
          : true;

        // Filter by popularity range
        const matchesPopularityRange = popularityRange
          ? product.popularity >= parseFloat(popularityRange.split("-")[0]) &&
            (popularityRange.includes("+")
              ? true
              : product.popularity <= parseFloat(popularityRange.split("-")[1]))
          : true;

        return matchesSearch && matchesPriceRange && matchesPopularityRange;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "popularity-asc") return a.popularity - b.popularity;
        if (sortBy === "popularity-desc") return b.popularity - a.popularity;
        return 0;
      });
  }, [productEntries, searchQuery, priceRange, popularityRange, sortBy]);

  // Paginate the filtered products
  const totalProducts = filteredProducts.length;
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section className="p-4 bg-gray-100">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-4 space-y-4 sm:space-y-0">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Filters
          setPriceRange={setPriceRange}
          setPopularityRange={setPopularityRange}
        />
        <SortOptions setSortBy={setSortBy} />
      </div>
      <ProductList products={currentProducts} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
    </section>
  );
};

export default HeroSection;
