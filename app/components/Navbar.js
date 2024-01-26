import React, { useState } from "react";
import cart from "../../public/cart.png";
import Link from "next/link";
import Cart from "./CartItems";

const Navbar = ({ cartItems, cartCount, onCategoryChange, onSearch }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
    document.body.style.overflow = isCartOpen ? 'auto' : 'hidden';
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleDecrement = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: Math.max(0, item.quantity - 1) }
        : item
    );
    // Update the cartItems state accordingly
  };

  const handleIncrement = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    // Update the cartItems state accordingly
  };

  const handleRemove = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    // Update the cartItems state accordingly
  };

  return (
    <div>
      {/* Navbar Container */}
      <div className="flex justify-between items-center p-4 bg-white border-b border-gray-300">
        {/* Ecommerce Logo */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => onCategoryChange(null)} // Reset category on logo click
        >
          Ecommerce
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          {/* Your category links here */}
          <div
            className="cursor-pointer"
            onClick={() => onCategoryChange("electronics")}
          >
            Electronic
          </div>
          <div
            className="cursor-pointer"
            onClick={() => onCategoryChange(`men's clothing`)}
          >
            Men's Fashion
          </div>
          <div
            className="cursor-pointer"
            onClick={() => onCategoryChange(`women's clothing`)}
          >
            Women's Fashion
          </div>
          <div
            className="cursor-pointer"
            onClick={() => onCategoryChange("jewelry")}
          >
            Jewelry
          </div>
        </div>

        {/* Search Box */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="border border-gray-400 p-2 rounded"
            placeholder="Search"
          />
          <button
            className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center"
            onClick={handleSearch}
          >
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>

        {/* Shopping Cart */}
        <div className="flex items-center gap-4 relative">
          <Link href="/">
            <button
              className="w-20 h-10 ml-0 text-white bg-black rounded-md cursor-pointer"
              onClick={toggleCart}
            >
              {cartCount > 0 && `(${cartCount}) `}
            </button>
          </Link>

          {/* Cart Modal */}
          {isCartOpen && (
            <Cart
              cartItems={cartItems}
              onClose={closeCart}
              
              onRemove={handleRemove}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
