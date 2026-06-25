import React from "react";
import ProductList from "../components/ProductList";
import ShoppingCart from "../components/ShoppingCart";
import "../styles/Store.css";

const StorePage = () => {
  return (
    <div className="store-page">
      <header className="store-header">
        <h1>📦 Online Store</h1>
        <ShoppingCart />
      </header>
      <main className="store-main">
        <ProductList />
      </main>
    </div>
  );
};

export default StorePage;