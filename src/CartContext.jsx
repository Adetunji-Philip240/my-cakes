import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // 1. Check local storage FIRST when the app loads
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("myCakesCart");
    // If there is a saved cart, parse it from text back into an array. Otherwise, start empty.
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // 2. Automatically save to local storage ANY TIME the cartItems array changes
  useEffect(() => {
    localStorage.setItem("myCakesCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (cake) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === cake.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === cake.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prevItems, { ...cake, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cartItems.reduce((total, item) => {
    const priceNum = parseInt(item.price.replace(/,/g, ""), 10);
    return total + priceNum * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
