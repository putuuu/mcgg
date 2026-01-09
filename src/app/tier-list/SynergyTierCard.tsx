"use client";

import { Synergy } from "../data/s5/sinergi";
import { Hero } from "../data/s5/hero";
import { useState } from "react";
import SynergyModal from "./SynergyModal";

export default function SynergyTierCard({
  synergy,
  heroes,
  heroTiers,
}: {
  synergy: Synergy;
  heroes: Hero[];
  heroTiers: any[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="w-14 h-14 rounded border cursor-pointer flex items-center justify-center bg-background"
      >
        <img src={synergy.icon} alt={synergy.name} className="w-8 h-8" />
      </div>

      {open && (
        <SynergyModal
          synergy={synergy}
          heroes={heroes}
          heroTiers={heroTiers}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
