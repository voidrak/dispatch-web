import React from "react";
import RevealXLeft from "../../utils/RevealXLeft";
import RevealXRight from "../../utils/RevealXRight";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center gap-x-2 bg-bg-light px-2 py-8 pt-8 sm:flex-row md:px-4 xl:justify-center">
      <RevealXLeft>
        <div className="] mx-auto max-w-[550px] text-center sm:text-left lg:max-w-[650px]">
          <h1 className="my-2 text-5xl font-extrabold md:text-6xl lg:text-8xl xl:text-9xl">
            About Us
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Truck Dispatch Services:
          </h2>
          <p className="mt-4 text-sm xl:text-base">
            Keyway-dispatch LLC is a “Full Service” truck dispatching company
            that handles all of the back-office work so you can compete with the
            large fleets. Typically, a large carrier would hire somebody to
            handle all of these tasks, but it is unaffordable for a small
            carrier, that’s where Keyway-dispatcher LLC comes in to help!
          </p>
        </div>
      </RevealXLeft>
      <RevealXRight>
        <div className="mt-8 hidden sm:block">
          <img
            src="images/about-us-track.webp"
            alt="about us track"
            className="2xl:w-[720px]"
          />
        </div>
      </RevealXRight>
    </div>
  );
}
