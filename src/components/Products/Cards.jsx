import React from "react";
import writingImg from "../../assets/products/writing_2327400 1.png";
import designImg from "../../assets/products/design-tool.png";
import portfolioImg from "../../assets/products/portfolio.png";
import socialImg from "../../assets/products/social-media.png";
import operationImg from "../../assets/products/operation.png";
import shoppingImg from "../../assets/products/shopping-cart.png";
import products from "../../data/products.json";

const Cards = ({ onAddToCart, cartItems = [] }) => {
  const productImages = {
    writing: writingImg,
    design: designImg,
    portfolio: portfolioImg,
    social: socialImg,
    operation: operationImg,
    shopping: shoppingImg,
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {products.map((product) => {
          const isInCart = cartItems.some((item) => item.id === product.id);

          return (
          <div
            key={product.id}
            className="card bg-white shadow-lg rounded-2xl overflow-hidden border border-transparent hover:border-[#e9dcff] hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300"
          >
            <div className="card-body p-5 sm:p-6">
              {/* Badge and Icon */}
              <div className="flex justify-between items-start gap-3 mb-4">
                <div className={`p-4 bg-linear-to-br ${product.bgColor} rounded-xl`}>
                  <img
                    className="h-8 w-8"
                    src={productImages[product.imageKey]}
                    alt={product.name}
                  />
                </div>
                <span className={`badge badge-sm badge-soft ${product.badgeColor} text-xs font-semibold`}>
                  {product.badge}
                </span>
              </div>

              {/* Title and Description */}
              <div className="space-y-2 mb-4">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">{product.name}</h2>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {product.price}
                  <span className="text-sm text-gray-500 font-normal">{product.period}</span>
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2 flex-1 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-green-600 shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div>
                <button
                  className={`btn btn-block rounded-xl border-none font-bold text-base ${
                    isInCart
                      ? "bg-green-600 hover:bg-green-600 text-white"
                      : "bg-linear-to-r from-[#9514fa] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#9514fa] text-white"
                  }`}
                  onClick={() => {
                    if (isInCart) {
                      return;
                    }
                    onAddToCart({
                      id: product.id,
                      name: product.name,
                      price: Number.parseInt(product.price.replace("$", ""), 10),
                      image: productImages[product.imageKey],
                    });
                  }}
                >
                  {isInCart ? "Added to Cart" : "Buy Now"}
                </button>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
