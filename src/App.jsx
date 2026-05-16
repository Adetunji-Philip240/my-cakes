import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";

// Import all your components
import Navbar from "./Navbar";
import Hero from "./Hero";
import Menu from "./Menu";
import CustomOrders from "./CustomOrders";
import Process from "./Process";
import Reviews from "./Reviews";
import Footer from "./Footer";
import Shop from "./Shop";
import BestSellers from "./BestSellers";
import CustomOrdersPage from "./CustomOrdersPage";
import AboutUs from "./AboutUs";
import Checkout from "./Checkout";

function Home() {
  return (
    <div className="min-h-screen bg-[#fcfaf8] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Menu />
        <CustomOrders />
        <Process />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />

          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/custom-orders" element={<CustomOrdersPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
