"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cards } from "../../data/cards";

export default function GogoCardSection() {
  const router = useRouter();
  const x = useMotionValue(0); // posisi track
  const [isPaused, setIsPaused] = useState(false);

  // auto-scroll pakai animationFrame
  useAnimationFrame((t, delta) => {
    if (!isPaused) {
      // geser per frame, delta ms → jadi px
      let move = (x.get() - delta * 0.03) % -2000; // adjust speed & loop panjang
      x.set(move);
    }
  });

  return (
    <section className="py-16 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12 text-gray-100">
        “Master your Gogo Cards.”
      </h2>

      <div
        className="overflow-hidden relative w-full max-w-6xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-4 cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
        >
          {[...cards, ...cards].map((card, i) => (
            <motion.img
              key={i}
              src={card.image}
              alt={card.name}
              title={card.name}
              onClick={() => router.push("/gogo-card")}
              className="w-40 h-40 object-cover rounded-xl shadow-lg select-none
                         hover:scale-105 transition-transform
                         hover:shadow-[0_0_20px_rgba(99,102,241,0.7)]"
              whileTap={{ scale: 0.95 }}
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
