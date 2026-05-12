import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Menu from "./Menu";
import CustomOrders from "./CustomOrders";

function App() {
  return (
    // 'min-h-screen' ensures the background covers the full page height
    <div className="min-h-screen bg-gray-100">
      {/* Navbar sits at the very top */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow">
        <Hero />
        <Menu />
        <CustomOrders />

        {/* You can add more sections (like Bestsellers) down here later */}
      </main>
    </div>
  );
}

export default App;
