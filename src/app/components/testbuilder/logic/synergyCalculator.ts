import { Hero } from "../../../data/s5/hero";
import { Synergy, SynergyEffect } from "../../../data/s5/sinergi";

export interface ActiveSynergy {
  synergy: Synergy;
  count: number;
  activeEffect?: SynergyEffect;
  isDisabled?: boolean;

  // Mystic Meow
  activeSynergyCount?: number;
}

export function calculateSynergies(
  selectedHeroes: Hero[],
  allSynergies: Synergy[],
  blessing: Record<string, number> = {}
): ActiveSynergy[] {
  const counter: Record<string, number> = {};

  // Count roles & factions (skip summon)
  selectedHeroes.forEach((hero) => {
    if ((hero as any).isSummon) return;

    hero.synergies.roles.forEach((role) => {
      counter[role] = (counter[role] ?? 0) + 1;
    });

    hero.synergies.faction.forEach((faction) => {
      counter[faction] = (counter[faction] ?? 0) + 1;
    });
  });

  const list: ActiveSynergy[] = allSynergies
    .map((synergy) => {
      const baseCount = counter[synergy.name] ?? 0;
      const blessingCount = blessing[synergy.slug] ?? 0;
      const count = baseCount + blessingCount;

      if (count === 0) return null;

      let activeEffect: SynergyEffect | undefined;
      let isDisabled = false;

      // Mortal Rivals rule
      if (synergy.slug === "mortal-rivals") {
        activeEffect = synergy.effects.find((e) => e.units === count);
        if (!activeEffect) isDisabled = true;
      } else {
        activeEffect = synergy.effects
          .slice()
          .sort((a, b) => b.units - a.units)
          .find((e) => count >= e.units);
      }

      return {
        synergy,
        count,
        activeEffect,
        isDisabled,
      };
    })
    .filter(Boolean) as ActiveSynergy[];

  // 🔮 Mystic Meow: hitung jumlah synergy AKTIF
  const activeSynergyCount = list.filter(
    (s) => s.activeEffect && !s.isDisabled
  ).length;

  list.forEach((s) => {
    if (s.synergy.slug === "mystic-meow") {
      s.activeSynergyCount = activeSynergyCount;
    }
  });

  // 🔝 SORTING (Mystic Meow selalu paling atas)
  return list.sort((a, b) => {
    if (a.synergy.slug === "mystic-meow") return -1;
    if (b.synergy.slug === "mystic-meow") return 1;

    const score = (s: ActiveSynergy) => {
      if (s.activeEffect && !s.isDisabled) return 3;
      if (!s.activeEffect && !s.isDisabled) return 2;
      return 1;
    };

    const diff = score(b) - score(a);
    if (diff !== 0) return diff;

    return b.count - a.count;
  });
}
