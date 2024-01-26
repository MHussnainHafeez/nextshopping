import React from "react";

const Cart = ({ cartItems, onClose, onRemove }) => {
  const handleRemove = (itemId) => {
    onRemove(itemId);
  };

  return (
    <div className="fixed inset-16 bg-opacity-50 flex mb-0 h-full">
      <div className="bg-white p-10 mt-18 justify-center rounded-lg h-full w-full">
        {cartItems.length === 0 ? (
          <>
            <div className="">
              <h1 className="mt-10 font-bold text-2xl pb8">Cart Items</h1>
              <div className="text-center mt-20">
                <p className="pb-4">Your cart is empty</p>
                <button
                  className="mt-4 bg-black text-white py-2 px-4 rounded"
                  onClick={onClose}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="">
            <div className="">
              <h1 className="mt-10 font-bold text-2xl pb8">Cart Items</h1>
              <div className="mt-16 ">
                <ul className="pt-6 pv-8 space-y-3">
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between w-full"
                    >
                      <div className="flex items-center">
                        <img src={item.image} alt="" className="w-20" />
                        <div className="ml-4 pt-8">
                         
                          <span className="block">{item.title}</span>
                          <span>Price: {item.price}</span>
                        </div>
                      </div>
                      <div className="ml-4 flex items-center">
                        <button
                          className="bg-black text-white py-1 px-2 rounded ml-1"
                          onClick={() => handleRemove(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
