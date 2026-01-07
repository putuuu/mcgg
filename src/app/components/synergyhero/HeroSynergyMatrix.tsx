"use client";

import React, { useState } from "react";
import { heroes } from "../../data/s5/hero";
import { synergies, Synergy } from "../../data/s5/sinergi";
import HeroCardModal from "./HeroCardModal";
import SynergyCardModal from "./SynergyCardModal";
import Image from "next/image";

const factions = synergies.filter((s) => s.type === "Faction");
const roles = synergies.filter((s) => s.type === "Role");

const costBorderClass: Record<number, string> = {
  1: "border-white",
  2: "border-green-500",
  3: "border-blue-500",
  4: "border-purple-500",
  5: "border-yellow-400",
};

const HeroSynergyGrid = () => {
  const [selectedHero, setSelectedHero] = useState<number | null>(null);
  const [selectedSynergy, setSelectedSynergy] = useState<Synergy | null>(null);

  const openModal = (heroId: number) => setSelectedHero(heroId);
  const closeModal = () => setSelectedHero(null);
  const getHeroById = (id: number) => heroes.find((h) => h.id === id);

  return (
    <div className="pt-10 w-full flex justify-center">
      <div className="overflow-x-auto bg-black/30 rounded-xl px-4 py-4 max-w-[1400px] w-full">
        <table className="w-full border-collapse table-fixed min-w-[900px] text-sm">
          {/* HEADER */}
          <thead>
            <tr>
              <th className="border-b border-white/20 border-r">
                <div className="w-[72px] py-3 flex items-center justify-center">
                  <span className="text-[11px] uppercase opacity-60">Role</span>
                </div>
              </th>

              {factions.map((faction, index) => (
                <th
                  key={faction.id}
                  className="border-b border-white/20"
                  style={{
                    borderLeft:
                      index === 0 ? "none" : "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <div
                    className="flex flex-col items-center gap-1 py-2 cursor-pointer hover:bg-white/5 rounded-md"
                    onClick={() => setSelectedSynergy(faction)}
                  >
                    <Image
                      src={faction.icon}
                      alt={faction.name}
                      width={36}
                      height={36}
                    />
                    <div className="text-[11px] opacity-80 text-center leading-tight">
                      {faction.name}
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                {/* ROLE CELL (CLICKABLE) */}
                <td className="border-t border-white/10 border-r sticky left-0 bg-black/40 z-20">
                  <div
                    className="w-[72px] py-3 flex flex-col items-center gap-1
                               cursor-pointer
                               hover:bg-white/5 active:bg-white/10
                               transition rounded-md"
                    onClick={() => setSelectedSynergy(role)}
                  >
                    <Image
                      src={role.icon}
                      alt={role.name}
                      width={32}
                      height={32}
                    />
                    <div className="text-[11px] opacity-85 text-center leading-tight">
                      {role.name}
                    </div>
                  </div>
                </td>

                {factions.map((faction, index) => {
                  const matchedHeroes = heroes.filter(
                    (hero) =>
                      hero.synergies.faction.includes(faction.name) &&
                      hero.synergies.roles.includes(role.name)
                  );

                  return (
                    <td
                      key={`${role.name}-${faction.name}`}
                      className="border-t border-white/10"
                      style={{
                        borderLeft:
                          index === 0
                            ? "none"
                            : "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div className="flex flex-wrap justify-center gap-2 py-2">
                        {matchedHeroes.map((hero) => (
                          <div
                            key={hero.id}
                            className="flex flex-col items-center w-[56px] cursor-pointer"
                            onClick={() => openModal(hero.id)}
                          >
                            <Image
                              src={hero.image}
                              alt={hero.name}
                              width={56}
                              height={56}
                              className={`w-12 h-12 rounded-md object-cover object-top
                                border-2 ${costBorderClass[hero.cost]}`}
                            />
                            <div className="text-[10px] mt-1 text-center leading-tight">
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

      {/* MODALS */}
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
