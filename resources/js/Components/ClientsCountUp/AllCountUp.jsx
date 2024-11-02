import React from "react";
import ClientsCountUp from "./ClientsCountUp";
import BookedCountUp from "./BookedCountUp";
import RevenueCountUp from "./RevenueCountUp";

export default function AllCountUp() {
  return (
    <div className="flex w-full justify-center bg-bg-light">
      <div className="container mx-auto grid max-w-[1024px] items-center justify-around gap-y-4 py-8 sm:flex sm:py-16 lg:py-24 xl:py-32 2xl:py-48">
        <div className="space-y-2 md:space-y-4 lg:space-y-6">
          <div className="flex justify-center text-5xl font-extrabold min-[450px]:text-6xl sm:text-5xl md:gap-x-1 md:text-6xl lg:text-7xl">
            <BookedCountUp />

            <span className="">+</span>
          </div>
          <h1 className="text-center text-xl font-semibold lg:text-2xl">
            Loads Booked
          </h1>
        </div>
        <div className="space-y-2 md:space-y-4 lg:space-y-6">
          <div className="flex justify-center text-5xl font-extrabold min-[450px]:text-6xl sm:text-5xl md:gap-x-1 md:text-6xl lg:text-7xl">
            <RevenueCountUp />

            <span className="">+</span>
          </div>
          <h1 className="text-center text-xl font-semibold lg:text-2xl">
            Weekly Gross Revenue
          </h1>
        </div>
        <div className="space-y-2 md:space-y-4 lg:space-y-6">
          <div className="flex justify-center text-5xl font-extrabold min-[450px]:text-6xl sm:text-5xl md:gap-x-1 md:text-6xl lg:text-7xl">
            <ClientsCountUp />

            <span className="">+</span>
          </div>
          <h1 className="text-center text-xl font-semibold lg:text-2xl">
            Clients
          </h1>
        </div>
      </div>
    </div>
  );
}
