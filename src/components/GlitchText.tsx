"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const glitchChars = "!@#$%^&*()_+-=[]{}|;:,./<>?~`01";

export function GlitchText({ text, className = "", delay = 0 }: GlitchTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      setIsGlitching(true);
      let iteration = 0;
      const maxIterations = text.length * 3;

      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (index < iteration / 3) {
                return char;
              }
              if (char === " ") return " ";
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join("")
        );

        iteration++;
        if (iteration > maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
          setIsGlitching(false);
        }
      }, 30);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, text, delay]);

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {/* Main text */}
      <span className="relative z-10">{displayText}</span>

      {/* Glitch layers */}
      {isGlitching && (
        <>
          <motion.span
            animate={{
              x: [-2, 2, -2],
              opacity: [0.8, 0.4, 0.8],
            }}
            transition={{ duration: 0.1, repeat: Infinity }}
            className="absolute inset-0 text-cyan-400 z-0"
            style={{ clipPath: "inset(20% 0 30% 0)" }}
            aria-hidden
          >
            {displayText}
          </motion.span>
          <motion.span
            animate={{
              x: [2, -2, 2],
              opacity: [0.8, 0.4, 0.8],
            }}
            transition={{ duration: 0.1, repeat: Infinity }}
            className="absolute inset-0 text-red-400 z-0"
            style={{ clipPath: "inset(50% 0 10% 0)" }}
            aria-hidden
          >
            {displayText}
          </motion.span>
        </>
      )}
    </span>
  );
}

// Typewriter effect with cursor
export function TypewriterText({
  text,
  className = "",
  delay = 0,
  speed = 50,
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, text, delay, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span ref={ref} className={className}>
      {displayText}
      <span
        className={`inline-block w-[3px] h-[1em] bg-accent ml-1 align-middle ${showCursor ? "opacity-100" : "opacity-0"}`}
      />
    </span>
  );
}

// Scramble text on hover
export function ScrambleText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) return char;
            if (char === " ") return " ";
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join("")
      );
      iteration += 1 / 3;
      if (iteration >= text.length) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isHovering, text]);

  return (
    <span
      className={className}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText}
    </span>
  );
}
