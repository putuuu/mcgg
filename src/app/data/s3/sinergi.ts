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
    name: "Shadowcell",
    slug: "shadowcell",
    type: "Faction",
    icon: "/images/synergy/shadowcell.png",
    description:
      "Each Gold spent on Shop refresh strengthens Shadowcell Heroes 1 time, up to 150 time(s). After winning a round, each surviving Shadowcell Hero has a 30% chance to earn you 1 Gold.",
    effects: [
      {
        units: 2,
        effect: "Each stack increases DMG by 0.5%.",
      },
      {
        units: 4,
        effect: "Each stack increases DMG by 0.8%.",
      },
      {
        units: 6,
        effect: "Each stack increases DMG by 1.2%.",
      },
      {
        units: 10,
        effect:
          "Each stack increases DMG by 4.5%. Surviving Shadowcell Heroes have 100% chance to gain 10 Gold.",
      },
    ],
  },
  {
    id: 3,
    name: "Starwing",
    slug: "starwing",
    type: "Faction",
    icon: "/images/synergy/starwing.png",
    description:
      "Deploy a draggable spaceship in the Battle Area. Heroes within range gain extra DMG and Max HP,  while Starwing Heroes gain 2 times the bonus effect.",
    effects: [
      {
        units: 2,
        effect:
          "Generate 4 enhancement tiles. Grant allied Heroes within them 8% extra DMG andd 300 Max HP when battle starts.",
      },
      {
        units: 4,
        effect:
          "Generate 6 enhancement tiles. Grant allied Heroes within them 12% extra DMG andd 600 Max HP when battle starts.",
      },
      {
        units: 6,
        effect:
          "Enhancement effect cover the entire battlefield, granting 20% extra DMG and 1200 Max HP.",
      },
      {
        units: 10,
        effect:
          "Summon the Starlit Mothership, providing 40% extra DMG and 3600 Max HP. Deals a total of 14400 True DMG to enemies every 8 seconds.",
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
      "When an Emberlord Hero dies, their attributes are evenly distributed among other Emberlord Heroes.",
    effects: [
      {
        units: 2,
        effect: "Share 20% HP, 30% Hybrid ATK.",
      },
      {
        units: 4,
        effect: "Share 20% HP, 45% Hybrid ATK.",
      },
      {
        units: 6,
        effect: "Share 20% HP, 65% Hybrid ATK.",
      },
      {
        units: 10,
        effect:
          "Share 30% HP, 110% Hybrid ATK. When an Emberlord Hero dies, they will resurrect and restore 30% HP.",
      },
    ],
  },
  {
    id: 5,
    name: "Luminexus",
    slug: "luminexus",
    type: "Faction",
    icon: "/images/synergy/luminexus.png",
    description:
      "Enemy Heroes damaged by Luminexus Heroes  will be lingked together. All linked targets share incoming DMG and have reduced Hybrid DEF.",
    effects: [
      {
        units: 2,
        effect:
          "Link up to 3 Heroes together and reduce their Hybrid DEF by 15.",
      },
      {
        units: 4,
        effect:
          "Link up to 6 Heroes together and reduce their Hybrid DEF by 25.",
      },
      {
        units: 6,
        effect:
          "No limit to the number of linked Heroes. Linked Heroes have their Hybrid DEF reduced by 60.",
      },
      {
        units: 10,
        effect:
          "No limit to the number of linked Heroes. Linked Heroes have their Hybrid DEF reduced by 180. When enemies are first linked or when their HP drops below 50%, trigger an explosion that deals 3500 True DMG to targets within 9 tiles. (The DMG is shared among all affected targets.)",
      },
    ],
  },
  {
    id: 6,
    name: "Aspirants",
    slug: "aspirants",
    type: "Faction",
    icon: "/images/synergy/aspirants.png",
    description:
      "Create a Faith Chest that can be activated once. Gain Faith Points each round. Activating the Chest grants rewards based on current Faith Points accumulated, and provides extra Skill DMG to all Asporants based on Synergy Count.",
    effects: [
      {
        units: 2,
        effect:
          "Gain 10 Faith Point(s) per round. After activating the Chest, each Faith Point provides 0.03% extra Skill DMG.",
      },
      {
        units: 4,
        effect:
          "Gain 30 Faith Point(s) per round. After activating the Chest, each Faith Point provides 0.06% extra Skill DMG.",
      },
      {
        units: 6,
        effect:
          "Gain 80 Faith Point(s) per round. After activating the Chest, each Faith Point provides 0.1% extra Skill DMG.",
      },
      {
        units: 10,
        effect:
          "Gain 160 Faith Point(s) per round. After activating the Chest, each Faith Point provides 0.3% extra Skill DMG. Upon activating the Chest, instantly receive the rewards for 999 Faith Point(s).",
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
        effect: "Obtain 1 piece of Dawnbringer Equipment",
      },
      {
        units: 4,
        effect:
          "Obtain 1 additional piece of Dawnbringer Equipment, each with 6 growths.",
      },
      {
        units: 6,
        effect:
          "Obtain 1 more piece of Dawnbringer Equipment, each with 12 growths.",
      },
      {
        units: 10,
        effect:
          "Obtain an additional Supreme Crown. All Dawnbringer Equipment gains 24 growths.",
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
      "When battle starts, a fierce wind forms and sweeps across the battlefield from the last tile of each column containing a Shadeweaver Hero, granting ATK Speed to allies and knocking enemies in its path airborne.",
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
    name: "Metro Zero",
    slug: "metrozero",
    type: "Faction",
    icon: "/images/synergy/metrozero.png",
    description:
      "All allied Heroes gain Hybrid ATK based on the number of activated Synergy types. Gain DMG Reduction upon activating 8 Synergies, which increases further when reaching 10 Synergies.",
    effects: [
      {
        units: 2,
        effect:
          "Each activated Synergy increases Hybrid ATK by 2%. Gain 8% DMG Reduction upon activating 8 Synergies. Gain 10% Hybrid Lifesteal upon activating 10 Synergies.",
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
      "Obtain Exorcist's Seal. When an Exorcist Hero dies, they transform into the Hero carrying the Exorcist's Seal, and cast their skill once before disappearing.",
    effects: [
      {
        units: 2,
        effect:
          "Obtain Exorcist's Seal (Basic). When an Exorcist Hero dies, they deal 100%/135%/185% Skill DMG of the Hero they transformed into based on their own Star level.",
      },
      {
        units: 4,
        effect:
          "Obtain Exorcist's Seal (Advanced). When an Exorcist Hero dies, they deal 115%/150%/200% Skill DMG of the Hero they transformed into based on their own Star level.",
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
      "When Bruiser perform a Basic ATK, there's a chance that their next Basic ATK will launch faster with higher DMG.",
    effects: [
      {
        units: 2,
        effect: "Gain 10% extra Basic ATK DMG. 10% chance to hit twice.",
      },
      {
        units: 4,
        effect: "Gain 25% extra Basic ATK DMG. 25% chance to hit twice.",
      },
      {
        units: 6,
        effect: "Gain 45% extra Basic ATK DMG. 45% chance to hit twice.",
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
    name: "Dauntless",
    slug: "dauntless",
    type: "Role",
    icon: "/images/synergy/dauntless.png",
    description: "All allies gain Shield. Dauntless Heroes gain extra Shield.",
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
    id: 14,
    name: "Weapon Master",
    slug: "weaponmaster",
    type: "Role",
    icon: "/images/synergy/weaponmaster.png",
    description:
      "All allies gain Hybrid Lifesteal. Weapon Masters gain extra Hybrid Lifesteal, plus extra Physical ATK when their HP drops below 70%.",
    effects: [
      {
        units: 2,
        effect:
          "All allies gain 5% Hybrid Lifesteal. Weapon Masters gain extra 10% Hybrid Lifesteal and 45% Physical ATK.",
      },
      {
        units: 4,
        effect:
          "All allies gain 10% Hybrid Lifesteal. Weapon Masters gain extra 20% Hybrid Lifesteal and 90% Physical ATK.",
      },
      {
        units: 6,
        effect:
          "All allies gain 15% Hybrid Lifesteal. Weapon Masters gain extra 30% Hybrid Lifesteal and 135% Physical ATK.",
      },
    ],
  },
  {
    id: 15,
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
          "All allies gain 20% ATK Speed. Marksman's Basic ATKs reduce target's Physical DEF by 14, up to 8 stack(s).",
      },
    ],
  },
  {
    id: 16,
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
  {
    id: 17,
    name: "Swordsman",
    slug: "swordsman",
    type: "Role",
    icon: "/images/synergy/swordsman.png",
    description:
      "All allies gain Hybrid ATK. Swordsman gain extra Hybrid ATK Each time they deal DMG, up to 8 stack(s).",
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
    id: 18,
    name: "Mage",
    slug: "mage",
    type: "Role",
    icon: "/images/synergy/mage.png",
    description: "All allies gain Magic ATK. Mages gain extra Magic ATK.",
    effects: [
      {
        units: 2,
        effect:
          "All allies gain 10% Magic ATK. Mages gain extra 40% Magic ATK.",
      },
      {
        units: 4,
        effect:
          "All allies gain 20% Magic ATK. Mages gain extra 80% Magic ATK.",
      },
      {
        units: 6,
        effect:
          "All allies gain 30% Magic ATK. Mages gain extra 120% Magic ATK.",
      },
    ],
  },
  {
    id: 19,
    name: "Phasewarper",
    slug: "phasewarper",
    type: "Role",
    icon: "/images/synergy/phasewarper.png",
    description:
      "Phasewarpers gain DMG Increase. The first time their HP drops below 40%, they immediately move to a safe location and recover HP.",
    effects: [
      {
        units: 2,
        effect: "20% DMG Increase. Restore 35% HP.",
      },
      {
        units: 4,
        effect: "35% DMG Increase. Restore 70% HP.",
      },
    ],
  },
  {
    id: 20,
    name: "Scavenger",
    slug: "scavenger",
    type: "Role",
    icon: "/images/synergy/scavenger.png",
    description: "Get a random Hero from the Shop at the start of each round.",
    effects: [
      {
        units: 2,
        effect: "Get 1 randome Hero(es).",
      },
      {
        units: 3,
        effect: "Get 1 randome Hero(es) and 3 Gold.",
      },
    ],
  },
];
