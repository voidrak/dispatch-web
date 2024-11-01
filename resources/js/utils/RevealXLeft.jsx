import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const RevealXLeft = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });
  const mainControls = useAnimation();
  const revelVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={revelVariants}
      initial="hidden"
      animate={mainControls}
      className="bg-transparent"
    >
      {children}
    </motion.div>
  );
};

export default RevealXLeft;
