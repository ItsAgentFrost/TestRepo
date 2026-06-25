import React, { useState } from "react";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";
import { products } from "../data/products";

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onSearch={setSearchTerm}
        searchTerm={searchTerm}
      />
      
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 mb-10 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center py-10 text-base text-gray-400">
            No products found
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;