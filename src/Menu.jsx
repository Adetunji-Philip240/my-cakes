import React, { useState } from "react";

import cakeImage1 from "./assets/cake1.jpg";
import cakeImage2 from "./assets/cake2.jpg";
import cakeImage3 from "./assets/cake3.jpg";
import cakeImage4 from "./assets/cake4.jpg";
import cakeImage5 from "./assets/cake5.jpg";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Celebration", "Chocolate", "Wedding", "Dietary"];

  // Updated with actual image URLs instead of emojis
  const cakes = [
    {
      id: 1,
      name: "Classic Birthday Cake",
      category: "Celebration",
      tag: "CELEBRATION",
      description:
        "Vanilla sponge layered with buttercream frosting and festive sprinkles.",
      price: "12,500",
      image: cakeImage1, // Birthday slice
      isHot: true,
      rating: 5,
    },
    {
      id: 2,
      name: "Red Velvet Royale",
      category: "Celebration",
      tag: "CELEBRATION",
      description:
        "Rich cocoa cake with cream cheese frosting and a deep crimson crumb.",
      price: "14,000",
      image: cakeImage2, // Red velvet
      isHot: true,
      rating: 5,
    },
    {
      id: 3,
      name: "Triple Chocolate Tower",
      category: "Chocolate",
      tag: "CHOCOLATE",
      description:
        "Three layers of dark, milk, and white chocolate ganache perfection.",
      price: "16,500",
      image: cakeImage3, // Dark chocolate
      isHot: false,
      rating: 5,
    },
    {
      id: 4,
      name: "Elegant Tiered Vanilla",
      category: "Wedding",
      tag: "WEDDING",
      description:
        "Two-tier classic vanilla bean cake decorated with fresh edible flowers.",
      price: "45,000",
      image: cakeImage4, // Wedding cake
      isHot: false,
      rating: 4,
    },
    {
      id: 5,
      name: "Gluten-Free Berry Bliss",
      category: "Dietary",
      tag: "GLUTEN-FREE",
      description:
        "Almond flour sponge topped with fresh seasonal berries and light cream.",
      price: "15,000",
      image: cakeImage5, // Berry cake
      isHot: false,
      rating: 5,
    },
  ];

  const filteredCakes =
    activeCategory === "All"
      ? cakes
      : cakes.filter((cake) => cake.category === activeCategory);

  return (
    <section className="py-20 bg-[#fcfaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-xl font-medium text-rose-600 mb-2">
            Something Sweet for Everyone
          </p>
          <p className="text-gray-500">
            From classics to custom creations — find your perfect cake.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-rose-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-rose-600 hover:text-rose-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCakes.map((cake) => (
            <div
              key={cake.id}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-50 transition-transform group"
            >
              {/* Updated Image Section */}
              <div className="h-56 relative w-full overflow-hidden bg-gray-100">
                {cake.isHot && (
                  <span className="absolute top-4 left-4 bg-rose-600 z-10 text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full shadow-sm">
                    HOT
                  </span>
                )}
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold text-gray-400 tracking-wider mb-2">
                  {cake.tag}
                </p>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  {cake.name}
                </h3>

                <div className="flex text-rose-600 text-sm mb-4">
                  {[...Array(cake.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-sm text-gray-500 mb-6 h-10 line-clamp-2">
                  {cake.description}
                </p>

                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-serif text-rose-600">
                      <span className="line-through decoration-double decoration-1 mr-0.5 opacity-80">
                        N
                      </span>
                      {cake.price}
                    </span>
                    <span className="text-sm text-gray-400">/ cake</span>
                  </div>
                  <button className="w-10 h-10 bg-[#2d1b14] text-white rounded-full flex items-center justify-center text-xl hover:bg-[#c46953] transition-colors focus:outline-none">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
