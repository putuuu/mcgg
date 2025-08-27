import { heroes, Hero } from "../../../data/s3/hero";

export const guideData = {
  slug: "guide2",
  title: "Top Synergy Compositions",
  description: "Best synergy combos for advanced players.",
  fixedBoard: [
    null,
    heroes.find((h) => h.name === "X.Borg")!,
    heroes.find((h) => h.name === "Baxia")!,
    heroes.find((h) => h.name === "Yu Zhong")!,
    heroes.find((h) => h.name === "Kalea")!,
    heroes.find((h) => h.name === "Ruby")!,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    heroes.find((h) => h.name === "Chang'e")!,
    heroes.find((h) => h.name === "Ixia")!,
    null,
    heroes.find((h) => h.name === "Granger")!,
    null,
    heroes.find((h) => h.name === "Yve")!,
    heroes.find((h) => h.name === "Novaria")!,
    // dst sampai 21
  ] as (Hero | null)[],
};
