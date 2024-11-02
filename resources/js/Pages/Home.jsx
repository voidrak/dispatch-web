import React from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header/Header";
import Landing from "../Components/HomeLanding/Landing";
import AboutUs from "../Components/AboutUs/AboutUs";
import WhatWeMove from "../Components/WhatWeMove/WhatWeMove";
import FrequentlyQuestions from "../Components/Frequently/FrequentlyQuestions";
export default function Home() {
  return (
    <div className="w-full overflow-x-hidden font-Satoshi">
      <Header />
      <Landing />
      <AboutUs />
      <WhatWeMove />
      <FrequentlyQuestions />
    </div>
  );
}
