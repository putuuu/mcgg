"use client";

import { useEffect, useMemo, useState } from "react";
import { Hero, heroes } from "../../data/s5/hero";
import { synergies } from "../../data/s5/sinergi";
import { calculateSynergies } from "./logic/synergyCalculator";
import { ActiveHeroFilter, filterHeroes } from "./HeroPool/heroFilter";

import Board from "./Board/Board";
import ActiveSynergyList from "./Synergy/ActiveSynergyList";
import HeroFilter from "./HeroPool/HeroFilter";
import HeroPool from "./HeroPool/HeroPool";

export default function BuilderClient() {
  const [board, setBoard] = useState<(Hero | null)[]>(Array(21).fill(null));

  const [filter, setFilter] = useState<ActiveHeroFilter>({
    roles: [],
    factions: [],
  });
  const [blessing, setBlessing] = useState<string | null>(null);

  const activeSynergies = useMemo(
    () =>
      calculateSynergies(
        board.filter(Boolean) as Hero[],
        synergies,
        blessing ? { [blessing]: 1 } : {}
      ),
    [board, blessing] // ⬅️ synergies DIHAPUS
  );

  const filteredHeroes = useMemo(() => filterHeroes(heroes, filter), [filter]);

  useEffect(() => {
    const soulVesselActive = activeSynergies.some(
      (s) => s.synergy.slug === "soul-vessels" && s.activeEffect
    );

    const hasDijiang = board.some(
      (h) => h?.isSummon && h.summonSource === "soul-vessels"
    );

    // ➕ AUTO ADD
    if (soulVesselActive && !hasDijiang) {
      setBoard((prev) => {
        const next = [...prev];

        // cari slot kosong
        const emptyIndex = next.findIndex((v) => v === null);
        if (emptyIndex === -1) return prev; // board penuh → jangan tambah

        next[emptyIndex] = {
          id: 0,
          name: "Dijiang",
          cost: 0,
          image: "/images/heroes/HeroHead179.png",

          skill: {
            name: "",
            description: "",
            sdescription: "",
            icon: "/images/skills/S2630_Skin01.png",

            attributes: {},
          },

          synergies: {
            faction: [],
            roles: [],
          },

          isSummon: true,
          summonSource: "soul-vessels",
        };

        return next;
      });
    }

    // ➖ AUTO REMOVE
    if (!soulVesselActive && hasDijiang) {
      setBoard((prev) =>
        prev.map((h) =>
          h?.isSummon && h.summonSource === "soul-vessels" ? null : h
        )
      );
    }
  }, [activeSynergies, board, setBoard]);

  const toggleBlessing = (slug: string) => {
    setBlessing((prev) => (prev === slug ? null : slug));
  };

  return (
    <>
      {/* ROTATE HINT */}
      <div className="rotate-hint hidden fixed inset-0 bg-black text-white items-center justify-center z-50">
        Rotate device to landscape
      </div>

      <div className="builder-root flex flex-col gap-2 h-full px-3 pb-3">
        {/* TOP */}
        <div className="grid grid-cols-[1fr_360px] gap-2 items-stretch">
          <Board board={board} onChange={setBoard} />
          <ActiveSynergyList
            synergies={activeSynergies}
            blessing={blessing}
            onToggleBlessing={toggleBlessing}
          />
        </div>

        {/* BOTTOM */}
        <div className="grid grid-cols-[300px_1fr] gap-2">
          <HeroFilter
            synergies={synergies}
            active={filter}
            activeSynergies={activeSynergies}
            onChange={setFilter}
          />

          <HeroPool heroes={filteredHeroes} board={board} onChange={setBoard} />
        </div>
      </div>
    </>
  );
}
