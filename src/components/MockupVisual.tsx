"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type Mode = "warps" | "chat";

const warps = [
  { icon: "📝", label: "Summarize", description: "Get the key points" },
  { icon: "✍️", label: "Draft Reply", description: "Write a response" },
  { icon: "📋", label: "Action Items", description: "Extract todos" },
  { icon: "🔍", label: "Find Similar", description: "Search related" },
];

const chatDemo = {
  userMessage: "What are the key deadlines mentioned?",
  aiResponse: "I found 3 deadlines: Marketing assets due Nov 30, Feature freeze Nov 20, and Launch on Dec 15.",
};

const workflows = [
  {
    mode: "warps" as Mode,
    selectedWarp: 0,
    output: "3 key points extracted:\n• Launch date: December 15th\n• Marketing needs assets by Nov 30\n• Feature freeze confirmed for Nov 20",
  },
  {
    mode: "chat" as Mode,
    selectedWarp: null,
    output: null,
  },
  {
    mode: "warps" as Mode,
    selectedWarp: 1,
    output: "Draft ready:\n\n\"Thanks for the update! Thursday at 3pm works perfectly. I'll have the budget breakdown ready beforehand.\"",
  },
];

export function MockupVisual() {
  const [workflowIndex, setWorkflowIndex] = useState(0);
  const [phase, setPhase] = useState<"selecting" | "processing" | "output" | "idle">("idle");
  const [chatTyping, setChatTyping] = useState(false);
  const [chatResponse, setChatResponse] = useState("");

  const currentWorkflow = workflows[workflowIndex];

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setPhase("selecting");
    }, 1500);
    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (phase === "selecting") {
      const timer = setTimeout(() => {
        if (currentWorkflow.mode === "chat") {
          setChatTyping(true);
          setTimeout(() => {
            setChatTyping(false);
            let i = 0;
            const interval = setInterval(() => {
              if (i <= chatDemo.aiResponse.length) {
                setChatResponse(chatDemo.aiResponse.slice(0, i));
                i += 2;
              } else {
                clearInterval(interval);
                setTimeout(() => {
                  setPhase("idle");
                  setChatResponse("");
                  setWorkflowIndex((prev) => (prev + 1) % workflows.length);
                  setTimeout(() => setPhase("selecting"), 800);
                }, 2500);
              }
            }, 30);
          }, 1200);
        } else {
          setPhase("processing");
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [phase, currentWorkflow.mode]);

  useEffect(() => {
    if (phase === "processing") {
      const timer = setTimeout(() => {
        setPhase("output");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "output") {
      const timer = setTimeout(() => {
        setPhase("idle");
        setWorkflowIndex((prev) => (prev + 1) % workflows.length);
        setTimeout(() => setPhase("selecting"), 800);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-12 md:mt-20 px-4">
      {/* Ambient glow */}
      <div className="absolute -inset-4 md:-inset-8 bg-accent/5 rounded-3xl blur-3xl" />

      {/* macOS Window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="relative rounded-2xl md:rounded-2xl bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-2xl"
      >
        {/* Window Title Bar */}
        <div className="flex items-center gap-2 px-3 md:px-4 py-2.5 md:py-3 bg-[#111] border-b border-white/5">
          <div className="flex gap-1.5 md:gap-2">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-[10px] md:text-xs text-text-secondary">Mail — Inbox</span>
          </div>
        </div>

        {/* Window Content - Abstract Mail App */}
        <div className="p-3 md:p-5 min-h-[280px] md:min-h-[340px]">
          <div className="flex gap-4 md:gap-6">
            {/* Sidebar - Hidden on mobile */}
            <div className="hidden md:flex flex-col gap-2 w-36">
              <div className="h-7 bg-white/5 rounded w-full" />
              <div className="h-5 bg-accent/20 rounded w-3/4" />
              <div className="h-5 bg-white/5 rounded w-5/6" />
              <div className="h-5 bg-white/5 rounded w-2/3" />
              <div className="mt-3 h-5 bg-white/5 rounded w-full" />
              <div className="h-5 bg-white/5 rounded w-4/5" />
            </div>

            {/* Main content area */}
            <div className="flex-1 flex flex-col gap-2 md:gap-3">
              {/* Email header */}
              <div className="flex items-center gap-2 md:gap-3 pb-2 md:pb-3 border-b border-white/5">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10" />
                <div className="flex-1 min-w-0">
                  <div className="h-3 md:h-4 bg-white/15 rounded w-24 md:w-32 mb-1.5" />
                  <div className="h-2.5 md:h-3 bg-white/5 rounded w-32 md:w-48" />
                </div>
                <div className="text-[10px] md:text-xs text-text-secondary shrink-0">2:34 PM</div>
              </div>

              {/* Email body lines */}
              <div className="space-y-1.5 md:space-y-2 mt-1">
                <div className="h-3 md:h-4 bg-white/5 rounded w-full" />
                <div className="h-3 md:h-4 bg-white/5 rounded w-[95%]" />
                <div className="h-3 md:h-4 bg-white/5 rounded w-[85%]" />
                <div className="h-3 md:h-4 bg-white/5 rounded w-full" />
                <div className="h-3 md:h-4 bg-white/5 rounded w-[70%]" />
                <div className="hidden md:block h-4 bg-white/5 rounded w-[90%] mt-3" />
                <div className="hidden md:block h-4 bg-white/5 rounded w-[60%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Blur overlay when Warp Flow is active */}
        <AnimatePresence>
          {phase !== "idle" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 top-[40px] md:top-[48px] bg-black/70 backdrop-blur-sm"
            />
          )}
        </AnimatePresence>

        {/* Warp Flow Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.25, ease: "easeOut" }}
          className="absolute bottom-3 md:bottom-5 left-3 right-3 md:left-5 md:right-5"
        >
          <div className="relative rounded-xl md:rounded-2xl border border-accent/40 bg-[#0a0a0a]/95 backdrop-blur-xl overflow-hidden shadow-lg shadow-accent/10">
            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 rounded-xl md:rounded-2xl bg-accent/5 blur-xl" />

            {/* Mode Toggle */}
            <div className="flex items-center justify-between px-3 md:px-4 py-2.5 md:py-3 border-b border-white/5">
              <div className="flex items-center gap-2 md:gap-3">
                {/* Warp Flow icon */}
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-accent flex items-center justify-center shadow-md shadow-accent/20">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="md:w-4 md:h-4"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>

                {/* Mode tabs */}
                <div className="flex bg-white/5 rounded-lg p-0.5">
                  <button
                    className={`px-2.5 md:px-3 py-1 md:py-1.5 rounded-md text-[10px] md:text-xs font-medium transition-all ${
                      currentWorkflow.mode === "warps"
                        ? "bg-accent text-white shadow-sm"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    Warps
                  </button>
                  <button
                    className={`px-2.5 md:px-3 py-1 md:py-1.5 rounded-md text-[10px] md:text-xs font-medium transition-all ${
                      currentWorkflow.mode === "chat"
                        ? "bg-accent text-white shadow-sm"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    Chat
                  </button>
                </div>
              </div>

              {/* Keyboard shortcut */}
              <div className="hidden md:flex items-center gap-1 text-[10px] text-text-secondary">
                <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">⌘</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">J</kbd>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-3 md:p-4">
              <AnimatePresence mode="wait">
                {currentWorkflow.mode === "warps" ? (
                  <motion.div
                    key="warps"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Warps Grid */}
                    {phase === "selecting" && (
                      <div className="grid grid-cols-2 gap-2 md:gap-2.5">
                        {warps.map((warp, i) => {
                          const isSelected = currentWorkflow.selectedWarp === i;
                          return (
                            <motion.div
                              key={warp.label}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                                borderColor: isSelected ? "rgba(0, 102, 255, 0.6)" : "rgba(255,255,255,0.05)"
                              }}
                              transition={{ delay: i * 0.05 }}
                              className={`p-2.5 md:p-3 rounded-lg border cursor-pointer transition-all ${
                                isSelected
                                  ? "border-accent/60 bg-accent/15"
                                  : "border-white/5 bg-white/[0.02] hover:border-white/10"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-base md:text-lg">{warp.icon}</span>
                                <div>
                                  <div className={`text-xs md:text-sm font-medium ${
                                    isSelected ? "text-white" : "text-text-primary"
                                  }`}>{warp.label}</div>
                                  <div className={`text-[9px] md:text-[10px] ${
                                    isSelected ? "text-white/70" : "text-text-secondary"
                                  }`}>{warp.description}</div>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    )}

                    {/* Processing */}
                    {phase === "processing" && (
                      <div className="flex items-center justify-center py-6 md:py-8">
                        <div className="flex items-center gap-3">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-accent/30 border-t-accent rounded-full"
                          />
                          <span className="text-xs md:text-sm text-text-secondary">Processing...</span>
                        </div>
                      </div>
                    )}

                    {/* Output */}
                    {phase === "output" && currentWorkflow.output && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="p-3 md:p-4 rounded-lg bg-white/[0.02] border border-white/5"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span className="text-[10px] md:text-xs text-emerald-400 font-medium">Result</span>
                        </div>
                        <pre className="text-[11px] md:text-xs text-text-secondary whitespace-pre-wrap font-sans leading-relaxed">
                          {currentWorkflow.output}
                        </pre>
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="chat"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-accent/20 rounded-xl rounded-br-sm px-3 py-2 max-w-[85%]">
                        <p className="text-xs md:text-sm text-text-primary">{chatDemo.userMessage}</p>
                      </div>
                    </div>

                    {/* AI response */}
                    <div className="flex justify-start">
                      <div className="bg-white/5 rounded-xl rounded-bl-sm px-3 py-2 max-w-[85%]">
                        {chatTyping ? (
                          <div className="flex items-center gap-1 py-1">
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                                className="w-1.5 h-1.5 rounded-full bg-text-secondary"
                              />
                            ))}
                          </div>
                        ) : (
                          <p className="text-xs md:text-sm text-text-secondary">
                            {chatResponse}
                            {chatResponse.length < chatDemo.aiResponse.length && (
                              <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.4, repeat: Infinity }}
                                className="inline-block w-0.5 h-3 bg-accent ml-0.5 align-middle"
                              />
                            )}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input bar */}
            <div className="px-3 md:px-4 pb-3 md:pb-4">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5">
                <span className="text-[11px] md:text-xs text-text-secondary/50">
                  {currentWorkflow.mode === "chat" ? "Ask anything..." : "Search warps..."}
                </span>
                <div className="flex-1" />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-secondary/30">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Feature hints below mockup */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 md:mt-8 text-[10px] md:text-xs text-text-secondary"
      >
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent" />
          <span>Warps for actions</span>
        </div>
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white/40" />
          <span>Chat for questions</span>
        </div>
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white/40" />
          <span>Context-aware</span>
        </div>
      </motion.div>
    </div>
  );
}
