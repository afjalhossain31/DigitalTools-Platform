import React, { useState } from "react";
import Cards from "./Cards";
import Cart from "./Cart";

const AllProducts = () => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="bg-gradient-to-b from-white via-[#f5f5f5] to-white py-20">
      <div className="container mx-auto px-4 space-y-8">
        <div className="text-center flex gap-4 flex-col">
          <h1 className="font-extrabold text-5xl text-[#101727]">
            Premium Digital Tools
          </h1>
          <p className="text-[#627382] text-base">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="tabs tabs-bordered rounded-lg w-fit bg-white p-2">
            <input
              type="radio"
              name="my_tabs_1"
              className="tab tab-lg text-base font-bold"
              aria-label="Products"
              checked={activeTab === "products"}
              onChange={() => setActiveTab("products")}
            />
            <input
              type="radio"
              name="my_tabs_1"
              className="tab tab-lg text-base font-bold"
              aria-label="Cart (2)"
              checked={activeTab === "cart"}
              onChange={() => setActiveTab("cart")}
            />
          </div>
        </div>

        <div>
          {activeTab === "products" && <Cards />}
          {activeTab === "cart" && <Cart />}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
