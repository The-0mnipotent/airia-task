import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Update the URL to the actual endpoint of your deployed API
    fetch("/api/interview-materials/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Handle error case
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading message until products are fetched
  }

  console.log("Fetched products:", products);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route
          path="/product/:id"
          element={<ProductPage products={products} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
