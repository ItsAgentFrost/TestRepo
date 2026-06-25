import React from "react";

const FilterBar = ({ categories, selectedCategory, onCategoryChange, onSearch, searchTerm }) => {
  return (
    <div className="bg-gray-500 p-5 mb-8 rounded-lg shadow-md">
      {/* Search Box - HMR test */}
      <div className="mb-5">
        <input 
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-3 py-3 border border-gray-300 rounded-md text-base transition-colors duration-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2.5">
        <button
          className={`px-5 py-2.5 border-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-300 ${
            selectedCategory === "all"
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-gray-700 text-gray-300 border-gray-400 hover:border-blue-500"
          }`}
          onClick={() => onCategoryChange("all")} 
          
        >
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-5 py-2.5 border-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-300 ${
              selectedCategory === category
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-700 text-gray-300 border-gray-400 hover:border-blue-500"
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;