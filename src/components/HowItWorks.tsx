"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "1",
    title: "Start a Warp",
    description: "⌘J from anywhere. WarpFlow sees your context – which app, which document, which email.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    kbd: ["⌘", "J"],
  },
  {
    number: "2",
    title: "Follow the Flow",
    description: "Pick a Warp. Answer only what matters. Everything else is inferred.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    kbd: null,
  },
  {
    number: "3",
    title: "Get the Output",
    description: "Result lands exactly where you need it. Back in your app. Task done.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    kbd: null,
  },
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative w-full py-32 md:py-40">
      {/* Section glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="text-sm text-text-secondary">How it works</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary leading-tight">
            You choose the destination.
            <br />
            <span className="bg-gradient-to-r from-accent via-blue-400 to-purple-400 bg-clip-text text-transparent">
              WarpFlow knows the way.
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            A Warp isn&apos;t a button – it&apos;s a tunnel. You enter, it guides you through,
            you emerge with the result. No menus. No mouse. Just flow.
          </motion.p>
        </motion.div>

        {/* Timeline Visualization */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-px">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-transparent via-accent/50 to-transparent origin-left"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="relative group"
              >
                {/* Step Card */}
                <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-accent/30 transition-all duration-500 hover:bg-white/[0.04]">
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative">
                    {/* Number badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        delay: 0.5 + index * 0.2
                      }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-blue-400 flex items-center justify-center mb-6 shadow-lg shadow-accent/25"
                    >
                      <span className="text-white">{step.icon}</span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-text-primary mb-3 flex items-center gap-3">
                      {step.title}
                      {step.kbd && (
                        <span className="flex items-center gap-1">
                          {step.kbd.map((key, i) => (
                            <kbd
                              key={i}
                              className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10 text-text-secondary"
                            >
                              {key}
                            </kbd>
                          ))}
                        </span>
                      )}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow connector (mobile) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.2 }}
                    className="md:hidden flex justify-center my-4"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent/50">
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Flow Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 flex justify-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/[0.02] border border-white/10">
            <motion.div
              animate={{
                x: [0, 5, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2"
            >
              <kbd className="px-3 py-1.5 rounded-lg bg-accent/20 border border-accent/30 text-accent text-sm font-medium">
                ⌘J
              </kbd>
            </motion.div>

            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-text-secondary/50"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>

            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              className="text-text-secondary"
            >
              Warp
            </motion.span>

            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-text-secondary/50"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>

            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
              className="text-text-secondary"
            >
              Flow
            </motion.span>

            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-text-secondary/50"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-400">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
