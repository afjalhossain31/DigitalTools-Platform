import { LucideShoppingCart, Menu, X } from "lucide-react";
import React, { useState } from "react";

const NavBar = ({ cartCount = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="text-3xl font-bold bg-linear-to-l from-[#9514fa] to-[#4f39f6] bg-clip-text text-transparent no-underline">
            DigiTools
          </a>

          {/* Desktop Menu - Center */}
          <div className="hidden lg:flex gap-10 items-center">
            <a href="#products" className="text-base text-gray-700 font-medium hover:text-purple-600 transition no-underline">
              Products
            </a>
            <a href="#features" className="text-base text-gray-700 font-medium hover:text-purple-600 transition no-underline">
              Features
            </a>
            <a href="#pricing" className="text-base text-gray-700 font-medium hover:text-purple-600 transition no-underline">
              Pricing
            </a>
            <a href="#testimonials" className="text-base text-gray-700 font-medium hover:text-purple-600 transition no-underline">
              Testimonials
            </a>
            <a href="#faq" className="text-base text-gray-700 font-medium hover:text-purple-600 transition no-underline">
              FAQ
            </a>
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="btn btn-ghost btn-circle relative">
              <div className="indicator">
                <LucideShoppingCart size={24} className="text-gray-700" />
                <span className="badge badge-sm bg-purple-600 border-0 text-white indicator-item">
                  {cartCount}
                </span>
              </div>
            </button>

            <a 
              href="#login"
              className="text-base text-gray-700 font-medium hover:text-purple-600 transition no-underline"
            >
              Login
            </a>
            <button className="btn btn-sm rounded-full bg-linear-to-l from-[#9514fa] to-[#4f39f6] hover:bg-linear-to-r text-white border-none font-semibold px-6">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button className="btn btn-ghost btn-circle relative">
              <div className="indicator">
                <LucideShoppingCart size={24} className="text-gray-700" />
                <span className="badge badge-sm bg-purple-600 border-0 text-white indicator-item">
                  {cartCount}
                </span>
              </div>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost btn-circle text-black hover:bg-gray-100"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X size={24} className="text-black stroke-[2.5]" />
              ) : (
                <Menu size={24} className="text-black stroke-[2.5]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-3">
            <a href="#products" className="block text-base text-gray-700 hover:text-purple-600 py-2 transition">
              Products
            </a>
            <a href="#features" className="block text-base text-gray-700 hover:text-purple-600 py-2 transition">
              Features
            </a>
            <a href="#pricing" className="block text-base text-gray-700 hover:text-purple-600 py-2 transition">
              Pricing
            </a>
            <a href="#testimonials" className="block text-base text-gray-700 hover:text-purple-600 py-2 transition">
              Testimonials
            </a>
            <a href="#faq" className="block text-base text-gray-700 hover:text-purple-600 py-2 transition">
              FAQ
            </a>
            <div className="flex gap-2 pt-3 border-t border-gray-200">
              <a 
                href="#login"
                className="flex-1 text-center py-2 text-base text-gray-700 hover:text-purple-600"
              >
                Login
              </a>
              <button className="flex-1 btn btn-sm rounded-full bg-linear-to-l from-[#9514fa] to-[#4f39f6] text-white border-none">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
