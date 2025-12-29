"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const workflows = [
  {
    command: "Summarize this email thread",
    response: "This thread discusses the Q4 product launch timeline. Key points: launch date set for Dec 15, marketing needs assets by Nov 30, engineering confirms feature freeze Nov 20.",
  },
  {
    command: "Draft a polite decline",
    response: "Hi Sarah, Thank you for thinking of me for this opportunity. Unfortunately, I won't be able to take this on given my current commitments. I appreciate your understanding and hope we can collaborate in the future.",
  },
  {
    command: "What action items are pending?",
    response: "3 action items found: 1) Send revised proposal to client (Due: Tomorrow), 2) Review design mockups (Due: Friday), 3) Schedule team sync (Due: This week)",
  },
];

export function MockupVisual() {
  const [phase, setPhase] = useState<"idle" | "typing" | "processing" | "response">("idle");
  const [workflowIndex, setWorkflowIndex] = useState(0);
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [displayedResponse, setDisplayedResponse] = useState("");

  const currentWorkflow = workflows[workflowIndex];

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setPhase("typing");
    }, 1500);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (phase === "typing") {
      const command = currentWorkflow.command;
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex <= command.length) {
          setDisplayedCommand(command.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setPhase("processing"), 300);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }
  }, [phase, currentWorkflow.command]);

  useEffect(() => {
    if (phase === "processing") {
      const processingDelay = setTimeout(() => {
        setPhase("response");
      }, 800);

      return () => clearTimeout(processingDelay);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "response") {
      const response = currentWorkflow.response;
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex <= response.length) {
          setDisplayedResponse(response.slice(0, charIndex));
          charIndex += 2;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setPhase("idle");
            setDisplayedCommand("");
            setDisplayedResponse("");
            setWorkflowIndex((prev) => (prev + 1) % workflows.length);
            setTimeout(() => setPhase("typing"), 1000);
          }, 3000);
        }
      }, 20);

      return () => clearInterval(typeInterval);
    }
  }, [phase, currentWorkflow.response]);

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-16 md:mt-24">
      {/* Ambient glow */}
      <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-3xl" />

      {/* macOS Window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative rounded-xl bg-bg-secondary border border-white/10 overflow-hidden shadow-2xl"
      >
        {/* Window Title Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-text-secondary">Mail</span>
          </div>
        </div>

        {/* Window Content - Abstract Mail App */}
        <div className="p-6 min-h-[320px] md:min-h-[380px]">
          <div className="flex gap-6">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col gap-3 w-48">
              <div className="h-8 bg-white/5 rounded-md w-full" />
              <div className="h-6 bg-accent/20 rounded-md w-3/4" />
              <div className="h-6 bg-white/5 rounded-md w-5/6" />
              <div className="h-6 bg-white/5 rounded-md w-2/3" />
              <div className="mt-4 h-6 bg-white/5 rounded-md w-full" />
              <div className="h-6 bg-white/5 rounded-md w-4/5" />
            </div>

            {/* Main content area */}
            <div className="flex-1 flex flex-col gap-3">
              {/* Email header */}
              <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/30 to-purple-500/30" />
                <div className="flex-1">
                  <div className="h-4 bg-white/15 rounded w-32 mb-2" />
                  <div className="h-3 bg-white/5 rounded w-48" />
                </div>
                <div className="text-xs text-text-secondary">2:34 PM</div>
              </div>

              {/* Email body lines */}
              <div className="space-y-2 mt-2">
                <div className="h-4 bg-white/5 rounded w-full" />
                <div className="h-4 bg-white/5 rounded w-[95%]" />
                <div className="h-4 bg-white/5 rounded w-[85%]" />
                <div className="h-4 bg-white/5 rounded w-full" />
                <div className="h-4 bg-white/5 rounded w-[70%]" />
                <div className="h-4 bg-white/5 rounded w-[90%] mt-4" />
                <div className="h-4 bg-white/5 rounded w-[60%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Blur overlay when WarpFlow is active */}
        <AnimatePresence>
          {phase !== "idle" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 top-[52px] bg-bg-primary/60 backdrop-blur-md"
            />
          )}
        </AnimatePresence>

        {/* WarpFlow Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[80%]"
        >
          <div className="relative rounded-2xl border border-accent/30 bg-bg-primary/90 backdrop-blur-xl overflow-hidden shadow-glow">
            {/* Glow effect behind */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-accent/10 blur-2xl" />

            {/* Command input area */}
            <div className="flex items-center gap-3 p-4 border-b border-white/5">
              {/* WarpFlow icon */}
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-blue-400 flex items-center justify-center shrink-0 shadow-lg shadow-accent/20">
                <svg
                  width="18"
                  height="18"
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

              {/* Input simulation */}
              <div className="flex-1 min-h-[24px]">
                <div className="flex items-center">
                  <span className="text-text-primary text-sm">
                    {displayedCommand}
                  </span>
                  {(phase === "typing" || phase === "idle") && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                      className="w-0.5 h-5 bg-accent ml-0.5"
                    />
                  )}
                  {phase === "processing" && (
                    <motion.div
                      className="flex gap-1 ml-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
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
              </div>

              {/* Keyboard shortcut hint */}
              <div className="hidden sm:flex items-center gap-1 text-xs text-text-secondary">
                <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">
                  {"\u2318"}
                </kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">
                  J
                </kbd>
              </div>
            </div>

            {/* Response area */}
            <AnimatePresence>
              {(phase === "response" || displayedResponse) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 text-sm text-text-secondary leading-relaxed">
                    {displayedResponse}
                    {phase === "response" && displayedResponse.length < currentWorkflow.response.length && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
                        className="inline-block w-2 h-4 bg-accent/50 ml-0.5 -mb-0.5"
                      />
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      {/* Feature hints below mockup */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="flex justify-center gap-6 mt-8 text-xs text-text-secondary"
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>Voice-first</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>Context-aware</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>Zero switching</span>
        </div>
      </motion.div>
    </div>
  );
}
