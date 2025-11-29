import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import React, { useEffect } from "react";
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function AuroraBackground({ children }: { children: React.ReactNode }) {
 const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 150% at 50% 0%, #0c0c0cff 50%, ${color})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative min-h-screen"
    >
      {children}
    </motion.section>
  );
}