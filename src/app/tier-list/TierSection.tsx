import { Tier } from "./tierData";
import TierRow from "./TierRow";
import { Hero } from "../data/s5/hero";
import { Synergy } from "../data/s5/sinergi";

interface HeroTierEntry {
  heroName: string;
  tier: Tier;
}

interface SynergyTierEntry {
  synergyName: string;
  tier: Tier;
}

interface Props {
  title: string;
  tiers: Tier[];
  type: "hero" | "synergy";
  items: Hero[] | Synergy[];
  tierMap: HeroTierEntry[] | SynergyTierEntry[];
  heroes?: Hero[];
  heroTiers?: HeroTierEntry[];
}

export default function TierSection({
  title,
  tiers,
  type,
  items,
  tierMap,
  heroes,
  heroTiers,
}: Props) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">{title}</h2>

      <div className="space-y-2">
        {tiers.map((tier) => (
          <TierRow
            key={tier}
            tier={tier}
            type={type}
            items={items}
            tierMap={tierMap}
            heroes={heroes}
            heroTiers={heroTiers}
          />
        ))}
      </div>
    </section>
  );
}
