"use client";

import { motion } from "framer-motion";

export function MeshGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#080808] to-[#0a0a0a]" />

      {/* Subtle monochrome fog - static on mobile */}
      <div className="md:hidden absolute inset-0">
        <div
          className="absolute w-[500px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(ellipse at center, #ffffff 0%, transparent 70%)",
            filter: "blur(80px)",
            top: "-15%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      {/* Animated monochrome fog - desktop only */}
      <div className="hidden md:block absolute inset-0">
        {/* Primary soft light - top center */}
        <motion.div
          className="absolute w-[900px] h-[600px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(ellipse at center, #ffffff 0%, transparent 60%)",
            filter: "blur(100px)",
            top: "-25%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          animate={{
            opacity: [0.04, 0.06, 0.04],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary soft light - bottom right */}
        <motion.div
          className="absolute w-[600px] h-[500px] rounded-full opacity-[0.025]"
          style={{
            background: "radial-gradient(ellipse at center, #ffffff 0%, transparent 65%)",
            filter: "blur(120px)",
            bottom: "-10%",
            right: "-5%",
          }}
          animate={{
            opacity: [0.025, 0.04, 0.025],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      </div>

      {/* Enhanced noise texture overlay - optimized for Retina */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Subtle vignette effect */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, #000000 100%)",
        }}
      />
    </div>
  );
}
