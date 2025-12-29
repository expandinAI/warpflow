"use client";

import { motion } from "framer-motion";

export function MockupVisual() {
  return (
    <div className="relative w-full max-w-3xl mx-auto mt-16 md:mt-24">
      {/* macOS Window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative rounded-xl bg-bg-secondary border border-white/10 overflow-hidden shadow-2xl"
      >
        {/* Window Title Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-text-secondary">Mail</span>
          </div>
        </div>

        {/* Window Content - Abstract Mail App */}
        <div className="p-6 min-h-[280px] md:min-h-[320px]">
          {/* Sidebar placeholder */}
          <div className="flex gap-6">
            <div className="hidden md:flex flex-col gap-3 w-48">
              <div className="h-8 bg-white/5 rounded-md w-full" />
              <div className="h-6 bg-white/5 rounded-md w-3/4" />
              <div className="h-6 bg-white/5 rounded-md w-5/6" />
              <div className="h-6 bg-white/5 rounded-md w-2/3" />
              <div className="mt-4 h-6 bg-white/5 rounded-md w-full" />
              <div className="h-6 bg-white/5 rounded-md w-4/5" />
            </div>

            {/* Main content area */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10" />
                <div className="flex-1">
                  <div className="h-4 bg-white/10 rounded w-32 mb-2" />
                  <div className="h-3 bg-white/5 rounded w-48" />
                </div>
              </div>
              <div className="h-4 bg-white/5 rounded w-full mt-4" />
              <div className="h-4 bg-white/5 rounded w-5/6" />
              <div className="h-4 bg-white/5 rounded w-4/6" />
              <div className="h-4 bg-white/5 rounded w-full mt-2" />
              <div className="h-4 bg-white/5 rounded w-3/4" />
            </div>
          </div>
        </div>

        {/* WarpFlow Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] md:w-[70%]"
        >
          <div
            className="relative rounded-xl border border-accent/30 bg-bg-primary/80 backdrop-blur-xl p-4 shadow-glow"
          >
            {/* Glow effect behind */}
            <div className="absolute inset-0 -z-10 rounded-xl bg-accent/10 blur-xl" />

            {/* Overlay content */}
            <div className="flex items-center gap-3">
              {/* WarpFlow icon */}
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>

              {/* Input simulation */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-text-primary text-sm">Summarize this email thread</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                    className="w-0.5 h-4 bg-accent"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
