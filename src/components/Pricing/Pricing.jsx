import React from "react";

const Pricing = () => {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">
      <div className="text-center flex gap-3 flex-col mb-12">
        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#101727] leading-tight">
          Simple, Transparent Pricing
        </h1>
        <p className="text-[#7a8699] text-sm">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 items-stretch">
        <div className="card bg-white border border-[#e8ebf1] rounded-xl h-full">
          <div className="card-body flex flex-col h-full">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-[#101727]">Starter</h2>
              <p className="text-sm text-[#7a8699]">
                Perfect for getting started
              </p>
              <p className="text-4xl sm:text-5xl font-bold text-[#101727]">
                $0<span className="text-base text-[#7a8699] font-normal">/Month</span>
              </p>
            </div>

            <ul className="mt-6 flex flex-col gap-2 flex-1 text-sm text-[#627382]">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Access to 10 free tools
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Basic templates
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Community support
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                1 project per month
              </li>
            </ul>

            <div className="mt-auto">
              <button className="btn btn-primary w-full rounded-full bg-linear-to-r from-[#6f2ef6] to-[#9128f7] border-none hover:from-[#6329de] hover:to-[#7f22d8]">
                Get Started Free
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-linear-to-r from-[#6f2ef6] to-[#9128f7] rounded-xl h-full relative">
          <div className="card-body flex flex-col h-full">
            <div className="flex justify-center">
              <span className="badge badge-md bg-[#ffd88f] border-none text-[#8b4f00] rounded-full -mt-6 font-semibold">
                Most Popular
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-white">Pro</h2>
              <p className="text-sm text-white/85">
                Best for professionals
              </p>
              <p className="text-4xl sm:text-5xl text-white font-bold">
                $29<span className="text-base text-white/80 font-normal">/Month</span>
              </p>
            </div>

            <ul className="mt-6 flex flex-col gap-2 flex-1 text-white text-sm">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Access to all premium tools
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Unlimited templates
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Priority support
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Unlimited projects
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Cloud sync
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Advanced analytics
              </li>
            </ul>

            <div className="mt-auto">
              <button className="btn w-full rounded-full bg-white border-none">
                <span className="bg-linear-to-l from-[#9514fa] to-[#4f39f6] bg-clip-text text-transparent">
                  Start Pro Trial
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-white border border-[#e8ebf1] rounded-xl h-full">
          <div className="card-body flex flex-col h-full">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-[#101727]">Enterprise</h2>
              <p className="text-sm text-[#7a8699]">
                For teams and businesses
              </p>
              <p className="text-4xl sm:text-5xl font-bold text-[#101727]">
                $99<span className="text-base text-[#7a8699] font-normal">/Month</span>
              </p>
            </div>

            <ul className="mt-6 flex flex-col gap-2 flex-1 text-sm text-[#627382]">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Everything in Pro
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Team collaboration
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Custom integrations
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Dedicated support
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                SLA guarantee
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Custom branding
              </li>
            </ul>

            <div className="mt-auto">
              <button className="btn btn-primary w-full rounded-full bg-linear-to-r from-[#6f2ef6] to-[#9128f7] border-none hover:from-[#6329de] hover:to-[#7f22d8]">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Pricing;
