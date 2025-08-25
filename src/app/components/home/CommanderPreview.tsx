"use client";

import { useEffect, useState } from "react";
import styles from "../../page.module.css";
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
    <section className={styles.section}>
      <motion.h2
        className={styles.sectionQuote}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        “Discover the power behind every Commander.”
      </motion.h2>

      <div className={styles.carouselContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            className={styles.carouselCard}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href={`/commander/${current.slug}`}
              className={styles.carouselLink}
            >
              <Image
                src={current.image}
                loading="lazy"
                alt={current.name}
                width={400}
                height={300}
                className={styles.carouselImage}
              />
              <div className={styles.carouselText}>
                <h1>{current.name}</h1>
                <h3>{current.type}</h3>
                <p>{current.sdescription}</p>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
