import { Tier } from "./tierData";
import HeroTierCard from "./HeroTierCard";
import SynergyTierCard from "./SynergyTierCard";

interface Props {
  tier: Tier;
  type: "hero" | "synergy";
  items: any[];
  tierMap: any[];
  heroes?: any[];
  heroTiers?: any[];
}

const tierTextColor: Record<Tier, string> = {
  S: "text-yellow-400",
  A: "text-blue-400",
  B: "text-green-400",
  C: "text-gray-300",
  F: "text-red-400",
};

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
    <div
      className="
        w-full
        rounded-lg
        bg-white/5
        border border-white/15
        px-3 py-3
      "
    >
      <div className="flex items-center gap-3">
        {/* TIER LETTER */}
        <div
          className={`
            w-7 text-center
            text-2xl font-bold
            ${tierTextColor[tier]}
          `}
        >
          {tier}
        </div>

        {/* ICON ROW */}
        <div className="flex gap-2 overflow-x-auto">
          {filtered.map((entry: any) => {
            const item =
              type === "hero"
                ? items.find((h) => h.name === entry.heroName)
                : items.find((s) => s.name === entry.synergyName);

            if (!item) return null;

            if (type === "hero") {
              return <HeroTierCard key={item.name} hero={item} />;
            }

            return (
              <SynergyTierCard
                key={item.name}
                synergy={item}
                heroes={heroes!}
                heroTiers={heroTiers!}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
