"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { WarpRing } from "./WarpRing";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function WarpLogo() {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Simplified version for reduced motion
  if (prefersReducedMotion) {
    return (
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative w-8 h-8 md:w-9 md:h-9 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-black/30 overflow-hidden transition-transform duration-200 ${isHovered ? 'scale-105' : ''}`}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="md:w-[18px] md:h-[18px] relative z-10"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <WarpRing />

      {/* Main logo */}
      <motion.div
        className="relative w-8 h-8 md:w-9 md:h-9 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-black/30 overflow-hidden"
        animate={isHovered ? {
          scale: [1, 1.08, 0.95, 1.02, 1],
          rotate: [0, -2, 2, -1, 0],
        } : { scale: 1, rotate: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Warp scan line effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent"
          initial={{ y: "-100%" }}
          animate={isHovered ? { y: ["100%", "-100%"] } : { y: "-100%" }}
          transition={{ duration: 0.3, ease: "linear" }}
        />

        {/* Glitch offset layers */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={isHovered ? {
            x: [-1, 2, -1, 0],
            opacity: [0, 0.7, 0.5, 0],
          } : { x: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff6b6b"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="md:w-[18px] md:h-[18px]"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={isHovered ? {
            x: [1, -2, 1, 0],
            opacity: [0, 0.7, 0.5, 0],
          } : { x: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4ecdc4"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="md:w-[18px] md:h-[18px]"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </motion.div>

        {/* Main icon */}
        <motion.svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="md:w-[18px] md:h-[18px] relative z-10"
          animate={isHovered ? {
            scale: [1, 0.9, 1.1, 1],
          } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </motion.svg>
      </motion.div>

      {/* Flash effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-white pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isHovered ? {
          opacity: [0, 0.3, 0],
        } : { opacity: 0 }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
