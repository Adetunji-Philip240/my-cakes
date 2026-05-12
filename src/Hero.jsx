import React, { useState, useEffect } from "react";

// IMPORTANT: Ensure these match the exact file names in your src/assets folder
import cakeImage1 from "./assets/cake1.jpg";
import cakeImage2 from "./assets/cake2.jpg";
import cakeImage3 from "./assets/cake3.jpg";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: cakeImage1,
      title: "Handcrafted Elegance",
      subtitle:
        "Artisan cakes baked with love for your most memorable moments.",
      buttonText: "Shop Occasions",
      buttonLink: "/category/wedding",
    },
    {
      id: 2,
      image: cakeImage2,
      title: "Make Every Day Sweet",
      subtitle:
        "From classic vanilla to rich chocolate, find your new favorite flavor.",
      buttonText: "Explore Flavors",
      buttonLink: "/shop",
    },
    {
      id: 3,
      image: cakeImage3,
      title: "Bespoke Creations",
      subtitle: "Have a unique vision? We bring your dream cakes to life.",
      buttonText: "Custom Orders",
      buttonLink: "/custom-orders",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
            <div
              className={`transform transition-all duration-1000 ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
                {slide.title}
              </h1>
              <p className="mt-4 text-xl sm:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
                {slide.subtitle}
              </p>
              <a
                href={slide.buttonLink}
                className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white transition-colors z-10"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white transition-colors z-10"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-rose-500 scale-125"
                : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
