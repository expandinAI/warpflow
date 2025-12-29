"use client";

import { motion } from "framer-motion";
import { GrainOverlay } from "@/components/GrainOverlay";
import { MockupVisual } from "@/components/MockupVisual";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start px-6 py-16 md:py-24 overflow-hidden">
      <GrainOverlay />

      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-accent rounded-full blur-[180px]"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent rounded-full blur-[130px]"
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Logo / Brand */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2.5 mb-16 md:mb-20"
      >
        <motion.div
          className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-blue-400 flex items-center justify-center shadow-lg shadow-accent/25"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </motion.div>
        <span className="text-text-primary font-semibold text-xl tracking-tight">WarpFlow</span>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="text-sm text-text-secondary">Coming 2026</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-[5.5rem] font-semibold tracking-tight text-text-primary leading-[1.05]"
        >
          Warp into{" "}
          <span className="relative">
            <span className="bg-gradient-to-r from-accent via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Flow
            </span>
            <motion.span
              className="absolute -inset-1 bg-accent/20 blur-2xl -z-10 rounded-full"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          <span className="text-text-primary font-medium">The AI Copilot for your Mac.</span>
          <br />
          Context-aware. Voice-first. Zero switching.
        </motion.p>

        {/* Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <WaitlistForm />
        </motion.div>

        {/* Platform info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-2 mt-6 text-sm text-text-secondary"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="opacity-60"
          >
            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
          </svg>
          <span>macOS only</span>
        </motion.div>

        {/* Mockup Visual */}
        <MockupVisual />
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="mt-auto pt-16 pb-8 text-center"
      >
        <p className="text-xs text-text-secondary/40">
          &copy; {new Date().getFullYear()} WarpFlow. All rights reserved.
        </p>
      </motion.footer>
    </main>
  );
}
