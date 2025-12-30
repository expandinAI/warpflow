"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function WarpPortal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, 180]);
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const rings = Array.from({ length: 8 }, (_, i) => i);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity }}
      className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden"
    >
      {/* Warp tunnel effect */}
      <motion.div
        style={{ scale, rotate }}
        className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
      >
        {rings.map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, i % 2 === 0 ? 360 : -360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
            style={{
              transform: `translate(${(mousePosition.x - 0.5) * 20 * (i + 1)}px, ${(mousePosition.y - 0.5) * 20 * (i + 1)}px)`,
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className="rounded-full border"
              style={{
                width: `${100 - i * 10}%`,
                height: `${100 - i * 10}%`,
                borderColor: `hsla(${220 + i * 15}, 80%, 60%, ${0.4 - i * 0.04})`,
                boxShadow: `0 0 ${30 - i * 3}px hsla(${220 + i * 15}, 80%, 60%, ${0.2 - i * 0.02}), inset 0 0 ${20 - i * 2}px hsla(${220 + i * 15}, 80%, 60%, ${0.1})`,
              }}
            />
          </motion.div>
        ))}

        {/* Center core */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-accent via-blue-400 to-purple-500 blur-xl opacity-60" />
        </motion.div>

        {/* Lightning bolt icon in center */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-accent to-blue-400 flex items-center justify-center shadow-2xl shadow-accent/50">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
        </motion.div>

        {/* Floating particles around the portal */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            animate={{
              x: [0, Math.sin(i) * 100, 0],
              y: [0, Math.cos(i) * 100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{
              left: `${50 + Math.sin(i * 0.5) * 40}%`,
              top: `${50 + Math.cos(i * 0.5) * 40}%`,
            }}
          >
            <div
              className="w-1 h-1 md:w-2 md:h-2 rounded-full"
              style={{
                background: `hsla(${200 + i * 10}, 80%, 60%, 0.8)`,
                boxShadow: `0 0 10px hsla(${200 + i * 10}, 80%, 60%, 0.5)`,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Text overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-12 md:bottom-20 text-center px-6"
      >
        <p className="text-xl md:text-2xl text-text-secondary font-light">
          Enter the{" "}
          <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent font-semibold">
            Warp
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
}
