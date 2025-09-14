"use client";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cards } from "../../data/cards";

export default function GogoCardSection() {
  const router = useRouter();
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  useAnimationFrame((t, delta) => {
    if (!isPaused) {
      const move = (x.get() - delta * 0.03) % -2000;
      x.set(move);
    }
  });

  return (
    <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
        Master Your Gogo Cards
      </h2>

      <div
        className="overflow-hidden relative w-full max-w-6xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-6 cursor-grab active:cursor-grabbing py-4"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
        >
          {[...cards, ...cards].map((card, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/gogo-card")}
            >
              {/* Efek cahaya neon */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <motion.img
                src={card.image}
                alt={card.name}
                title={card.name}
                className="w-40 h-40 object-cover rounded-xl shadow-lg relative z-10"
                loading="lazy"
              />

              {/* Efek border neon */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-yellow-400/50 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
