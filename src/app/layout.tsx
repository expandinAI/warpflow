import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Warp Flow - The AI Copilot for Your Mac",
  description: "The AI Copilot for your Mac. Context-aware. Voice-first. Zero switching. Coming 2026.",
  keywords: ["AI", "Mac", "macOS", "productivity", "copilot", "voice", "assistant", "overlay"],
  authors: [{ name: "Warp Flow" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Warp Flow - Warp into Flow",
    description: "The AI Copilot for your Mac. Context-aware. Voice-first. Zero switching.",
    url: "https://warpflow.app",
    siteName: "Warp Flow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warp Flow - Warp into Flow",
    description: "The AI Copilot for your Mac. Context-aware. Voice-first. Zero switching.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
