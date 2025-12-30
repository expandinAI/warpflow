"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const gridSize = 40;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      const cols = Math.ceil(canvas.width / gridSize) + 1;
      const rows = Math.ceil(canvas.height / gridSize) + 1;

      // Draw horizontal lines with perspective warp
      for (let row = 0; row < rows; row++) {
        ctx.beginPath();
        for (let col = 0; col <= cols; col++) {
          const x = col * gridSize;
          const baseY = row * gridSize;

          // Distance from mouse
          const dx = x - mouseRef.current.x;
          const dy = baseY - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Warp effect based on distance from mouse
          const warpStrength = Math.max(0, 1 - dist / 300);
          const waveOffset = Math.sin(time * 2 + col * 0.1 + row * 0.1) * 5;
          const mouseWarp = warpStrength * (dy / 10);

          const y = baseY + waveOffset + mouseWarp;

          if (col === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Gradient opacity based on position
        const opacity = 0.03 + Math.sin(time + row * 0.1) * 0.01;
        ctx.strokeStyle = `rgba(0, 102, 255, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw vertical lines
      for (let col = 0; col < cols; col++) {
        ctx.beginPath();
        for (let row = 0; row <= rows; row++) {
          const baseX = col * gridSize;
          const y = row * gridSize;

          const dx = baseX - mouseRef.current.x;
          const dy = y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const warpStrength = Math.max(0, 1 - dist / 300);
          const waveOffset = Math.sin(time * 2 + row * 0.1 + col * 0.1) * 5;
          const mouseWarp = warpStrength * (dx / 10);

          const x = baseX + waveOffset + mouseWarp;

          if (row === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        const opacity = 0.03 + Math.sin(time + col * 0.1) * 0.01;
        ctx.strokeStyle = `rgba(0, 102, 255, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw glow at mouse position
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        200
      );
      gradient.addColorStop(0, "rgba(0, 102, 255, 0.1)");
      gradient.addColorStop(1, "rgba(0, 102, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
