"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const commands = [
  {
    input: "⌘J → summarize",
    output: [
      "Scanning email context...",
      "Extracting key information...",
      "",
      "┌─────────────────────────────────────────┐",
      "│  SUMMARY                                │",
      "├─────────────────────────────────────────┤",
      "│  • Meeting moved to Thursday 3pm       │",
      "│  • Budget approved for Q1              │",
      "│  • 2 action items assigned to you      │",
      "└─────────────────────────────────────────┘",
    ],
  },
  {
    input: "⌘J → draft reply",
    output: [
      "Understanding context...",
      "Generating response...",
      "",
      "┌─────────────────────────────────────────┐",
      "│  DRAFT READY                            │",
      "├─────────────────────────────────────────┤",
      "│  \"Thanks for the update! Thursday at   │",
      "│   3pm works perfectly. I'll prepare    │",
      "│   the budget breakdown beforehand.\"    │",
      "└─────────────────────────────────────────┘",
      "",
      "[Enter] to send  [Tab] to edit  [Esc] to cancel",
    ],
  },
  {
    input: "⌘J → schedule focus time",
    output: [
      "Analyzing calendar...",
      "Finding optimal slots...",
      "",
      "┌─────────────────────────────────────────┐",
      "│  FOCUS TIME SCHEDULED                   │",
      "├─────────────────────────────────────────┤",
      "│  Tomorrow 9:00 - 11:00 AM              │",
      "│  \"Deep Work - Project Alpha\"           │",
      "│                                         │",
      "│  ✓ Calendar blocked                     │",
      "│  ✓ Notifications paused                 │",
      "└─────────────────────────────────────────┘",
    ],
  },
];

export function CommandTerminal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayedInput, setDisplayedInput] = useState("");
  const [displayedOutput, setDisplayedOutput] = useState<string[]>([]);
  const [phase, setPhase] = useState<"idle" | "typing" | "processing" | "output">("idle");

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      setPhase("typing");
    }, 500);

    return () => clearTimeout(timeout);
  }, [isInView]);

  useEffect(() => {
    if (phase !== "typing") return;

    const command = commands[currentCommand];
    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex <= command.input.length) {
        setDisplayedInput(command.input.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setPhase("processing"), 300);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [phase, currentCommand]);

  useEffect(() => {
    if (phase !== "processing") return;

    const timeout = setTimeout(() => {
      setPhase("output");
    }, 800);

    return () => clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== "output") return;

    const command = commands[currentCommand];
    let lineIndex = 0;

    const interval = setInterval(() => {
      if (lineIndex <= command.output.length) {
        setDisplayedOutput(command.output.slice(0, lineIndex));
        lineIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setPhase("idle");
          setDisplayedInput("");
          setDisplayedOutput([]);
          setCurrentCommand((prev) => (prev + 1) % commands.length);
          setTimeout(() => setPhase("typing"), 1500);
        }, 3000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [phase, currentCommand]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative max-w-3xl mx-auto"
    >
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-3xl" />

      {/* Terminal window */}
      <div className="relative rounded-2xl bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-text-secondary font-mono">WarpFlow Terminal</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-xs text-emerald-400 font-mono">active</span>
          </div>
        </div>

        {/* Terminal content */}
        <div className="p-6 font-mono text-sm min-h-[400px]">
          {/* Prompt */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-accent">❯</span>
            <span className="text-text-primary">{displayedInput}</span>
            {(phase === "typing" || phase === "idle") && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="w-2 h-5 bg-accent"
              />
            )}
            {phase === "processing" && (
              <motion.div className="flex gap-1 ml-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-accent"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </div>

          {/* Output */}
          <AnimatePresence mode="wait">
            {displayedOutput.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-1"
              >
                {displayedOutput.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.02 }}
                    className={`${
                      line.startsWith("│") || line.startsWith("┌") || line.startsWith("├") || line.startsWith("└")
                        ? "text-accent/80"
                        : line.startsWith("[")
                        ? "text-text-secondary"
                        : line.includes("...")
                        ? "text-text-secondary/60 italic"
                        : "text-text-primary"
                    }`}
                  >
                    {line || "\u00A0"}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scanline effect */}
          <motion.div
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-8 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(0, 102, 255, 0.03), transparent)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
