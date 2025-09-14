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
      <motion.h2
        className="text-center text-3xl md:text-4xl font-extrabold mb-16 
                   bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
                   bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Every Synergy Tells a Story. Make Yours Legendary.
      </motion.h2>

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
              className="relative rounded-2xl overflow-hidden 
                         bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-black/70
                         border border-cyan-500/20 p-8 md:p-12"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Efek cahaya */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/10 to-purple-600/10 rounded-2xl blur-sm opacity-30"></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md"></div>
                    <Image
                      src={synergy.icon}
                      alt={synergy.name}
                      width={64}
                      height={64}
                      className="relative z-10"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-300">
                    {synergy.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-8 max-w-2xl text-lg">
                  {synergy.description}
                </p>

                {/* Hero Showcase */}
                <div className="flex flex-wrap gap-6">
                  {relatedHeroes.map((hero) => (
                    <motion.div
                      key={hero.id}
                      className="flex flex-col items-center cursor-pointer group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleHeroClick}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div
                          className="relative w-20 h-20 rounded-full overflow-hidden 
                                    ring-2 ring-cyan-500/50 group-hover:ring-cyan-400 transition-all"
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
                      </div>
                      <span className="text-sm mt-2 text-gray-200 group-hover:text-cyan-300 transition-colors">
                        {hero.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
