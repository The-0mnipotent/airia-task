// src/pages/HomePage.jsx
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/Herosection";

const HomePage = ({ products }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection products={products} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
