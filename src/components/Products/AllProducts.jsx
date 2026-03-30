import React, { useState } from "react";
import Cards from "./Cards";
import Cart from "./Cart";

const AllProducts = ({
  cartItems,
  onAddToCart,
  onRemoveFromCart,
  onClearCart,
}) => {
  const [activeTab, setActiveTab] = useState("products");

  const handleAddToCart = (product) => {
    onAddToCart(product);
  };

  return (
    <section className="bg-linear-to-b from-white via-[#f5f5f5] to-white py-14 sm:py-20">
      <div className="container mx-auto px-4 space-y-6 sm:space-y-8">
        <div className="text-center flex gap-4 flex-col">
          <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#101727]">
            Premium Digital Tools
          </h1>
          <p className="text-[#627382] text-sm sm:text-base max-w-2xl mx-auto">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex items-center gap-2 sm:gap-3 bg-white rounded-full p-1 shadow-sm border border-[#e8ebf1]">
            <button
              type="button"
              onClick={() => setActiveTab("products")}
              className={`btn btn-sm rounded-full px-4 sm:px-6 border-none ${
                activeTab === "products"
                  ? "bg-linear-to-r from-[#6f2ef6] to-[#9128f7] text-white"
                  : "bg-transparent text-[#4a5568]"
              }`}
            >
              Product
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("cart")}
              className={`btn btn-sm rounded-full px-4 sm:px-6 border-none ${
                activeTab === "cart"
                  ? "bg-linear-to-r from-[#6f2ef6] to-[#9128f7] text-white"
                  : "bg-transparent text-[#4a5568]"
              }`}
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        <div>
          {activeTab === "products" && (
            <Cards onAddToCart={handleAddToCart} cartItems={cartItems} />
          )}
          {activeTab === "cart" && (
            <Cart
              cartItems={cartItems}
              onRemoveItem={onRemoveFromCart}
              onCheckout={onClearCart}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
