"use client";

import { motion } from "framer-motion";
import { GrainOverlay } from "@/components/GrainOverlay";
import { MockupVisual } from "@/components/MockupVisual";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <GrainOverlay />

      {/* Gradient background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-text-primary"
        >
          Warp into Flow
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-lg md:text-xl text-text-secondary max-w-xl mx-auto"
        >
          The AI overlay for your Mac.
          <br />
          Context-aware. Voice-first. Zero switching.
        </motion.p>

        {/* Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <WaitlistForm />
        </motion.div>

        {/* Small Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-sm text-text-secondary"
        >
          Coming 2026 &middot; macOS only
        </motion.p>

        {/* Mockup Visual */}
        <MockupVisual />
      </div>
    </main>
  );
}
