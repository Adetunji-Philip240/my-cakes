import React from "react";

export default function Footer() {
  return (
    <footer className="bg-rose-600 pt-16 pb-8 border-t border-rose-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand Info */}
          <div>
            <h2 className="text-2xl mb-4 font-serif">
              <span className="text-white font-bold">My </span>
              <span className="text-[#C67761] italic">Cakes</span>
            </h2>
            <p className="text-white text-sm leading-relaxed pr-4">
              Handcrafted artisan cakes made with love, passion, and the finest
              ingredients. Delivered fresh to your door.
            </p>
          </div>

          {/* Column 2: Menu Links */}
          <div>
            <h3 className="text-[#A27A59] font-serif font-bold text-lg mb-4">
              Menu
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/shop"
                  className="text-white hover:text-white text-sm transition-colors"
                >
                  All Cakes
                </a>
              </li>
              <li>
                <a
                  href="/category/celebration"
                  className="text-white hover:text-white text-sm transition-colors"
                >
                  Celebration Cakes
                </a>
              </li>
              <li>
                <a
                  href="/category/cheesecakes"
                  className="text-white hover:text-white text-sm transition-colors"
                >
                  Cheesecakes
                </a>
              </li>
              <li>
                <a
                  href="/category/cupcakes"
                  className="text-white hover:text-white text-sm transition-colors"
                >
                  Cupcakes
                </a>
              </li>
              <li>
                <a
                  href="/category/vegan"
                  className="text-white hover:text-white text-sm transition-colors"
                >
                  Vegan Options
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div>
            <h3 className="text-[#A27A59] font-serif font-bold text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/custom-orders"
                  className="text-white hover:text-white text-sm transition-colors"
                >
                  Custom Orders
                </a>
              </li>
              <li>
                <a
                  href="/category/wedding"
                  className="text-white hover:text-white text-sm transition-colors"
                >
                  Wedding Cakes
                </a>
              </li>
              <li>
                <a
                  href="/corporate"
                  className="text-white hover:text-white text-sm transition-colors"
                >
                  Corporate Events
                </a>
              </li>
              <li>
                <a
                  href="/bulk"
                  className="text-white hover:text-white text-sm transition-colors"
                >
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-[#A27A59] font-serif font-bold text-lg mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-white shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white text-sm mt-0.5">
                  Victoria Island, Lagos
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-white shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-white text-sm">+234 800 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-white shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-white text-sm">hello@mycakes.com</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-white shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-white text-sm mt-0.5">
                  Mon–Sat, 8am–7pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#A89893] text-sm">
            © 2026 My Cakes. All rights reserved.
          </p>
          <p className="text-[#A89893] text-sm">
            Made with <span className="text-white">♡</span> in Lagos
          </p>
        </div>
      </div>
    </footer>
  );
}
