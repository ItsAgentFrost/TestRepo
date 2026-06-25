import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-gray-600 rounded-lg overflow-hidden shadow-md transition-all duration-300 flex flex-col h-full hover:shadow-lg hover:-translate-y-1">
      <div className="w-full h-48 bg-gray-700 flex items-center justify-center overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-w-full max-h-full object-contain" 
        />
      </div>
      <h3 className="text-lg font-semibold px-3 py-3 m-0">
        {product.name}
      </h3>
      <p className="text-xs text-gray-400 px-3 uppercase tracking-wider">
        {product.category}
      </p>
      <p className="text-sm text-gray-500 px-3 py-2 flex-grow">
        {product.description}
      </p>
      <div className="flex justify-between items-center px-3 py-3 border-t border-gray-300">
        <span className="text-xl font-bold text-blue-500">
          ${product.price.toFixed(2)}
        </span>
        <button
          className="px-4 py-2 bg-blue-500 text-white border-none rounded-md cursor-pointer text-sm font-semibold transition-colors duration-300 hover:bg-blue-700"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;