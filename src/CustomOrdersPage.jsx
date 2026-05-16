import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function CustomOrdersPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you! Your custom order request has been sent. Our team will contact you shortly.",
    );
  };

  const galleryImages = [
    "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800&auto=format&fit=crop", // Wedding
    "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop", // Colorful birthday
    "https://images.unsplash.com/photo-1557308536-ee471ef2c390?q=80&w=800&auto=format&fit=crop", // Elegant floral
    "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=800&auto=format&fit=crop", // Themed/Fun
    "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800&auto=format&fit=crop", // Rustic
    "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=800&auto=format&fit=crop", // Drip cake
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf8] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=2000&auto=format&fit=crop"
            alt="Baker decorating a custom cake"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <p className="text-[#C67761] text-sm md:text-base font-bold tracking-widest uppercase mb-3 drop-shadow">
            Bespoke Creations
          </p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
            Custom Orders
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow">
            If you can dream it, we can bake it. Fill out the form below to
            start designing your perfect cake.
          </p>
        </div>
      </div>

      {/* Main Content - Form & Info */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: The Form */}
          <div className="lg:w-2/3 bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
            <h2 className="text-3xl font-serif font-bold text-[#26150F] mb-6">
              Request a Quote
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Details Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-[#fcfaf8] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C67761] focus:border-transparent transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-[#fcfaf8] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C67761] focus:border-transparent transition-all"
                    placeholder="+234 800 000 0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  className="w-full bg-[#fcfaf8] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C67761] focus:border-transparent transition-all"
                  placeholder="jane@example.com"
                />
              </div>

              {/* Event Details Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    required
                    type="date"
                    className="w-full bg-[#fcfaf8] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C67761] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Occasion *
                  </label>
                  <select
                    required
                    className="w-full bg-[#fcfaf8] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C67761] focus:border-transparent transition-all"
                  >
                    <option value="">Select an occasion</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Cake Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Number of Guests *
                </label>
                <input
                  required
                  type="number"
                  min="1"
                  className="w-full bg-[#fcfaf8] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C67761] focus:border-transparent transition-all"
                  placeholder="e.g. 50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Dietary Requirements
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[#C67761] focus:ring-[#C67761] rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-600">Vegan</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[#C67761] focus:ring-[#C67761] rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-600">Gluten-Free</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[#C67761] focus:ring-[#C67761] rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-600">Nut-Free</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Design Vision & Flavors *
                </label>
                <textarea
                  required
                  rows="4"
                  className="w-full bg-[#fcfaf8] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C67761] focus:border-transparent transition-all"
                  placeholder="Tell us about your theme, colors, flavor preferences, and any special messages..."
                ></textarea>
              </div>

              {/* Reference Image Upload (Visual only) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reference Image (Optional)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg bg-[#fcfaf8] hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600 justify-center">
                      <span className="relative cursor-pointer bg-transparent rounded-md font-medium text-[#C67761] hover:text-[#a8604d]">
                        <span>Upload a file</span>
                        <input type="file" className="sr-only" />
                      </span>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#26150F] hover:bg-[#C67761] text-white font-medium py-4 rounded-xl transition-colors duration-300 shadow-md text-lg mt-4"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Right Column: Info & Process */}
          <div className="lg:w-1/3 flex flex-col gap-8">
            <div className="bg-[#26150F] text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-serif font-bold mb-4">
                The Custom Process
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C67761] text-white flex items-center justify-center shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Submit Details</h4>
                    <p className="text-[#A89893] text-sm">
                      Fill out the form with your event details and vision.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C67761] text-white flex items-center justify-center shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Consultation</h4>
                    <p className="text-[#A89893] text-sm">
                      We'll review your request and get in touch to discuss
                      pricing and design.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C67761] text-white flex items-center justify-center shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Baking Magic</h4>
                    <p className="text-[#A89893] text-sm">
                      Once approved, our artisans bring your masterpiece to
                      life.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#f4e9e2] p-8 rounded-3xl">
              <h3 className="font-serif font-bold text-xl text-[#26150F] mb-2">
                Important Notice
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Please note that custom orders require a minimum of{" "}
                <strong>7 days notice</strong>. For large events and weddings,
                we recommend booking 1-2 months in advance to secure your date.
              </p>
            </div>
          </div>
        </div>

        {/* Custom Creations Gallery */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-[#26150F] mb-4">
              Past Creations
            </h2>
            <p className="text-gray-500">
              A glimpse into some of the custom masterpieces we've baked
              recently.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {galleryImages.map((imgUrl, index) => (
              <div
                key={index}
                className="aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-sm"
              >
                <img
                  src={imgUrl}
                  alt={`Custom cake creation ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
