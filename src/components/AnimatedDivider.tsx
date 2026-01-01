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
        {/* Mobile: Simple subtle line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:hidden absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent origin-center"
        />

        {/* Desktop: Clean subtle white line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent origin-center"
        />
      </div>
    </div>
  );
}
