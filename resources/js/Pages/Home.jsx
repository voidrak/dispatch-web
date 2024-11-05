import React from "react";
import { motion } from "framer-motion";
import Header from "../Components/Header/Header";
import Landing from "../Components/HomeLanding/Landing";
import AboutUs from "../Components/AboutUs/AboutUs";
import WhatWeMove from "../Components/WhatWeMove/WhatWeMove";
import FrequentlyQuestions from "../Components/Frequently/FrequentlyQuestions";
import AllCountUp from "../Components/ClientsCountUp/AllCountUp";
import ServicesSection from "../Components/ServicesSection/ServicesSection";
import OurServices from "../Components/OurServices/OurServices";
import Footer from "../Components/Footer/Footer";
import ContactUs from "../Components/ContactUs/ContactUs";
import toast, { Toaster } from "react-hot-toast";
export default function Home() {
  return (
    <div className="w-full overflow-x-hidden font-Satoshi">
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "",

          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
            marginTop: "150px",
            marginLeft: "auto",
            marginRight: "auto",
          },

          success: {
            duration: 2000,
            theme: {
              primary: "green",
              secondary: "black",
            },
            style: {
              background: "#5a9bc1",
              color: "#fff",
            },
          },
          error: {
            duration: 2000,

            style: {
              background: "#fff",
              color: "#c15a5a",
            },
          },
        }}
      />

      <Header />
      <Landing />
      <AboutUs />
      <WhatWeMove />
      <FrequentlyQuestions />
      <AllCountUp />
      <ServicesSection />
      <OurServices />
      <ContactUs />
      <Footer />
    </div>
  );
}
