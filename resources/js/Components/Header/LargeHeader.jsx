import React from "react";

export default function LargeHeader() {
  return (
    <ul className="hidden list-none gap-x-4 text-xl sm:flex md:gap-x-6 md:text-2xl lg:text-3xl xl:gap-x-8">
      <li className="hover:text-golden-accent duration-200 hover:font-semibold">
        <a href="#home" className="">
          Home
        </a>
      </li>
      <li className="hover:text-golden-accent duration-200 hover:font-semibold">
        <a href="#about" className="">
          About
        </a>
      </li>
      <li className="hover:text-golden-accent duration-200 hover:font-semibold">
        <a href="#contact" className="">
          Contact
        </a>
      </li>
    </ul>
  );
}
