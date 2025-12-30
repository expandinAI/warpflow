"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const bentoItems = [
  {
    id: "summarize",
    title: "Summarize",
    description: "TL;DR for any email. Action items extracted. Understood in 2 seconds.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-400",
    size: "large", // spans 2 columns
    preview: "3 action items • Launch Dec 15 • Budget approved",
  },
  {
    id: "draft",
    title: "Draft Reply",
    description: "Say what you want. WarpFlow writes. You review. Done.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    gradient: "from-purple-500 to-pink-400",
    size: "medium",
    preview: null,
  },
  {
    id: "triage",
    title: "Triage",
    description: "Morning inbox zero. Automatically.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-400",
    size: "small",
    comingSoon: true,
  },
  {
    id: "demo",
    title: "See it in action",
    description: null,
    icon: null,
    gradient: "from-accent to-blue-500",
    size: "demo",
    isDemo: true,
  },
  {
    id: "more",
    title: "More Warps",
    description: "Calendar, Notes, Browser, and beyond.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-400",
    size: "small",
    comingSoon: true,
  },
];

export function BentoGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[180px]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8"
          >
            <span className="text-sm text-text-secondary">First Warps for Mail</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary leading-tight">
            Email made{" "}
            <span className="bg-gradient-to-r from-accent via-blue-400 to-purple-400 bg-clip-text text-transparent">
              effortless
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px]">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`
                relative group rounded-2xl md:rounded-3xl overflow-hidden
                border border-white/5 hover:border-white/20 transition-all duration-500
                ${item.size === "large" ? "col-span-2 row-span-2" : ""}
                ${item.size === "medium" ? "col-span-1 row-span-2" : ""}
                ${item.size === "small" ? "col-span-1 row-span-1" : ""}
                ${item.size === "demo" ? "col-span-1 row-span-1" : ""}
              `}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Glass background */}
              <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-sm" />

              {/* Content */}
              <div className="relative h-full p-4 md:p-6 flex flex-col">
                {item.isDemo ? (
                  // Demo card with animated visual
                  <div className="flex-1 flex items-center justify-center">
                    <div className="relative">
                      {/* Animated rings */}
                      <motion.div
                        className="absolute inset-0 rounded-full border border-accent/30"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full border border-accent/20"
                        animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                      />
                      {/* Play button */}
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center shadow-lg shadow-accent/25">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Icon */}
                    {item.icon && (
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-3 md:mb-4 shadow-lg`}>
                        <span className="text-white [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">
                          {item.icon}
                        </span>
                      </div>
                    )}

                    {/* Title & Badge */}
                    <div className="flex items-center gap-2 mb-1 md:mb-2">
                      <h3 className="text-base md:text-xl font-semibold text-text-primary">
                        {item.title}
                      </h3>
                      {item.comingSoon && (
                        <span className="px-2 py-0.5 text-[10px] md:text-xs rounded-full bg-white/5 border border-white/10 text-text-secondary">
                          soon
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    {item.description && (
                      <p className="text-xs md:text-sm text-text-secondary leading-relaxed flex-1">
                        {item.description}
                      </p>
                    )}

                    {/* Preview for large card */}
                    {item.preview && item.size === "large" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8 }}
                        className="mt-auto pt-3 md:pt-4 border-t border-white/5"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span className="text-xs md:text-sm text-text-secondary font-mono">
                            {item.preview}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </>
                )}

                {/* Hover glow line */}
                <motion.div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${item.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-text-secondary mt-8 md:mt-12 text-sm md:text-base"
        >
          Each Warp is a tunnel to getting things done.
        </motion.p>
      </div>
    </section>
  );
}
