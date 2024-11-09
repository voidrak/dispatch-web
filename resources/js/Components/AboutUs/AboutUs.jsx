import React from "react";
import RevealXLeft from "../../utils/RevealXLeft";
import RevealXRight from "../../utils/RevealXRight";

export default function AboutUs() {
  return (
    <div
      id="about"
      className="flex flex-col items-center gap-x-2 bg-bg-light px-4 py-8 pt-8 sm:flex-row xl:justify-center 2xl:py-48"
    >
      <RevealXLeft>
        <div className="mx-auto max-w-[550px] text-center sm:text-left lg:max-w-[650px]">
          <h1 className="my-2 text-5xl font-extrabold md:text-6xl lg:text-8xl xl:text-9xl">
            About Us
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Truck Dispatch Services:
          </h2>
          <p className="mt-4 text-sm xl:text-base">
            ABC LLC is a full-service truck dispatching company dedicated to
            managing all back-office operations, allowing small carriers to
            compete effectively with larger fleets. While large carriers often
            employ in-house staff to handle these tasks, this option is often
            cost-prohibitive for smaller operators. ABC LLC bridges this gap by
            providing professional support tailored to the needs of smaller
            carriers.
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
