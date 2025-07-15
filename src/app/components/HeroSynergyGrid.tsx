"use client";

import React, { useEffect, useState } from "react";
import { heroes } from "../data/hero";
import { synergies, Synergy } from "../data/sinergi";
import HeroCardModal from "./HeroCardModal";
import Image from "next/image";
import SynergyCardModal from "./SynergyCardModal";

const factions = synergies.filter((s) => s.type === "Faction");
const roles = synergies.filter((s) => s.type === "Role");

const HeroSynergyTable = () => {
  const [selectedHero, setSelectedHero] = useState<number | null>(null);
  const [selectedSynergy, setSelectedSynergy] = useState<Synergy | null>(null);

  const openModal = (heroId: number) => setSelectedHero(heroId);
  const closeModal = () => setSelectedHero(null);
  const getHeroById = (id: number) => heroes.find((h) => h.id === id);

  return (
    <div style={{ overflowX: "auto", padding: "1rem" }}>
      <table
        className="synergy-card"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          tableLayout: "fixed",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: "0.5rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              Faction / Role
            </th>
            {factions.map((faction) => (
              <th
                key={faction.id}
                style={{
                  padding: "0.5rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  textAlign: "center",
                }}
              >
                <Image
                  src={faction.icon}
                  alt={faction.name}
                  title={faction.name}
                  width={28}
                  height={28}
                  style={{
                    borderRadius: "6px",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedSynergy(faction)}
                />
                <div style={{ fontSize: ".9rem" }}>{faction.name}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td
                style={{
                  padding: "0.5rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Image
                    src={role.icon}
                    alt={role.name}
                    width={28}
                    height={28}
                    style={{
                      borderRadius: "6px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedSynergy(role)}
                  />
                </div>
                <div style={{ fontSize: ".9rem" }}>{role.name}</div>
              </td>

              {factions.map((faction) => {
                const matchedHeroes = heroes.filter(
                  (hero) =>
                    hero.synergies.faction === faction.name &&
                    hero.synergies.roles.includes(role.name)
                );

                return (
                  <td
                    key={`${role.name}-${faction.name}`}
                    style={{
                      padding: "0.5rem",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "4px",
                      }}
                    >
                      {matchedHeroes.map((hero) => (
                        <div
                          key={hero.id}
                          style={{
                            cursor: "pointer",
                            textAlign: "center",
                            width: "60px", // Sebelumnya 72px → dikecilkan
                          }}
                          onClick={() => openModal(hero.id)}
                        >
                          <Image
                            src={hero.image}
                            alt={hero.name}
                            width={64} // sebelumnya 56
                            height={64}
                            style={{
                              borderRadius: "6px",
                              objectFit: "cover",
                            }}
                          />
                          <div style={{ fontSize: "0.8rem" }}>{hero.name}</div>{" "}
                          {/* Ukuran font juga dikecilkan */}
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
