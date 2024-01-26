'use client'
// pages/index.tsx
import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
        setFilteredProducts(json);
      });
  }, []);

  const handleCategoryChange = (category) => {
    if (category) {
      const filtered = products.filter((product) =>
        product.category && product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]); 
  };

  const handleSearch = (searchQuery) => {
    const filtered = searchQuery
      ? products.filter((product) =>
          product.title && product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : products;

    setFilteredProducts(filtered);
  };

  
  return (
    <>
      <div className="">
        <Navbar
          cartCount={cartItems.length}
          onCategoryChange={handleCategoryChange}
          onSearch={handleSearch}
          cartItems={cartItems}
        />
      </div>
      <div className="p-5 ">
        <div>
          <div>
            <h2 className="text-2xl py-8 capitalize">Products</h2>
            <div className="grid grid-cols-4  overflow-x-scroll">
              {filteredProducts.map((product) => (
                <div key={product.id} className="px-5 setheight">
                  <ProductList {...product} addToCart={() => handleAddToCart(product)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
