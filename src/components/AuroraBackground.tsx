import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import React, { useEffect } from "react";
const COLORS_TOP = ["#00a295ff", "#2583b9ff", "#572faeff"];

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
      <div className="absolute inset-0 z-0">
        
      </div> {/*<Canvas>
          <Stars count={500} factor={10} fade speed={.5} />
        </Canvas> */}
    </motion.section>
  );
}