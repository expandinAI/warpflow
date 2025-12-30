"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function HolographicCard({
  children,
  className = "",
  glowColor = "rgba(0, 102, 255, 0.5)",
}: HolographicCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ["-100%", "200%"]);
  const sheenOpacity = useTransform(
    mouseXSpring,
    [-0.5, 0, 0.5],
    [0, 0.1, 0]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {/* Holographic sheen */}
      <motion.div
        style={{
          x: sheenX,
          opacity: sheenOpacity,
        }}
        className="absolute inset-0 z-10 pointer-events-none rounded-2xl"
        aria-hidden
      >
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(
              115deg,
              transparent 0%,
              transparent 25%,
              rgba(255, 255, 255, 0.3) 45%,
              rgba(255, 255, 255, 0.5) 50%,
              rgba(255, 255, 255, 0.3) 55%,
              transparent 75%,
              transparent 100%
            )`,
          }}
        />
      </motion.div>

      {/* Rainbow border effect */}
      <motion.div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(
            var(--rotation, 0deg),
            #ff0080,
            #7928ca,
            #0070f3,
            #00d4aa,
            #ff0080
          )`,
          backgroundSize: "200% 200%",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute -inset-4 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{ background: glowColor }}
      />

      {/* Content container */}
      <div className="relative bg-bg-primary rounded-2xl overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
}

// Magnetic button effect
export function MagneticButton({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
