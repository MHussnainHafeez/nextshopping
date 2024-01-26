import React from 'react';
import "./style.css"

const ProductDetail = ({  category, description, title, price, image, addToCart }) => {
  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={image} alt="Product" className="rounded-lg" />
      </div>
      <div className="product-details">
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="text-sm">{category}</p>
        <p className="text-sm">{description}</p>
        <div className="product-price">
          <p className="font-bold text-lg">Price: $ {price}</p>
        </div>
        <div className="add-to-cart">
          <button
            onClick={addToCart}
            className="bg-black text-white py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
