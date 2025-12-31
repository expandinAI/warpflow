"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { GrainOverlay } from "@/components/GrainOverlay";
import { WaitlistForm } from "@/components/WaitlistForm";
import { HowItWorks } from "@/components/HowItWorks";
import { Philosophy } from "@/components/Philosophy";
import { BentoGrid } from "@/components/BentoGrid";
import { MockupVisual } from "@/components/MockupVisual";
import { CursorGlow } from "@/components/CursorGlow";
import { MeshGradient } from "@/components/MeshGradient";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#030303]"
    >
      {/* Cursor glow effect - desktop only */}
      <CursorGlow />

      <GrainOverlay />

      {/* Animated mesh gradient background */}
      <MeshGradient />

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative w-full min-h-screen flex flex-col px-5 md:px-6 pt-6 md:pt-8 pb-8">
        {/* Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-2 md:gap-2.5 mb-6 md:mb-12"
        >
          <motion.div
            className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center shadow-lg shadow-accent/25"
            whileHover={{ scale: 1.05 }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="md:w-[18px] md:h-[18px]"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </motion.div>
          <span className="text-text-primary font-semibold text-lg md:text-xl tracking-tight">
            Warp Flow
          </span>
        </motion.div>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto text-center mt-8 md:mt-0">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 md:mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-xs md:text-sm text-text-secondary">Coming 2026</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[2.75rem] leading-[1.1] md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary"
          >
            Warp into{" "}
            <span className="relative inline-block">
              {/* Gradient text with smooth color shift */}
              <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Flow
              </span>
              {/* Subtle glow behind text - only on desktop */}
              <span
                className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-accent/20 via-cyan-400/15 to-purple-400/20 blur-xl md:blur-2xl -z-10 rounded-full hidden md:block"
              />
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-4 md:mt-6 text-base md:text-xl text-text-secondary max-w-lg md:max-w-2xl mx-auto leading-relaxed px-2"
          >
            <span className="text-text-primary font-medium">The AI Copilot for your Mac.</span>
            <br className="hidden md:block" />{" "}
            <span className="text-text-secondary">Context-aware. Voice-first. Zero switching.</span>
          </motion.p>

          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 md:mt-10 w-full max-w-md"
          >
            <WaitlistForm />
          </motion.div>

          {/* Platform info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="flex items-center justify-center gap-2 mt-4 md:mt-6 text-xs md:text-sm text-text-secondary"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-50">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
            </svg>
            <span>macOS only</span>
          </motion.div>
        </div>

        {/* Mockup Visual */}
        <MockupVisual />

        {/* Scroll hint - only on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="hidden md:flex justify-center mt-8"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-text-secondary/30"
          >
            <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-1.5 rounded-full bg-accent/60"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-xs md:max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ============================================ */}
      {/* HOW IT WORKS SECTION */}
      {/* ============================================ */}
      <HowItWorks />

      {/* Divider */}
      <div className="w-full max-w-xs md:max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ============================================ */}
      {/* PHILOSOPHY SECTION */}
      {/* ============================================ */}
      <Philosophy />

      {/* Divider */}
      <div className="w-full max-w-xs md:max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ============================================ */}
      {/* BENTO GRID - WARPS PREVIEW */}
      {/* ============================================ */}
      <BentoGrid />

      {/* ============================================ */}
      {/* FINAL CTA SECTION */}
      {/* ============================================ */}
      <section className="relative w-full py-24 md:py-40 px-5 md:px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[300px] md:h-[400px] bg-accent/10 rounded-full blur-[150px] md:blur-[200px]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-accent to-cyan-400 shadow-xl shadow-accent/25 mb-6 md:mb-8"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="md:w-7 md:h-7"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-tight mb-4 md:mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Warp
            </span>
            ?
          </h2>

          <p className="text-base md:text-xl text-text-secondary max-w-lg mx-auto mb-8 md:mb-10 leading-relaxed px-2">
            Join the waitlist and be among the first to experience the future of Mac productivity.
          </p>

          <WaitlistForm />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 text-xs md:text-sm text-text-secondary"
          >
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Free early access</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>No spam, ever</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer className="relative w-full py-8 md:py-12 px-5 md:px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  className="md:w-[14px] md:h-[14px]"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-text-primary font-medium text-sm md:text-base">Warp Flow</span>
            </div>

            {/* Info */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 text-[11px] md:text-sm text-text-secondary">
              <span>Coming 2026</span>
              <span className="text-white/20">·</span>
              <span>macOS only</span>
              <span className="text-white/20">·</span>
              <span>Built in Germany</span>
            </div>

            {/* Copyright */}
            <p className="text-[10px] md:text-xs text-text-secondary/40">
              &copy; {new Date().getFullYear()} Warp Flow
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
