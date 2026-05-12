import React from "react";

export default function CustomOrders() {
  const features = [
    {
      id: 1,
      icon: "💒", // Wedding/Church emoji
      title: "Wedding Cakes",
      subtitle: "Multi-tier elegance",
    },
    {
      id: 2,
      icon: "🎨", // Palette emoji
      title: "Themed Cakes",
      subtitle: "Any design, any shape",
    },
    {
      id: 3,
      icon: "🌸", // Flower emoji
      title: "Floral Designs",
      subtitle: "Edible flower artistry",
    },
    {
      id: 4,
      icon: "📝", // Memo emoji
      title: "Custom Text",
      subtitle: "Personal messages",
    },
  ];

  return (
    // The outer section provides padding so the dark box doesn't touch the screen edges
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* The main dark brown container */}
      <div className="bg-[#2d1b14] rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 items-center shadow-xl">
        {/* Left Column: Text Content */}
        <div className="lg:w-1/2 text-left">
          {/* Small Top Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#A27A59] text-sm">✦</span>
            <span className="text-[#A27A59] text-xs font-bold tracking-widest uppercase">
              Custom Orders
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Your Dream Cake, Made to Order
          </h2>

          <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
            Whether it's a towering wedding cake or a whimsical birthday
            creation, our pastry chefs bring your vision to life with incredible
            detail and flavour.
          </p>

          <a
            href="/custom-orders"
            className="inline-flex items-center gap-2 bg-rose-500 hover:bg-[#b06550] text-white px-8 py-3.5 rounded-full font-medium transition-colors duration-300"
          >
            Request a Custom Cake <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* Right Column: Feature Cards Grid */}
        <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-rose-500 rounded-2xl p-8 flex flex-col items-center text-center border border-white/5 hover:bg-[#c46953] transition-colors duration-300"
            >
              <div className="text-4xl mb-4 drop-shadow-md">{feature.icon}</div>
              <h3 className="text-white font-serif font-bold text-lg mb-1">
                {feature.title}
              </h3>
              <p className="text-[#A89893] text-sm">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
