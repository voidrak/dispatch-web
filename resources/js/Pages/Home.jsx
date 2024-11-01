import React from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header/Header";
import Landing from "../Components/HomeLanding/Landing";
import AboutUs from "../Components/AboutUs/AboutUs";
export default function Home() {
  return (
    <div className="w-full font-Satoshi">
      <Header />
      <Landing />
      <AboutUs />
    </div>
  );
}
