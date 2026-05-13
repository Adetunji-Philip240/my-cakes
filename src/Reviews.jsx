import React from "react";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      text: "The red velvet cake I ordered for my husband's birthday was absolutely divine. Every layer was moist and the cream cheese frosting was perfect. Will definitely order again!",
      name: "Amara Okoye",
      location: "Lagos, Nigeria",
      icon: "😊",
    },
    {
      id: 2,
      text: "I ordered a custom 3-tier wedding cake and it exceeded all expectations. Beautiful, delicious, and delivered right on time. Our guests were asking where it came from all night!",
      name: "Chisom & David",
      location: "Abuja, Nigeria",
      icon: "💍",
    },
    {
      id: 3,
      text: "The chocolate lava cake is OUT OF THIS WORLD. Seriously the best dessert I've had. Fast delivery, beautiful packaging, and it tasted like it came from a 5-star bakery.",
      name: "Tunde Adeyemi",
      location: "Port Harcourt, Nigeria",
      icon: "🎉",
    },
  ];

  return (
    <section className="py-20 bg-[#fcfaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#A27A59] text-sm font-semibold tracking-widest uppercase mb-3">
            Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#fffcf9] rounded-2xl p-8 border border-[#f0e4db] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col"
            >
              {/* 5 Stars */}
              <div className="flex text-[#b88645] text-lg mb-6">★★★★★</div>

              {/* Review Text */}
              <p className="italic text-gray-700 leading-relaxed mb-8 flex-grow">
                "{review.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#f4e3d7] flex items-center justify-center text-lg shrink-0">
                  {review.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-0.5">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
