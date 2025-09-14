"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    title: "Guide",
    href: "/guide",
    description:
      "Learn tips, tricks, and meta insights to improve your gameplay.",
    icon: "/icons/guide.png",
  },
  {
    title: "Synergy Builder",
    href: "/builder",
    description: "Build your best lineup to destroy your enemy.",
    icon: "/icons/guide.png",
  },
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
];

export default function FeatureSection() {
  return (
    <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explore MCGG Features
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
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
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 h-full transition-all hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-cyan-900/30 rounded-full flex items-center justify-center">
                  {/* Ikon placeholder */}
                  <div className="w-8 h-8 bg-cyan-500 rounded-full"></div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-cyan-300 text-center">
                  {feature.title}
                </h3>

                <p className="text-gray-300 text-center">
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
