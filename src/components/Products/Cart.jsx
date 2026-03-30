import React from "react";

const Cart = ({ cartItems, onRemoveItem, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto mt-6 sm:mt-10 mb-10">
      {cartItems.length === 0 ? (
        <div className="card bg-white border border-[#e8ebf1] rounded-2xl">
          <div className="card-body py-14 sm:py-18 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#101727]">Your Cart</h2>
            <p className="text-sm sm:text-base text-[#627382] mt-2">Your cart is empty.</p>
          </div>
        </div>
      ) : (
        <div className="card bg-white border border-[#e8ebf1] rounded-2xl">
          <div className="card-body p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#101727] mb-6">Your Cart</h2>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 bg-[#f7f8fb] rounded-xl px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white border border-[#e8ebf1] flex items-center justify-center">
                      <img src={item.image} alt={item.name} className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#101727]">{item.name}</h3>
                      <p className="text-sm text-[#627382]">${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-sm text-pink-500 hover:text-pink-600 font-medium self-end sm:self-auto"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-6 mb-4">
              <p className="text-sm text-[#7a8699]">Total:</p>
              <p className="text-3xl sm:text-4xl font-bold text-[#101727]">${total}</p>
            </div>

            <button
              className="btn w-full rounded-full border-none text-white bg-linear-to-r from-[#5b34f5] to-[#b21af7] hover:opacity-95"
              onClick={onCheckout}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
