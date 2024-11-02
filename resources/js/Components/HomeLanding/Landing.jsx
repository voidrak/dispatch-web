import React from "react";
import { motion } from "framer-motion";
import Reveal from "../../utils/RevealY";
export default function Landing() {
  return (
    <div className="flex min-h-svh items-center bg-[url('images/home-landing-small.jpg')] bg-center text-white sm:bg-[url('/images/home-landing.webp')] sm:bg-center lg:bg-cover">
      <Reveal delay={0.5}>
        <div className="ml-3 max-w-[420px] sm:ml-8 sm:max-w-[600px] lg:ml-16 lg:max-w-[720px]">
          <h1 className="text-4xl font-bold 2xl:text-6xl">Truck Dispatch</h1>

          <h1 className="-mt-1 text-7xl font-extrabold sm:text-8xl 2xl:text-9xl">
            Services
          </h1>

          <p className="ml-2 mt-5 text-sm lg:text-base">
            Truck Dispatch Services manage load scheduling, routing, and
            communication for truck drivers, streamlining deliveries and
            maximizing efficiency. This allows drivers to focus on safe, timely
            transport while dispatchers handle logistics.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
