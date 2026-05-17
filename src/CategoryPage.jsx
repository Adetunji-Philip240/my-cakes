import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "./CartContext";

import hbd from "./assets/hbd.jpg";
import cakewed from "./assets/cakewed.jpg";

// Helper function to assign badge colors based on rank
const getBadgeColor = (rank) => {
  switch (rank) {
    case 1:
      return "bg-[#D4AF37] text-white"; // Gold
    case 2:
      return "bg-[#C0C0C0] text-gray-900"; // Silver
    case 3:
      return "bg-[#CD7F32] text-white"; // Bronze
    default:
      return "bg-[#26150F] text-white"; // Dark Brown
  }
};

// The reusable CakeCard component, now with Ranking features
function CakeCard({ cake, rank }) {
  const [selectedVariety, setSelectedVariety] = useState(cake.varieties[0]);
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col group relative transition-transform duration-300 hover:-translate-y-2">
      {/* Rank Badge */}
      <div
        className={`absolute top-4 left-4 z-10 w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold shadow-lg ${getBadgeColor(rank)}`}
      >
        #{rank}
      </div>

      {/* Image */}
      <div className="h-64 relative w-full overflow-hidden bg-[#f4e9e2]">
        <img
          src={cake.image}
          alt={cake.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif font-bold text-[#26150F] mb-3">
          {cake.name}
        </h3>

        {/* Rating Section */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-[#D4AF37] text-lg">★★★★★</div>
          <span className="text-sm font-bold text-gray-700">{cake.rating}</span>
          <span className="text-sm text-gray-400">
            ({cake.reviews} reviews)
          </span>
        </div>

        <p className="text-sm text-gray-500 mb-6 line-clamp-2 flex-grow">
          {cake.description}
        </p>

        {/* Variety Selection */}
        <div className="mb-6">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Select Size / Variety
          </label>
          <select
            value={selectedVariety}
            onChange={(e) => setSelectedVariety(e.target.value)}
            className="w-full bg-[#fcfaf8] border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#C67761] focus:border-[#C67761] block p-2.5 outline-none"
          >
            {cake.varieties.map((variety, index) => (
              <option key={index} value={variety}>
                {variety}
              </option>
            ))}
          </select>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-serif font-bold text-[#c46953]">
              <span className="line-through decoration-double decoration-1 mr-0.5 opacity-80 font-sans">
                N
              </span>
              {cake.price}
            </span>
          </div>
          <button
            onClick={() => {
              addToCart({ ...cake, name: `${cake.name} (${selectedVariety})` });
              alert(`Added ${selectedVariety} ${cake.name} to cart!`);
            }}
            className="bg-[#26150F] hover:bg-[#C67761] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors duration-300 shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CategoryPage() {
  const { categoryName } = useParams();

  // Expanded database with ratings and reviews
  const allCakes = [
    {
      id: 1,
      name: "Classic Birthday Cake",
      tags: ["birthday", "vanilla"],
      description:
        "Vanilla sponge layered with buttercream frosting and festive sprinkles.",
      price: "12,500",
      rating: 4.8,
      reviews: 415,
      image:
        "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop",
      varieties: ["6 inch Round", "8 inch Round (+N3,000)"],
    },
    {
      id: 2,
      name: "Red Velvet Royale",
      tags: ["anniversary", "birthday", "chocolate"],
      description:
        "Rich cocoa cake with cream cheese frosting and a deep crimson crumb.",
      price: "14,000",
      rating: 5.0,
      reviews: 342,
      image:
        "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=800&auto=format&fit=crop",
      varieties: ["6 inch Round", "Sheet Cake (+N10,000)"],
    },
    {
      id: 3,
      name: "Triple Chocolate Tower",
      tags: ["chocolate", "birthday"],
      description:
        "Three layers of dark, milk, and white chocolate ganache perfection.",
      price: "16,500",
      rating: 4.9,
      reviews: 289,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
      varieties: ["Standard (3 Layers)", "Tall (4 Layers) (+N4,000)"],
    },
    {
      id: 4,
      name: "Elegant Tiered Vanilla",
      tags: ["wedding", "anniversary", "vanilla"],
      description:
        "Two-tier classic vanilla bean cake decorated with fresh edible flowers.",
      price: "45,000",
      rating: 5.0,
      reviews: 64,
      image:
        "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800&auto=format&fit=crop",
      varieties: ["2 Tiers (Serves 40)", "3 Tiers (Serves 75) (+N35,000)"],
    },
    {
      id: 5,
      name: "Gluten-Free Berry Bliss",
      tags: ["gluten-free", "fruit", "birthday"],
      description:
        "Almond flour sponge topped with fresh seasonal berries and light cream.",
      price: "15,000",
      rating: 4.7,
      reviews: 98,
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop",
      varieties: ["Gluten-Free 8 inch", "Sugar-Free 8 inch"],
    },
    {
      id: 6,
      name: "Vegan Lemon Raspberry",
      tags: ["vegan", "fruit"],
      description:
        "Zesty lemon cake filled with fresh raspberry compote and dairy-free buttercream.",
      price: "16,000",
      rating: 4.6,
      reviews: 112,
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop",
      varieties: ["8 inch Round", "10 inch Round (+N4,000)"],
    },
    {
      id: 7,
      name: "Nut-Free Vanilla Funfetti",
      tags: ["nut-free", "vanilla", "birthday"],
      description:
        "Completely nut-free facility baked funfetti cake, perfect for school parties.",
      price: "13,500",
      rating: 4.9,
      reviews: 205,
      image:
        "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=800&auto=format&fit=crop",
      varieties: ["6 inch Round", "8 inch Round (+N2,500)"],
    },
  ];

  // 1. Filter cakes based on the URL parameter
  let filteredCakes = allCakes.filter((cake) =>
    cake.tags.includes(categoryName.toLowerCase()),
  );

  // 2. Sort them by rating to make the ranking accurate!
  filteredCakes = filteredCakes.sort((a, b) => b.rating - a.rating);

  // Format the category name for display
  const displayTitle = categoryName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Dynamic Hero Images based on category!
  const getHeroImage = (category) => {
    const images = {
      wedding: cakewed,
      birthday: hbd,
      chocolate:
        "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=2000&auto=format&fit=crop",
      fruit:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=2000&auto=format&fit=crop",
      // Default fallback image
      default:
        "https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=2000&auto=format&fit=crop",
    };
    return images[category.toLowerCase()] || images.default;
  };

  return (
    <div className="min-h-screen bg-[#fcfaf8] flex flex-col">
      <Navbar />

      {/* Dynamic Single Image Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={getHeroImage(categoryName)}
            alt={`${displayTitle} cakes`}
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <p className="text-[#C67761] text-sm md:text-base font-bold tracking-widest uppercase mb-3 drop-shadow">
            Top Ranked
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
            {displayTitle} Cakes
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow">
            Explore our best-selling {displayTitle.toLowerCase()} creations,
            ranked by our customers.
          </p>
        </div>
      </div>

      {/* Main Content - Ranked Grid */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        {filteredCakes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCakes.map((cake, index) => (
              <CakeCard
                key={cake.id}
                cake={cake}
                rank={index + 1} // Passes 1 for the first item, 2 for the second, etc.
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <div className="text-6xl mb-4 opacity-50 grayscale">👨‍🍳</div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
              No cakes found in this category.
            </h2>
            <p className="text-gray-500">
              We are always baking new recipes! Check back soon.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
