"use client";

import { useState, FormEvent, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormState = "idle" | "loading" | "success" | "error";

// Better email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// Request timeout in milliseconds
const REQUEST_TIMEOUT = 30000;

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Auto-dismiss success state after 5 seconds
  useEffect(() => {
    if (state === "success") {
      const timer = setTimeout(() => {
        setState("idle");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const handleDismiss = useCallback(() => {
    setState("idle");
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Improved email validation
    if (!email || !EMAIL_REGEX.test(email)) {
      setErrorMessage("Please enter a valid email address");
      setState("error");
      return;
    }

    setState("loading");
    setErrorMessage("");

    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setState("success");
      setEmail("");
    } catch (err) {
      clearTimeout(timeoutId);
      setState("error");

      if (err instanceof Error) {
        if (err.name === "AbortError") {
          setErrorMessage("Request timed out. Please try again.");
        } else {
          setErrorMessage(err.message);
        }
      } else {
        setErrorMessage("Something went wrong");
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex items-center justify-between gap-3 py-4 px-6 rounded-xl bg-accent/10 border border-accent/20"
          >
            <div className="flex items-center gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className="text-text-primary font-medium">You&apos;re on the list!</span>
            </div>
            <button
              onClick={handleDismiss}
              className="p-1 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
              aria-label="Dismiss"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-text-secondary"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (state === "error") setState("idle");
                }}
                placeholder="you@company.com"
                disabled={state === "loading"}
                className={`
                  w-full px-4 py-3 rounded-xl bg-bg-secondary border
                  text-text-primary placeholder:text-text-secondary
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${state === "error" ? "border-red-500/50" : "border-white/10"}
                `}
              />
              {state === "error" && errorMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-6 left-0 text-sm text-red-400"
                >
                  {errorMessage}
                </motion.p>
              )}
            </div>

            <button
              type="submit"
              disabled={state === "loading"}
              className={`
                relative px-6 py-3 rounded-xl font-medium
                bg-accent text-white
                transition-all duration-200
                hover:shadow-glow hover:scale-[1.02]
                active:scale-[0.98]
                disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none
                focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary
              `}
            >
              <span className={state === "loading" ? "opacity-0" : ""}>
                Join Waitlist
              </span>
              {state === "loading" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </div>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
