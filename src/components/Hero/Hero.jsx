import React from "react";
import bannerImg from "../../assets/banner.png";
import { LucidePlay } from "lucide-react";
import dotImg from "../../assets/dot.svg";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-white via-[#f8f9fb] to-[#f0f4ff] min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex bg-primary-content w-fit rounded-full pt-2 pb-2 pl-4 pr-4 text-base">
              <img src={dotImg} alt="dot" />
              <p className="text-base pl-2 bg-linear-to-l from-[#9514fa] to-[#4f39f6] bg-clip-text text-transparent font-semibold">
                New: AI-Powered Tools Available
              </p>
            </div>

            <h1 className="text-6xl lg:text-7xl font-extrabold text-[#101727] leading-tight">
              Supercharge Your <br />
              Digital Workflow
            </h1>
            
            <p className="text-lg text-[#627382] leading-relaxed">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster today.
            </p>
            
            <div className="flex gap-4 flex-wrap">
              <button className="btn btn-primary rounded-full bg-linear-to-l from-[#9514fa] to-[#4f39f6] hover:bg-linear-to-r from-[#9514fa] to-[#4f39f6] text-base font-semibold text-white border-none">
                Explore Products
              </button>
              <button className="btn btn-outline btn-primary rounded-full text-base font-semibold border-2">
                <LucidePlay size={20} /> Watch Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <img 
                src={bannerImg} 
                alt="Digital Workflow"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
              {/* Decorative background circle for image */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl blur-2xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
