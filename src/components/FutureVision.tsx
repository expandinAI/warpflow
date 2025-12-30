"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const visionItems = [
  {
    year: "2026",
    title: "Mail & Calendar",
    description: "Your inbox becomes intelligent. Meetings schedule themselves.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    year: "2027",
    title: "System-wide",
    description: "Every app. Every workflow. One command away.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    year: "2028",
    title: "Predictive",
    description: "WarpFlow knows what you need before you ask.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

export function FutureVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative w-full py-32 md:py-48 overflow-hidden">
      {/* Cinematic gradient background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0, 102, 255, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 50% 30% at 20% 20%, rgba(6, 182, 212, 0.06) 0%, transparent 50%)
            `,
          }}
        />
        {/* Animated scan lines */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "0% 100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.5) 2px,
              rgba(255, 255, 255, 0.5) 4px
            )`,
            backgroundSize: "100% 8px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-purple-500/20 border border-accent/30 mb-8"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary leading-tight mb-6">
            The{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-accent via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Future
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-cyan-400 to-purple-400 origin-left rounded-full"
              />
            </span>{" "}
            of Computing
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto"
          >
            A glimpse into where we&apos;re going. The vision that drives every line of code.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-accent via-blue-400 to-purple-500"
            />
          </div>

          {/* Vision Items */}
          <div className="space-y-24 md:space-y-32">
            {visionItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Year badge - center on desktop */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2, type: "spring" }}
                  className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-bg-primary border-2 border-accent z-10"
                >
                  <span className="text-lg font-bold text-accent">{item.year}</span>
                </motion.div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : "md:text-left"} text-center md:text-left`}>
                  <div className="inline-flex md:hidden items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 mb-4">
                    <span className="text-sm font-medium text-accent">{item.year}</span>
                  </div>

                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-purple-500/20 border border-white/10 mb-4 ${
                      index % 2 === 1 ? "md:ml-auto" : ""
                    }`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <path d={item.icon} />
                    </svg>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mb-3">
                    {item.title}
                  </h3>

                  <p className="text-lg text-text-secondary max-w-md mx-auto md:mx-0">
                    {item.description}
                  </p>
                </div>

                {/* Visual element */}
                <div className="flex-1 flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    className="relative w-64 h-40 md:w-80 md:h-48"
                  >
                    {/* Futuristic card visualization */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden">
                      {/* Animated gradient */}
                      <motion.div
                        animate={{
                          background: [
                            "linear-gradient(45deg, rgba(0,102,255,0.1) 0%, transparent 50%)",
                            "linear-gradient(180deg, rgba(139,92,246,0.1) 0%, transparent 50%)",
                            "linear-gradient(315deg, rgba(6,182,212,0.1) 0%, transparent 50%)",
                            "linear-gradient(45deg, rgba(0,102,255,0.1) 0%, transparent 50%)",
                          ],
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute inset-0"
                      />

                      {/* Mock UI elements */}
                      <div className="absolute inset-4 flex flex-col gap-2">
                        <motion.div
                          animate={{ width: ["60%", "80%", "60%"] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="h-3 rounded bg-white/10"
                        />
                        <motion.div
                          animate={{ width: ["40%", "60%", "40%"] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                          className="h-3 rounded bg-white/5"
                        />
                        <div className="flex-1" />
                        <div className="flex gap-2">
                          <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex-1 h-8 rounded bg-accent/20"
                          />
                          <div className="w-8 h-8 rounded bg-white/5" />
                        </div>
                      </div>
                    </div>

                    {/* Glow */}
                    <div className="absolute -inset-4 rounded-3xl bg-accent/5 blur-2xl -z-10" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-32 text-center"
        >
          <p className="text-2xl md:text-3xl text-text-secondary font-light">
            This is just the beginning.
            <br />
            <span className="bg-gradient-to-r from-accent via-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              Join us on the journey.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
