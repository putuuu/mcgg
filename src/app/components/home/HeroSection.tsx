"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] text-center text-white overflow-hidden">
      {/* Efek cahaya neon */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl px-6 py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Go Go Guide
        </h1>

        <div className="space-y-4 mb-10">
          <p className="text-xl md:text-2xl text-cyan-200">
            Level Up Your Magic Chess Journey
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            Guides, strategies, and tips for{" "}
            <span className="font-semibold text-yellow-400">4v4 and solo</span>{" "}
            play
          </p>
          <p className="text-xl md:text-2xl font-semibold text-purple-400">
            From beginner to pro, we’ve got you covered
          </p>
        </div>

        {/* CTA Buttons dengan efek neon */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/guide"
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 border-2 border-cyan-500/50 rounded-xl font-bold text-lg hover:bg-cyan-900/30 transition-all transform hover:-translate-y-1"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
