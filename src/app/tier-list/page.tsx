"use client";

import { heroes } from "../data/s5/hero";
import { synergies } from "../data/s5/sinergi";
import { heroTiers, synergyTiers, tiers } from "./tierData";
import TierSection from "./TierSection";

export default function TierListPage() {
  return (
    <div className="min-h-screen text-white">
      <div className="pt-10 w-full flex justify-center">
        <div
          className="
            w-full max-w-[1400px]
            bg-white/5 backdrop-blur-md
            rounded-xl
            px-2 md:px-6
            py-6
            space-y-10
          "
        >
          {/* HEADER */}
          <header className="space-y-2">
            <div className="text-xs text-white/50 uppercase tracking-wide">
              Credit: Frei &amp; NCM
            </div>

            <h1 className="text-2xl md:text-3xl font-bold">
              Season 5 Neon Guardian Tier List
            </h1>

            <div className="text-sm text-white/60">
              v1.21.42.352.1 · ADV · January 8, 2026
            </div>
          </header>

          {/* SYNERGY TIER LIST */}
          <TierSection
            title="Synergy Tier List"
            tiers={tiers}
            type="synergy"
            items={synergies}
            tierMap={synergyTiers}
          />

          {/* HERO TIER LIST */}
          <TierSection
            title="Hero Tier List"
            tiers={tiers}
            type="hero"
            items={heroes}
            tierMap={heroTiers}
          />
        </div>
      </div>
    </div>
  );
}
