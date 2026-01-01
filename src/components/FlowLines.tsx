"use client";

import { motion } from "framer-motion";

export function FlowLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-5">
      {/* Main flowing curve - left side */}
      <svg
        className="absolute left-0 top-0 h-full w-1/2 opacity-[0.08]"
        viewBox="0 0 400 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M 400 0 Q 100 250 300 500 Q 500 750 200 1000"
          stroke="url(#flowGradient1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="white" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Secondary flowing curve - right side */}
      <svg
        className="absolute right-0 top-0 h-full w-1/2 opacity-[0.06]"
        viewBox="0 0 400 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M 0 0 Q 300 200 100 450 Q -100 700 200 1000"
          stroke="url(#flowGradient2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
        />
        <defs>
          <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="20%" stopColor="white" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="80%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Animated particle traveling along path - accent colored */}
      <svg
        className="absolute left-0 top-0 h-full w-1/2"
        viewBox="0 0 400 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.circle
          r="3"
          fill="#3b82f6"
          opacity="0.5"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            offsetPath: "path('M 400 0 Q 100 250 300 500 Q 500 750 200 1000')",
          }}
        />
      </svg>

      {/* Second particle on right path */}
      <svg
        className="absolute right-0 top-0 h-full w-1/2"
        viewBox="0 0 400 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.circle
          r="2"
          fill="white"
          opacity="0.3"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          style={{
            offsetPath: "path('M 0 0 Q 300 200 100 450 Q -100 700 200 1000')",
          }}
        />
      </svg>
    </div>
  );
}
