// components/ProductList.js
import React from 'react';
import "./style.css"

const ProductList = ({ name, category, description, title, price, image, addToCart }) => {
  
  // Function to limit the title to 4 words
  const limitTitle = (title, maxWords) => {
    const words = title.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return title;
  };

  // Function to limit the description to 20 words
  const limitDescription = (description, maxWords) => {
    const words = description.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return description;
  };

  // Limit the title to 4 words
  const limitedTitle = limitTitle(title, 4);

  // Limit the description to 20 words
  const limitedDescription = limitDescription(description, 10);

  return (
    <>
      <div className="py-4 manageHeading cursor-pointer ">
        <div className="w-64">
          <div className=" p-5 rounded-xl">
            {" "}
            <img src={image} alt="alternative" className=' rounded-t-lg image'/>{" "}
          </div>
          <div className="mt-2">
            <h3 className="font-bold text-lg h-10">{limitedTitle}</h3>
            <span className='text-sm'>{category}</span>
          </div>
          <p className="text-sm mt-7 h-20">{limitedDescription}</p>
          
          <div className=" mt-1 leading-4">
            <div className="text-1xl font-bold grow h-8">Price: $ {price}</div>
            <div className='py-3'>
            <button
              onClick={addToCart}
              className="bg-black text-white py-3 px-3 w-full"
            >
              Add to Cart 
            </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
