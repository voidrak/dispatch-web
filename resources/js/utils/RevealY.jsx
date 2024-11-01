import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, delay } from "framer-motion";

const RevealY = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "all" });
  const mainControls = useAnimation();
  const revelVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
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

export default RevealY;
