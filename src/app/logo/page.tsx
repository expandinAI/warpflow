"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { logoVariants } from "@/components/LogoConcepts";

export default function LogoGallery() {
  const [selectedLogo, setSelectedLogo] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("Alle");

  const categories = ["Alle", "Geometrisch", "Buchstaben", "Symbol", "Minimalistisch"];

  const filteredLogos =
    filter === "Alle"
      ? logoVariants
      : logoVariants.filter((logo) => logo.category === filter);

  return (
    <main className="min-h-screen bg-[#030303] text-text-primary">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            &larr; Back to Home
          </Link>
          <h1 className="text-lg font-medium">Logo Galerie</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              20 Logo Vorschlage
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Wahle dein Lieblings-Logo fur Warp Flow. Jedes Design funktioniert als
              Favicon und Repository-Icon.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  filter === category
                    ? "bg-white text-black"
                    : "bg-white/5 text-text-secondary hover:bg-white/10 hover:text-text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Logo Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {filteredLogos.map((logo, index) => {
              const LogoComponent = logo.Component;
              return (
                <motion.div
                  key={logo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedLogo(logo.id)}
                  className={`group relative aspect-square rounded-2xl border cursor-pointer transition-all ${
                    selectedLogo === logo.id
                      ? "border-accent bg-accent/10 scale-105"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  {/* Logo Number Badge */}
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-medium">
                    {logo.id}
                  </div>

                  {/* Logo Display */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      <LogoComponent size={80} />
                    </div>
                  </div>

                  {/* Logo Name (visible on hover) */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl">
                    <p className="text-xs text-center font-medium truncate">
                      {logo.name}
                    </p>
                    <p className="text-[10px] text-center text-text-secondary">
                      {logo.category}
                    </p>
                  </div>

                  {/* Selection Check */}
                  {selectedLogo === logo.id && (
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 6L5 9L10 3"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Preview Section */}
          {selectedLogo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-16 p-8 rounded-3xl border border-white/10 bg-white/[0.02]"
            >
              <h3 className="text-xl font-medium mb-6 text-center">
                Vorschau: {logoVariants.find((l) => l.id === selectedLogo)?.name}
              </h3>

              {/* Size Preview */}
              <div className="flex flex-wrap items-end justify-center gap-8">
                {[16, 32, 48, 64, 96, 128].map((size) => {
                  const SelectedLogo = logoVariants.find(
                    (l) => l.id === selectedLogo
                  )?.Component;
                  return (
                    <div key={size} className="flex flex-col items-center gap-2">
                      <div
                        className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5"
                        style={{
                          width: Math.max(size + 16, 48),
                          height: Math.max(size + 16, 48),
                        }}
                      >
                        {SelectedLogo && <SelectedLogo size={size} />}
                      </div>
                      <span className="text-xs text-text-secondary">
                        {size}px
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Context Preview */}
              <div className="mt-8 flex flex-wrap justify-center gap-6">
                {/* Favicon Preview */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#202124] border border-white/10">
                    <div className="w-4 h-4 flex items-center justify-center">
                      {(() => {
                        const SelectedLogo = logoVariants.find(
                          (l) => l.id === selectedLogo
                        )?.Component;
                        return SelectedLogo && <SelectedLogo size={16} />;
                      })()}
                    </div>
                    <span className="text-sm text-white/80">Warp Flow</span>
                    <span className="text-xs text-white/40 ml-2">x</span>
                  </div>
                  <span className="text-xs text-text-secondary">Browser Tab</span>
                </div>

                {/* GitHub Preview */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-[#0d1117] border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      {(() => {
                        const SelectedLogo = logoVariants.find(
                          (l) => l.id === selectedLogo
                        )?.Component;
                        return SelectedLogo && <SelectedLogo size={20} />;
                      })()}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-white font-medium">
                        warpflow/app
                      </span>
                      <span className="text-xs text-white/50">Public</span>
                    </div>
                  </div>
                  <span className="text-xs text-text-secondary">GitHub Repo</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center text-sm text-text-secondary"
          >
            <p>
              Klicke auf ein Logo um es auszuwahlen und eine Vorschau in
              verschiedenen Grosen zu sehen.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
