import React from "react";

export default function WhatWeMove() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-light px-1 py-8">
      <div className="mx-auto max-w-[550px] text-center sm:mx-0 sm:ml-8 sm:text-left lg:max-w-[650px] xl:px-16">
        <h1 className="text-nowrap text-4xl font-extrabold sm:text-6xl lg:text-8xl 2xl:text-9xl">
          What We Move
        </h1>
        <p className="mt-4 sm:text-xl lg:max-w-[600px]">
          What We Move" covers all types of cargo truck dispatchers handle, from
          raw materials to consumer goods, ensuring efficient and timely
          deliveries.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-[437x] grid-cols-2 gap-1 sm:grid-cols-3 lg:px-4 xl:max-w-[1280px] xl:gap-3 xl:px-16 2xl:min-w-[1536px]">
        <img
          className="duration-300 hover:z-10 hover:translate-x-4 hover:translate-y-2 hover:scale-105 xl:w-[100%]"
          src=" images/what-we-move-top-left.webp"
          alt="track-image-1"
        />
        <img
          className="duration-300 hover:z-10 hover:translate-x-4 hover:translate-y-2 hover:scale-105 xl:w-[100%]"
          src="images/what-we-move-top-center.webp"
          alt="track-image-2"
        />
        <img
          className="hidden duration-300 hover:z-10 hover:translate-x-4 hover:translate-y-2 hover:scale-105 sm:block xl:w-[100%]"
          src="images/what-we-move-top-right.webp"
          alt="track-image-3"
        />
        <img
          className="-translate-y-[30%] duration-300 hover:z-10 hover:-translate-y-[31%] hover:translate-x-4 hover:scale-105 sm:-translate-y-[40%] xl:w-[100%]"
          src="images/what-we-move-bottom-left.webp"
          alt="track-image-4"
        />
        <img
          className="duration-300 hover:z-10 hover:translate-x-4 hover:translate-y-2 hover:scale-105 sm:-translate-y-[18%] xl:w-[100%] xl:-translate-y-[10%]"
          src="images/what-we-move-bottom-center.webp"
          alt="track-image-5"
        />
        <img
          className="hidden duration-300 hover:z-10 hover:translate-x-4 hover:translate-y-2 hover:scale-105 sm:block xl:w-[100%]"
          src="images/what-we-move-top-left.webp"
          alt="track-image-6"
        />
      </div>
      <button className="mx-auto -translate-y-4 rounded-md bg-black px-8 py-2 text-white duration-200 hover:scale-105 lg:-translate-y-16 lg:px-16 lg:py-4 xl:-translate-y-24 2xl:-translate-y-32">
        <a href="#contact" className="">
          MORE
        </a>
      </button>
    </div>
  );
}
