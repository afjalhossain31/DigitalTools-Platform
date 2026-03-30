import { LucideBox, LucideRocket, LucideUser } from "lucide-react";
import React from "react";

const GetStarted = () => {
  return (
    <section className="bg-[#f5f7fb] py-14 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center flex flex-col gap-3">
          <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#101727] leading-tight">
            Get Started in 3 Steps
          </h1>
          <p className="text-[#7a8699] text-sm">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 sm:mt-12">
          <div className="card border border-[#e8ebf1] bg-white shadow-xs rounded-xl">
            <div className="flex justify-end pt-2 pr-2">
              <div className="bg-linear-to-l from-[#9514fa] to-[#4f39f6] w-6 h-6 rounded-full flex items-center justify-center">
                <p className="text-white text-[10px] font-semibold">01</p>
              </div>
            </div>
            <div className="card-body text-center items-center pt-2 pb-8">
              <div className="bg-[#efe7ff] p-4 rounded-full w-fit">
                <LucideUser size={34} color="#6f2ef6" />
              </div>
              <h2 className="card-title text-2xl sm:text-3xl lg:text-[30px] font-semibold text-[#101727]">
                Create Account
              </h2>
              <p className="text-sm text-[#7a8699] leading-6">
                Sign up for free in seconds. No credit card
                <br /> required to get started.
              </p>
            </div>
          </div>

          <div className="card border border-[#e8ebf1] bg-white shadow-xs rounded-xl">
            <div className="flex justify-end pt-2 pr-2">
              <div className="bg-linear-to-l from-[#9514fa] to-[#4f39f6] w-6 h-6 rounded-full flex items-center justify-center">
                <p className="text-white text-[10px] font-semibold">02</p>
              </div>
            </div>
            <div className="card-body text-center items-center pt-2 pb-8">
              <div className="bg-[#efe7ff] p-4 rounded-full w-fit">
                <LucideBox size={34} color="#6f2ef6" />
              </div>
              <h2 className="card-title text-2xl sm:text-3xl lg:text-[30px] font-semibold text-[#101727]">
                Choose Products
              </h2>
              <p className="text-sm text-[#7a8699] leading-6">
                Browse our catalog and select the tools
                <br />
                that fit your needs.
              </p>
            </div>
          </div>

          <div className="card border border-[#e8ebf1] bg-white shadow-xs rounded-xl">
            <div className="flex justify-end pt-2 pr-2">
              <div className="bg-linear-to-l from-[#9514fa] to-[#4f39f6] w-6 h-6 rounded-full flex items-center justify-center">
                <p className="text-white text-[10px] font-semibold">03</p>
              </div>
            </div>
            <div className="card-body text-center items-center pt-2 pb-8">
              <div className="bg-[#efe7ff] p-4 rounded-full w-fit">
                <LucideRocket size={34} color="#6f2ef6" />
              </div>
              <h2 className="card-title text-2xl sm:text-3xl lg:text-[30px] font-semibold text-[#101727]">
                Start Creating
              </h2>
              <p className="text-sm text-[#7a8699] leading-6">
                Download and start using your premium <br />
                tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
