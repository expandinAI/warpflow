"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface WarpTextProps {
  children: string;
  className?: string;
}

export function WarpText({ children, className = "" }: WarpTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      className={`relative inline-block cursor-default ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main text */}
      <span className="relative z-10">{children}</span>

      {/* Chromatic aberration layers - visible on hover */}
      <motion.span
        className="absolute inset-0 text-red-500/60 z-0 pointer-events-none select-none"
        aria-hidden="true"
        initial={{ x: 0, opacity: 0 }}
        animate={isHovered ? {
          x: [-2, 2, -1, 0],
          opacity: [0, 0.6, 0.4, 0],
          skewX: [0, -2, 1, 0]
        } : { x: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.span>

      <motion.span
        className="absolute inset-0 text-cyan-400/60 z-0 pointer-events-none select-none"
        aria-hidden="true"
        initial={{ x: 0, opacity: 0 }}
        animate={isHovered ? {
          x: [2, -2, 1, 0],
          opacity: [0, 0.6, 0.4, 0],
          skewX: [0, 2, -1, 0]
        } : { x: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.span>

      {/* Warp distortion effect on main text */}
      <motion.span
        className="absolute inset-0 z-20 pointer-events-none select-none"
        aria-hidden="true"
        initial={{ scaleX: 1, skewX: 0 }}
        animate={isHovered ? {
          scaleX: [1, 1.02, 0.98, 1],
          skewX: [0, -3, 2, 0],
        } : { scaleX: 1, skewX: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.1), transparent)",
          mixBlendMode: "overlay"
        }}
      />

      {/* Glitch line effect */}
      <motion.span
        className="absolute left-0 right-0 h-[2px] bg-accent/80 z-30 pointer-events-none"
        aria-hidden="true"
        initial={{ opacity: 0, top: "50%" }}
        animate={isHovered ? {
          opacity: [0, 1, 1, 0],
          top: ["0%", "30%", "70%", "100%"],
          scaleX: [0.3, 1, 0.8, 0.2],
        } : { opacity: 0 }}
        transition={{ duration: 0.25, ease: "linear" }}
      />
    </motion.span>
  );
}
