import { Tier } from "./tierData";
import TierRow from "./TierRow";

interface Props {
  title: string;
  tiers: Tier[];
  type: "hero" | "synergy";
  items: any[];
  tierMap: any[];
  heroes?: any[];
  heroTiers?: any[];
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
