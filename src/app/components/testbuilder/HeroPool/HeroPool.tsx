"use client";

import { Hero } from "../../../data/s5/hero";
import DraggableHeroCard from "./DraggableHeroCard";

export default function HeroPool({
  heroes,
  board,
  onChange,
}: {
  heroes: Hero[];
  board: (Hero | null)[];
  onChange: (b: (Hero | null)[]) => void;
}) {
  const addHero = (hero: Hero) => {
    const idx = board.findIndex((s) => s === null);
    if (idx === -1) return;
    const next = [...board];
    next[idx] = hero;
    onChange(next);
  };

  // ✅ SORT HERO: COST 5 → 1
  const sortedHeroes = [...heroes].sort(
    (a, b) => b.cost - a.cost || a.name.localeCompare(b.name)
  );

  return (
    <div className="panel p-4">
      <h3 className="text-sm font-semibold mb-3 text-yellow-400">Hero Pool</h3>

      <div className="overflow-y-auto max-h-[320px] px-1 py-2">
        <div className="grid grid-cols-9 gap-2">
          {sortedHeroes.map((hero) => (
            <DraggableHeroCard
              key={hero.id}
              hero={hero}
              disabled={board.some((h) => h?.id === hero.id)}
              onClick={() => addHero(hero)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
