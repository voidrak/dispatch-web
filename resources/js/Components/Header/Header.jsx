import React from "react";
import NavigationBar from "./NavigationBar";
import LargeHeader from "./LargeHeader";

export default function Header() {
  return (
    <div className="fixed left-0 top-0 z-50 flex w-screen items-center justify-between gap-x-8 bg-bg-dark/60 px-4 text-white opacity-90 sm:justify-center lg:py-2">
      <img src="/images/truck-logo.png" alt="logo" className="w-[100px]" />
      <NavigationBar />
      <LargeHeader />
    </div>
  );
}
