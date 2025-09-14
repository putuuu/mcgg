"use client";
import { useEffect, useState } from "react";
import { commanders } from "../../data/commanders";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const AUTO_DELAY = 5000;

export default function CommanderCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % commanders.length);
    }, AUTO_DELAY);
    return () => clearInterval(interval);
  }, []);

  const current = commanders[index];

  return (
    <section className="py-20 px-4">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Discover the Power Behind Every Commander
      </motion.h2>

      <div className="relative w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900/60 to-black/70 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-xl"
          >
            {/* Efek cahaya */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur-sm opacity-50"></div>

            {/* Commander Image */}
            <div className="relative w-48 h-64 flex-shrink-0 z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-cyan-500/20 rounded-xl blur-md"></div>
              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-fill rounded-xl relative z-10"
              />
            </div>

            {/* Commander Info */}
            <div className="flex-1 text-center md:text-left z-10">
              <Link href={`/commander/${current.slug}`}>
                <h3 className="text-3xl font-bold text-white mb-3 hover:text-cyan-300 transition-colors">
                  {current.name}
                </h3>
              </Link>

              <p className="text-purple-400 font-semibold mb-4 text-lg">
                {current.type}
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                {current.sdescription}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
