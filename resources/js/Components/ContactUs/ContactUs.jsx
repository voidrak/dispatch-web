import React from "react";

export default function ContactUs() {
  return (
    <div className="bg-bg-light px-4 py-6">
      <h1 className="mx-auto max-w-screen-lg text-5xl font-extrabold sm:text-6xl md:text-7xl lg:text-8xl">
        Get In Touch
      </h1>
      <form className="container mx-auto mt-8 flex flex-col rounded-md bg-white px-3 py-4 max-xl:max-w-screen-lg min-[850px]:flex-row lg:py-12 xl:max-w-[1390px] xl:py-16">
        <div className="mx-auto w-full max-w-[500px] px-3 lg:max-w-2xl xl:max-w-3xl">
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-full-name"
              >
                Full Name
              </label>
              <input
                required
                className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-full-name"
                type="text"
                placeholder="Joe Doe"
              />
            </div>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-company-name"
              >
                Company Name
              </label>
              <input
                required
                className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-company-name"
                type="text"
                placeholder="Company Name"
              />
            </div>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-email"
              >
                Email Address
              </label>
              <input
                required
                className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-email"
                type="email"
                placeholder="Email Address "
              />
            </div>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-phone-number"
              >
                Phone Number
              </label>
              <input
                required
                className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-phone-number"
                type="tel"
                placeholder="+01123456789"
              />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-USDOT"
              >
                USDOT
              </label>
              <input
                required
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-USDOT"
                type="number"
                placeholder="7890123"
              />
            </div>
          </div>

          <div className="-mx-3 mb-2 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-MC"
              >
                MC #
              </label>
              <input
                required
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-MC"
                type="text"
                placeholder="123456"
              />
            </div>
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-number-track"
              >
                Number of Trucks
              </label>
              <input
                required
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-number-track"
                type="number"
                min="1"
                placeholder="1"
              />
            </div>
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-type-track"
              >
                Type of Trucks
              </label>
              <input
                required
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-type-track"
                type="text"
                placeholder="type of tracks"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[500px] space-y-8 min-[850px]:max-w-[280px]">
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="mc_authority_paper"
            >
              MC Authority Paper
            </label>
            <input
              required
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="mc_authority_paper"
              type="file"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="W9"
            >
              W9
            </label>
            <input
              required
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="W9"
              type="file"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="certificate-of-insurance "
            >
              Certificate of Insurance
            </label>
            <input
              required
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="certificate-of-insurance"
              type="file"
            />
          </div>
          <div className="w-full px-3">
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              htmlFor="notice-of-assignment"
            >
              Notice of Assignment
            </label>
            <input
              required
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="notice-of-assignment"
              type="file"
            />
          </div>
          <button
            type="Submit"
            className="ml-4 translate-y-[15px] rounded-lg bg-blue-700 px-12 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
