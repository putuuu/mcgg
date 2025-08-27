"use client";

import { synergies } from "../../data/s3/sinergi";
import { heroes } from "../../data/s3/hero";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const selected = ["Shadowcell", "Starwing", "Luminexus", "Aspirants"];

export default function SynergyHeroSection() {
  const filtered = synergies.filter((s) => selected.includes(s.name));
  const router = useRouter();

  const handleHeroClick = () => {
    router.push("/synergyhero");
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Quote */}
      <motion.h2
        className="text-center text-3xl md:text-4xl font-extrabold mb-16 
                   bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 
                   bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        “Every synergy tells a story. Make yours legendary.”
      </motion.h2>

      {/* Synergy Showcase */}
      <div className="flex flex-col gap-16">
        {filtered.map((synergy, idx) => {
          const relatedHeroes = heroes.filter(
            (h) =>
              h.synergies.faction?.includes(synergy.name) ||
              h.synergies.roles?.includes(synergy.name)
          );

          return (
            <motion.div
              key={synergy.name}
              className="relative rounded-2xl overflow-hidden shadow-lg 
                         bg-gradient-to-br from-gray-900 via-gray-800 to-black
                         p-8 md:p-12"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={synergy.icon}
                  alt={synergy.name}
                  width={56}
                  height={56}
                  className="drop-shadow-lg"
                  loading="lazy"
                />
                <h3 className="text-2xl font-bold text-white">
                  {synergy.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-8 max-w-2xl">
                {synergy.description}
              </p>

              {/* Hero Showcase */}
              <div className="flex flex-wrap gap-6">
                {relatedHeroes.map((hero) => (
                  <motion.div
                    key={hero.id}
                    className="flex flex-col items-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleHeroClick}
                  >
                    <div
                      className="relative w-20 h-20 rounded-full overflow-hidden 
                                    ring-2 ring-purple-500/70 shadow-md"
                    >
                      <Image
                        src={hero.image}
                        alt={hero.name}
                        title={hero.name}
                        fill
                        className="object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs mt-2 text-gray-200">
                      {hero.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
