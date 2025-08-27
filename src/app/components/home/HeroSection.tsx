"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-[500px] md:h-[600px] text-center text-white overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 text-center">
          Go Go Guide
        </h1>
        <p className="text-lg md:text-xl text-gray-200 text-center">
          Level Up Your Magic Chess Journey{" "}
        </p>
        <p className="text-lg md:text-xl text-gray-200 mb-6 text-center">
          Guides, strategies, and tips for{" "}
          <span className="font-semibold text-yellow-400">4v4 and solo</span>{" "}
          play.
        </p>
        <p className="text-xl md:text-2xl font-semibold text-indigo-400 mb-8 text-center">
          From beginner to pro, we’ve got you covered.
        </p>
        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            href="/guide"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium shadow-md transition"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 border border-white/70 hover:bg-white/10 rounded-lg font-medium shadow-md transition"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
