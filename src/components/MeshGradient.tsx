"use client";

import { motion } from "framer-motion";

export function MeshGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#050510] to-[#030303]" />

      {/* Animated mesh blobs */}
      <div className="absolute inset-0">
        {/* Primary accent blob - top center */}
        <motion.div
          className="absolute w-[800px] h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse at center, #0066ff 0%, transparent 70%)",
            filter: "blur(80px)",
            top: "-20%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          animate={{
            scale: [1, 1.2, 1.1, 1],
            x: ["-50%", "-45%", "-55%", "-50%"],
            opacity: [0.3, 0.4, 0.35, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cyan blob - right side */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse at center, #00d4ff 0%, transparent 70%)",
            filter: "blur(100px)",
            top: "10%",
            right: "-10%",
          }}
          animate={{
            scale: [1, 1.3, 1],
            y: ["0%", "10%", "0%"],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Purple blob - left side */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse at center, #8b5cf6 0%, transparent 70%)",
            filter: "blur(90px)",
            top: "30%",
            left: "-5%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            y: ["0%", "-5%", "5%", "0%"],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Deep blue blob - bottom */}
        <motion.div
          className="absolute w-[700px] h-[400px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(ellipse at center, #0033aa 0%, transparent 70%)",
            filter: "blur(80px)",
            bottom: "0%",
            left: "30%",
          }}
          animate={{
            scale: [1, 1.1, 1],
            x: ["0%", "5%", "-5%", "0%"],
            opacity: [0.25, 0.3, 0.25],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle pink accent */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(ellipse at center, #ec4899 0%, transparent 70%)",
            filter: "blur(100px)",
            bottom: "20%",
            right: "10%",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.2, 0.15],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  );
}
