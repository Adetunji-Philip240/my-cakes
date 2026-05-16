import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import cakebite from "./assets/cakebite.jpg";
import caketech from "./assets/caketech.jpg";
import cakewed from "./assets/cakewed.jpg";

// Simple Accordion Component for Vision, Mission, and Values
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-xl font-serif font-bold text-[#26150F]">
          {title}
        </span>
        <span
          className={`text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-5" : "max-h-0"}`}
      >
        <p className="text-gray-600 leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default function AboutUs() {
  const previousEvents = [
    {
      name: "Global Bank Gala",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
    },
    {
      name: "The Adeleke Wedding",
      year: "2025",
      image: cakewed,
    },
    {
      name: "Tech Summit Lagos",
      year: "2026",
      image: caketech,
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf8] flex flex-col">
      <Navbar />

      {/* Hero Section: Baker & Varieties */}
      <div className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000&auto=format&fit=crop"
            alt="Baker with varieties of cakes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto italic">
            "Baked with passion, served with love."
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        {/* Introduction Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-[#26150F] mb-6">
              Welcome to My Cakes
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              What started as a small kitchen experiment has blossomed into a
              sanctuary for cake lovers. At My Cakes, we believe that every
              celebration deserves a masterpiece. Our bakers combine
              time-honored recipes with modern artistry to create cakes that
              don't just look stunning, but taste like a slice of heaven. We are
              more than just a bakery; we are part of your most cherished
              memories.
            </p>

            {/* Accordion Section */}
            <div className="mt-10 border-t border-gray-200">
              <Accordion
                title="Our Vision"
                content="To be the premier destination for artisan cakes in the region, recognized for our innovation, quality, and the joy we bring to every household."
              />
              <Accordion
                title="Our Mission"
                content="To craft premium, handcrafted cakes using the finest natural ingredients, ensuring every bite is a celebration of flavor and craftsmanship."
              />
              <Accordion
                title="Our Core Values"
                content="Integrity in our ingredients, Passion in our baking, Excellence in our service, and Creativity in our designs."
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src={cakebite}
                alt="Someone enjoying a bite of cake"
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#C67761] rounded-3xl z-0"></div>
            </div>
          </div>
        </div>

        {/* Previous Events Covered */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-[#26150F] mb-4">
              Events We've Graced
            </h2>
            <p className="text-gray-500">
              From corporate galas to dream weddings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previousEvents.map((event, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="h-80 overflow-hidden rounded-2xl mb-4 shadow-md">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="font-bold text-[#26150F] text-lg">
                  {event.name}
                </h4>
                <p className="text-[#C67761] text-sm font-medium">
                  {event.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column: Hours and Careers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hours of Operation */}
          <div className="bg-[#26150F] text-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
              <span className="text-[#C67761]">🕒</span> Hours of Operation
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Monday - Friday</span>
                <span className="font-medium">8:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Saturday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-400">Sunday</span>
                <span className="font-medium text-[#C67761]">Closed</span>
              </div>
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-center">
            <h3 className="text-2xl font-serif font-bold text-[#26150F] mb-4">
              Join the Team
            </h3>
            <p className="text-gray-600 mb-6">
              We are always looking for talented bakers, creative decorators,
              and passionate customer service individuals to join our growing
              family.
            </p>
            <div className="bg-[#fcfaf8] p-6 rounded-2xl border-l-4 border-[#C67761]">
              <p className="text-sm font-medium text-gray-700">
                If you’re interested in employment opportunities at My Cakes,
                please email us:
              </p>
              <a
                href="mailto:careers@mycakes.com"
                className="text-xl font-bold text-[#C67761] hover:underline mt-2 block"
              >
                careers@mycakes.com
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
