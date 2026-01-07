"use client";

import { useMemo, useState } from "react";
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

  const activeSynergies = useMemo(
    () => calculateSynergies(board.filter(Boolean) as Hero[], synergies),
    [board]
  );

  const filteredHeroes = useMemo(() => filterHeroes(heroes, filter), [filter]);

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
          <ActiveSynergyList synergies={activeSynergies} />
        </div>

        {/* BOTTOM */}
        <div className="grid grid-cols-[300px_1fr] gap-2">
          <HeroFilter
            synergies={synergies}
            active={filter}
            onChange={setFilter}
          />
          <HeroPool heroes={filteredHeroes} board={board} onChange={setBoard} />
        </div>
      </div>
    </>
  );
}
