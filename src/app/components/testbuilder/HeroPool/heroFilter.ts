import { Hero } from "../../../data/s5/hero";

export type ActiveHeroFilter = {
  factions: string[];
  roles: string[];
};

export function filterHeroes(heroes: Hero[], filter: ActiveHeroFilter): Hero[] {
  if (filter.factions.length === 0 && filter.roles.length === 0) {
    return heroes;
  }

  return heroes.filter((hero) => {
    return (
      hero.synergies.faction.some((f) => filter.factions.includes(f)) ||
      hero.synergies.roles.some((r) => filter.roles.includes(r))
    );
  });
}
