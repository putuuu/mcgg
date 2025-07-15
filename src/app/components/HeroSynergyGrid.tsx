"use client";

import React, { useState } from "react";
import { heroes } from "../data/hero";
import { synergies, Synergy } from "../data/sinergi";
import HeroCardModal from "./HeroCardModal";
import SynergyCardModal from "./SynergyCardModal";
import Image from "next/image";
import styles from "./HeroSynergyGrid.module.css";

const factions = synergies.filter((s) => s.type === "Faction");
const roles = synergies.filter((s) => s.type === "Role");

const HeroSynergyTable = () => {
  const [selectedHero, setSelectedHero] = useState<number | null>(null);
  const [selectedSynergy, setSelectedSynergy] = useState<Synergy | null>(null);

  const openModal = (heroId: number) => setSelectedHero(heroId);
  const closeModal = () => setSelectedHero(null);
  const getHeroById = (id: number) => heroes.find((h) => h.id === id);

  return (
    <div className={styles.tableOuter}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={`${styles.tableHeader} ${styles.firstColumn}`}>
                Faction / Role
              </th>
              {factions.map((faction, index) => (
                <th
                  key={faction.id}
                  className={`${styles.tableHeader} ${styles.factionCell}`}
                  style={{
                    borderLeft:
                      index === 0
                        ? "none"
                        : "1px solid rgba(255, 255, 255, 0.15)",
                  }}
                >
                  <Image
                    src={faction.icon}
                    alt={faction.name}
                    title={faction.name}
                    width={28}
                    height={28}
                    className={styles.icon}
                    onClick={() => setSelectedSynergy(faction)}
                  />
                  <div className={styles.synergyName}>{faction.name}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td className={`${styles.tableCell} ${styles.firstColumn}`}>
                  <div className={styles.roleCell}>
                    <Image
                      src={role.icon}
                      alt={role.name}
                      width={28}
                      height={28}
                      className={styles.icon}
                      onClick={() => setSelectedSynergy(role)}
                    />
                  </div>
                  <div className={styles.synergyName}>{role.name}</div>
                </td>
                {factions.map((faction, index) => {
                  const matchedHeroes = heroes.filter(
                    (hero) =>
                      hero.synergies.faction === faction.name &&
                      hero.synergies.roles.includes(role.name)
                  );

                  return (
                    <td
                      key={`${role.name}-${faction.name}`}
                      className={styles.tableCell}
                      style={{
                        borderLeft:
                          index === 0
                            ? "none"
                            : "1px solid rgba(255, 255, 255, 0.08)",
                      }}
                    >
                      <div className={styles.heroGridCell}>
                        {matchedHeroes.map((hero) => (
                          <div
                            key={hero.id}
                            className={styles.heroIconWrapper}
                            onClick={() => openModal(hero.id)}
                          >
                            <Image
                              src={hero.image}
                              alt={hero.name}
                              width={64}
                              height={64}
                              className={styles.heroImage}
                            />
                            <div className={styles.heroName}>{hero.name}</div>
                          </div>
                        ))}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedHero !== null && (
        <HeroCardModal hero={getHeroById(selectedHero)!} onClose={closeModal} />
      )}
      {selectedSynergy && (
        <SynergyCardModal
          synergy={selectedSynergy}
          onClose={() => setSelectedSynergy(null)}
        />
      )}
    </div>
  );
};

export default HeroSynergyTable;
