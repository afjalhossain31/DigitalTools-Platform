import React from "react";

const Stats = () => {
  return (
    <div className="bg-linear-to-l from-[#9514fa] to-[#4f39f6] py-10 sm:py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3">
        <div className="relative flex flex-col gap-2 justify-between items-center py-5 md:py-0">
          <h3 className="text-5xl sm:text-6xl font-bold text-white text-center">50K+</h3>
          <p className="text-xl sm:text-2xl font-medium text-white text-center">
            Active Users
          </p>
          <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-14 w-px bg-white/35"></span>
        </div>

        <div className="relative flex flex-col gap-2 justify-between items-center py-5 md:py-0">
          <h3 className="text-5xl sm:text-6xl font-bold text-white text-center">200+</h3>
          <p className="text-xl sm:text-2xl font-medium text-white text-center">
            Premium Tools
          </p>
          <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-14 w-px bg-white/35"></span>
        </div>

        <div className="flex flex-col gap-2 justify-between items-center py-5 md:py-0">
          <h3 className="text-5xl sm:text-6xl font-bold text-white text-center">4.9</h3>
          <p className="text-xl sm:text-2xl font-medium text-white text-center">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
