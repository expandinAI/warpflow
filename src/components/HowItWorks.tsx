"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "1",
    title: "Invoke",
    description: "Press ⌘J anywhere. We already know what you're working on.",
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
    title: "Choose",
    description: "Select your action. We handle the details.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    kbd: null,
  },
  {
    number: "3",
    title: "Done",
    description: "Your result, right where you need it.",
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
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section ref={containerRef} className="relative w-full py-20 md:py-32">
      {/* Section glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[600px] bg-white/[0.02] rounded-full blur-[100px] md:blur-[150px]"
        />
      </div>

      <div className="max-w-5xl mx-auto px-5 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8"
          >
            <span className="text-xs md:text-sm text-text-secondary">How it works</span>
          </motion.div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary leading-tight px-2">
            You choose the destination.
            <br />
            <span className="text-accent">
              Warp Flow
            </span>{" "}
            <span className="text-white">knows the way.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-6 text-sm md:text-lg text-text-secondary max-w-xl mx-auto leading-relaxed px-4"
          >
            Think of it as a shortcut to done. You tell us what you want.
            We take you there. Instantly.
          </motion.p>
        </motion.div>

        {/* Timeline Visualization */}
        <div className="relative">
          {/* Connecting line - clean fade */}
          <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-px overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-full w-full bg-white/10"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                {/* Step Card */}
                <div className="relative h-full p-5 md:p-6 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                  {/* Content */}
                  <div className="relative flex md:flex-col items-start gap-4 md:gap-0">
                    {/* Number badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        delay: 0.3 + index * 0.1
                      }}
                      className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center md:mb-4 shrink-0"
                    >
                      <span className="text-text-primary [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">{step.icon}</span>
                    </motion.div>

                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="text-base md:text-lg font-semibold text-text-primary mb-1.5 md:mb-2 flex items-center gap-2">
                        {step.title}
                        {step.kbd && (
                          <span className="hidden md:flex items-center gap-1">
                            {step.kbd.map((key, i) => (
                              <kbd
                                key={i}
                                className="px-1.5 py-0.5 text-[10px] rounded bg-white/5 border border-white/10 text-text-secondary"
                              >
                                {key}
                              </kbd>
                            ))}
                          </span>
                        )}
                      </h3>

                      {/* Description */}
                      <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Flow Animation - desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="hidden md:flex mt-12 justify-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.02] border border-white/10">
            <kbd className="px-2.5 py-1 rounded-md bg-white/10 border border-white/20 text-text-primary text-xs font-medium">
              ⌘J
            </kbd>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary/40">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span className="text-xs text-text-secondary">Warp</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary/40">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span className="text-xs text-text-secondary">Flow</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary/40">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div className="w-6 h-6 rounded-md bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-400">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
