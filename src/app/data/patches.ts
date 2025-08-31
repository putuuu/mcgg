// /src/app/data/patches.ts
export type PatchUpdate = {
  type: "hero" | "synergy" | "commander";
  name: string;
  change: "buff" | "nerf";
  description: string[];
};

export type Patch = {
  patch: string;
  date: string;
  updates: PatchUpdate[];
};

export const patches: Patch[] = [
  {
    patch: "8-27",
    date: "2025-08-27",
    updates: [
      {
        type: "synergy",
        name: "Luminexus",
        change: "buff",
        description: [
          "2/4/6-Luminexus reduces 15/25/60 >> 20/30/65 Hybrid DEF.",
        ],
      },
      {
        type: "synergy",
        name: "Dawnbringer",
        change: "buff",
        description: [
          "Skywrath Spear: Lightning bolts deal 300+10% >> 300+15% Hybrid ATK as True DMG to enemies.",
          "Supreme Crown: Provide: 100% >> 250% Max HP.",
        ],
      },
      {
        type: "synergy",
        name: "Emberlord",
        change: "buff",
        description: [
          "2/4/6-Emberlord: Their 30%/45%/65% >> 30%/50%/70% Hybrid ATK is evenly distributed among surviving Emberlord Heroes.",
          "10-Emberlord: Their 110% >> 100% Hybrid ATK is evenly distributed among surviving Emberlord Heroes.",
        ],
      },
      {
        type: "synergy",
        name: "Bruiser",
        change: "buff",
        description: [
          "Bruiser gain 10%/25%/45% >> 10%/30%/50% extra Basic ATK DMG. Basic and Enhanced Basic ATKs have a 10%/25%/45% >> 10%/30%/50% chance to hit twice.",
        ],
      },
      {
        type: "synergy",
        name: "Doomsworn",
        change: "buff",
        description: [
          "10-Doomsworn: 4-Star Hanabi ATK Speed: 0.8 >> 1.2. HP: 16000 >> 20000.",
        ],
      },
      {
        type: "synergy",
        name: "Metro Zero",
        change: "nerf",
        description: [
          "Activating 8 Synergies grants 8% >> 5% DMG Reduction. Activating 10 Synergies grants 8% >> 5% Hybrid Lifesteal.",
        ],
      },
      {
        type: "hero",
        name: "Aamon",
        change: "buff",
        description: [
          "Skill DMG Multiplier: 400%/400%/550% >> 450%/450%/650%.",
        ],
      },
      {
        type: "hero",
        name: "Novaria",
        change: "buff",
        description: ["3-Star Astral Echo DMG Multiplier: 225% >> 300%."],
      },
      {
        type: "hero",
        name: "Phoveus",
        change: "buff",
        description: [
          "3-Star Skill Effect: Gain Shield equal to 15% >> 20% Max HP.",
        ],
      },
      {
        type: "hero",
        name: "Minsitthar",
        change: "buff",
        description: ["Base HP: 4263/7673/32825 >> 4604/8287/35451."],
      },
      {
        type: "hero",
        name: "Baxia",
        change: "buff",
        description: [
          "Skill DMG Multiplier: 650%/650%/1800% >> 720%/720%/2100%.",
        ],
      },
      {
        type: "hero",
        name: "Alucard",
        change: "nerf",
        description: ["Spell Vamp: 100% >> 60%"],
      },
      {
        type: "hero",
        name: "Nana",
        change: "nerf",
        description: ["Skill DMG Multiplier: 260%/260%/700% >> 245%/245%/660%"],
      },
      {
        type: "hero",
        name: "Saber",
        change: "nerf",
        description: ["Base HP: 3846/6922/16152 >> 3496/6293/14683"],
      },
      {
        type: "commander",
        name: "Zilong",
        change: "buff",
        description: [
          "1-Star Skill: Get Great Dragon Spear at the start of the match: Each Basic ATK has an 18% >> 22% chance to attack 2 additional times.",
        ],
      },
      {
        type: "commander",
        name: "Lancelot",
        change: "buff",
        description: [
          "1-Star Skill: Stages I/II/III and subsequent stages: Gain 2/2/3 >> 2/3/3 Gold per round.",
          "2-Star Skill: Stages I/II/III and subsequent stages: Extra Gold increased to 3/3/4 >> 3/4/4.",
        ],
      },
      {
        type: "commander",
        name: "Nana",
        change: "buff",
        description: [
          "2-Star Skill: Receive 2 Equipment Chests and 3 >> 4 Gold upon taking DMG for the first time.",
        ],
      },
      {
        type: "commander",
        name: "Fanny",
        change: "nerf",
        description: [
          "1-Star Skill: Receive 6 >> 4 Gold when Hero Launcher construction completes.",
        ],
      },
      {
        type: "commander",
        name: "Harley",
        change: "nerf",
        description: ["1-Star Skill: Usable from Round II-4 >> II-6."],
      },
      {
        type: "commander",
        name: "Karina",
        change: "nerf",
        description: ["Hybrid ATK from Equipment: 42% >> 35%."],
      },
    ],
  },
];
