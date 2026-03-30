import React from "react";

const ReadyTransform = () => {
  return (
    <section className="bg-linear-to-r from-[#5a2ef6] to-[#b217f7] py-14 sm:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
          Ready To Transform Your Workflow?
        </h1>
        <p className="pt-5 text-sm text-white/80 leading-6">
          Join thousands of professionals who are already using DigiTools to
          work smarter.
          <br />
          Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-7">
          <button className="btn h-10 min-h-10 px-6 rounded-full bg-white text-[#6f2ef6] border-none font-semibold hover:bg-white/90">
            Explore Products
          </button>
          <button className="btn h-10 min-h-10 px-6 rounded-full bg-transparent border border-white text-white font-semibold hover:bg-white/10">
            View Pricing
          </button>
        </div>
        <p className="pt-5 text-xs text-white/75">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default ReadyTransform;
