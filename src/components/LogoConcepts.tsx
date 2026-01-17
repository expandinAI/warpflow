"use client";

import React from "react";

interface LogoProps {
  size?: number;
  className?: string;
}

// 1. Concentric Warp - Konzentrische Kreise mit Versatz
export const ConcentricWarp: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="32" cy="32" r="28" stroke="#fafafa" strokeWidth="2" opacity="0.3" />
    <circle cx="34" cy="30" r="20" stroke="#fafafa" strokeWidth="2" opacity="0.5" />
    <circle cx="36" cy="28" r="12" stroke="#fafafa" strokeWidth="2" opacity="0.8" />
    <circle cx="38" cy="26" r="4" fill="#fafafa" />
  </svg>
);

// 2. Spiral Flow - Spirale die Bewegung suggeriert
export const SpiralFlow: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M32 8C18.745 8 8 18.745 8 32s10.745 24 24 24c9.941 0 18-6.059 18-16s-8.059-16-18-16c-5.523 0-10 4.477-10 10s4.477 10 10 10c3.314 0 6-2.686 6-6"
      stroke="#fafafa"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// 3. Tunnel Vision - Perspektivischer Tunnel-Effekt
export const TunnelVision: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="8" y="8" width="48" height="48" stroke="#fafafa" strokeWidth="2" opacity="0.2" />
    <rect x="14" y="14" width="36" height="36" stroke="#fafafa" strokeWidth="2" opacity="0.4" />
    <rect x="20" y="20" width="24" height="24" stroke="#fafafa" strokeWidth="2" opacity="0.6" />
    <rect x="26" y="26" width="12" height="12" stroke="#fafafa" strokeWidth="2" opacity="0.8" />
    <rect x="30" y="30" width="4" height="4" fill="#fafafa" />
  </svg>
);

// 4. Ripple Ring - Wellenförmige Kreise
export const RippleRing: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="32" cy="32" r="6" fill="#fafafa" />
    <circle cx="32" cy="32" r="14" stroke="#fafafa" strokeWidth="2" strokeDasharray="4 4" />
    <circle cx="32" cy="32" r="22" stroke="#fafafa" strokeWidth="1.5" opacity="0.7" />
    <circle cx="32" cy="32" r="28" stroke="#fafafa" strokeWidth="1" opacity="0.4" />
  </svg>
);

// 5. Helix Flow - DNA-ähnliche Doppelhelix
export const HelixFlow: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20 8C20 8 44 16 44 32C44 48 20 56 20 56"
      stroke="#fafafa"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M44 8C44 8 20 16 20 32C20 48 44 56 44 56"
      stroke="#fafafa"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.5"
    />
    <line x1="22" y1="20" x2="42" y2="20" stroke="#fafafa" strokeWidth="1.5" opacity="0.3" />
    <line x1="20" y1="32" x2="44" y2="32" stroke="#fafafa" strokeWidth="1.5" opacity="0.3" />
    <line x1="22" y1="44" x2="42" y2="44" stroke="#fafafa" strokeWidth="1.5" opacity="0.3" />
  </svg>
);

// 6. W Warp - "W" mit Verzerrungseffekt
export const WWarp: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10 16L18 48L32 28L46 48L54 16"
      stroke="#fafafa"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M10 16L18 48L32 28L46 48L54 16"
      stroke="#0066FF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.5"
      transform="translate(2, -2)"
    />
  </svg>
);

// 7. WF Monogram - Verschränktes WF
export const WFMonogram: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 16L16 44L24 28L32 44L40 16"
      stroke="#fafafa"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M40 16V48M40 24H54M40 36H50"
      stroke="#fafafa"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// 8. Flow F - Geschwungenes F mit Fließeffekt
export const FlowF: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20 52V20C20 14 24 10 30 10H48"
      stroke="#fafafa"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M20 32C20 32 28 32 36 28C44 24 48 20 48 20"
      stroke="#fafafa"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// 9. W Portal - W als Portal/Durchgang
export const WPortal: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="32" cy="32" r="26" stroke="#fafafa" strokeWidth="2" />
    <path
      d="M16 24L24 44L32 32L40 44L48 24"
      stroke="#fafafa"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// 10. Infinity W - W mit Unendlichkeitsschleife
export const InfinityW: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 32C8 24 14 18 22 18C30 18 32 32 32 32C32 32 34 46 42 46C50 46 56 40 56 32C56 24 50 18 42 18C34 18 32 32 32 32C32 32 30 46 22 46C14 46 8 40 8 32Z"
      stroke="#fafafa"
      strokeWidth="2.5"
      fill="none"
    />
  </svg>
);

// 11. Lightning Bolt - Stilisierter Blitz
export const LightningBolt: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M36 6L14 34H30L28 58L50 30H34L36 6Z"
      fill="#fafafa"
    />
  </svg>
);

// 12. Arrow Flow - Pfeil der in Kurve fließt
export const ArrowFlow: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 44C12 44 20 44 32 32C44 20 52 20 52 20"
      stroke="#fafafa"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M44 12L52 20L44 28"
      stroke="#fafafa"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="12" cy="44" r="4" fill="#fafafa" opacity="0.5" />
  </svg>
);

// 13. Speed Lines - Horizontale Bewegungslinien
export const SpeedLines: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <line x1="8" y1="20" x2="40" y2="20" stroke="#fafafa" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
    <line x1="8" y1="32" x2="56" y2="32" stroke="#fafafa" strokeWidth="4" strokeLinecap="round" />
    <line x1="8" y1="44" x2="48" y2="44" stroke="#fafafa" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    <circle cx="52" cy="20" r="3" fill="#fafafa" opacity="0.4" />
    <circle cx="52" cy="44" r="3" fill="#fafafa" opacity="0.6" />
  </svg>
);

// 14. Vortex - Wirbel/Strudel
export const Vortex: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M32 8C32 8 56 12 56 32C56 52 32 56 32 56"
      stroke="#fafafa"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.3"
    />
    <path
      d="M32 14C32 14 48 17 48 32C48 47 32 50 32 50"
      stroke="#fafafa"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
    <path
      d="M32 20C32 20 42 22 42 32C42 42 32 44 32 44"
      stroke="#fafafa"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.7"
    />
    <circle cx="32" cy="32" r="6" fill="#fafafa" />
  </svg>
);

// 15. Wave Pulse - Pulsierende Welle
export const WavePulse: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 32C12 32 14 20 18 20C22 20 24 44 28 44C32 44 34 16 38 16C42 16 44 48 48 48C52 48 54 32 56 32"
      stroke="#fafafa"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// 16. Dot Matrix - 4 Punkte die Bewegung zeigen
export const DotMatrix: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="18" cy="18" r="6" fill="#fafafa" opacity="0.3" />
    <circle cx="42" cy="18" r="6" fill="#fafafa" opacity="0.5" />
    <circle cx="22" cy="42" r="6" fill="#fafafa" opacity="0.7" />
    <circle cx="46" cy="42" r="8" fill="#fafafa" />
  </svg>
);

// 17. Line Break - Gebrochene Linie mit Gap
export const LineBreak: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 32H26"
      stroke="#fafafa"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M38 32H56"
      stroke="#fafafa"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle cx="32" cy="32" r="3" fill="#0066FF" />
  </svg>
);

// 18. Circle Slice - Kreis mit Segment
export const CircleSlice: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="32" cy="32" r="24" stroke="#fafafa" strokeWidth="3" />
    <path
      d="M32 32L32 8"
      stroke="#fafafa"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M32 32L52 44"
      stroke="#fafafa"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M32 8A24 24 0 0 1 52 44"
      stroke="#0066FF"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// 19. Gradient Sphere - Verlaufskugel (mit Kreisen simuliert)
export const GradientSphere: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <radialGradient id="sphereGradient" cx="35%" cy="35%" r="60%">
        <stop offset="0%" stopColor="#fafafa" stopOpacity="1" />
        <stop offset="100%" stopColor="#fafafa" stopOpacity="0.1" />
      </radialGradient>
    </defs>
    <circle cx="32" cy="32" r="24" fill="url(#sphereGradient)" />
  </svg>
);

// 20. Corner Flow - Abgerundete Ecke mit Bewegung
export const CornerFlow: React.FC<LogoProps> = ({ size = 64, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 56V24C8 14.059 16.059 6 26 6H56"
      stroke="#fafafa"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M16 56V32C16 24.268 22.268 18 30 18H56"
      stroke="#fafafa"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      opacity="0.5"
    />
    <circle cx="56" cy="6" r="4" fill="#fafafa" />
  </svg>
);

// Export all logos with metadata
export const logoVariants = [
  { id: 1, name: "Concentric Warp", category: "Geometrisch", Component: ConcentricWarp },
  { id: 2, name: "Spiral Flow", category: "Geometrisch", Component: SpiralFlow },
  { id: 3, name: "Tunnel Vision", category: "Geometrisch", Component: TunnelVision },
  { id: 4, name: "Ripple Ring", category: "Geometrisch", Component: RippleRing },
  { id: 5, name: "Helix Flow", category: "Geometrisch", Component: HelixFlow },
  { id: 6, name: "W Warp", category: "Buchstaben", Component: WWarp },
  { id: 7, name: "WF Monogram", category: "Buchstaben", Component: WFMonogram },
  { id: 8, name: "Flow F", category: "Buchstaben", Component: FlowF },
  { id: 9, name: "W Portal", category: "Buchstaben", Component: WPortal },
  { id: 10, name: "Infinity W", category: "Buchstaben", Component: InfinityW },
  { id: 11, name: "Lightning Bolt", category: "Symbol", Component: LightningBolt },
  { id: 12, name: "Arrow Flow", category: "Symbol", Component: ArrowFlow },
  { id: 13, name: "Speed Lines", category: "Symbol", Component: SpeedLines },
  { id: 14, name: "Vortex", category: "Symbol", Component: Vortex },
  { id: 15, name: "Wave Pulse", category: "Symbol", Component: WavePulse },
  { id: 16, name: "Dot Matrix", category: "Minimalistisch", Component: DotMatrix },
  { id: 17, name: "Line Break", category: "Minimalistisch", Component: LineBreak },
  { id: 18, name: "Circle Slice", category: "Minimalistisch", Component: CircleSlice },
  { id: 19, name: "Gradient Sphere", category: "Minimalistisch", Component: GradientSphere },
  { id: 20, name: "Corner Flow", category: "Minimalistisch", Component: CornerFlow },
];
