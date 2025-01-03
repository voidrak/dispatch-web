import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col gap-y-8 bg-bg-dark py-10 text-white">
      <a href="#" className="mx-auto">
        <img src="/images/truck-logo.png" alt="logo" className="w-[100px]" />
      </a>
      <div className="mx-auto grid grid-cols-3 justify-items-center gap-y-8 pr-1 md:gap-x-48">
        <ul className="space-y-2">
          <li className="hover:text-golden-accent sm:text-xl md:text-base lg:text-xl">
            <a href="#" className="">
              Home
            </a>
          </li>
          <li className="hover:text-golden-accent sm:text-xl md:text-base lg:text-xl">
            <a href="#about" className="">
              About
            </a>
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="hover:text-golden-accent sm:text-xl md:text-base lg:text-xl">
            <a href="#contact">Contact</a>
          </li>
          <li className="hover:text-golden-accent sm:text-xl md:text-base lg:text-xl">
            <a href="mailto:">Email Us</a>
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="hover:text-golden-accent sm:text-xl md:text-base lg:text-xl">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-golden-accent sm:text-xl md:text-base lg:text-xl">
            <a href="#what_we_move">What we move</a>
          </li>
        </ul>

        <ul className="col-span-3 mt-4 items-center gap-x-8 space-y-3 lg:flex lg:py-4 xl:gap-x-16">
          <div className="mx-auto mt-3 flex h-14 max-w-[256px] items-center gap-x-2 rounded-3xl bg-[#40434c] px-2 hover:font-bold">
            <div className="rounded-full bg-blue-600 p-2">
              <svg
                className="size-6 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </div>
            <h1 className="">Follow us on Facebook</h1>
          </div>
          <div className="mx-auto flex h-14 max-w-[256px] items-center gap-x-2 rounded-3xl bg-[#40434c] px-2 hover:font-bold">
            <div className="rounded-full bg-blue-600 p-2">
              <svg
                className="size-6 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </div>
            <h1 className="">Follow us on Instagram</h1>
          </div>
          <div className="mx-auto flex h-14 max-w-[256px] items-center gap-x-2 rounded-3xl bg-[#40434c] px-2 hover:font-bold">
            <div className="rounded-full bg-blue-600 p-2">
              <svg
                className="size-6 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </div>
            <h1 className="">Follow us on Linkedin</h1>
          </div>
        </ul>
      </div>
    </div>
  );
}
