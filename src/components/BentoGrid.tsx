"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Animated email lines component
function EmailLines({ className }: { className?: string }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {[100, 85, 92, 78, 65].map((width, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 + i * 0.03 }}
          className="h-2 rounded-full bg-white/10"
          style={{ width: `${width}%` }}
        />
      ))}
    </div>
  );
}

// Animated summary output
function SummaryOutput() {
  const items = [
    { icon: "📅", text: "Launch: Dec 15" },
    { icon: "💰", text: "Budget approved" },
    { icon: "⚡", text: "3 action items" },
  ];

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.08 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
        >
          <span className="text-sm">{item.icon}</span>
          <span className="text-xs text-text-primary font-medium">{item.text}</span>
        </motion.div>
      ))}
    </div>
  );
}

// Typing animation for draft
function TypingDraft() {
  return (
    <div className="relative">
      <div className="space-y-1.5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="h-2 rounded-full bg-gradient-to-r from-white/30 to-transparent overflow-hidden"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "85%" }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="h-2 rounded-full bg-gradient-to-r from-white/20 to-transparent overflow-hidden"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "70%" }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="h-2 rounded-full bg-gradient-to-r from-white/10 to-transparent overflow-hidden"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-0.5 h-4 bg-white/50"
      />
    </div>
  );
}

export function BentoGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section ref={containerRef} className="relative w-full py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-text-primary">
            First Warps for Mail
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-text-secondary max-w-md mx-auto">
            Email, reimagined. Each Warp is a shortcut to done.
          </p>
        </motion.div>

        {/* Apple-style Bento Grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">

          {/* ===== SUMMARIZE - Large Feature Card ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="col-span-4 md:col-span-4 row-span-1 md:row-span-1 relative group"
          >
            <div className="relative h-full min-h-[280px] md:min-h-[320px] p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-white/20 transition-colors">
              {/* Subtle glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-[100px] -z-10" />

              <div className="flex flex-col md:flex-row h-full gap-6">
                {/* Left: Text */}
                <div className="flex-1 flex flex-col">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-primary">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mb-2">
                    Summarize
                  </h3>
                  <p className="text-sm md:text-base text-text-secondary mb-4 max-w-xs">
                    Long email? Get the TL;DR in 2 seconds. Action items extracted automatically.
                  </p>

                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-1.5 text-xs text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      Instant extraction
                    </span>
                  </div>
                </div>

                {/* Right: Visual Demo */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-full max-w-[200px]">
                    {/* Email preview */}
                    <div className="absolute inset-0 -rotate-3 rounded-xl bg-white/5 border border-white/10 p-3 opacity-50">
                      <EmailLines />
                    </div>
                    {/* Summary card */}
                    <motion.div
                      initial={{ opacity: 0, y: 15, rotate: 0 }}
                      animate={isInView ? { opacity: 1, y: 0, rotate: 3 } : {}}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="relative rounded-xl bg-[#0a0a0a] border border-white/20 p-4 shadow-xl"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        <span className="text-[10px] text-text-secondary font-medium">Summary</span>
                      </div>
                      <SummaryOutput />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== DRAFT REPLY - Tall Card ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="col-span-2 row-span-1 relative group"
          >
            <div className="relative h-full min-h-[280px] md:min-h-[320px] p-5 md:p-6 rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-white/20 transition-colors">
              {/* Subtle glow */}
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/[0.02] rounded-full blur-[80px] -z-10" />

              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-primary">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-2">
                Draft Reply
              </h3>
              <p className="text-xs md:text-sm text-text-secondary mb-4">
                Say what you want. Warp Flow writes it.
              </p>

              {/* Typing visual */}
              <div className="mt-auto pt-4">
                <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                  <TypingDraft />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== ROW 2: Three smaller cards ===== */}

          {/* Triage */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="col-span-2 relative group"
          >
            <div className="relative h-full min-h-[160px] md:min-h-[180px] p-5 md:p-6 rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-white/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-primary">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <span className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 border border-white/10 text-text-secondary">
                  Coming soon
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-1">
                Triage
              </h3>
              <p className="text-xs text-text-secondary">
                Inbox zero, automatically.
              </p>
            </div>
          </motion.div>

          {/* Voice */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="col-span-2 relative group"
          >
            <div className="relative h-full min-h-[160px] md:min-h-[180px] p-5 md:p-6 rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-white/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-primary">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                  </svg>
                </div>
                <span className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 border border-white/10 text-text-secondary">
                  Coming soon
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-1">
                Voice
              </h3>
              <p className="text-xs text-text-secondary">
                Speak, don&apos;t type.
              </p>
            </div>
          </motion.div>

          {/* More Apps */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="col-span-2 relative group"
          >
            <div className="relative h-full min-h-[160px] md:min-h-[180px] p-5 md:p-6 rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-white/20 transition-colors flex flex-col justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-1">
                  More Apps
                </h3>
                <p className="text-xs text-text-secondary">
                  Calendar, Notes, Browser...
                </p>
              </div>

              {/* App icons preview */}
              <div className="flex gap-2 mt-4">
                {["📅", "📝", "🌐", "💬"].map((emoji, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.05, type: "spring", duration: 0.3 }}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sm md:text-base"
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
