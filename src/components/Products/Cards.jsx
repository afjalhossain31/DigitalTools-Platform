import React from "react";
import writingImg from "../../assets/products/writing_2327400 1.png";
import designImg from "../../assets/products/design-tool.png";
import portfolioImg from "../../assets/products/portfolio.png";
import socialImg from "../../assets/products/social-media.png";
import operationImg from "../../assets/products/operation.png";
import shoppingImg from "../../assets/products/shopping-cart.png";

const Cards = ({ onAddToCart, cartItems = [] }) => {
  const products = [
    {
      id: 1,
      name: "AI Writing Pro",
      image: writingImg,
      description: "Create high-quality content, blogs, and marketing copy in seconds with advanced AI.",
      price: "$29",
      period: "/Mo",
      badge: "Best Seller",
      badgeColor: "badge-warning",
      bgColor: "from-yellow-100 to-orange-100",
      features: [
        "Unlimited AI generations",
        "50+ writing templates",
        "Grammar checker"
      ]
    },
    {
      id: 2,
      name: "Design Templates Pack",
      image: designImg,
      description: "2000+ premium templates for designs, presentations, and marketing materials.",
      price: "$49",
      period: "/Mo-Time",
      badge: "Popular",
      badgeColor: "badge-info",
      bgColor: "from-blue-100 to-purple-100",
      features: [
        "2000+ templates",
        "Monthly updates",
        "Commercial license"
      ]
    },
    {
      id: 3,
      name: "Premium Stock Assets",
      image: portfolioImg,
      description: "Access millions of royalty-free photos, videos, and graphics for your projects.",
      price: "$19",
      period: "/Mo",
      badge: "New",
      badgeColor: "badge-success",
      bgColor: "from-green-100 to-emerald-100",
      features: [
        "100+ assets",
        "Commercial use",
        "No attribution"
      ]
    },
    {
      id: 4,
      name: "Automation Toolkit",
      image: operationImg,
      description: "Automate repetitive tasks and streamline your workflow with powerful tools.",
      price: "$79",
      period: "/Mo",
      badge: "Popular",
      badgeColor: "badge-info",
      bgColor: "from-blue-100 to-purple-100",
      features: [
        "50+ automations",
        "API access",
        "Custom workflows"
      ]
    },
    {
      id: 5,
      name: "Resume Builder Pro",
      image: shoppingImg,
      description: "Create professional resumes and cover letters that land interviews.",
      price: "$15",
      period: "/Mo-Time",
      badge: "New",
      badgeColor: "badge-success",
      bgColor: "from-green-100 to-emerald-100",
      features: [
        "100+ templates",
        "ATS optimization",
        "Expert tips"
      ]
    },
    {
      id: 6,
      name: "Social Media Content Kit",
      image: socialImg,
      description: "Complete toolkit for creating engaging social media content across all platforms.",
      price: "$39",
      period: "/Mo",
      badge: "Best Seller",
      badgeColor: "badge-warning",
      bgColor: "from-yellow-100 to-orange-100",
      features: [
        "5000+ assets",
        "Scheduler included",
        "Analytics tools"
      ]
    }
  ];

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
                  <img className="h-8 w-8" src={product.image} alt={product.name} />
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
                      image: product.image,
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
