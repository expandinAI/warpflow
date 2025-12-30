"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const warps = [
  {
    title: "Summarize",
    description: "TL;DR for any email. Action items extracted. Understood in 2 seconds.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-400",
    preview: "3 action items found. Key decision: launch postponed to Q2.",
    available: true,
  },
  {
    title: "Draft Reply",
    description: "Say what you want to reply. Warp Flow writes. You review. Done.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    gradient: "from-purple-500 to-pink-400",
    preview: "Hi Sarah, thanks for the update. I'll review and get back to you by Friday.",
    available: true,
  },
  {
    title: "Triage",
    description: 'Morning inbox prioritization. "Show me only what matters."',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-400",
    preview: "5 urgent emails. 12 can wait. 23 newsletters archived.",
    available: false,
  },
];

export function WarpsPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={containerRef} className="relative w-full py-32 md:py-40">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[180px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.3 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
            <span className="text-sm text-text-secondary">First Warps</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary leading-tight">
            First Warps for{" "}
            <span className="bg-gradient-to-r from-accent via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mail
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-text-secondary max-w-xl mx-auto"
          >
            Email made effortless. Each Warp is a tunnel to getting things done.
          </motion.p>
        </motion.div>

        {/* Warps Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {warps.map((warp, index) => (
            <motion.div
              key={warp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div
                className={`relative h-full p-8 rounded-2xl border transition-all duration-500 overflow-hidden ${
                  hoveredIndex === index
                    ? "bg-gradient-to-br border-white/30 " + warp.gradient
                    : "bg-white/[0.02] border-white/5 hover:border-white/20"
                }`}
              >
                {/* Dark overlay for text readability on gradient */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/40"
                />

                {/* Top glow line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-0 left-0 right-0 h-px bg-white/50 origin-left"
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      delay: 0.4 + index * 0.15
                    }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg transition-all duration-300 ${
                      hoveredIndex === index
                        ? "bg-white/20 backdrop-blur-sm"
                        : `bg-gradient-to-br ${warp.gradient}`
                    }`}
                  >
                    <span className="text-white">{warp.icon}</span>
                  </motion.div>

                  {/* Title with badge */}
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                      hoveredIndex === index ? "text-white" : "text-text-primary"
                    }`}>
                      {warp.title}
                    </h3>
                    {!warp.available && (
                      <span className={`px-2 py-0.5 text-xs rounded-full border transition-colors duration-300 ${
                        hoveredIndex === index
                          ? "bg-white/20 border-white/30 text-white"
                          : "bg-white/5 border-white/10 text-text-secondary"
                      }`}>
                        coming soon
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className={`leading-relaxed mb-6 transition-colors duration-300 ${
                    hoveredIndex === index ? "text-white/90" : "text-text-secondary"
                  }`}>
                    {warp.description}
                  </p>

                  {/* Preview Output */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: hoveredIndex === index ? "auto" : 0,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-white/20">
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                        <p className="text-sm text-white/80 italic">
                          &ldquo;{warp.preview}&rdquo;
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary">
            More Warps coming for{" "}
            <span className="text-text-primary">Calendar</span>,{" "}
            <span className="text-text-primary">Notes</span>,{" "}
            <span className="text-text-primary">Browser</span>, and more.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
