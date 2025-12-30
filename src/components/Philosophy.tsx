"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  {
    title: "Keyboard-only",
    description: "No mouse required. ⌘J opens. Tab switches. Enter confirms. Escape closes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
        <path d="M6 8h.001" />
        <path d="M10 8h.001" />
        <path d="M14 8h.001" />
        <path d="M18 8h.001" />
        <path d="M8 12h.001" />
        <path d="M12 12h.001" />
        <path d="M16 12h.001" />
        <path d="M7 16h10" />
      </svg>
    ),
  },
  {
    title: "Context-aware",
    description: "Warp Flow sees what you see. No copy-paste gymnastics. No explanations needed.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="21.17" y1="8" x2="12" y2="8" />
        <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
        <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
      </svg>
    ),
  },
  {
    title: "Output-first",
    description: "Every Warp ends with a result. Not a question. Not options. The output.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative w-full py-32 md:py-40 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[200px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.5 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]"
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
            <span className="text-sm text-text-secondary">Our Philosophy</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary leading-tight mb-8">
            Why we&apos;re building{" "}
            <span className="bg-gradient-to-r from-accent via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Warp Flow
            </span>
          </h2>
        </motion.div>

        {/* Storytelling Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-24"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5">
            {/* Quote decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-4 -left-2 text-8xl text-accent font-serif"
            >
              &ldquo;
            </motion.div>

            <div className="relative space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                You know the feeling: A simple task – reply to an email, reschedule a meeting,
                find a file. But the path to get there?{" "}
                <span className="text-text-primary font-medium">
                  Menus, dialogs, clicks, context switches.
                </span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-2xl md:text-3xl text-text-primary font-medium"
              >
                Warp Flow eliminates the path.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                You say what you want. Warp Flow takes you there. You stay in{" "}
                <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent font-semibold">
                  flow
                </span>
                {" "}– the state where work becomes effortless.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Three Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-text-primary">
            Three Principles
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/20 transition-all duration-500">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      delay: 0.6 + index * 0.15
                    }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center mb-6 text-accent group-hover:border-accent/30 transition-colors duration-500"
                  >
                    {principle.icon}
                  </motion.div>

                  {/* Title */}
                  <h4 className="text-xl font-semibold text-text-primary mb-3">
                    {principle.title}
                  </h4>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl md:text-3xl text-text-secondary font-light tracking-wide">
            No menus. No mouse.{" "}
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent font-semibold">
              Just flow.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
