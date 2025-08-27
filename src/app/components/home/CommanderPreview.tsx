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
    <section className="py-16 px-4">
      <motion.h2
        className="text-center text-2xl md:text-3xl font-semibold mb-12 text-gray-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        “Discover the power behind every Commander.”
      </motion.h2>

      {/* Carousel Card */}
      <div className="relative w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-xl"
          >
            {/* Commander Image */}
            <div className="relative w-40 h-40 md:w-48 md:h-72 flex-shrink-0">
              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-fill rounded-xl"
              />
            </div>

            {/* Commander Info */}
            <div className="flex-1 text-center md:text-left">
              <Link href={`/commander/${current.slug}`}>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {current.name}
                </h3>
              </Link>
              <p className="text-indigo-300 font-semibold mb-3">
                {current.type}
              </p>
              <p className="text-gray-200 leading-relaxed">
                {current.sdescription}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        {/* <div className="flex justify-center mt-4 gap-2">
          {commanders.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-indigo-500" : "bg-gray-400/50"
              }`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
