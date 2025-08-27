"use client";

import React, { useState } from "react";
import { heroes } from "../../data/s3/hero";
import { synergies, Synergy } from "../../data/s3/sinergi";
import HeroCardModal from "./HeroCardModal";
import SynergyCardModal from "./SynergyCardModal";
import Image from "next/image";

const factions = synergies.filter((s) => s.type === "Faction");
const roles = synergies.filter((s) => s.type === "Role");

const HeroSynergyGrid = () => {
  const [selectedHero, setSelectedHero] = useState<number | null>(null);
  const [selectedSynergy, setSelectedSynergy] = useState<Synergy | null>(null);

  const openModal = (heroId: number) => setSelectedHero(heroId);
  const closeModal = () => setSelectedHero(null);
  const getHeroById = (id: number) => heroes.find((h) => h.id === id);

  return (
    <div className="pt-8 w-full flex justify-center">
      <div className="overflow-x-auto bg-black/30 rounded-xl p-4 max-w-[1200px] w-full">
        <table className="w-full border-collapse table-fixed min-w-[800px]">
          <thead>
            <tr>
              <th className="p-2 text-center align-middle border-b border-white/20 border-r">
                Faction / Role
              </th>
              {factions.map((faction, index) => (
                <th
                  key={faction.id}
                  className="p-2 text-center align-middle border-b border-white/20"
                  style={{
                    borderLeft:
                      index === 0 ? "none" : "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src={faction.icon}
                      alt={faction.name}
                      title={faction.name}
                      width={48}
                      height={48}
                      className="rounded-md object-cover cursor-pointer"
                      onClick={() => setSelectedSynergy(faction)}
                    />
                    <div className="text-sm mt-1">{faction.name}</div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td className="p-2 text-center align-middle border-t border-white/10 border-r">
                  <div className="flex justify-center gap-2">
                    <Image
                      src={role.icon}
                      alt={role.name}
                      width={48}
                      height={48}
                      className="rounded-md object-cover cursor-pointer"
                      onClick={() => setSelectedSynergy(role)}
                    />
                  </div>
                  <div className="text-sm mt-1">{role.name}</div>
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
                      className="p-2 text-center align-middle border-t border-white/10"
                      style={{
                        borderLeft:
                          index === 0
                            ? "none"
                            : "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div className="flex flex-wrap justify-center gap-1.5">
                        {matchedHeroes.map((hero) => (
                          <div
                            key={hero.id}
                            className="flex flex-col items-center w-[72px] cursor-pointer"
                            onClick={() => openModal(hero.id)}
                          >
                            <Image
                              src={hero.image}
                              alt={hero.name}
                              width={72}
                              height={72}
                              className="w-12 h-12 sm:w-[72px] sm:h-[72px] rounded-md object-cover object-top"
                            />
                            <div className="text-[11px] sm:text-xs mt-1 text-center break-words">
                              {hero.name}
                            </div>
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

export default HeroSynergyGrid;
