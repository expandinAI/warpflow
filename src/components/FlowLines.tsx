"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// Consistent accent color
const ACCENT_COLOR = "#0066FF";

export function FlowLines() {
  const [isMobile, setIsMobile] = useState(true); // Default to mobile to avoid flash
  const [isLoaded, setIsLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Mouse position with spring physics for smooth following
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Transform mouse position to path offsets - always call hooks
  const leftPathOffset = useTransform(smoothX, [0, 1], [80, -80]);
  const rightPathOffset = useTransform(smoothX, [0, 1], [-60, 60]);
  const verticalOffset = useTransform(smoothY, [0, 1], [-40, 40]);

  // Create dynamic path strings for desktop
  const leftPath = useTransform(
    [leftPathOffset, verticalOffset],
    ([x, y]) =>
      `M 400 0 Q ${100 + (x as number)} ${250 + (y as number)} 300 500 Q ${500 - (x as number)} ${750 - (y as number)} 200 1000`
  );

  const rightPath = useTransform(
    [rightPathOffset, verticalOffset],
    ([x, y]) =>
      `M 0 0 Q ${300 + (x as number)} ${200 + (y as number)} 100 450 Q ${-100 - (x as number)} ${700 - (y as number)} 200 1000`
  );

  // Mobile autonomous animation
  const [mobilePhase, setMobilePhase] = useState(0);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Mouse tracking for desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        mouseX.set(e.clientX / window.innerWidth);
        mouseY.set(e.clientY / window.innerHeight);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    setIsLoaded(true);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Mobile animation loop - increased interval from 50ms to 120ms for better performance
  useEffect(() => {
    if (!isMobile || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setMobilePhase((p) => (p + 0.02) % (Math.PI * 2));
    }, 120);

    return () => clearInterval(interval);
  }, [isMobile, prefersReducedMotion]);

  // Calculate mobile offsets
  const mobileLeftOffset = prefersReducedMotion ? 0 : Math.sin(mobilePhase) * 50;
  const mobileRightOffset = prefersReducedMotion ? 0 : Math.cos(mobilePhase) * 40;
  const mobileVertical = prefersReducedMotion ? 0 : Math.sin(mobilePhase * 0.7) * 30;

  // Static paths for mobile
  const mobileLeftPath = `M 400 0 Q ${100 + mobileLeftOffset} ${250 + mobileVertical} 300 500 Q ${500 - mobileLeftOffset} ${750 - mobileVertical} 200 1000`;
  const mobileRightPath = `M 0 0 Q ${300 + mobileRightOffset} ${200 + mobileVertical} 100 450 Q ${-100 - mobileRightOffset} ${700 - mobileVertical} 200 1000`;

  // Static paths for reduced motion
  const staticLeftPath = "M 400 0 Q 100 250 300 500 Q 500 750 200 1000";
  const staticRightPath = "M 0 0 Q 300 200 100 450 Q -100 700 200 1000";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-5">
      {/* Main flowing curve - left side */}
      <svg
        className="absolute left-0 top-0 h-full w-1/2 opacity-[0.08]"
        viewBox="0 0 400 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        {prefersReducedMotion ? (
          <path
            d={staticLeftPath}
            stroke="url(#flowGradient1)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ) : isMobile ? (
          <motion.path
            d={mobileLeftPath}
            stroke="url(#flowGradient1)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        ) : (
          <motion.path
            stroke="url(#flowGradient1)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ d: isLoaded ? leftPath : undefined }}
            d={isLoaded ? undefined : staticLeftPath}
          />
        )}
        <defs>
          <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={ACCENT_COLOR} stopOpacity="0" />
            <stop offset="30%" stopColor={ACCENT_COLOR} stopOpacity="0.6" />
            <stop offset="50%" stopColor="white" stopOpacity="0.8" />
            <stop offset="70%" stopColor={ACCENT_COLOR} stopOpacity="0.6" />
            <stop offset="100%" stopColor={ACCENT_COLOR} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Secondary flowing curve - right side */}
      <svg
        className="absolute right-0 top-0 h-full w-1/2 opacity-[0.06]"
        viewBox="0 0 400 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        {prefersReducedMotion ? (
          <path
            d={staticRightPath}
            stroke="url(#flowGradient2)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ) : isMobile ? (
          <motion.path
            d={mobileRightPath}
            stroke="url(#flowGradient2)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
          />
        ) : (
          <motion.path
            stroke="url(#flowGradient2)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
            style={{ d: isLoaded ? rightPath : undefined }}
            d={isLoaded ? undefined : staticRightPath}
          />
        )}
        <defs>
          <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="20%" stopColor="white" stopOpacity="0.5" />
            <stop offset="50%" stopColor={ACCENT_COLOR} stopOpacity="0.7" />
            <stop offset="80%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Animated particles - hidden on mobile and for reduced motion */}
      {!prefersReducedMotion && (
        <div className="hidden md:block">
          {/* Particle on left path */}
          <svg
            className="absolute left-0 top-0 h-full w-1/2"
            viewBox="0 0 400 1000"
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.circle
              r="3"
              fill={ACCENT_COLOR}
              opacity="0.6"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                offsetPath: `path('${staticLeftPath}')`,
              }}
            />
          </svg>

          {/* Second particle on right path */}
          <svg
            className="absolute right-0 top-0 h-full w-1/2"
            viewBox="0 0 400 1000"
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.circle
              r="2"
              fill="white"
              opacity="0.4"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                delay: 2,
              }}
              style={{
                offsetPath: `path('${staticRightPath}')`,
              }}
            />
          </svg>
        </div>
      )}

      {/* Mobile: Subtle floating particles as alternative - skip for reduced motion */}
      {!prefersReducedMotion && (
        <div className="md:hidden">
          <motion.div
            className="absolute left-1/4 top-1/3 w-2 h-2 rounded-full bg-accent/30"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-1/3 top-1/2 w-1.5 h-1.5 rounded-full bg-white/20"
            animate={{
              y: [0, 15, 0],
              x: [0, -8, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute left-1/3 bottom-1/3 w-1 h-1 rounded-full bg-accent/20"
            animate={{
              y: [0, -12, 0],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>
      )}
    </div>
  );
}
