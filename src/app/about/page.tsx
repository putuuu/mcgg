"use client";

import styles from "./page.module.css";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <h1 className={styles.aboutTitle}>About This Website</h1>

      <section className={styles.aboutSection}>
        <p>
          <strong>Magic Chess Go Go</strong> is a strategic auto-battler game
          that combines synergies, heroes, equipment, and tactical planning.
          This site is built to help players explore content and optimize their
          strategy.
        </p>

        <p>
          This website is developed and maintained by{" "}
          <strong>Khoceng Orenzzz</strong> and <strong>Brms</strong>.
        </p>
        <br />
        <p>
          Big Thanks to <strong>Klinik KB 24 Jam</strong>.
        </p>
        <p className={styles.disclaimer}>
          <em>
            Disclaimer: This is a fan-made website and is not affiliated with
            Moonton or the official Magic Chess Go Go team.
          </em>
        </p>
      </section>

      <section className={styles.roadmapSection}>
        <h2 className={styles.roadmapTitle}>What’s Coming</h2>
        <ul className={styles.roadmapList}>
          <li>🔥 Weekly recommended compositions (meta highlights)</li>
          <li>📆 Upcoming MCNC Tournament info & schedule</li>
          <li>🧭 Season patch notes & analysis</li>
          <li>📚 Tips, tricks, and strategy guides</li>
        </ul>
      </section>

      <div className={styles.backLink}>
        <Link href="/">← Back to Home</Link>
      </div>
    </main>
  );
}
