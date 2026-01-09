import { Tier } from "./tierData";
import { Hero } from "../data/s5/hero";
import { Synergy } from "../data/s5/sinergi";
import HeroTierCard from "./HeroTierCard";
import SynergyTierCard from "./SynergyTierCard";

interface HeroTierEntry {
  heroName: string;
  tier: Tier;
}

interface SynergyTierEntry {
  synergyName: string;
  tier: Tier;
}

interface Props {
  tier: Tier;
  type: "hero" | "synergy";
  items: Hero[] | Synergy[];
  tierMap: HeroTierEntry[] | SynergyTierEntry[];
  heroes?: Hero[];
  heroTiers?: HeroTierEntry[];
}

export default function TierRow({
  tier,
  type,
  items,
  tierMap,
  heroes,
  heroTiers,
}: Props) {
  const filtered = tierMap.filter((t) => t.tier === tier);
  if (filtered.length === 0) return null;

  return (
    <div className="w-full rounded-lg bg-white/5 border border-white/15 px-3 py-3">
      <div className="flex items-center gap-3">
        <div className="w-7 text-center text-2xl font-bold">{tier}</div>

        <div className="flex gap-2 overflow-x-auto">
          {filtered.map((entry) => {
            if (type === "hero") {
              const hero = (items as Hero[]).find(
                (h) => h.name === (entry as HeroTierEntry).heroName
              );
              return hero ? <HeroTierCard key={hero.name} hero={hero} /> : null;
            }

            const synergy = (items as Synergy[]).find(
              (s) => s.name === (entry as SynergyTierEntry).synergyName
            );
            return synergy && heroes && heroTiers ? (
              <SynergyTierCard
                key={synergy.name}
                synergy={synergy}
                heroes={heroes}
                heroTiers={heroTiers}
              />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
