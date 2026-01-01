"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedDividerProps {
  className?: string;
}

export function AnimatedDivider({ className = "" }: AnimatedDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`w-full max-w-xs md:max-w-4xl mx-auto px-6 ${className}`}>
      <div className="relative h-px">
        {/* Background line (subtle) */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Animated accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent origin-center"
        />

        {/* Center glow dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent/50 blur-[2px]"
        />
      </div>
    </div>
  );
}
