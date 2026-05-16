import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom"; // <-- 1. Import useNavigate

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, cartTotal, removeFromCart } =
    useCart();
  const navigate = useNavigate(); // <-- 2. Initialize the hook

  // <-- 3. Create the checkout function
  const handleCheckout = () => {
    setIsCartOpen(false); // Close the drawer
    navigate("/checkout"); // Go to checkout page
  };

  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] transition-opacity backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-[#fcfaf8]">
          <h2 className="text-2xl font-serif font-bold text-[#26150F]">
            Your Cart
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 bg-gray-100 rounded-full text-gray-500 hover:text-rose-600 hover:bg-rose-50 transition-colors focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-grow overflow-y-auto p-6 bg-white">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="text-8xl opacity-50 grayscale">🎂</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  No cake in the cart
                </h3>
                <p className="text-gray-500 text-sm">
                  Looks like you haven't made your choice yet.
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="bg-[#26150F] hover:bg-[#C67761] text-white px-8 py-3.5 rounded-full font-medium transition-colors shadow-md"
              >
                Back to Menu
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-gray-50 pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-2xl shadow-sm"
                  />
                  <div className="flex-grow flex flex-col justify-center">
                    <h4 className="font-bold text-gray-900 leading-tight mb-1">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500 mb-2">
                      Qty: {item.quantity}
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="font-bold text-rose-600">
                        <span className="line-through decoration-double decoration-1 mr-0.5 opacity-80 font-sans">
                          N
                        </span>
                        {item.price}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs font-medium text-red-400 hover:text-red-600 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Checkout Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-[#fcfaf8]">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-gray-600">Subtotal:</span>
              <span className="text-3xl font-serif font-bold text-[#26150F]">
                <span className="text-xl line-through decoration-double decoration-1 mr-1 opacity-80 font-sans">
                  N
                </span>
                {cartTotal.toLocaleString()}
              </span>
            </div>

            {/* <-- 4. Attach the function to the button --> */}
            <button
              onClick={handleCheckout}
              className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(225,29,72,0.39)] hover:shadow-[0_6px_20px_rgba(225,29,72,0.23)] hover:-translate-y-0.5"
            >
              Checkout Now
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">
              Taxes and shipping calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
}
