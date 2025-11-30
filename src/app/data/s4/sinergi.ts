export type SynergyType = "Faction" | "Role";

export interface SynergyEffect {
  units: number; // number of units required
  effect: string; // effect obtained
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
    name: "Mortal Rivals",
    slug: "mortal-rivals",
    type: "Faction",
    icon: "/images/synergy/mortal-rivals.png",
    description:
      "When Mortal Rivals fight alone, they gain massive attribute bonuses. This Synergy does not trigger Blessing effects.",
    effects: [
      {
        units: 1,
        effect:
          "Take effect when only 1 Mortal Rival is deployed. Gain 10% extra DMG and 5% DMG Reduction.",
      },
      {
        units: 11,
        effect:
          "Take effect when KOF Synergy count reaches 11. Gain 50% extra DMG, 25% DMG Reduction, and 3000 HP.",
      },
    ],
  },
  {
    id: 2,
    name: "KOF",
    slug: "kof",
    type: "Faction",
    icon: "/images/synergy/kof.png",
    description:
      "KOF Heroes gain attribute bonuses. The KOF Hero with the most Equipment becomes the Captain and gains double attributes. When a KOF Hero dies, the Captain immediately casts skill once.",
    effects: [
      { units: 2, effect: "KOF Heroes gain 4% extra DMG and 4% HP." },
      { units: 4, effect: "KOF Heroes gain 7% extra DMG and 7% HP." },
      { units: 6, effect: "KOF Heroes gain 12% extra DMG and 12% HP." },
      {
        units: 11,
        effect:
          "KOF Heroes gain 50% extra DMG and 50% HP. Mortal Rivals can now be deployed simultaneously.",
      },
    ],
  },
  {
    id: 3,
    name: "Soul Vessels",
    slug: "soul-vessels",
    type: "Faction",
    icon: "/images/synergy/soul-vessels.png",
    description:
      "Summon Dijiang to join the battle. Dijiang inherits a percentage of Hybrid ATK from all Soul Vessels Heroes.",
    effects: [
      {
        units: 2,
        effect: "Summon 1-Star Dijiang. Dijiang inherits 10% Hybrid ATK.",
      },
      {
        units: 4,
        effect: "Summon 2-Star Dijiang. Dijiang inherits 15% Hybrid ATK.",
      },
      {
        units: 6,
        effect:
          "Summon 3-Star Dijiang. Dijiang inherits 25% Hybrid ATK. Inherits your highest-count Synergy except Soul Vessels.",
      },
      {
        units: 10,
        effect:
          "Summon 4-Star Dijiang. Inherit 60% Hybrid ATK. Releases Chaotic Energy forward, dealing at least 20000 True DMG shared among enemies.",
      },
    ],
  },
  {
    id: 4,
    name: "Shadowcell",
    slug: "shadowcell",
    type: "Faction",
    icon: "/images/synergy/shadowcell.png",
    description:
      "Each Gold spent on Shop refresh strengthens Shadowcell Heroes. Surviving Heroes gain extra chance to earn Gold after winning.",
    effects: [
      { units: 2, effect: "Increases DMG by 0.5% per stack." },
      { units: 4, effect: "Increases DMG by 0.8% per stack." },
      { units: 6, effect: "Increases DMG by 1.2% per stack." },
      {
        units: 10,
        effect:
          "Each stack increases DMG by 6%. Surviving Shadowcell Heroes have 100% chance to gain 5 Gold.",
      },
    ],
  },
  {
    id: 5,
    name: "Starwing",
    slug: "starwing",
    type: "Faction",
    icon: "/images/synergy/starwing.png",
    description:
      "Deploy a draggable spaceship in the Battle Area. Heroes within range gain extra DMG and Max HP. Starwing Heroes gain double effects.",
    effects: [
      {
        units: 2,
        effect:
          "Generate 4 enhancement tiles. Allied Heroes within them gain 8% extra DMG and 250 Max HP at battle start.",
      },
      {
        units: 4,
        effect:
          "Generate 6 enhancement tiles. Allied Heroes gain 10% extra DMG and 400 Max HP.",
      },
      {
        units: 6,
        effect:
          "Enhancement effects cover the entire battlefield, granting 16% extra DMG and 800 Max HP.",
      },
      {
        units: 10,
        effect:
          "Summon the Starlit Mothership. Provides 60% extra DMG and 6000 Max HP. Deals at least 13440 True DMG to enemies every 8 seconds.",
      },
    ],
  },
  {
    id: 6,
    name: "Luminexus",
    slug: "luminexus",
    type: "Faction",
    icon: "/images/synergy/luminexus.png",
    description:
      "Enemy Heroes damaged by Luminexus Heroes are linked. Linked targets share incoming DMG and suffer reduced Hybrid DEF.",
    effects: [
      {
        units: 2,
        effect: "Link up to 3 Heroes. Reduce their Hybrid DEF by 20.",
      },
      { units: 4, effect: "Link up to 6 Heroes. Reduce Hybrid DEF by 30." },
      {
        units: 6,
        effect: "No limit to number of linked Heroes. Reduce Hybrid DEF by 65.",
      },
      {
        units: 10,
        effect:
          "No limit to linked Heroes. Reduce Hybrid DEF by 600. Trigger explosion when first linked or HP drops below 50%, dealing 2000 True DMG. Luminexus Heroes gain 600 Hybrid DEF.",
      },
    ],
  },
  {
    id: 7,
    name: "Aspirants",
    slug: "aspirants",
    type: "Faction",
    icon: "/images/synergy/aspirants.png",
    description:
      "Create a Faith Chest that grants Faith Points each round. Activating the Chest provides rewards and extra Skill DMG based on Synergy count.",
    effects: [
      {
        units: 2,
        effect:
          "Gain 10 Faith Points per round. Each point gives 0.03% extra Skill DMG.",
      },
      {
        units: 4,
        effect:
          "Gain 40 Faith Points per round. Each point gives 0.06% extra Skill DMG.",
      },
      {
        units: 6,
        effect:
          "Gain 80 Faith Points per round. Each point gives 0.1% extra Skill DMG.",
      },
      {
        units: 10,
        effect:
          "Gain 160 Faith Points per round. Each point gives 0.5% extra Skill DMG. Instant rewards for 999 Faith Points upon activation.",
      },
    ],
  },
  {
    id: 8,
    name: "Toy Mischief",
    slug: "toy-mischief",
    type: "Faction",
    icon: "/images/synergy/toy-mischief.png",
    description:
      "Obtain Toy Mischief exclusive Equipment that scales with Synergy counts. Toy Mischief Heroes gain extra Hybrid DEF.",
    effects: [
      {
        units: 2,
        effect:
          "Obtain 1 piece of Toy Mischief Equipment. Heroes gain 15 Hybrid DEF.",
      },
      {
        units: 4,
        effect: "Obtain 1 additional piece. Heroes gain 25 Hybrid DEF.",
      },
      { units: 6, effect: "Obtain 1 more piece. Heroes gain 50 Hybrid DEF." },
      {
        units: 10,
        effect:
          "Equipment receives major enhancements. Heroes gain 300 Hybrid DEF.",
      },
    ],
  },
  {
    id: 9,
    name: "Glory League",
    slug: "glory-league",
    type: "Faction",
    icon: "/images/synergy/glory-league.png",
    description:
      "At match start, 1 random 5-Gold Hero gains Glory League Synergy. Allies gain Hybrid ATK and Shield every 3s.",
    effects: [
      { units: 2, effect: "Gain 2.5% Hybrid ATK and 250 Shield." },
      { units: 4, effect: "Gain 5% Hybrid ATK and 400 Shield." },
    ],
  },
  {
    id: 10,
    name: "Metro Zero",
    slug: "metro-zero",
    type: "Faction",
    icon: "/images/synergy/metro-zero.png",
    description:
      "Allied Heroes gain Hybrid ATK based on activated Synergy types. Additional bonuses for 8 or 10 Synergies.",
    effects: [
      {
        units: 2,
        effect:
          "Each activated Synergy increases Hybrid ATK by 1.5%. Gain 5% DMG Reduction at 8 Synergies, 5% Hybrid Lifesteal at 10 Synergies.",
      },
    ],
  },
  {
    id: 11,
    name: "Beyond The Cloud",
    slug: "beyond-the-cloud",
    type: "Faction",
    icon: "/images/synergy/beyond-the-cloud.png",
    description:
      "A Thunderstone grows on the World Tree each time a Beyond the Clouds Hero casts a skill, up to 99 times. Drag Thunderstones to strengthen Heroes.",
    effects: [
      { units: 2, effect: "Increase 0.4% extra DMG per Thunderstone." },
      { units: 3, effect: "Increase 0.7% extra DMG per Thunderstone." },
    ],
  },

  // Role synergies start here
  {
    id: 12,
    name: "Bruiser",
    slug: "bruiser",
    type: "Role",
    icon: "/images/synergy/bruiser.png",
    description:
      "Bruisers gain extra Basic ATK DMG. Their Basic and Enhanced Basic ATKs have a chance to hit twice.",
    effects: [
      {
        units: 2,
        effect: "Gain 10% extra Basic ATK DMG. 10% chance to hit twice.",
      },
      {
        units: 4,
        effect: "Gain 30% extra Basic ATK DMG. 30% chance to hit twice.",
      },
      {
        units: 6,
        effect: "Gain 50% extra Basic ATK DMG. 50% chance to hit twice.",
      },
    ],
  },
  {
    id: 13,
    name: "Defender",
    slug: "defender",
    type: "Role",
    icon: "/images/synergy/defender.png",
    description:
      "All allies gain Hybrid DEF. Defenders gain extra Hybrid DEF, doubled in first 20s.",
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
    id: 14,
    name: "Dauntless",
    slug: "dauntless",
    type: "Role",
    icon: "/images/synergy/dauntless.png",
    description: "All allies gain Shield. Dauntless Heroes gain extra Shield.",
    effects: [
      {
        units: 2,
        effect:
          "All allies gain Shield equal to 5% Max HP. Dauntless Heroes gain extra 25% Max HP.",
      },
      {
        units: 4,
        effect:
          "All allies gain Shield equal to 10% Max HP. Dauntless Heroes gain extra 50% Max HP.",
      },
      {
        units: 6,
        effect:
          "All allies gain Shield equal to 20% Max HP. Dauntless Heroes gain extra 100% Max HP.",
      },
    ],
  },
  {
    id: 15,
    name: "Weapon Master",
    slug: "weapon-master",
    type: "Role",
    icon: "/images/synergy/weapon-master.png",
    description:
      "All allies gain Hybrid Lifesteal. Weapon Masters gain extra Hybrid Lifesteal and Physical ATK.",
    effects: [
      {
        units: 2,
        effect:
          "All allies gain 5% Hybrid Lifesteal. Weapon Masters gain extra 5% Hybrid Lifesteal and 30% Physical ATK.",
      },
      {
        units: 4,
        effect:
          "All allies gain 10% Hybrid Lifesteal. Weapon Masters gain extra 10% Hybrid Lifesteal and 45% Physical ATK.",
      },
      {
        units: 6,
        effect:
          "All allies gain 15% Hybrid Lifesteal. Weapon Masters gain extra 15% Hybrid Lifesteal and 85% Physical ATK.",
      },
    ],
  },
  {
    id: 16,
    name: "Marksman",
    slug: "marksman",
    type: "Role",
    icon: "/images/synergy/marksman.png",
    description: "All allies gain ATK Speed. Marksmen gain extra ATK Speed.",
    effects: [
      {
        units: 2,
        effect:
          "All allies gain 5% ATK Speed. Marksmen gain extra 10% ATK Speed.",
      },
      {
        units: 4,
        effect:
          "All allies gain 10% ATK Speed. Marksmen gain extra 25% ATK Speed.",
      },
      {
        units: 6,
        effect:
          "All allies gain 20% ATK Speed. Marksmen gain extra 50% ATK Speed.",
      },
    ],
  },
  {
    id: 17,
    name: "Stargazer",
    slug: "stargazer",
    type: "Role",
    icon: "/images/synergy/stargazer.png",
    description:
      "All allies recover Mana per second. Stargazers recover extra Mana per second.",
    effects: [
      {
        units: 2,
        effect:
          "All allies recover 2 Mana per second. Stargazers recover 6 extra Mana per second.",
      },
      {
        units: 4,
        effect:
          "All allies recover 4 Mana per second. Stargazers recover 12 extra Mana per second.",
      },
      {
        units: 6,
        effect:
          "All allies recover 6 Mana per second. Stargazers recover 16 extra Mana per second.",
      },
    ],
  },
  {
    id: 18,
    name: "Swiftblade",
    slug: "swiftblade",
    type: "Role",
    icon: "/images/synergy/swiftblade.png",
    description:
      "All allies gain Hybrid Penetration. Swiftblade Heroes gain extra Hybrid Penetration.",
    effects: [
      {
        units: 2,
        effect:
          "All allies gain 10 Hybrid Penetration. Swiftblade Heroes gain extra 20 Hybrid Penetration.",
      },
      {
        units: 4,
        effect:
          "All allies gain 15 Hybrid Penetration. Swiftblade Heroes gain extra 45 Hybrid Penetration.",
      },
      {
        units: 6,
        effect:
          "All allies gain 20 Hybrid Penetration. Swiftblade Heroes gain extra 90 Hybrid Penetration.",
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
    id: 20,
    name: "Phasewarper",
    slug: "phasewarper",
    type: "Role",
    icon: "/images/synergy/phasewarper.png",
    description:
      "Phasewarpers gain DMG Increase. The first time their HP drops below 40%, they immediately move to a safe location and recover HP.",
    effects: [
      { units: 2, effect: "20% DMG Increase. Restore 35% HP." },
      { units: 4, effect: "35% DMG Increase. Restore 70% HP." },
    ],
  },
  {
    id: 21,
    name: "Scavenger",
    slug: "scavenger",
    type: "Role",
    icon: "/images/synergy/scavenger.png",
    description: "Get a random Hero from the Shop at the start of each round.",
    effects: [
      { units: 2, effect: "Get 1 random Hero." },
      { units: 3, effect: "Get 1 random Hero and 2 Gold." },
    ],
  },
];
