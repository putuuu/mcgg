"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
    <section className="py-16 px-4">
      {/* Quote */}
      <motion.h2
        className="text-center text-2xl md:text-3xl font-semibold mb-12 text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        “Explore MCGG features. Master your journey.”
      </motion.h2>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
          hidden: {},
        }}
        viewport={{ once: true }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link href={feature.href} className="block h-full">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center h-full transition"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Icon
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="mb-4"
                /> */}
                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
