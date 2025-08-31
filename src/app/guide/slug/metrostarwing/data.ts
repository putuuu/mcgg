import { heroes, Hero } from "../../../data/s3/hero";

export const guideData = {
  slug: "guide2",
  title: "Top Synergy Compositions",
  description: "Best synergy combos for advanced players.",
  fixedBoard: [
    null,
    heroes.find((h) => h.name === "X.Borg")!,
    heroes.find((h) => h.name === "Saber")!,
    null,
    heroes.find((h) => h.name === "Atlas")!,
    heroes.find((h) => h.name === "Ruby")!,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    heroes.find((h) => h.name === "Harley")!,
    heroes.find((h) => h.name === "Nana")!,
    heroes.find((h) => h.name === "Angela")!,
    null,
    heroes.find((h) => h.name === "Mathilda")!,
    heroes.find((h) => h.name === "Ixia")!,
    heroes.find((h) => h.name === "Valentina")!,

    // dst sampai 21
  ] as (Hero | null)[],
};
