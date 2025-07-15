"use client";

import styles from "../page.module.css";
import { synergies } from "../data/sinergi";
import { heroes } from "../data/hero";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const selected = ["Dawnbringer", "Doomsworn", "Emberlord"];

export default function SynergyHeroSection() {
  const filtered = synergies.filter((s) => selected.includes(s.name));
  const router = useRouter();

  const handleHeroClick = () => {
    router.push("/synergyhero");
  };

  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.sectionQuote}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        “Every synergy tells a story. Make yours legendary.”
      </motion.h2>

      <div className={styles.synergyCardList}>
        {filtered.map((synergy) => {
          const relatedHeroes = heroes.filter(
            (h) =>
              h.synergies.faction?.includes(synergy.name) ||
              h.synergies.roles?.includes(synergy.name)
          );

          return (
            <motion.div
              key={synergy.name}
              className={styles.synergyCardFull}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src={synergy.icon}
                alt={synergy.name}
                width={48}
                height={48}
                className={styles.synergyIconCenter}
              />
              <h3 className={styles.synergyName}>{synergy.name}</h3>
              <p className={styles.synergyDesc}>{synergy.description}</p>

              <div className={styles.heroGrid6}>
                {relatedHeroes.map((hero) => (
                  <div key={hero.id} className={styles.heroCardMini}>
                    <Image
                      src={hero.image}
                      alt={hero.name}
                      title={hero.name}
                      width={64}
                      height={64}
                      className={styles.heroImageLarge}
                      onClick={handleHeroClick}
                    />
                    <span className={styles.heroName}>{hero.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
