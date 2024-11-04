import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxEffect = ({ children, yRange = ["10%", "-10%"] }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxEffect;
