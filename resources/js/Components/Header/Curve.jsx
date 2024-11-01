import React from "react";
import { motion } from "framer-motion";
const Curve = () => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0 `;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0 `;

  const pathVariants = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className="   absolute left-[-99px] top-0 h-full  stroke-none  ">
      <motion.path
        variants={pathVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        // d={initialPath}
      >
        {" "}
      </motion.path>
    </svg>
  );
};

export default Curve;
