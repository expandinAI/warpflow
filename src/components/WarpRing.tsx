"use client";

import { motion } from "framer-motion";

export function WarpRing() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Outer breathing ring */}
      <motion.div
        className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full border border-accent/20"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.15, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Middle ring - offset timing */}
      <motion.div
        className="absolute w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Inner subtle glow */}
      <motion.div
        className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/5 blur-md"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
