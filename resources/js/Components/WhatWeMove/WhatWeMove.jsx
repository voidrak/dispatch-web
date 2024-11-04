import React from "react";
import RevealXLeft from "../../utils/RevealXLeft";

export default function WhatWeMove() {
  return (
    <div id="what_we_move" className="flex flex-col bg-bg-light px-1">
      <RevealXLeft>
        <div className="mx-auto max-w-[550px] text-center sm:mx-0 sm:ml-8 sm:text-left lg:max-w-[650px] xl:px-16">
          <h1 className="text-nowrap text-4xl font-extrabold sm:text-6xl lg:text-8xl 2xl:text-9xl">
            What We Move
          </h1>
          <p className="mt-4 sm:text-xl lg:max-w-[600px]">
            What We Move" covers all types of cargo truck dispatchers handle,
            from raw materials to consumer goods, ensuring efficient and timely
            deliveries.
          </p>
        </div>
      </RevealXLeft>
      <div className="mx-auto grid max-w-[437x] grid-cols-2 gap-1 pt-16 min-[450px]:px-2 sm:grid-cols-3 md:px-6 lg:px-8 xl:max-w-[1280px] xl:gap-3 xl:px-16 2xl:min-w-[1536px]">
        <img
          className="duration-300 hover:z-10 hover:translate-x-4 hover:translate-y-2 hover:scale-105 xl:w-[100%]"
          src=" images/what-we-move-top-left.webp"
          alt="sprinter van"
        />
        <img
          className="duration-300 hover:z-10 hover:translate-x-4 hover:translate-y-2 hover:scale-105 xl:w-[100%]"
          src="images/what-we-move-top-center.webp"
          alt="removable gooseneck"
        />
        <img
          className="-translate-y-[31%] duration-300 hover:z-10 hover:translate-x-4 hover:translate-y-2 hover:scale-105 sm:translate-y-0 xl:w-[100%]"
          src="images/what-we-move-top-right.webp"
          alt="dry van"
        />
        <img
          className="translate-y-[10%] duration-300 hover:z-10 hover:-translate-y-[43%] hover:translate-x-4 hover:scale-105 sm:-translate-y-[41%] xl:w-[100%]"
          src="images/what-we-move-center-left.webp"
          alt="semi track"
        />
        <img
          className="-translate-y-[50%] duration-300 hover:z-10 hover:-translate-y-[15%] hover:translate-x-4 hover:scale-105 sm:-translate-y-[10%] xl:w-[100%]"
          src="images/what-we-move-center-center.webp"
          alt="flat bed"
        />
        <div className="bg-transparent"></div>
        <img
          className="-translate-y-[50%] duration-300 hover:z-10 hover:-translate-y-[67%] hover:translate-x-4 hover:scale-105 sm:-translate-y-[65%] xl:w-[100%]"
          src="images/what-we-move-bottom-left.webp"
          alt="straight box truck"
        />
        <div className="bg-transparent sm:hidden sm:bg-red-500"></div>
        <img
          className="mb-10 -translate-y-[50%] duration-300 hover:z-10 hover:-translate-y-[68%] hover:translate-x-4 hover:scale-105 sm:-translate-y-[65%] xl:w-[100%]"
          src="images/what-we-move-bottom-center.webp"
          alt="reefer"
        />
        <img
          className="-translate-y-[90%] duration-300 hover:z-10 hover:-translate-y-[85%] hover:translate-x-4 hover:scale-105 sm:-translate-y-[83%] xl:w-[100%]"
          src="images/what-we-move-bottom-right.webp"
          alt="step deck"
        />
      </div>
      <button className="mx-auto -translate-y-[150px] rounded-md bg-black px-8 py-2 text-white duration-200 hover:scale-105 md:-translate-y-[250px] lg:-translate-y-[350px] lg:px-16 lg:py-4 xl:-translate-y-[450px]">
        <a href="#contact" className="">
          MORE
        </a>
      </button>
    </div>
  );
}
