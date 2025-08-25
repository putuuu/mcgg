"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../page.module.css";

const features = [
  {
    title: "Commander",
    href: "/commander",
    description: "Lead your army with powerful and strategic commanders.",
    icon: "/icons/commander.png",
  },
  {
    title: "Hero",
    href: "/synergyhero",
    description: "Discover every hero, their skills, mana, and synergy.",
    icon: "/icons/hero.png",
  },
  {
    title: "Equipment",
    href: "/equipment",
    description: "Upgrade your heroes with powerful gear and passives.",
    icon: "/icons/equipment.png",
  },
  {
    title: "Gogo Card",
    href: "/gogo-card",
    description: "Equip game-changing Gogo Cards to gain the upper hand.",
    icon: "/icons/gogo.png",
  },
  {
    title: "Guide",
    href: "/guide",
    description:
      "Learn tips, tricks, and meta insights to improve your gameplay.",
    icon: "/icons/guide.png",
  },
];

export default function FeatureSection() {
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.sectionQuote}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        “Explore MCGG features. Master your journey.”
      </motion.h2>

      <motion.div
        className={styles.featureGrid}
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
          hidden: {},
        }}
        viewport={{ once: true }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            className={styles.featureCard}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link href={feature.href} className={styles.featureCardInner}>
              {/* <Image
                src={feature.icon}
                alt={feature.title}
                width={48}
                height={48}
              /> */}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
