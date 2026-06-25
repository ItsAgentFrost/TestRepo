import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { cartItems, getCartItemCount } = useCart();

  return (
    <Link to="/cart" className="relative text-2xl cursor-pointer transition-transform duration-300 hover:scale-110">
      <span className="inline-block">🛒</span>
      {getCartItemCount() > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
          {getCartItemCount()}
        </span>
      )}
    </Link>
  );
};

export default ShoppingCart;