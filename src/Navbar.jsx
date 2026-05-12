import React, { useState } from "react";

export default function Navbar() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // New state for mobile navigation
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Text */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="/"
              className="text-2xl font-bold text-rose-600 tracking-tight"
            >
              My Cakes
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="/"
              className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="/shop"
              className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Shop All
            </a>

            {/* Desktop: Cakes by Category Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCategoryOpen(true)}
              onMouseLeave={() => setIsCategoryOpen(false)}
            >
              <button className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium inline-flex items-center transition-colors">
                Cakes by Category
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Desktop Dropdown Menu Panel */}
              {isCategoryOpen && (
                <div className="absolute left-0 w-64 bg-white ring-1 ring-black ring-opacity-5 shadow-xl rounded-b-lg pt-2 pb-4 px-4">
                  {/* Occasions Group */}
                  <div className="mb-3">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Occasions
                    </h3>
                    <div className="flex flex-col space-y-1">
                      <a
                        href="/category/birthday"
                        className="text-sm text-gray-600 hover:text-rose-600 hover:bg-rose-50 px-2 py-1 rounded"
                      >
                        Birthday
                      </a>
                      <a
                        href="/category/wedding"
                        className="text-sm text-gray-600 hover:text-rose-600 hover:bg-rose-50 px-2 py-1 rounded"
                      >
                        Wedding
                      </a>
                      <a
                        href="/category/anniversary"
                        className="text-sm text-gray-600 hover:text-rose-600 hover:bg-rose-50 px-2 py-1 rounded"
                      >
                        Anniversary
                      </a>
                    </div>
                  </div>

                  {/* Flavors Group */}
                  <div className="mb-3">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Flavors
                    </h3>
                    <div className="flex flex-col space-y-1">
                      <a
                        href="/category/chocolate"
                        className="text-sm text-gray-600 hover:text-rose-600 hover:bg-rose-50 px-2 py-1 rounded"
                      >
                        Chocolate
                      </a>
                      <a
                        href="/category/vanilla"
                        className="text-sm text-gray-600 hover:text-rose-600 hover:bg-rose-50 px-2 py-1 rounded"
                      >
                        Vanilla
                      </a>
                      <a
                        href="/category/fruit"
                        className="text-sm text-gray-600 hover:text-rose-600 hover:bg-rose-50 px-2 py-1 rounded"
                      >
                        Fruit
                      </a>
                    </div>
                  </div>

                  {/* Dietary Group */}
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Dietary
                    </h3>
                    <div className="flex flex-col space-y-1">
                      <a
                        href="/category/vegan"
                        className="text-sm text-gray-600 hover:text-rose-600 hover:bg-rose-50 px-2 py-1 rounded"
                      >
                        Vegan
                      </a>
                      <a
                        href="/category/gluten-free"
                        className="text-sm text-gray-600 hover:text-rose-600 hover:bg-rose-50 px-2 py-1 rounded"
                      >
                        Gluten-Free
                      </a>
                      <a
                        href="/category/nut-free"
                        className="text-sm text-gray-600 hover:text-rose-600 hover:bg-rose-50 px-2 py-1 rounded"
                      >
                        Nut-Free
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/best-sellers"
              className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Best Sellers
            </a>
            <a
              href="/custom-orders"
              className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Custom Orders
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-rose-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              About Us
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-rose-600 focus:outline-none p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  // "X" Close icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-1 shadow-inner">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50"
            >
              Home
            </a>
            <a
              href="/shop"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50"
            >
              Shop All
            </a>

            {/* Mobile: Cakes by Category Accordion */}
            <div>
              <button
                onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50"
              >
                Cakes by Category
                <svg
                  className={`h-4 w-4 transform transition-transform ${isMobileCategoryOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isMobileCategoryOpen && (
                <div className="pl-6 pr-3 py-2 space-y-4 bg-gray-50 rounded-md mt-1">
                  {/* Mobile Occasions */}
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Occasions
                    </h3>
                    <div className="space-y-2">
                      <a
                        href="/category/birthday"
                        className="block text-sm text-gray-600 hover:text-rose-600"
                      >
                        Birthday
                      </a>
                      <a
                        href="/category/wedding"
                        className="block text-sm text-gray-600 hover:text-rose-600"
                      >
                        Wedding
                      </a>
                      <a
                        href="/category/anniversary"
                        className="block text-sm text-gray-600 hover:text-rose-600"
                      >
                        Anniversary
                      </a>
                    </div>
                  </div>

                  {/* Mobile Flavors */}
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Flavors
                    </h3>
                    <div className="space-y-2">
                      <a
                        href="/category/chocolate"
                        className="block text-sm text-gray-600 hover:text-rose-600"
                      >
                        Chocolate
                      </a>
                      <a
                        href="/category/vanilla"
                        className="block text-sm text-gray-600 hover:text-rose-600"
                      >
                        Vanilla
                      </a>
                      <a
                        href="/category/fruit"
                        className="block text-sm text-gray-600 hover:text-rose-600"
                      >
                        Fruit
                      </a>
                    </div>
                  </div>

                  {/* Mobile Dietary */}
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Dietary
                    </h3>
                    <div className="space-y-2">
                      <a
                        href="/category/vegan"
                        className="block text-sm text-gray-600 hover:text-rose-600"
                      >
                        Vegan
                      </a>
                      <a
                        href="/category/gluten-free"
                        className="block text-sm text-gray-600 hover:text-rose-600"
                      >
                        Gluten-Free
                      </a>
                      <a
                        href="/category/nut-free"
                        className="block text-sm text-gray-600 hover:text-rose-600"
                      >
                        Nut-Free
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/best-sellers"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50"
            >
              Best Sellers
            </a>
            <a
              href="/custom-orders"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50"
            >
              Custom Orders
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50"
            >
              About Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
