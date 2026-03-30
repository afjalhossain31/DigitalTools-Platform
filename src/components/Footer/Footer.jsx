import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebookF,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#09162f] text-white py-12 sm:py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 border-b border-white/12 pb-10">
          <div className="space-y-4 lg:col-span-1">
            <h3 className="text-4xl sm:text-5xl font-bold leading-none">
              DigiTools
            </h3>
            <p className="text-sm text-[#9aa8bf] leading-6">
              Premium digital tools for creators,
              <br />
              professionals, and businesses. Work smarter
              <br />
              with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-[#9aa8bf]">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Templates</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-[#9aa8bf]">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-[#9aa8bf]">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Community</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-3">Social Links</h4>
            <div className="flex items-center gap-3 pt-1">
              <a href="#" className="w-8 h-8 rounded-full bg-white text-[#09162f] flex items-center justify-center hover:opacity-90">
                <FontAwesomeIcon icon={faYoutube} className="text-[13px]" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white text-[#09162f] flex items-center justify-center hover:opacity-90">
                <FontAwesomeIcon icon={faFacebookF} className="text-[12px]" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white text-[#09162f] flex items-center justify-center hover:opacity-90">
                <FontAwesomeIcon icon={faXTwitter} className="text-[12px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 text-xs text-[#8f9db6]">
          <p>
            © 2026 DigiTools. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
