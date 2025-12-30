"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GrainOverlay } from "@/components/GrainOverlay";
import { WaitlistForm } from "@/components/WaitlistForm";
import { HowItWorks } from "@/components/HowItWorks";
import { Philosophy } from "@/components/Philosophy";
import { WarpsPreview } from "@/components/WarpsPreview";
import { ParticleField } from "@/components/ParticleField";
import { InteractiveGrid } from "@/components/InteractiveGrid";
import { WarpPortal } from "@/components/WarpPortal";
import { FutureVision } from "@/components/FutureVision";
import { CommandTerminal } from "@/components/CommandTerminal";
import { GlitchText, TypewriterText } from "@/components/GlitchText";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#030303]"
    >
      <GrainOverlay />
      <ParticleField />
      <InteractiveGrid />

      {/* Animated gradient background - Hero */}
      <motion.div
        style={{ y: bgY, opacity: bgOpacity }}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1000px] bg-accent rounded-full blur-[200px]"
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-0 w-[700px] h-[700px] bg-purple-500 rounded-full blur-[180px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[150px]"
        />
      </motion.div>

      {/* ============================================ */}
      {/* HERO SECTION - IMMERSIVE */}
      {/* ============================================ */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-24">
        {/* Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5"
        >
          <motion.div
            className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center shadow-lg shadow-accent/30"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <svg
              width="20"
              height="20"
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
          <span className="text-text-primary font-semibold text-xl tracking-tight">
            WarpFlow
          </span>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-sm text-text-secondary">
              <TypewriterText text="Coming 2026 · The Future is Loading" delay={500} speed={40} />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-[6rem] font-bold tracking-tight text-text-primary leading-[1.05] mb-8"
          >
            <GlitchText text="Warp" delay={800} /> into{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                <GlitchText text="Flow" delay={1200} />
              </span>
              <motion.span
                className="absolute -inset-2 bg-gradient-to-r from-accent/30 via-cyan-400/20 to-purple-400/30 blur-3xl -z-10 rounded-full"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12"
          >
            <span className="text-text-primary font-medium">
              The AI Copilot for your Mac.
            </span>
            <br />
            <span className="bg-gradient-to-r from-text-secondary via-text-primary to-text-secondary bg-clip-text">
              Context-aware. Voice-first. Zero switching.
            </span>
          </motion.p>

          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <WaitlistForm />
          </motion.div>

          {/* Platform info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-3 mt-8 text-sm text-text-secondary"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="opacity-60"
            >
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
            </svg>
            <span>macOS only</span>
            <span className="text-white/20">·</span>
            <span>Built for power users</span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 text-text-secondary/40"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-medium">Discover</span>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 rounded-full bg-accent"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* WARP PORTAL VISUALIZATION */}
      {/* ============================================ */}
      <WarpPortal />

      {/* ============================================ */}
      {/* COMMAND TERMINAL DEMO */}
      {/* ============================================ */}
      <section className="relative w-full py-24 md:py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-text-primary mb-4">
            See it in action
          </h2>
          <p className="text-lg text-text-secondary">
            One command. Infinite possibilities.
          </p>
        </motion.div>
        <CommandTerminal />
      </section>

      {/* Section Divider */}
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      {/* ============================================ */}
      {/* HOW IT WORKS SECTION */}
      {/* ============================================ */}
      <HowItWorks />

      {/* Section Divider */}
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ============================================ */}
      {/* PHILOSOPHY SECTION */}
      {/* ============================================ */}
      <Philosophy />

      {/* Section Divider */}
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ============================================ */}
      {/* WARPS PREVIEW SECTION */}
      {/* ============================================ */}
      <WarpsPreview />

      {/* Section Divider */}
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      {/* ============================================ */}
      {/* FUTURE VISION SECTION */}
      {/* ============================================ */}
      <FutureVision />

      {/* ============================================ */}
      {/* FINAL CTA SECTION */}
      {/* ============================================ */}
      <section className="relative w-full py-40 md:py-56 px-6 overflow-hidden">
        {/* Dramatic background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 100% 70% at 50% 100%, rgba(0, 102, 255, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse 80% 50% at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                radial-gradient(ellipse 60% 40% at 80% 90%, rgba(6, 182, 212, 0.08) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-cyan-400 shadow-2xl shadow-accent/30 mb-10"
          >
            <svg
              width="36"
              height="36"
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

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-tight mb-8">
            Ready to{" "}
            <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Warp
            </span>
            ?
          </h2>

          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
            Be among the first to experience the future of Mac productivity.
            Join the waitlist and shape what comes next.
          </p>

          <WaitlistForm />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-text-secondary"
          >
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-400">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Free early access</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-400">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Shape the product</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-400">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>No spam, ever</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer className="relative w-full py-16 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
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
              <span className="text-text-primary font-medium text-lg">WarpFlow</span>
            </motion.div>

            {/* Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Coming 2026
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                macOS only
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Built in Germany
              </span>
            </div>

            {/* Copyright */}
            <p className="text-xs text-text-secondary/40">
              &copy; {new Date().getFullYear()} WarpFlow. All rights reserved.
            </p>
          </div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/5 text-center"
          >
            <p className="text-sm text-text-secondary/60 font-light tracking-wide">
              The future of computing is{" "}
              <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent font-medium">
                one command away
              </span>
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
