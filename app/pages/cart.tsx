import React from "react";

const Cart = ({ cartItems, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg h-full w-full">
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p>Your cart is empty</p>
            <button
              className="mt-4 bg-black text-white py-2 px-4 rounded"
              onClick={onClose}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div>
              <p>Your products:</p>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    {item.title} - Price: {item.price}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="mt-4 bg-black text-white py-2 px-4 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
