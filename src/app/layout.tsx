import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "WarpFlow - The AI Copilot for Your Mac",
  description: "The AI Copilot for your Mac. Context-aware. Voice-first. Zero switching. Coming 2026.",
  keywords: ["AI", "Mac", "macOS", "productivity", "copilot", "voice", "assistant", "overlay"],
  authors: [{ name: "WarpFlow" }],
  openGraph: {
    title: "WarpFlow - Warp into Flow",
    description: "The AI Copilot for your Mac. Context-aware. Voice-first. Zero switching.",
    url: "https://warpflow.app",
    siteName: "WarpFlow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WarpFlow - Warp into Flow",
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
