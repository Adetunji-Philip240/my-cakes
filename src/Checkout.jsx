import React from "react";
import { useCart } from "./CartContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  // Destructure deliveryFee from your cart context
  const { cartItems, cartTotal, deliveryFee } = useCart();
  const navigate = useNavigate();

  // Calculate the final total including the delivery fee
  const finalTotal = cartTotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#fcfaf8] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-serif font-bold mb-4">
          Your cart is empty!
        </h2>
        <button
          onClick={() => navigate("/shop")}
          className="bg-rose-600 text-white px-8 py-3 rounded-full"
        >
          Go to Shop
        </button>
      </div>
    );
  }

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert("Payment successful! Thank you for your order.");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#fcfaf8] flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h1 className="text-4xl font-serif font-bold text-[#26150F] mb-10">
          Checkout
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT: Forms */}
          <div className="lg:w-2/3 space-y-8">
            {/* Delivery Details Form */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-[#26150F] mb-6">
                Delivery Details
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-[#fcfaf8] border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-[#fcfaf8] border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Street address, Apartment, Suite, etc."
                    className="w-full bg-[#fcfaf8] border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-[#fcfaf8] border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-[#fcfaf8] border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Payment Details Form */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-serif font-bold text-[#26150F] mb-6">
                Payment Method
              </h2>

              <div className="flex gap-4 mb-6">
                <label className="flex items-center gap-2 p-4 border border-rose-500 bg-rose-50 rounded-xl cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    className="text-rose-600 focus:ring-rose-500"
                  />
                  <span className="font-medium text-gray-900">
                    Card Payment
                  </span>
                </label>
                <label className="flex items-center gap-2 p-4 border border-gray-200 rounded-xl cursor-pointer opacity-60">
                  <input
                    type="radio"
                    name="payment"
                    disabled
                    className="text-rose-600 focus:ring-rose-500"
                  />
                  <span className="font-medium text-gray-900">
                    Bank Transfer
                  </span>
                </label>
              </div>

              <form onSubmit={handlePaymentSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="0000 0000 0000 0000"
                    className="w-full bg-[#fcfaf8] border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-rose-500 focus:border-rose-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="MM/YY"
                      className="w-full bg-[#fcfaf8] border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="123"
                      className="w-full bg-[#fcfaf8] border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-8 bg-rose-600 hover:bg-rose-700 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(225,29,72,0.39)]"
                >
                  {/* Updated the button to display the finalTotal */}
                  Pay ₦{finalTotal.toLocaleString()}
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-[#f4e9e2] p-8 rounded-3xl sticky top-28">
              <h3 className="text-xl font-serif font-bold text-[#26150F] mb-6">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-700 font-medium">
                      {item.quantity}x {item.name}
                    </span>
                    <span className="text-gray-900 font-bold">
                      ₦{item.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#dfcabc] pt-4 space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>₦{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Delivery</span>
                  {/* Updated Delivery display */}
                  <span>₦{deliveryFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-[#26150F] pt-3 border-t border-[#dfcabc]">
                  <span>Total</span>
                  {/* Updated Total display */}
                  <span>₦{finalTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
