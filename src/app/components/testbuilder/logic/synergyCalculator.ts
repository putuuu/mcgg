import { Hero } from "../../../data/s5/hero";
import { Synergy, SynergyEffect } from "../../../data/s5/sinergi";

export interface ActiveSynergy {
  synergy: Synergy;
  count: number;
  activeEffect?: SynergyEffect;
}

export function calculateSynergies(
  selectedHeroes: Hero[],
  allSynergies: Synergy[]
): ActiveSynergy[] {
  const counter: Record<string, number> = {};

  // Count roles & factions from heroes
  selectedHeroes.forEach((hero) => {
    hero.synergies.roles.forEach((role) => {
      counter[role] = (counter[role] ?? 0) + 1;
    });

    hero.synergies.faction.forEach((faction) => {
      counter[faction] = (counter[faction] ?? 0) + 1;
    });
  });

  // Match with synergy data
  return allSynergies.map((synergy) => {
    const count = counter[synergy.name] ?? 0;

    const activeEffect = synergy.effects
      .slice()
      .sort((a, b) => b.units - a.units)
      .find((effect) => count >= effect.units);

    return {
      synergy,
      count,
      activeEffect,
    };
  });
}
