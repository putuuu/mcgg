export type SynergyType = "Faction" | "Role";

export interface SynergyEffect {
  units: number; // jumlah unit dibutuhkan
  effect: string; // efek yang didapat
}

export interface Synergy {
  id: number;
  name: string;
  slug: string;
  type: SynergyType;
  icon: string; // path icon
  description: string;
  effects: SynergyEffect[];
}
export const synergies: Synergy[] = [
  {
    id: 1,
    name: "Doomsworn",
    slug: "doomsworn",
    type: "Faction",
    icon: "/images/synergy/doomsworn.png",
    description: "Summon Hanabi to join the battle. Hanabi can wear Equipment.",
    effects: [
      { units: 2, effect: "Summon 1-Star Hanabi." },
      { units: 4, effect: "Summon 2-Star Hanabi." },
      { units: 6, effect: "Summon 3-Star Hanabi." },
      { units: 10, effect: "Summon 4-Star Hanabi." },
    ],
  },
  {
    id: 2,
    name: "Northern Vale",
    slug: "northernvale",
    type: "Faction",
    icon: "/images/synergy/northernvale.png",
    description:
      "Northern Vale Heroes apply a Winter Mark when dealing DMG to enemies. Every 6 Winter Marks will detonate and deal True DMG.",
    effects: [
      { units: 2, effect: "Deal 260 True DMG." },
      { units: 4, effect: "Deal 800 True DMG." },
      { units: 6, effect: "Deal 1650 True DMG." },
      {
        units: 10,
        effect:
          "Deal 2400 True DMG. Rain continuous frost on enemies. The frost deals 2700 True DMG and stacks Winter Marks.",
      },
    ],
  },
  {
    id: 3,
    name: "Dragon Altar",
    slug: "dragonaltar",
    type: "Faction",
    icon: "/images/synergy/dragonaltar.png",
    description:
      "Generate special tiles on the battlefield. Heroes on these tiles gain DMG Increase and Hybrid DEF, with Dragon Altar Heroes receiving 3 times the bonus.",
    effects: [
      {
        units: 2,
        effect:
          "Create 4 special tile(s). Gain 8% DMG Increase and 8 Hybrid DEF.",
      },
      {
        units: 4,
        effect:
          "Create 6 special tile(s). Gain 14% DMG Increase and 14 Hybrid DEF.",
      },
      {
        units: 6,
        effect:
          "Turn all tiles into special tiles. Gain 20% DMG Increase and 20 Hybrid DEF.",
      },
      {
        units: 10,
        effect:
          "Turn all tiles into special tiles. Gain 60% DMG Increase and 60 Hybrid DEF. Additionally, a dragon descends at the start of battle, dealing True DMG equal to 50% of enemies' HP and stunning them for 3s.",
      },
    ],
  },
  {
    id: 4,
    name: "Emberlord",
    slug: "emberlord",
    type: "Faction",
    icon: "/images/synergy/emberlord.png",
    description:
      "When an Emberlord Hero dies, a portion of their HP and Hybrid ATK will be evenly shared among surviving Emberlord Heroes.",
    effects: [
      {
        units: 2,
        effect: "Share 20% HP, 30% Hybrid ATK.",
      },
      {
        units: 4,
        effect: "Share 20% HP, 50% Hybrid ATK.",
      },
      {
        units: 6,
        effect: "Share 20% HP, 70% Hybrid ATK.",
      },
      {
        units: 10,
        effect:
          "Share 30% HP, 120% Hybrid ATK. When an Emberlord Hero dies, they will resurrect and restore 30% HP.",
      },
    ],
  },
  {
    id: 5,
    name: "Astro Power",
    slug: "astropower",
    type: "Faction",
    icon: "/images/synergy/astropower.png",
    description:
      "Astro Power Heroes gain DMG Increase. The Astro Power Hero with the most Equipment becomes the Astro Sovereign and gains additional DMG Increase and Hybrid Lifesteal.",
    effects: [
      {
        units: 2,
        effect:
          "Gain 10% DMG Increase. Astro Sovereign gains 20% DMG Increase and 5% Hybrid Lifesteal.",
      },
      {
        units: 4,
        effect:
          "Gain 20% DMG Increase. Astro Sovereign gains 40% DMG Increase and 10% Hybrid Lifesteal.",
      },
      {
        units: 6,
        effect:
          "Gain 30% DMG Increase. Astro Sovereign gains 80% DMG Increase and 20% Hybrid Lifesteal.",
      },
      {
        units: 10,
        effect:
          "Gain 100% DMG Increase. Create an additional Astro Sovereign. All Astro Sovereigns gain 250% DMG Increase, 40% Hybrid Lifesteal, and 50% Max HP.",
      },
    ],
  },
  {
    id: 6,
    name: "Eruditio",
    slug: "eruditio",
    type: "Faction",
    icon: "/images/synergy/eruditio.png",
    description:
      "Get a vault that can be openend once per match. Accumulate Knowledge Points based on battle results and open the vault to receive a piece of exclusive Eruditio Equipment and rewards based on the Points.",
    effects: [
      {
        units: 2,
        effect: "Accumulate 1 Point(s) for win, 2 Point(s) for defeat.",
      },
      {
        units: 4,
        effect:
          "Accumulate 2 Point(s) for win, 4 Point(s) for defeat. Exclusive Equipment provides 40% DMG Increase.",
      },
      {
        units: 6,
        effect:
          "Accumulate 4 Point(s) for win, 10 Point(s) for defeat. Exclusive Equipment provides 90% DMG Increase. Recover 2 Commander HP each round.",
      },
      {
        units: 10,
        effect:
          "Accumulate 8 Knowledge Point(s) for win, 20 Point(s) for defeat. Exclusive Equipment provides 250% DMG Increase. Recover 2 Commander HP each round. Instantly receive 99 Knowledge Points.",
      },
    ],
  },
  {
    id: 7,
    name: "Dawnbringer",
    slug: "dawnbringer",
    type: "Faction",
    icon: "/images/synergy/dawnbringer.png",
    description:
      "Obtain exclusive Dawnbringer Equipment that can grow stronger.",
    effects: [
      {
        units: 2,
        effect: "Obtain 1 piece(s) of Dawnbringer Equipment",
      },
      {
        units: 4,
        effect:
          "Obtain 1 additional piece(s) of Dawnbringer Equipment, each with 6 growth(s).",
      },
      {
        units: 6,
        effect:
          "Obtain 1 more piece(s) of Dawnbringer Equipment, each with 12 growth(s).",
      },
      {
        units: 10,
        effect:
          "Obtain an additional Supreme Crown. All Dawnbringer Equipment gains 30 growth(s).",
      },
    ],
  },
  {
    id: 8,
    name: "Shadeweaver",
    slug: "shadeweaver",
    type: "Faction",
    icon: "/images/synergy/shadeweaver.png",
    description:
      "When battle starts, a fierce wind forms and weeps across the battlefield from the last tile of each column containing a Shadeweaver Hero, granting ATK Speed to allies and knocking enemies in its path airborne.",
    effects: [
      {
        units: 2,
        effect: "Grant 30% ATK Speed and knock enemies airborne for 1s.",
      },
      {
        units: 4,
        effect: "Grant 60% ATK Speed and knock enemies airborne for 1s.",
      },
    ],
  },
  {
    id: 9,
    name: "Faeborn",
    slug: "faeborn",
    type: "Faction",
    icon: "/images/synergy/faeborn.png",
    description:
      "Faeborn Heroes use vines to protect Heroes with Blessing effect, granting them extra DMG and extra DMG Reduction.",
    effects: [
      {
        units: 2,
        effect: "Grant 25% extra DMG and reduce DMG taken by 10%.",
      },
      {
        units: 3,
        effect:
          "Grant 35% extra DMG and reduce DMG taken by 10%. Add 1 count to all other Synergies of the Hero with Blessing effect.",
      },
    ],
  },
  {
    id: 10,
    name: "Exorcist",
    slug: "exorcist",
    type: "Faction",
    icon: "/images/synergy/exorcist.png",
    description:
      "Obtain Exorcist's Seal. When an Exorcist Hero dies, they transform into the Hero carrying the Exorcist's Seal, inherit all HP, and cast their skill once before disappearing.",
    effects: [
      {
        units: 2,
        effect:
          "Obtain Exorcist's Seal (Basic). When an Exorcist Hero dies, they deal 100%/120%/140% Skill DMG of the Hero they transformed into based on their own Star level.",
      },
      {
        units: 4,
        effect:
          "Obtain Exorcist's Seal (Advanced). When an Exorcist Hero dies, they deal 115%/135%/155% Skill DMG of the Hero they transformed into based on their own Star level.",
      },
    ],
  },
  {
    id: 11,
    name: "Bruiser",
    slug: "bruiser",
    type: "Role",
    icon: "/images/synergy/bruiser.png",
    description:
      "When Bruiser perform a Basic ATK, there's a chance that their next Basic ATK will launch faster with higher DMG. THe enhanced Basic ATKs have a chance to launch an extra one.",
    effects: [
      {
        units: 2,
        effect: "20% chance to trigger. Increase Basic ATK DMG by 165%.",
      },
      {
        units: 4,
        effect: "40% chance to trigger. Increase Basic ATK DMG by 165%.",
      },
      {
        units: 6,
        effect: "60% chance to trigger. Increase Basic ATK DMG by 165%.",
      },
    ],
  },
  {
    id: 12,
    name: "Defender",
    slug: "defender",
    type: "Role",
    icon: "/images/synergy/defender.png",
    description:
      "All allies gain Hybrid DEF. Defenders gain extra Hybrid DEF, with this bonus doubled in the first 20s.",
    effects: [
      {
        units: 2,
        effect:
          "All allies gain 6 Hybrid DEF. Defenders gain extra 20 Hybrid DEF.",
      },
      {
        units: 4,
        effect:
          "All allies gain 12 Hybrid DEF. Defenders gain extra 30 Hybrid DEF.",
      },
      {
        units: 6,
        effect:
          "All allies gain 24 Hybrid DEF. Defenders gain extra 60 Hybrid DEF.",
      },
    ],
  },
  {
    id: 13,
    name: "Support",
    slug: "support",
    type: "Role",
    icon: "/images/synergy/support.png",
    description: "5s after the battle begins, all allies gain Shield.",
    effects: [
      {
        units: 2,
        effect: "All allies gain 1000 Shield.",
      },
      {
        units: 3,
        effect: "All allies gain 2000 Shield",
      },
    ],
  },
  {
    id: 14,
    name: "Dauntless",
    slug: "dauntless",
    type: "Role",
    icon: "/images/synergy/dauntless.png",
    description: "All allies gain Shield. Dauntless Heroes gain extra Shield",
    effects: [
      {
        units: 2,
        effect:
          "All allies gain 5% Shield. Dauntless Heroes gain extra 25% Shield.",
      },
      {
        units: 4,
        effect:
          "All allies gain 10% Shield. Dauntless Heroes gain extra 50% Shield.",
      },
      {
        units: 6,
        effect:
          "All allies gain 20% Shield. Dauntless Heroes gain extra 100% Shield.",
      },
    ],
  },
  {
    id: 15,
    name: "Weapon Master",
    slug: "weaponmaster",
    type: "Role",
    icon: "/images/synergy/weaponmaster.png",
    description:
      "All allies gain Hybrid Lifesteal. Weapon Masters gain extra Hybrid Lifesteal and extra Physical ATK when their HP drops below 70%.",
    effects: [
      {
        units: 2,
        effect:
          "All allies gain 5% Hybrid Lifesteal. Weapon Masters gain extra 10% Hybrid Lifesteal and 50% Physical ATK.",
      },
      {
        units: 4,
        effect:
          "All allies gain 10% Hybrid Lifesteal. Weapon Masters gain extra 20% Hybrid Lifesteal and 100% Physical ATK.",
      },
      {
        units: 6,
        effect:
          "All allies gain 15% Hybrid Lifesteal. Weapon Masters gain extra 30% Hybrid Lifesteal and 1500% Physical ATK.",
      },
    ],
  },
  {
    id: 16,
    name: "Swordsman",
    slug: "swordsman",
    type: "Role",
    icon: "/images/synergy/swordsman.png",
    description:
      "All allies gain Hybrid ATK. Swordsman gain extra Hybrid ATK Each time they deal DMG, stacking up to 8 time(s).",
    effects: [
      {
        units: 2,
        effect:
          "All allies gain 6% Hybrid ATK. Swordsman gain extra 5% Hybrid ATK when dealing DMG.",
      },
      {
        units: 4,
        effect:
          "All allies gain 12% Hybrid ATK. Swordsman gain extra 9% Hybrid ATK when dealing DMG.",
      },
      {
        units: 6,
        effect:
          "All allies gain 24% Hybrid ATK. Swordsman gain extra 14% Hybrid ATK when dealing DMG.",
      },
    ],
  },
  {
    id: 17,
    name: "Marksman",
    slug: "marksman",
    type: "Role",
    icon: "/images/synergy/marksman.png",
    description:
      "All allies gain ATK Speed. Marksman's Basic ATKs reduce target's Physical DEF.",
    effects: [
      {
        units: 2,
        effect:
          "All allies gain 5% ATK Speed. Marksman's Basic ATKs reduce target's Physical DEF by 6, up to 6 stack(s).",
      },
      {
        units: 4,
        effect:
          "All allies gain 10% ATK Speed. Marksman's Basic ATKs reduce target's Physical DEF by 8, up to 7 stack(s).",
      },
      {
        units: 6,
        effect:
          "All allies gain 15% ATK Speed. Marksman's Basic ATKs reduce target's Physical DEF by 14, up to 8 stack(s).",
      },
    ],
  },
  {
    id: 18,
    name: "Summoner",
    slug: "summoner",
    type: "Role",
    icon: "/images/synergy/summoner.png",
    description:
      "When battle starts, gain a random Summoner. (This may include 3-Star Summoners you've already upgraded.)",
    effects: [
      {
        units: 2,
        effect: "Get 1 Summoner(s).",
      },
      {
        units: 4,
        effect:
          "Increase the chance of acquiring high-cost Heroes, and grant 3 Gold.",
      },
    ],
  },
  {
    id: 19,
    name: "Mage",
    slug: "mage",
    type: "Role",
    icon: "/images/synergy/mage.png",
    description: "All allies gain Magic ATK. Mages gain extra Magic ATK.",
    effects: [
      {
        units: 2,
        effect:
          "All allies gain 10% Magic ATK. Mages gain extra 50% Magic ATK.",
      },
      {
        units: 4,
        effect:
          "All allies gain 20% Magic ATK. Mages gain extra 90% Magic ATK.",
      },
      {
        units: 6,
        effect:
          "All allies gain 30% Magic ATK. Mages gain extra 120% Magic ATK.",
      },
    ],
  },
  {
    id: 20,
    name: "Stargazer",
    slug: "stargazer",
    type: "Role",
    icon: "/images/synergy/stargazer.png",
    description:
      "All allies recover mana per second. Stargazer recover extra Mana per second.",
    effects: [
      {
        units: 2,
        effect:
          "All allies recover 2 mana per second. Stargazer 6 recover extra Mana per second.",
      },
      {
        units: 4,
        effect:
          "All allies recover 4 mana per second. Stargazer 12 recover extra Mana per second.",
      },
      {
        units: 6,
        effect:
          "All allies recover 8 mana per second. Stargazer 18 recover extra Mana per second.",
      },
    ],
  },
];
