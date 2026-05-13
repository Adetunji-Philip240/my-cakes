import React from "react";

export default function Process() {
  const steps = [
    {
      id: 1,
      icon: "🛒", // Shopping cart emoji
      title: "Browse & Choose",
      description:
        "Explore our wide selection of handcrafted cakes and pick your favourite.",
    },
    {
      id: 2,
      icon: "📋", // Clipboard emoji
      title: "Place Your Order",
      description:
        "Add to cart, choose your delivery date, and fill in your details.",
    },
    {
      id: 3,
      icon: "🧑‍🍳", // Chef emoji
      title: "We Bake It Fresh",
      description:
        "Our bakers craft your order fresh using premium, natural ingredients.",
    },
    {
      id: 4,
      icon: "🚚", // Delivery truck emoji
      title: "Swift Delivery",
      description: "Your cake arrives perfectly packaged and ready to delight.",
    },
  ];

  return (
    <section className="py-20 bg-[#fcfaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#A27A59] text-sm font-semibold tracking-widest uppercase mb-3">
            Process
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 text-lg">
            From order to doorstep in 4 simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="text-4xl mb-6 drop-shadow-sm">{step.icon}</div>

              {/* Number Circle */}
              <div className="w-12 h-12 rounded-full bg-[#f4e3d7] text-[#c46953] flex items-center justify-center text-lg font-serif font-bold mb-6">
                {step.id}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
