"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { cards } from "../data/cards";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";

export default function GogoCardSection() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          duration: 1000, // ✅ cocok untuk 100 gambar
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionQuote}>“Master your Gogo Cards.”</h2>

      <div className={styles.gogoCardWrapper} ref={containerRef}>
        <motion.div className={styles.gogoAutoTrack} animate={controls}>
          <motion.div
            className={styles.gogoManualTrack}
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
          >
            {[...cards, ...cards].map((card, i) => (
              <motion.img
                key={i}
                src={card.image}
                alt={card.name}
                title={card.name}
                onClick={() => router.push("/gogo-card")}
                className={styles.gogoImage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                loading="lazy"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
