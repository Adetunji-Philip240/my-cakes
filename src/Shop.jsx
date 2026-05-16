import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "./CartContext"; // <-- 1. Import the cart context

// We create a separate smaller component for the Card so each card can manage its own variety dropdown state
function CakeCard({ cake }) {
  const [selectedVariety, setSelectedVariety] = useState(cake.varieties[0]);

  // <-- 2. Bring in the addToCart function
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col group transition-transform duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="h-64 relative w-full overflow-hidden bg-[#f4e9e2]">
        <img
          src={cake.image}
          alt={cake.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-[#26150F] mb-2">
          {cake.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {cake.description}
        </p>

        {/* Variety Selection */}
        <div className="mb-6 mt-auto">
          <label
            htmlFor={`variety-${cake.id}`}
            className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2"
          >
            Select Size / Variety
          </label>
          <select
            id={`variety-${cake.id}`}
            value={selectedVariety}
            onChange={(e) => setSelectedVariety(e.target.value)}
            className="w-full bg-[#fcfaf8] border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#C67761] focus:border-[#C67761] block p-2.5 outline-none transition-colors"
          >
            {cake.varieties.map((variety, index) => (
              <option key={index} value={variety}>
                {variety}
              </option>
            ))}
          </select>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-serif font-bold text-[#c46953]">
              <span className="line-through decoration-double decoration-1 mr-0.5 opacity-80 font-sans">
                N
              </span>
              {cake.price}
            </span>
          </div>
          <button
            onClick={() => {
              // <-- 3. Call addToCart and pass the cake and the selected variety
              addToCart({ ...cake, name: `${cake.name} (${selectedVariety})` });
              alert(`Added ${selectedVariety} ${cake.name} to cart!`);
            }}
            className="bg-[#26150F] hover:bg-[#C67761] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-300 shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  // Comprehensive list of cakes
  const allCakes = [
    {
      id: 1,
      name: "Classic Birthday Cake",
      category: "Celebration Cakes",
      description:
        "Vanilla sponge layered with buttercream frosting and festive sprinkles.",
      price: "12,500",
      image:
        "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop",
      varieties: [
        "6 inch Round",
        "8 inch Round (+N3,000)",
        "10 inch Round (+N6,000)",
      ],
    },
    {
      id: 2,
      name: "Red Velvet Royale",
      category: "Celebration Cakes",
      description:
        "Rich cocoa cake with cream cheese frosting and a deep crimson crumb.",
      price: "14,000",
      image:
        "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=800&auto=format&fit=crop",
      varieties: [
        "6 inch Round",
        "8 inch Round (+N3,500)",
        "Sheet Cake (+N10,000)",
      ],
    },
    {
      id: 3,
      name: "Triple Chocolate Tower",
      category: "Chocolate Cakes",
      description:
        "Three layers of dark, milk, and white chocolate ganache perfection.",
      price: "16,500",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
      varieties: ["Standard (3 Layers)", "Tall (4 Layers) (+N4,000)"],
    },
    {
      id: 4,
      name: "Elegant Tiered Vanilla",
      category: "Wedding Cakes",
      description:
        "Two-tier classic vanilla bean cake decorated with fresh edible flowers.",
      price: "45,000",
      image:
        "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800&auto=format&fit=crop",
      varieties: ["2 Tiers (Serves 40)", "3 Tiers (Serves 75) (+N35,000)"],
    },
    {
      id: 5,
      name: "Gluten-Free Berry Bliss",
      category: "Dietary & Vegan",
      description:
        "Almond flour sponge topped with fresh seasonal berries and light cream.",
      price: "15,000",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop",
      varieties: ["Gluten-Free 8 inch", "Vegan 8 inch", "Sugar-Free 8 inch"],
    },
    {
      id: 6,
      name: "New York Cheesecake",
      category: "Cheesecakes",
      description:
        "Classic, creamy baked cheesecake with a buttery graham cracker crust.",
      price: "18,000",
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop",
      varieties: [
        "Plain",
        "Strawberry Topping (+N2,000)",
        "Salted Caramel (+N2,000)",
      ],
    },
  ];

  // Dynamically extract unique categories from the array
  const categories = [...new Set(allCakes.map((cake) => cake.category))];

  return (
    <div className="min-h-screen bg-[#fcfaf8] flex flex-col">
      <Navbar />

      {/* Single Image Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=2000&auto=format&fit=crop"
            alt="Delicious bakery spread"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-md">
            Shop All Cakes
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow">
            Browse our full collection of handcrafted masterpieces. Perfect for
            any occasion.
          </p>
        </div>
      </div>

      {/* Main Shop Content - Segmented by Category */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {categories.map((category) => (
          <section key={category} className="mb-20">
            {/* Category Header */}
            <div className="flex items-center justify-between border-b border-[#ebdcd0] pb-4 mb-8">
              <h2 className="text-3xl font-serif font-bold text-[#26150F]">
                {category}
              </h2>
              <span className="text-sm font-medium text-[#A27A59]">
                {allCakes.filter((c) => c.category === category).length} items
              </span>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCakes
                .filter((cake) => cake.category === category)
                .map((cake) => (
                  <CakeCard key={cake.id} cake={cake} />
                ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
