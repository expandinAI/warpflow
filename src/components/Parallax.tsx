"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  speed?: number; // -1 to 1, negative = slower, positive = faster
  className?: string;
}

export function Parallax({ children, speed = 0.5, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Convert speed to pixel offset range
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

// Floating element with parallax + subtle rotation
interface FloatingParallaxProps {
  children: ReactNode;
  speed?: number;
  rotate?: number;
  className?: string;
}

export function FloatingParallax({
  children,
  speed = 0.3,
  rotate = 5,
  className = "",
}: FloatingParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 80, speed * -80]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [-rotate, rotate]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y, rotate: rotateZ }}>{children}</motion.div>
    </div>
  );
}
