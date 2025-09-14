"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16 px-4 max-w-4xl mx-auto text-gray-100">
      {/* Title dengan efek neon */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-center text-5xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          About This Website
        </h1>
      </motion.div>

      {/* About Section dengan efek glassmorphism */}
      <motion.section
        className="bg-gradient-to-br from-gray-900/60 to-black/70 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-8 leading-relaxed shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="relative">
          {/* Efek cahaya */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 rounded-2xl blur-sm opacity-30"></div>

          <div className="relative z-10 space-y-6">
            <p className="text-lg">
              <span className="font-bold text-cyan-300 text-xl">
                Magic Chess Go Go
              </span>{" "}
              is a strategic auto-battler game that combines synergies, heroes,
              equipment, and tactical planning. This site is built to help
              players explore content and optimize their strategy.
            </p>

            <p className="text-lg">
              This website is developed and maintained by{" "}
              <span className="font-bold text-purple-300">Khoceng Orenzzz</span>
              .
            </p>

            <p className="text-lg">
              Big Thanks to{" "}
              <span className="font-bold text-yellow-300">
                Klinik KB 24 Jam
              </span>
              .
            </p>

            <div className="mt-8 p-4 bg-black/40 rounded-xl border border-cyan-500/20">
              <p className="text-sm text-gray-400 italic">
                Disclaimer: This is a fan-made website and is not affiliated
                with Moonton or the official Magic Chess Go Go team.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Roadmap Section dengan efek futuristik */}
      <motion.section
        className="mt-16 bg-gradient-to-br from-gray-900/60 to-black/70 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="relative">
          {/* Efek cahaya */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-sm opacity-30"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              What's Coming
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "🔥",
                  title: "Weekly Meta",
                  desc: "Recommended compositions and meta highlights",
                },
                {
                  icon: "📆",
                  title: "MCNC Tournament",
                  desc: "Upcoming tournament info & schedule",
                },
                {
                  icon: "🧭",
                  title: "Patch Notes",
                  desc: "Season updates and analysis",
                },
                {
                  icon: "📚",
                  title: "Strategy Guides",
                  desc: "Tips, tricks, and advanced strategies",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-black/40 p-5 rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg text-cyan-300 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Back Link dengan efek neon */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-700/30 to-purple-700/30 border border-cyan-500/50 rounded-full font-medium hover:bg-cyan-900/30 transition-all transform hover:-translate-y-1"
        >
          <span>← Back to Home</span>
        </Link>
      </motion.div>
    </main>
  );
}
