import React from "react";
import { LucideFacebook, LucideTwitter, LucideLinkedin, LucideInstagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#101727] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-linear-to-l from-[#9514fa] to-[#4f39f6] bg-clip-text text-transparent">
              DigiTools
            </h3>
            <p className="text-neutral-400">
              Supercharge your digital workflow with premium tools and AI-powered solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-purple-500 transition">
                <LucideFacebook size={20} />
              </a>
              <a href="#" className="hover:text-purple-500 transition">
                <LucideTwitter size={20} />
              </a>
              <a href="#" className="hover:text-purple-500 transition">
                <LucideLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-purple-500 transition">
                <LucideInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Products</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Content Writer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Design Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Portfolio Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Company</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Support</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            &copy; 2026 DigiTools. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
