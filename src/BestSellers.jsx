import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function BestSellers() {
  // Ordered array of best-selling cakes
  const bestSellers = [
    {
      id: 2,
      rank: 1,
      name: "Red Velvet Royale",
      category: "Celebration Cakes",
      description:
        "Rich cocoa cake with cream cheese frosting and a deep crimson crumb. Our undisputed crowd favorite.",
      price: "14,000",
      rating: 5.0,
      reviews: 342,
      image:
        "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      rank: 2,
      name: "Triple Chocolate Tower",
      category: "Chocolate Cakes",
      description:
        "Three layers of dark, milk, and white chocolate ganache perfection. A chocoholic's ultimate dream.",
      price: "16,500",
      rating: 4.9,
      reviews: 289,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 1,
      rank: 3,
      name: "Classic Birthday Cake",
      category: "Celebration Cakes",
      description:
        "Vanilla sponge layered with buttercream frosting and festive sprinkles. The nostalgia is real.",
      price: "12,500",
      rating: 4.8,
      reviews: 415,
      image:
        "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      rank: 4,
      name: "New York Cheesecake",
      category: "Cheesecakes",
      description:
        "Classic, creamy baked cheesecake with a buttery graham cracker crust.",
      price: "18,000",
      rating: 4.9,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      rank: 5,
      name: "Gluten-Free Berry Bliss",
      category: "Dietary",
      description:
        "Almond flour sponge topped with fresh seasonal berries and light cream. Guilt-free indulgence.",
      price: "15,000",
      rating: 4.7,
      reviews: 98,
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      rank: 6,
      name: "Elegant Tiered Vanilla",
      category: "Wedding Cakes",
      description:
        "Two-tier classic vanilla bean cake decorated with fresh edible flowers.",
      price: "45,000",
      rating: 5.0,
      reviews: 64,
      image:
        "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800&auto=format&fit=crop",
    },
  ];

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

  return (
    <div className="min-h-screen bg-[#fcfaf8] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=2000&auto=format&fit=crop"
            alt="Decadent cake presentation"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <p className="text-[#C67761] text-sm md:text-base font-bold tracking-widest uppercase mb-3 drop-shadow">
            Hall of Fame
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
            Our Best Sellers
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow">
            The cakes everyone is talking about. Tried, tested, and loved by
            hundreds of our happy customers.
          </p>
        </div>
      </div>

      {/* Main Content - Ranked Grid */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {bestSellers.map((cake) => (
            <div
              key={cake.id}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col group relative transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Rank Badge */}
              <div
                className={`absolute top-4 left-4 z-10 w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold shadow-lg ${getBadgeColor(cake.rank)}`}
              >
                #{cake.rank}
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
                <p className="text-xs font-semibold text-[#A27A59] uppercase tracking-wider mb-2">
                  {cake.category}
                </p>
                <h3 className="text-2xl font-serif font-bold text-[#26150F] mb-3">
                  {cake.name}
                </h3>

                {/* Rating Section */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-[#D4AF37] text-lg">★★★★★</div>
                  <span className="text-sm font-bold text-gray-700">
                    {cake.rating}
                  </span>
                  <span className="text-sm text-gray-400">
                    ({cake.reviews} reviews)
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-8 flex-grow leading-relaxed">
                  {cake.description}
                </p>

                {/* Price and Add Button */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-serif font-bold text-[#c46953]">
                      <span className="line-through decoration-double decoration-1 mr-0.5 opacity-80 font-sans">
                        N
                      </span>
                      {cake.price}
                    </span>
                  </div>
                  <button
                    onClick={() => alert(`Added ${cake.name} to cart!`)}
                    className="bg-[#26150F] hover:bg-[#C67761] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors duration-300 shadow-md"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
