"use client";

import { motion } from "framer-motion";
import styles from "../../page.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Background Image Overlay */}
      <div className={styles.heroBgOverlay} />

      {/* Content */}
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.heroTitle}>Magic Chess GO GO</h1>
        <p className={styles.heroDescription}>
          Explore everything about <strong>Magic Chess Go Go</strong>
        </p>
        <strong>MCNC</strong> — the ultimate 4v4 tournament!
      </motion.div>
    </section>
  );
}
