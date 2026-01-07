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
    icon: "/images/synergy/relation60.png",
    description:
      "When Mortal Rivals fight alone, they gain massive attribute bonuses. (This Synergy does not trigger Blessing effects.)",
    effects: [
      {
        units: 1,
        effect:
          "When only 1 Mortal Rival is deployed, gain 10% extra DMG and 5% DMG Reduction.",
      },
      {
        units: 11,
        effect:
          "Only activates when reaching 11-KOF. Both Mortal Rivals gain bonuses when deployed together. Gain 100% extra DMG, 50% DMG Reduction, and 10000 HP.",
      },
    ],
  },

  {
    id: 2,
    name: "KOF",
    slug: "kof",
    type: "Faction",
    icon: "/images/synergy/relation53.png",
    description:
      "KOF Heroes gain attribute bonuses. The KOF Hero with the most Equipment becomes the Captain and gains extra bonuses. The Captain immediately casts their own skill when a KOF Hero dies.",
    effects: [
      {
        units: 2,
        effect: "KOF Heroes gain 5% extra DMG, and the Captain gains 15% HP.",
      },
      {
        units: 4,
        effect: "KOF Heroes gain 10% extra DMG, and the Captain gains 25% HP.",
      },
      {
        units: 6,
        effect: "KOF Heroes gain 20% extra DMG, and the Captain gains 50% HP.",
      },
      {
        units: 11,
        effect:
          "KOF Heroes gain 200% extra DMG, and the Captain gains 25000 HP. Upon reaching 11-KOF, both Mortal Rivals gain their Synergy bonuses when deployed together.",
      },
    ],
  },
  {
    id: 3,
    name: "Soul Vessels",
    slug: "soul-vessels",
    type: "Faction",
    icon: "/images/synergy/relation50.png",
    description:
      "Summon Dijiang to join the battle. Dijiang inherits a certain percentage of Hybrid ATK from all Soul Vessels Heroes.",
    effects: [
      {
        units: 2,
        effect: "Summon 1-Star Dijiang. Dijiang inherits 5% Hybrid ATK.",
      },
      {
        units: 4,
        effect: "Summon 2-Star Dijiang. Dijiang inherits 10% Hybrid ATK.",
      },
      {
        units: 6,
        effect:
          "Summon 3-Star Dijiang. Dijiang inherits 15% Hybrid ATK. Plus, Dijiang automatically gains the Synergy with the most Heroes currently deployed (Soul Vessels excluded).",
      },
      {
        units: 10,
        effect:
          "Summon 4-Star Dijiang. Dijiang inherits 60% Hybrid ATK. Plus, Dijiang automatically gains the Synergy with the most Heroes currently deployed (Soul Vessels excluded). When battle starts, Dijiang releases Chaotic Energy forward, dealing at least 20000 True DMG shared among enemies hit.",
      },
    ],
  },
  {
    id: 4,
    name: "Heartbond",
    slug: "heartbond",
    type: "Faction",
    icon: "/images/synergy/relation52.png",
    description:
      "Heartbond's special tile pairs Heartbond Heroes. When one is dying and falls into slumber, they resurrect with 30% HP if the other is alive. Slumber lasts for 3s the first time, 5s the second, and 8s the third and subsequent times. Dragging paired Heroes to the Hero Slots unpairs them.",
    effects: [
      {
        units: 2,
        effect:
          "Heartbond Heroes gain 10% Hybrid ATK, and paired Heroes gain additional 15% Hybrid ATK.",
      },
      {
        units: 4,
        effect:
          "Heartbond Heroes gain 20% Hybrid ATK, and paired Heroes gain additional 30% Hybrid ATK.",
      },
      {
        units: 6,
        effect:
          "Heartbond Heroes gain 30% Hybrid ATK, and paired Heroes gain additional 45% Hybrid ATK.",
      },
      {
        units: 10,
        effect:
          "Heartbond Heroes gain 250% Hybrid ATK and HP, and paired Heroes gain additional 400% Hybrid ATK and HP.",
      },
    ],
  },
  {
    id: 5,
    name: "Luminexus",
    slug: "luminexus",
    type: "Faction",
    icon: "/images/synergy/relation54.png",
    description:
      "Enemy Heroes damaged by Luminexus Heroes will be linked together. All linked targets share incoming DMG and have reduced Hybrid DEF.",
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
          "No limit to the number of linked Heroes. Linked Heroes have their Hybrid DEF reduced by 50.",
      },
      {
        units: 10,
        effect:
          "No limit to the number of linked Heroes. Linked Heroes have their Hybrid DEF reduced by 600. When enemies are first linked or when their HP drops below 50%, trigger an explosion that deals 2000 True DMG to targets within 9 tiles. (The DMG is shared among all affected targets.) Luminexus Heroes gain 600 Hybrid DEF.",
      },
    ],
  },
  {
    id: 6,
    name: "Exorcist",
    slug: "exorcist",
    type: "Faction",
    icon: "/images/synergy/relation51.png",
    description:
      "Obtain Exorcist's Seal. The Seal transforms into a piece of Equipment suited for its carrier. When an Exorcist Hero dies, they transform into a Phantom of the Seal's carrier, preserving 15% HP, and cast their skill once. Exorcist Heroes gain attribute bonuses.",
    effects: [
      {
        units: 2,
        effect: "The Phantom deals 40% DMG.",
      },
      {
        units: 4,
        effect:
          "The Phantom deals 80% DMG. Exorcist Heroes gain 15% extra DMG and HP.",
      },
      {
        units: 6,
        effect:
          "The Phantom deals 150% DMG. Exorcist Heroes gain 30% extra DMG and HP.",
      },
      {
        units: 10,
        effect:
          "The Seal's carrier enters Phantom Lord state, gaining 300% extra DMG and HP. When battle starts, other Exorcist Heroes transform into the Seal's carrier, inheriting 100% HP and dealing 300% extra DMG.",
      },
    ],
  },
  {
    id: 7,
    name: "Neobeast",
    slug: "neobeasts",
    type: "Faction",
    icon: "/images/synergy/relation55.png",
    description:
      "Summon a mask beside the battlefield, gaining points each round. Extra points are granted when allies die. Can be activated multiple times, with rewards granted each activation based on points. Neobeasts Heroes gain extra Skill DMG based on total points activated.",
    effects: [
      {
        units: 2,
        effect:
          "Gain 6 energy point(s) per round, plus 1 point(s) for each ally's death. Each point grants 0.03% extra Skill DMG.",
      },
      {
        units: 4,
        effect:
          "Gain 25 energy point(s) per round, plus 2 point(s) for each ally's death. Each point grants 0.06% extra Skill DMG.",
      },
      {
        units: 6,
        effect:
          "Gain 55 energy point(s) per round, plus 5 point(s) for each ally's death. Each point grants 0.1% extra Skill DMG.",
      },
      {
        units: 10,
        effect:
          "Gain 120 energy point(s) per round, plus 10 point(s) for each ally's death. Each point grants 0.5% extra DMG. Upon activation, instantly receive a bonus equivalent to 999 points.",
      },
    ],
  },
  {
    id: 8,
    name: "Toy Mischief",
    slug: "toy-mischief",
    type: "Faction",
    icon: "/images/synergy/relation56.png",
    description:
      "Obtain Toy Mischief exclusive Equipment that scales its effect with Synergy counts. Toy Mischief Heroes gain extra Hybrid DEF.",
    effects: [
      {
        units: 2,
        effect:
          "Obtain 1 piece(s) of Toy Mischief Equipment. Toy Mischief Heroes gain 18 Hybrid DEF.",
      },
      {
        units: 4,
        effect:
          "Obtain 1 additional piece(s) of Toy Mischief Equipment. Toy Mischief Heroes gain 30 Hybrid DEF.",
      },
      {
        units: 6,
        effect:
          "Obtain 1 more piece(s) of Toy Mischief Equipment. Toy Mischief Heroes gain 50 Hybrid DEF.",
      },
      {
        units: 10,
        effect:
          "Equipment enhances greatly. Toy Mischief Heroes gain 300 Hybrid DEF.",
      },
    ],
  },
  {
    id: 9,
    name: "Glory League",
    slug: "glory-league",
    type: "Faction",
    icon: "/images/synergy/relation57.png",
    description:
      "At the start of each match, 1 5-Gold Hero(es) and 1 1-Gold Hero(es) join the Glory League Synergy. (Randomly selected from all Heroes.) Glory League Heroes gain Hybrid ATK and Shield every 3s during battle.",
    effects: [
      {
        units: 2,
        effect: "Gain 2% Hybrid ATK and 200 Shield.",
      },
      {
        units: 4,
        effect: "Gain 4% Hybrid ATK and 400 Shield.",
      },
      {
        units: 6,
        effect: "Gain 10% Hybrid ATK and 800 Shield.",
      },
    ],
  },
  {
    id: 10,
    name: "Mystic Meow",
    slug: "mystic-meow",
    type: "Faction",
    icon: "/images/synergy/relation58.png",
    description:
      "All allies gain HP based on the number of activated Synergy types. At 9 Synergies, choose between Red and Blue Mystic Claw enhancements for extra bonuses. At 11 Synergies, this enhancement is further amplified.",
    effects: [
      {
        units: 2,
        effect:
          "Each activated Synergy increases HP by 1%. Red and Blue Mystic Claws provide 10% Physical and Magic ATK, respectively. When reaching 11 Synergies, the enhancement effect increases to 25%.",
      },
    ],
  },
  {
    id: 11,
    name: "Beyond the Clouds",
    slug: "beyond-the-clouds",
    type: "Faction",
    icon: "/images/synergy/relation59.png",
    description:
      "Each time a Beyond the Clouds Hero casts a skill, a Thunderstone grows on the World Tree (Maximum: 99). Drag Thunderstones onto a Hero to grant them extra DMG.",
    effects: [
      {
        units: 2,
        effect: "Each Thunderstone provides 0.4% extra DMG.",
      },
      {
        units: 3,
        effect: "Each Thunderstone provides 0.6% extra DMG.",
      },
    ],
  },
  {
    id: 12,
    name: "Bruiser",
    slug: "bruiser",
    type: "Role",
    icon: "/images/synergy/relation1.png",
    description:
      "Bruisers gain extra Basic ATK DMG, and their Basic and Enhanced Basic ATKs have a chance to hit twice.",
    effects: [
      {
        units: 2,
        effect: "Gain 15% extra Basic ATK DMG. 10% chance to hit twice.",
      },
      {
        units: 4,
        effect: "Gain 35% extra Basic ATK DMG. 30% chance to hit twice.",
      },
      {
        units: 6,
        effect: "Gain 60% extra Basic ATK DMG. 50% chance to hit twice.",
      },
    ],
  },
  {
    id: 13,
    name: "Defender",
    slug: "defender",
    type: "Role",
    icon: "/images/synergy/relation3.png",
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
    id: 14,
    name: "Dauntless",
    slug: "dauntless",
    type: "Role",
    icon: "/images/synergy/relation2.png",
    description: "All allies gain Shield. Dauntless Heroes gain extra Shield.",
    effects: [
      {
        units: 2,
        effect:
          "All allies gain Shield equal to 5% of Max HP. Dauntless Heroes gain extra Shield equal to 25% of Max HP.",
      },
      {
        units: 4,
        effect:
          "All allies gain Shield equal to 10% of Max HP. Dauntless Heroes gain extra Shield equal to 50% of Max HP.",
      },
      {
        units: 6,
        effect:
          "All allies gain Shield equal to 20% of Max HP. Dauntless Heroes gain extra Shield equal to 100% of Max HP.",
      },
    ],
  },
  {
    id: 15,
    name: "Weapon Master",
    slug: "weapon-master",
    type: "Role",
    icon: "/images/synergy/relation4.png",
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
    icon: "/images/synergy/relation5.png",
    description: "All allies gain ATK Speed. Marksmen gain extra ATK Speed.",
    effects: [
      {
        units: 2,
        effect:
          "All allies gain 5% ATK Speed. Marksmen gain extra 15% ATK Speed.",
      },
      {
        units: 4,
        effect:
          "All allies gain 10% ATK Speed. Marksmen gain extra 35% ATK Speed.",
      },
      {
        units: 6,
        effect:
          "All allies gain 20% ATK Speed. Marksmen gain extra 70% ATK Speed.",
      },
    ],
  },
  {
    id: 17,
    name: "Stargazer",
    slug: "stargazer",
    type: "Role",
    icon: "/images/synergy/relation7.png",
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
    icon: "/images/synergy/relation8.png",
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
    icon: "/images/synergy/relation6.png",
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
    icon: "/images/synergy/relation10.png",
    description:
      "Phasewarpers gain DMG Increase. The first time their HP drops below 40%, they immediately warp to a safe location and restore HP.",
    effects: [
      {
        units: 2,
        effect: "20% DMG Increase. Restore 35% HP.",
      },
      {
        units: 3,
        effect: "Increase 30% DMG. Restore 50% HP.",
      },
    ],
  },
  {
    id: 21,
    name: "Scavenger",
    slug: "scavenger",
    type: "Role",
    icon: "/images/synergy/relation9.png",
    description: "Get a random Hero from the Shop at the start of each round.",
    effects: [
      {
        units: 2,
        effect: "Get 1 random Hero(es).",
      },
      {
        units: 3,
        effect: "Get 1 random Hero(es) and 2 Gold.",
      },
    ],
  },
];
