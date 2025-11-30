export interface Hero {
  id: number;
  name: string;
  cost: number;
  image: string;

  // Skill Info
  skill: {
    name: string;
    description: string;
    sdescription: string;
    icon: string;
    attributes?: Record<string, (number | string)[]>;
  };

  synergies: {
    faction: string[];
    roles: string[];
  };

  recommendedEquipment?: string[];

  attributes?: {
    hp: number[];
    physicalAtk: number[];
    magicAtk: number[];
    atkSpeed: number[];
    atkRange: number[];
    initialManaCap: number[];
    manaCap: number[];
  };
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: "Iori Yagami",
    cost: 5,
    image: "/images/heroes/iori_yagami.png",
    skill: {
      name: "The Way of Dragon",
      description:
        "lori Yagami gains CC Immunity and performs a Roundhouse Kick, dealing (+35%Total Physical ATK) Physical DMG to the target and knocking them airborne to the farthest empty tile behind them. He then blinks to the target location, dealing (+350%Total Physical ATK) Physical DMG. Passive: ATKs following a blink can trigger ATK Effects. When triggering Bruiser Synergy's effect, deals additional (+60%Total Physical ATK) Physical DMG. Skill DMG executes targets with HP below 15%. Restores some Mana if skill is interrupted.",
      sdescription: "Blinks and slashes enemies, executing low HP targets.",
      icon: "/images/skills/iori_yagami.png",
      attributes: {
        "Physical Bonus": ["35%", "50%", "230%"],
        "Extra DMG for Bruisers": ["60%", "65%", "170%"],
        "Skill Physical Bonus": ["350%", "500%", "2500%"],
      },
    },
    synergies: {
      faction: ["KOF", "Mortal Rivals"],
      roles: ["Bruiser"],
    },
    attributes: {
      hp: [3846, 6922, 32111],
      physicalAtk: [220, 330, 495],
      magicAtk: [220, 330, 495],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [40, 40, 20],
      manaCap: [60, 60, 60],
    },
  },
  {
    id: 2,
    name: "Terry Bogard",
    cost: 4,
    image: "/images/heroes/terry_bogard.png",
    skill: {
      name: "Knockout Strike",
      description:
        "Terry Bogard gains Shield equal to 8% Max HP for 3s, becomes CC Immune and charges toward the target with an uppercut, dealing (+370% Total Physical ATK) Physical DMG to targets in range and stunning them for 1s before quickly retreating.",
      sdescription:
        "Charges forward with an uppercut, gaining Shield and stunning enemies.",
      icon: "/images/skills/terry_bogard.png",
      attributes: {
        Shield: ["8%", "12%", "18%"],
        "Physical Bonus": ["370%", "370%", "1140%"],
      },
    },
    synergies: {
      faction: ["KOF"],
      roles: ["Defender"],
    },
    recommendedEquipment: [
      "Guardian Helmet",
      "Hunter Strike",
      "Bloodlust Axe",
      "Brute Force Breastplate",
    ],
    attributes: {
      hp: [3857, 6943, 17164],
      physicalAtk: [175, 265, 370],
      magicAtk: [175, 265, 370],
      atkSpeed: [0.65, 0.65, 0.65],
      atkRange: [1, 1, 1],
      initialManaCap: [70, 70, 70],
      manaCap: [90, 90, 90],
    },
  },
  {
    id: 3,
    name: "Chris",
    cost: 2,
    image: "/images/heroes/chris.png",
    skill: {
      name: "Spectre Step",
      description:
        "Chris unleashes a Circle Strike, dealing (+170% Total Physical ATK) DMG to nearby enemies and restoring (+170% Total Physical ATK) HP. Passive: When battle starts, Chris and allies within 1 tile to his left and right gain 10% Hybrid Lifesteal.",
      sdescription:
        "Deals area damage and heals himself, granting lifesteal to nearby allies.",
      icon: "/images/skills/chris.png",
      attributes: {
        "Physical Bonus": ["170%", "170%", "220%"],
        "Physical Bonus on Restore": ["170%", "170%", "220%"],
      },
    },
    synergies: {
      faction: ["KOF"],
      roles: ["Dauntless"],
    },
    recommendedEquipment: [
      "Hunter Strike",
      "Haas's Claws",
      "Bloodlust Axe",
      "Windtalker",
    ],
    attributes: {
      hp: [2233, 4019, 7235],
      physicalAtk: [115, 175, 240],
      magicAtk: [115, 175, 240],
      atkSpeed: [0.65, 0.65, 0.65],
      atkRange: [1, 1, 1],
      initialManaCap: [20, 20, 20],
      manaCap: [40, 40, 40],
    },
  },
  {
    id: 4,
    name: "Kula",
    cost: 1,
    image: "/images/heroes/kula.png",
    skill: {
      name: "Hailstone Blast",
      description:
        "Kula summons Icy Meteorite to strike the target, dealing (+930% Total Magic ATK) Magic DMG.",
      sdescription: "Summons an icy meteorite dealing massive magic damage.",
      icon: "/images/skills/kula.png",
      attributes: {
        "Magic Bonus": ["930%", "930%", "1140%"],
      },
    },
    synergies: {
      faction: ["KOF"],
      roles: ["Stargazer"],
    },
    recommendedEquipment: [
      "Concentrated Energy",
      "Ice Queen Wand",
      "Glowing Wand",
      "Fleeting Time",
    ],
    attributes: {
      hp: [1550, 2790, 5022],
      physicalAtk: [80, 120, 170],
      magicAtk: [80, 120, 170],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 5,
    name: "K'",
    cost: 4,
    image: "/images/heroes/k_dash.png",
    skill: {
      name: "Blazing Requiem",
      description:
        "K' launches multiple blazing flames forward, each dealing (+45% Total Magic ATK) Magic DMG on hit. After the first cast, he dashes to the enemy with highest DMG output within 4 tiles and recalls the flames, dealing the same amount of Magic DMG.",
      sdescription:
        "Launches flames forward, then dashes to the enemy with highest DMG output.",
      icon: "/images/skills/k_dash.png",
      attributes: {
        "Magic Bonus": ["45%", "45%", "125%"],
      },
    },
    synergies: {
      faction: ["KOF"],
      roles: ["Swiftblade"],
    },
    recommendedEquipment: [
      "Glowing Wand",
      "Concentrated Energy",
      "Ice Queen Wand",
      "Fleeting Time",
    ],
    attributes: {
      hp: [3496, 6293, 15557],
      physicalAtk: [180, 270, 380],
      magicAtk: [180, 270, 380],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [30, 30, 30],
      manaCap: [50, 50, 50],
    },
  },
  {
    id: 6,
    name: "Kyo Kusanagi",
    cost: 5,
    image: "/images/heroes/kyo_kusanagi.png",
    skill: {
      name: "Burst Fireball",
      description:
        "Kyo Kusanagi fires 4 Burst Fireballs at different enemies, each dealing (+130% Total Magic ATK) Magic DMG. The flames deal (+20% Total Magic ATK) sustained damage over time, then deal (+130% Total Magic ATK) again. Passive: After obtaining Kyo Kusanagi, the Shop has a chance to refresh a free Flame Gloves. When purchased, it provides 10% Hybrid ATK to Kyo Kusanagi, stacking up to 3 time(s).",
      sdescription:
        "Fires burst fireballs that explode and burn enemies over time.",
      icon: "/images/skills/kyo_kusanagi.png",
      attributes: {
        "Detonation DMG": ["130%", "140%", "465%"],
        "Sustained DMG": ["20%", "25%", "75%"],
        "Final DMG": ["130%", "140%", "465%"],
      },
    },
    synergies: {
      faction: ["Mortal Rivals", "KOF"],
      roles: ["Mage"],
    },
    recommendedEquipment: [
      "Concentrated Energy",
      "Ice Queen Wand",
      "Glowing Wand",
      "Fleeting Time",
    ],
    attributes: {
      hp: [3387, 6096, 28279],
      physicalAtk: [140, 210, 315],
      magicAtk: [140, 210, 315],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [70, 70, 20],
      manaCap: [90, 90, 90],
    },
  },
  {
    id: 7,
    name: "Leona",
    cost: 3,
    image: "/images/heroes/leona.png",
    skill: {
      name: "Elusiveness",
      description:
        "Upon first skill cast, Leona dashes to the enemy with the highest DMG output within 3 tiles and becomes immune to 5 basic attacks for 2s. Passive: After attacking a target twice, her third attack deals (+250% Total Magic ATK) extra Magic DMG.",
      sdescription:
        "Dashes to enemy and becomes immune to attacks, with powerful passive strikes.",
      icon: "/images/skills/leona.png",
      attributes: {
        Cooldown: ["2.0", "4.0", "6.0"],
        Duration: ["2", "4", "6"],
        "Basic ATK Times": ["5", "6", "8"],
        "Magic Bonus": ["250%", "250%", "390%"],
      },
    },
    synergies: {
      faction: ["KOF"],
      roles: ["Scavenger"],
    },
    recommendedEquipment: [
      "Concentrated Energy",
      "Oracle",
      "Ice Queen Wand",
      "Athena's Shield",
    ],
    attributes: {
      hp: [2576, 4637, 9789],
      physicalAtk: [145, 220, 290],
      magicAtk: [145, 220, 290],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [80, 80, 80],
      manaCap: [100, 100, 100],
    },
  },
  {
    id: 8,
    name: "Gloo",
    cost: 3,
    image: "/images/heroes/gloo.png",
    skill: {
      name: "Slam, Slam",
      description:
        "Gloo enhances his next Basic ATK, dealing (+800% Total Magic ATK) Magic DMG to the target and stunning them for 0.8s. Passive: When HP first drops below 50%, a Goo drops and restores 20% of Gloo's Max HP.",
      sdescription:
        "Enhances next Basic ATK, dealing Magic DMG & stunning for 0.8s. Passive: Restores 20% Max HP when HP drops below 50%.",
      icon: "/images/skills/gloo.png",
      attributes: {
        "Stun Duration": [0.8, 1, 1.2],
        "Magic Bonus": ["800%", "850%", "1400%"],
      },
    },
    synergies: {
      faction: ["Soul Vessel"],
      roles: ["Dauntless"],
    },
    recommendedEquipment: [
      "Oracle",
      "Concentrated Energy",
      "Holy Crystal",
      "Radiant Armor",
      "Dominance Ice",
    ],
    attributes: {
      hp: [2842, 5116, 10800],
      physicalAtk: [135, 205, 270],
      magicAtk: [135, 205, 270],
      atkSpeed: [0.65, 0.65, 0.65],
      atkRange: [1, 1, 1],
      initialManaCap: [80, 80, 80],
      manaCap: [100, 100, 100],
    },
  },
  {
    id: 9,
    name: "Aamon",
    cost: 2,
    image: "/images/heroes/aamon.png",
    skill: {
      name: "Soul Shards",
      description:
        "Aamon enhances his next ATK with shards, dealing (+580% Total Magic ATK) Magic DMG.",
      sdescription: "Enhances next ATK with shards, dealing Magic DMG.",
      icon: "/images/skills/aamon.png",
      attributes: {
        "Magic Bonus": ["580%", "580%", "750%"],
      },
    },
    synergies: {
      faction: ["Soul Vessel"],
      roles: ["Swiftblade"],
    },
    recommendedEquipment: [
      "Concentrated Energy",
      "Ice Queen Wand",
      "Feather of Heaven",
      "Holy Crystal",
      "Fleeting Time",
    ],
    attributes: {
      hp: [2024, 3643, 6558],
      physicalAtk: [120, 180, 250],
      magicAtk: [120, 180, 250],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [40, 40, 40],
      manaCap: [60, 60, 60],
    },
  },
  {
    id: 10,
    name: "Cecilion",
    cost: 1,
    image: "/images/heroes/cecilion.png",
    skill: {
      name: "Bat Impact",
      description:
        "Cecilion fires 2 missiles at the target, dealing (+1200% Total Magic ATK) Magic DMG in total. Passive: When battle starts, provide 10 Mana to himself and left and right allied Heroes.",
      sdescription:
        "Fires 2 missiles, dealing Magic DMG. Passive: Gives 10 Mana to self and adjacent allies at battle start.",
      icon: "/images/skills/cecilion.png",
      attributes: {
        "Magic Bonus": ["1200%", "1200%", "1500%"],
      },
    },
    synergies: {
      faction: ["Soul Vessel"],
      roles: ["Mage"],
    },
    recommendedEquipment: [
      "Concentrated Energy",
      "Ice Queen Wand",
      "Feather of Heaven",
      "Holy Crystal",
      "Fleeting Time",
    ],
    attributes: {
      hp: [1550, 2790, 5022],
      physicalAtk: [80, 120, 170],
      magicAtk: [80, 120, 170],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [70, 70, 25],
      manaCap: [90, 90, 90],
    },
  },
  {
    id: 11,
    name: "Benedetta",
    cost: 5,
    image: "/images/heroes/benedetta.png",
    skill: {
      name: "Alecto: Final Blow",
      description:
        "Benedetta clenches Alecto, becoming briefly untargetable before dashing forward and slashing, detonating Sword Intent along her path. She continuously slashes enemies for 2.5s, dealing up to (+455% Total Physical ATK) Physical DMG. Passive: When battle starts, Benedetta summons the Eye of Diiiannn, inheriting 5% Physical ATK and HP from allies.",
      sdescription:
        "Becomes untargetable, dashes, and slashes enemies for 2.5s, dealing Physical DMG. Passive: Inherits 5% Physical ATK and HP from allies at battle start.",
      icon: "/images/skills/benedetta.png",
      attributes: {
        "Physical Bonus": ["455%", "520%", "1755%"],
      },
    },
    synergies: {
      faction: ["Soul Vessel"],
      roles: ["Weapon Master"],
    },
    recommendedEquipment: [
      "Blade of Despair",
      "Malefic Roar",
      "Endless Battle",
      "Demon Hunter Sword",
      "Windtalker",
    ],
    attributes: {
      hp: [4048, 7286, 33801],
      physicalAtk: [240, 360, 540],
      magicAtk: [240, 360, 540],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [50, 50, 20],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 12,
    name: "Clint",
    cost: 2,
    image: "/images/heroes/clint.png",
    skill: {
      name: "Quick Draw",
      description:
        "Clint rapidly shoots 5 bullets at the target, each dealing (+85% Total Physical ATK) Physical DMG.",
      sdescription: "Shoots 5 bullets at the target, dealing Physical DMG.",
      icon: "/images/skills/clint.png",
      attributes: {
        "Physical Bonus": ["85%", "85%", "110%"],
      },
    },
    synergies: {
      faction: ["Soul Vessel"],
      roles: ["Phasewarper"],
    },
    recommendedEquipment: [
      "Berserker's Fury",
      "Scarlet Phantom",
      "Blade of Despair",
      "Malefic Roar",
      "Haas's Claws",
    ],
    attributes: {
      hp: [1705, 3069, 5524],
      physicalAtk: [110, 165, 230],
      magicAtk: [110, 165, 230],
      atkSpeed: [0.8, 0.8, 0.8],
      atkRange: [4, 4, 4],
      initialManaCap: [30, 30, 30],
      manaCap: [30, 30, 30],
    },
  },
  {
    id: 13,
    name: "Hanabi",
    cost: 4,
    image: "/images/heroes/hanabi.png",
    skill: {
      name: "Ninjutsu: Petal Barrage",
      description:
        "Passive: After hitting a target, Hanabi's Basic ATKs bounce to other surrounding enemies, dealing (+20% Total Physical ATK) Physical DMG. Each ATK can bounce up to 3 times. Active: Hanabi throws a Higanbana toward enemies, dealing (+175% Total Physical ATK) Physical DMG to enemies hit. The Higanbana then blooms after 1s, dealing (+175% Total Physical DMG) to nearby enemies.",
      sdescription:
        "Passive: Basic ATKs bounce to surrounding enemies. Active: Throws a Higanbana, dealing Physical DMG, which blooms after 1s.",
      icon: "/images/skills/hanabi.png",
      attributes: {
        "Bounce DMG": ["20%", "20%", "30%"],
        "Physical Bonus": ["175%", "175%", "530%"],
        "Explosion DMG": ["175%", "175%", "530%"],
      },
    },
    synergies: {
      faction: ["Soul Vessel"],
      roles: ["Marksman"],
    },
    recommendedEquipment: [
      "Berserker's Fury",
      "Scarlet Phantom",
      "Blade of Despair",
      "Malefic Roar",
    ],
    attributes: {
      hp: [3100, 5580, 13795],
      physicalAtk: [165, 250, 345],
      magicAtk: [165, 250, 345],
      atkSpeed: [0.8, 0.8, 0.8],
      atkRange: [4, 4, 4],
      initialManaCap: [50, 50, 25],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 14,
    name: "Helcurt",
    cost: 1,
    image: "/images/heroes/helcurt.png",
    skill: {
      name: "Deadly Stinger",
      description:
        "On first cast, Helcurt blinks to the enemy with the highest DMG output within 3 tiles (prioritizing ranged Heroes) and fires 5 Deadly Stinger(s) forward, each dealing (+100%Total Physical ATK) Physical DMG.",
      sdescription:
        "Blinks to the highest DMG enemy (prioritizing ranged) and fires 5 Deadly Stingers, dealing Physical DMG.",
      icon: "/images/skills/helcurt.png",
      attributes: {
        "Physical Bonus": ["100%", "100%", "120%"],
      },
    },
    synergies: { faction: ["Shadowcell"], roles: ["Swiftblade"] },
    recommendedEquipment: [
      "Blade of Despair",
      "Malefic Roar",
      "Demon Hunter Sword",
      "Blade of the Heptaseas",
      "Windtalker",
    ],
    attributes: {
      hp: [1840, 3312, 5962],
      physicalAtk: [110, 165, 230],
      magicAtk: [110, 165, 230],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 15,
    name: "Valentina",
    cost: 4,
    image: "/images/heroes/valentina.png",
    skill: {
      name: "Arcane Shade",
      description:
        "Valentina fires 6 Shadow Bolt(s), each hitting one nearby enemy. If there are not enough nearby enemies, the remaining Bolts target random enemies. Each Bolt deals (+210%Total Magic ATK) Magic DMG.",
      sdescription:
        "Fires 6 Shadow Bolts at nearby enemies, dealing Magic DMG.",
      icon: "/images/skills/valentina.png",
      attributes: {
        "Magic Bonus": ["210%", "220%", "600%"],
      },
    },
    synergies: { faction: ["Shadowcell"], roles: ["Mage"] },
    recommendedEquipment: [
      "Concentrated Energy",
      "Ice Queen Wand",
      "Feather of Heaven",
      "Holy Crystal",
      "Fleeting Time",
    ],
    attributes: {
      hp: [3100, 5580, 13795],
      physicalAtk: [140, 210, 295],
      magicAtk: [140, 210, 295],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 16,
    name: "Arlott",
    cost: 4,
    image: "/images/heroes/arlott.png",
    skill: {
      name: "Final Slash",
      description:
        "Arlott swings his lance forward, dealing (+475%Total Physical ATK) Physical DMG to targets in the area and stunning them for 0.4s.",
      sdescription:
        "Swings lance forward, dealing Physical DMG in an area and stunning for 0.4s.",
      icon: "/images/skills/arlott.png",
      attributes: {
        "Physical Bonus": ["475%", "510%", "1630%"],
      },
    },
    synergies: { faction: ["Shadowcell"], roles: ["Phasewarper"] },
    recommendedEquipment: [
      "Endless Battle",
      "Blade of Despair",
      "Malefic Roar",
      "Bloodlust Axe",
      "Warrior Boots",
    ],
    attributes: {
      hp: [3496, 6293, 15557],
      physicalAtk: [180, 270, 380],
      magicAtk: [180, 270, 380],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [60, 60, 60],
      manaCap: [80, 80, 80],
    },
  },
  {
    id: 17,
    name: "Obsidia",
    cost: 2,
    image: "/images/heroes/obsidia.png",
    skill: {
      name: "Abyssal Bone Needle",
      description:
        "Obsidia launches an Abyssal Bone Needle at the target, dealing (+580%Total Physical ATK) Physical DMG to enemies.",
      sdescription:
        "Launches an Abyssal Bone Needle, dealing Physical DMG to enemies.",
      icon: "/images/skills/obsidia.png",
      attributes: {
        "Physical Bonus": ["580%", "580%", "750%"],
      },
    },
    synergies: { faction: ["Shadowcell"], roles: ["Marksman"] },
    recommendedEquipment: [
      "Berserker's Fury",
      "Scarlet Phantom",
      "Blade of Despair",
      "Malefic Roar",
      "Haas's Claws",
    ],
    attributes: {
      hp: [1705, 3069, 5524],
      physicalAtk: [110, 165, 230],
      magicAtk: [110, 165, 230],
      atkSpeed: [0.8, 0.8, 0.8],
      atkRange: [4, 4, 4],
      initialManaCap: [30, 30, 30],
      manaCap: [50, 50, 50],
    },
  },
  {
    id: 18,
    name: "Masha",
    cost: 3,
    image: "/images/heroes/masha.png",
    skill: {
      name: "Thunderclap",
      description:
        "Masha deals (+450%Total Physical ATK) Physical DMG to the current target, then gains 100% ATK Speed and 15% Lifesteal for 3s.",
      sdescription:
        "Deals Physical DMG to the target, then gains 100% ATK Speed and 15% Lifesteal for 3s.",
      icon: "/images/skills/masha.png",
      attributes: {
        "Physical Bonus": ["450%", "450%", "630%"],
      },
    },
    synergies: { faction: ["Shadowcell"], roles: ["Bruiser"] },
    recommendedEquipment: [
      "Demon Hunter Sword",
      "Corrosion Scythe",
      "Golden Staff",
      "Warrior Boots",
      "Guardian Helmet",
    ],
    attributes: {
      hp: [2576, 4637, 9789],
      physicalAtk: [130, 195, 260],
      magicAtk: [130, 195, 260],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 19,
    name: "Alucard",
    cost: 1,
    image: "/images/heroes/alucard.png",
    skill: {
      name: "Fission Wave",
      description:
        "Alucard deals (+400%Total Physical ATK) Physical DMG to the target and reduces their 24 Hybrid DEF for 6s.",
      sdescription:
        "Deals Physical DMG to the target and reduces their Hybrid DEF for 6s.",
      icon: "/images/skills/alucard.png",
      attributes: {
        "Physical Bonus": ["400%", "415%", "600%"],
      },
    },
    synergies: { faction: ["Shadowcell"], roles: ["Weapon Master"] },
    recommendedEquipment: [
      "Endless Battle",
      "War Axe",
      "Bloodlust Axe",
      "Hunter Strike",
      "Blade of Despair",
    ],
    attributes: {
      hp: [1840, 3312, 5962],
      physicalAtk: [90, 135, 190],
      magicAtk: [90, 135, 190],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [80, 80, 80],
      manaCap: [80, 80, 80],
    },
  },
  {
    id: 20,
    name: "Freya",
    cost: 4,
    image: "/images/heroes/freya.png",
    skill: {
      name: "Valkyrie Descent",
      description:
        "Freya enters Valkyrie state: gains 10% Physical ATK and 10% ATK Speed. ATKs in Valkyrie state deal (+100%Total Physical ATK) Splash DMG. Subsequent skill casts deal (+210%Total Physical ATK) Physical DMG to surrounding enemies.",
      sdescription:
        "Enters Valkyrie state, gaining Physical ATK & ATK Speed. ATKs deal Splash DMG. Skills deal Physical DMG to surrounding enemies.",
      icon: "/images/skills/freya.png",
      attributes: {
        "ATK Boost": ["10%", "10%", "25%"],
        "ATK Speed Bonus": ["10%", "10%", "25%"],
        "Physical Bonus": ["100%", "100%", "100%"],
        "Area DMG": ["210%", "210%", "590%"],
      },
    },
    synergies: { faction: ["Starwing"], roles: ["Weapon Master"] },
    recommendedEquipment: [
      "Berserker's Fury",
      "Scarlet Phantom",
      "Blade of Despair",
      "Malefic Roar",
      "Guardian Helmet",
    ],
    attributes: {
      hp: [3496, 6293, 15557],
      physicalAtk: [180, 270, 380],
      magicAtk: [180, 270, 380],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [30, 30, 30],
      manaCap: [50, 50, 50],
    },
  },
  {
    id: 21,
    name: "Saber",
    cost: 4,
    image: "/images/heroes/saber.png",
    skill: {
      name: "Triple Sweep",
      description:
        "Saber charges toward an enemy, knocking them airborne and dealing (+10%Total Physical ATK) Physical DMG, then slashes twice, each dealing (+240%Total Physical ATK) Physical DMG. The first cast targets the furthest enemy within 3 tiles (prioritizes ranged enemies). Saber gains 40% DMG Reduction during skill cast and restores Mana when killing an enemy.",
      sdescription:
        "Charges, knocks airborne, deals Physical DMG, then slashes twice. Targets furthest enemy (prioritizes ranged). Gains DMG Reduction.",
      icon: "/images/skills/saber.png",
      attributes: {
        "Physical Bonus": ["10%", "15%", "40%"],
        "Physical Bonus 2": ["240%", "270%", "880%"],
      },
    },
    synergies: { faction: ["Starwing"], roles: ["Swiftblade"] },
    recommendedEquipment: [
      "Blade of Despair",
      "Malefic Roar",
      "Demon Hunter Sword",
      "Blade of the Heptaseas",
      "Windtalker",
    ],
    attributes: {
      hp: [3496, 6293, 15557],
      physicalAtk: [180, 270, 380],
      magicAtk: [180, 270, 380],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 22,
    name: "Atlas",
    cost: 1,
    image: "/images/heroes/atlas.png",
    skill: {
      name: "Annihilate",
      description:
        "Passive: Atlas generates Frigid Breath around him. Enemies in the area will have their ATK Speed reduced by 1% every 0.5s (up to 5%).",
      sdescription:
        "Passive: Generates Frigid Breath, slowing enemy ATK Speed in the area.",
      icon: "/images/skills/atlas.png",
      attributes: {
        "ATK Speed Reduction": ["1%", "2%", "4%"],
      },
    },
    synergies: { faction: ["Starwing"], roles: ["Defender"] },
    recommendedEquipment: [
      "Guardian Helmet",
      "Dominance Ice",
      "Oracle",
      "Radiant Armor",
      "Cursed Helmet",
    ],
    attributes: {
      hp: [2200, 4150, 9075],
      physicalAtk: [110, 165, 230],
      magicAtk: [110, 165, 230],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [0, 0, 0],
      manaCap: [0, 0, 0],
    },
  },
  {
    id: 23,
    name: "Mathilda",
    cost: 2,
    image: "/images/heroes/mathilda.png",
    skill: {
      name: "Guiding Wind",
      description:
        "Mathilda provides 20% extra ATK Speed to 2 random allied Heroes within range (including herself) for 3s, and releases 2 wisp(s) to deal DMG equal to (+315%Total Magic ATK) of Magic ATK to enemies hit.",
      sdescription:
        "Gives 2 random allies ATK Speed boost and releases wisps that deal Magic DMG.",
      icon: "/images/skills/mathilda.png",
      attributes: {
        "ATK Speed Boost": ["20%", "30%", "80%"],
        "Magic Bonus": ["315%", "315%", "400%"],
      },
    },
    synergies: { faction: ["Starwing"], roles: ["Stargazer"] },
    recommendedEquipment: [
      "Concentrated Energy",
      "Ice Queen Wand",
      "Feather of Heaven",
      "Holy Crystal",
      "Fleeting Time",
    ],
    attributes: {
      hp: [1705, 3069, 5524],
      physicalAtk: [90, 135, 190],
      magicAtk: [90, 135, 190],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [30, 30, 30],
      manaCap: [50, 50, 50],
    },
  },
  {
    id: 24,
    name: "Harley",
    cost: 5,
    image: "/images/heroes/harley.png",
    skill: {
      name: "Poker Trick",
      description:
        "Harley moves to the farthest enemy and quickly throws 5 wave(s) of cards, then returns. Each wave releases 3 card(s), with each card dealing (+105%Total Magic ATK) Magic DMG to enemies.",
      sdescription:
        "Moves to the farthest enemy, throws 5 waves of cards dealing Magic DMG, then returns.",
      icon: "/images/skills/harley.png",
      attributes: {
        "Magic Bonus": ["105%", "115%", "420%"],
      },
    },
    synergies: { faction: ["Starwing"], roles: ["Phasewarper"] },
    recommendedEquipment: [
      "Concentrated Energy",
      "Ice Queen Wand",
      "Feather of Heaven",
      "Holy Crystal",
      "Fleeting Time",
    ],
    attributes: {
      hp: [3565, 6417, 29768],
      physicalAtk: [175, 265, 395],
      magicAtk: [175, 265, 395],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [80, 80, 20],
      manaCap: [100, 100, 100],
    },
  },
  {
    id: 25,
    name: "Belerick",
    cost: 3,
    image: "/images/heroes/belerick.png",
    skill: {
      name: "Nature's Strike",
      description:
        "Belerick empowers his next Basic ATK to deal (+0%Total Magic ATK) Magic DMG to the target and recovers 10% of his lost HP, then gains 40% ATK Speed for 5s.",
      sdescription:
        "Empowers next Basic ATK, deals Magic DMG, heals himself, and gains ATK Speed.",
      icon: "/images/skills/belerick.png",
      attributes: {
        "Magic Bonus": ["0%", "0%", "0%"],
        Heal: ["10%", "10%", "20%"],
        "ATK Speed Bonus": ["40%", "50%", "100%"],
      },
    },
    synergies: { faction: ["Starwing"], roles: ["Bruiser"] },
    recommendedEquipment: [
      "Guardian Helmet",
      "Dominance Ice",
      "Oracle",
      "Radiant Armor",
      "Cursed Helmet",
    ],
    attributes: {
      hp: [2576, 4637, 9789],
      physicalAtk: [130, 195, 260],
      magicAtk: [130, 195, 260],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [60, 60, 60],
      manaCap: [80, 80, 80],
    },
  },
  {
    id: 26,
    name: "Irithel",
    cost: 5,
    image: "/images/heroes/irithel.png",
    skill: {
      name: "Heavy Crossbow",
      description:
        "Irithel leaps to the target and switches to Heavy Crossbow. Her Basic ATKs now deal (+230%Total Physical ATK) Physical DMG, and she gains 15% ATK Speed for 6s. After Irithel leaps, Leo roars, dealing (+50%Total Physical ATK) Physical DMG to enemies in a large area. Irithel then moves away from the target. Passive: Basic ATKs deal (+35%Total Physical ATK) Physical DMG.",
      sdescription:
        "Leaps, switches to Heavy Crossbow, enhancing Basic ATK and gaining ATK Speed. Leo roars, dealing AoE Physical DMG. Passive: Basic ATKs deal extra Physical DMG.",
      icon: "/images/skills/irithel.png",
      attributes: {
        "Enhanced Basic ATK Bonus": ["230%", "240%", "650%"],
        "AoE DMG": ["50%", "50%", "160%"],
      },
    },
    synergies: { faction: ["Luminexus"], roles: ["Marksman"] },
    recommendedEquipment: [
      "Berserker's Fury",
      "Scarlet Phantom",
      "Blade of Despair",
      "Malefic Roar",
      "Haas's Claws",
    ],
    attributes: {
      hp: [3565, 6417, 29768],
      physicalAtk: [220, 330, 495],
      magicAtk: [220, 330, 495],
      atkSpeed: [0.8, 0.8, 0.8],
      atkRange: [4, 4, 4],
      initialManaCap: [60, 60, 20],
      manaCap: [80, 80, 80],
    },
  },
  {
    id: 27,
    name: "Kadita",
    cost: 4,
    image: "/images/heroes/kadita.png",
    skill: {
      name: "Ocean Ode",
      description:
        "Kadita transforms into a mermaid and rides a tsunami to assault the enemy, gaining Control Immunity inside the waves. Having ridden to her destination, Kadita summons a tsunami to crush nearby enemies. Each wave deals (+100%Total Magic ATK) Magic DMG. The tsunami then returns to her, each wave dealing (+100%Total Magic ATK) Magic DMG to enemies on its way.",
      sdescription:
        "Transforms into a mermaid, riding a tsunami to deal Magic DMG and gaining Control Immunity. The tsunami returns, dealing damage again.",
      icon: "/images/skills/kadita.png",
      attributes: { "Magic Bonus": ["100%", "100%", "260%"] },
    },
    synergies: { faction: ["Luminexus"], roles: ["Stargazer"] },
    recommendedEquipment: [
      "Concentrated Energy",
      "Ice Queen Wand",
      "Feather of Heaven",
      "Holy Crystal",
      "Fleeting Time",
    ],
    attributes: {
      hp: [3100, 5580, 13795],
      physicalAtk: [130, 195, 275],
      magicAtk: [130, 195, 275],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [80, 80, 80],
      manaCap: [100, 100, 100],
    },
  },
  {
    id: 28,
    name: "Cici",
    cost: 2,
    image: "/images/heroes/cici.png",
    skill: {
      name: "Yo-yo Blitz",
      description:
        "Cici attacks the 2 nearest enemies 4 time(s) with Yo-Yo, dealing (+130%Total Physical ATK) Physical DMG with each hit.",
      sdescription:
        "Attacks the 2 nearest enemies 4 times with Yo-Yo, dealing Physical DMG with each hit.",
      icon: "/images/skills/cici.png",
      attributes: { "Physical Bonus": ["130%", "130%", "170%"] },
    },
    synergies: { faction: ["Luminexus"], roles: ["Weapon Master"] },
    recommendedEquipment: [
      "Endless Battle",
      "Blade of Despair",
      "Malefic Roar",
      "Bloodlust Axe",
      "Warrior Boots",
    ],
    attributes: {
      hp: [2024, 3643, 6558],
      physicalAtk: [120, 180, 250],
      magicAtk: [120, 180, 250],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [2, 2, 2],
      initialManaCap: [80, 80, 80],
      manaCap: [80, 80, 80],
    },
  },
  {
    id: 29,
    name: "Lolita",
    cost: 1,
    image: "/images/heroes/lolita.png",
    skill: {
      name: "Noumenon Energy Core",
      description:
        "Lolita grants herself and two allied Heroes a 320 Shield that lasts 3s.",
      sdescription:
        "Grants herself and two allied Heroes a Shield that lasts 3s.",
      icon: "/images/skills/lolita.png",
      attributes: { Shield: [320, 580, 1500] },
    },
    synergies: { faction: ["Luminexus"], roles: ["Dauntless"] },
    recommendedEquipment: [
      "Guardian Helmet",
      "Dominance Ice",
      "Oracle",
      "Radiant Armor",
      "Cursed Helmet",
    ],
    attributes: {
      hp: [1929, 3471, 6248],
      physicalAtk: [105, 160, 220],
      magicAtk: [105, 160, 220],
      atkSpeed: [0.65, 0.65, 0.65],
      atkRange: [1, 1, 1],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 30,
    name: "Zhuxin",
    cost: 3,
    image: "/images/heroes/zhuxin.png",
    skill: {
      name: "Lantern Flare",
      description:
        "Zhuxin summons Spirit Lantern to deal (+260%Total Magic ATK) Magic DMG to all enemies in range every 0.5s for 2.5s, and gains Control Immunity during skill cast.",
      sdescription:
        "Summons Spirit Lantern, dealing continuous Magic DMG to all enemies in range and gaining Control Immunity.",
      icon: "/images/skills/zhuxin.png",
      attributes: { "Magic Bonus": ["260%", "260%", "360%"] },
    },
    synergies: { faction: ["Luminexus"], roles: ["Mage"] },
    recommendedEquipment: [
      "Concentrated Energy",
      "Ice Queen Wand",
      "Feather of Heaven",
      "Holy Crystal",
      "Fleeting Time",
    ],
    attributes: {
      hp: [2170, 3906, 8246],
      physicalAtk: [105, 160, 210],
      magicAtk: [105, 160, 210],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [80, 80, 80],
      manaCap: [100, 100, 100],
    },
  },
  {
    id: 31,
    name: "Carmilla",
    cost: 2,
    image: "/images/heroes/carmilla.png",
    skill: {
      name: "Crimson Flower",
      description:
        "Carmilla summons 3 Crimson Flowers that orbit around her for 5s. Each time a Crimson Flower hits a target, it deals (+45%Total Magic ATK) Magic DMG and reduces the target's Healing Received by 30% for 4s. The hit also restores (+18%Total Magic ATK) HP to Carmilla.",
      sdescription:
        "Summons 3 orbiting Crimson Flowers that deal Magic DMG, reduce target's Healing Received, and restore HP to Carmilla.",
      icon: "/images/skills/carmilla.png",
      attributes: {
        "Magic Bonus": ["45%", "45%", "60%"],
        "Magic Bonus on Restore": ["18%", "22%", "30%"],
      },
    },
    synergies: { faction: ["Luminexus"], roles: ["Scavenger"] },
    recommendedEquipment: [
      "Concentrated Energy",
      "Ice Queen Wand",
      "Feather of Heaven",
      "Holy Crystal",
      "Fleeting Time",
    ],
    attributes: {
      hp: [2024, 3643, 6558],
      physicalAtk: [120, 180, 250],
      magicAtk: [120, 180, 250],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [80, 80, 80],
      manaCap: [100, 100, 100],
    },
  },
  {
    id: 32,
    name: "Guinevere",
    cost: 4,
    image: "/images/heroes/guinevere.png",
    skill: {
      name: "Super Magic",
      description:
        "Guinevere launches an enhanced Basic ATK, dealing (+520%Total Magic ATK) Magic DMG to the target and recovering (+120%Total Magic ATK) HP.",
      sdescription:
        "Launches an enhanced Basic ATK, dealing Magic DMG to the target and recovering HP.",
      icon: "/images/skills/guinevere.png",
      attributes: {
        "Magic Bonus": ["520%", "520%", "1570%"],
        "Magic Bonus on Restore": ["120%", "140%", "370%"],
      },
    },
    synergies: {
      faction: ["Aspirants"],
      roles: ["Bruiser"],
    },
    recommendedEquipment: [
      "Concentrated Energy",
      "Ice Queen Wand",
      "Feather of Heaven",
      "Holy Crystal",
      "Fleeting Time",
    ],
    attributes: {
      hp: [3496, 6293, 15557],
      physicalAtk: [180, 270, 380],
      magicAtk: [180, 270, 380],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 33,
    name: "Vexana",
    cost: 5,
    image: "/images/heroes/vexana.png",
    skill: {
      name: "Eternal Guard",
      description:
        "Vexana summons Eternal Guard to devastate the battlefield, dealing (+110%Total Magic ATK) Magic DMG to enemies in range and knocking them airborne for 0.6s. Eternal Guard's Basic ATK deals (+130%Total Magic ATK) Magic DMG. Passive: Vexana and Eternal Guard's ATKs applies Nether Touch to targets for 5s. If targets die during this duration, they explode.",
      sdescription:
        "Summons Eternal Guard, dealing Magic DMG and knocking enemies airborne. Guard's ATK deals Magic DMG. Passive: Attacks apply Nether Touch, exploding on enemy death.",
      icon: "/images/skills/vexana.png",
      attributes: {
        "Magic Bonus": ["110%", "160%", "700%"],
        "Magic Bonus 2": ["130%", "140%", "480%"],
        "Magic Bonus 3": ["135%", "150%", "530%"],
      },
    },
    synergies: {
      faction: ["Aspirants"],
      roles: ["Stargazer"],
    },
    recommendedEquipment: [
      "Concentrated Energy",
      "Ice Queen Wand",
      "Feather of Heaven",
      "Holy Crystal",
      "Fleeting Time",
    ],
    attributes: {
      hp: [3565, 6417, 29768],
      physicalAtk: [160, 240, 360],
      magicAtk: [160, 240, 360],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [80, 80, 20],
      manaCap: [100, 100, 100],
    },
  },
  {
    id: 34,
    name: "Lesley",
    cost: 3,
    image: "/images/heroes/lesley.png",
    skill: {
      name: "Ultimate Snipe",
      description:
        "Lesley fires 4 bullet(s) at the furthest enemy Hero, each dealing (+450%Total Physical ATK) Physical DMG. (Bullets can be blocked by other enemy Heroes).",
      sdescription:
        "Fires 4 bullets at the furthest enemy Hero, dealing Physical DMG. (Can be blocked).",
      icon: "/images/skills/lesley.png",
      attributes: {
        "Physical Bonus": ["450%", "450%", "700%"],
      },
    },
    synergies: {
      faction: ["Aspirants"],
      roles: ["Phasewarper"],
    },
    recommendedEquipment: [
      "Berserker's Fury",
      "Scarlet Phantom",
      "Blade of Despair",
      "Malefic Roar",
      "Haas's Claws",
    ],
    attributes: {
      hp: [2170, 3906, 8246],
      physicalAtk: [130, 195, 260],
      magicAtk: [130, 195, 260],
      atkSpeed: [0.8, 0.8, 0.8],
      atkRange: [4, 4, 4],
      initialManaCap: [80, 80, 80],
      manaCap: [100, 100, 100],
    },
  },
  {
    id: 35,
    name: "Fanny",
    cost: 3,
    image: "/images/heroes/fanny.png",
    skill: {
      name: "Cut Throat",
      description:
        "Fanny deals (+330%Total Physical ATK) Physical DMG to the current target and (+150%Total Physical ATK) Physical DMG to nearby enemies. Subsequent casts only damage the current target. Upon first cast, she dashes to the furthest enemy within 3 tiles.",
      sdescription:
        "Deals Physical DMG to the current target and nearby enemies. Subsequent casts only hit the current target. Dashes to the furthest enemy on first cast.",
      icon: "/images/skills/fanny.png",
      attributes: {
        "Physical Bonus": ["330%", "330%", "490%"],
        "Physical Bonus 2": ["150%", "150%", "220%"],
      },
    },
    synergies: {
      faction: ["Aspirants"],
      roles: ["Swiftblade"],
    },
    recommendedEquipment: [
      "Blade of Despair",
      "Malefic Roar",
      "Demon Hunter Sword",
      "Blade of the Heptaseas",
      "Windtalker",
    ],
    attributes: {
      hp: [2576, 4637, 9789],
      physicalAtk: [130, 195, 260],
      magicAtk: [130, 195, 260],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [40, 40, 40],
      manaCap: [60, 60, 60],
    },
  },
  {
    id: 36,
    name: "Ruby",
    cost: 2,
    image: "/images/heroes/ruby.png",
    skill: {
      name: "Don't Run, Wolf King!",
      description:
        "Ruby swings her giant scythe in 2 spinning strikes, each dealing (+90%Total Physical ATK) Physical DMG and restoring 4% Max HP.",
      sdescription:
        "Swings scythe 2 times, dealing Physical DMG and restoring Max HP.",
      icon: "/images/skills/ruby.png",
      attributes: {
        "Physical Bonus": ["90%", "90%", "125%"],
      },
    },
    synergies: {
      faction: ["Aspirants"],
      roles: ["Defender", "Dauntless"],
    },
    recommendedEquipment: [
      "Guardian Helmet",
      "Dominance Ice",
      "Oracle",
      "Radiant Armor",
      "Cursed Helmet",
    ],
    attributes: {
      hp: [1903, 3425, 6164],
      physicalAtk: [120, 180, 250],
      magicAtk: [120, 180, 250],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [30, 30, 30],
      manaCap: [50, 50, 50],
    },
  },
  {
    id: 37,
    name: "Layla",
    cost: 1,
    image: "/images/heroes/layla.png",
    skill: {
      name: "Malefic Gun",
      description:
        "Passive: When battle starts, Layla grants 10% ATK Speed to herself and allies within 1 tile to the left and right. She also increases her ATK Range to 4. Her extra Skill DMG is converted to extra Basic ATK DMG at a 50% ratio, and her Basic ATK DMG increases with distance from enemies, ranging from 100% to 130%.",
      sdescription:
        "Passive: Grants ATK Speed to self and adjacent allies, increases ATK Range, and Basic ATK DMG increases with distance.",
      icon: "/images/skills/layla.png",
      attributes: {
        "Range Increase": [4, 5, 6],
      },
    },
    synergies: {
      faction: ["Aspirants"],
      roles: ["Marksman"],
    },
    recommendedEquipment: [
      "Berserker's Fury",
      "Scarlet Phantom",
      "Blade of Despair",
      "Malefic Roar",
      "Haas's Claws",
    ],
    attributes: {
      hp: [1550, 2790, 5022],
      physicalAtk: [100, 150, 210],
      magicAtk: [100, 150, 210],
      atkSpeed: [0.8, 0.8, 0.8],
      atkRange: [4, 5, 6],
      initialManaCap: [0, 0, 0],
      manaCap: [0, 0, 0],
    },
  },
  {
    id: 38,
    name: "Akai",
    cost: 5,
    image: "/images/heroes/akai.png",
    skill: {
      name: "Heavy Spin",
      description:
        "Akai smashes surrounding units, knocking them airborne, then deals (+70%Total Physical ATK) Physical DMG every 0.5s for 4s. Passive: Akai instantly removes all debuffs when casting skills and gains Control Immunity during skill cast.",
      sdescription:
        "Smashes surrounding units, knocking them airborne, and deals continuous Physical DMG. Passive: Removes debuffs and gains Control Immunity.",
      icon: "/images/skills/akai.png",
      attributes: {
        "Physical Bonus": ["70%", "90%", "330%"],
      },
    },
    synergies: {
      faction: ["Toy Mischief"],
      roles: ["Scavenger"],
    },
    recommendedEquipment: [
      "Guardian Helmet",
      "Dominance Ice",
      "Oracle",
      "Radiant Armor",
      "Cursed Helmet",
    ],
    attributes: {
      hp: [4263, 7673, 35596],
      physicalAtk: [230, 345, 520],
      magicAtk: [230, 345, 520],
      atkSpeed: [0.65, 0.65, 0.65],
      atkRange: [1, 1, 1],
      initialManaCap: [60, 60, 20],
      manaCap: [80, 80, 80],
    },
  },
  {
    id: 39,
    name: "Harith",
    cost: 3,
    image: "/images/heroes/harith.png",
    skill: {
      name: "Chrono Dash",
      description:
        "Harith moves to a safe position and enhances the next Basic ATK to deal (+455%Total Magic ATK) Magic DMG.",
      sdescription:
        "Moves to a safe position and enhances the next Basic ATK to deal Magic DMG.",
      icon: "/images/skills/harith.png",
      attributes: {
        "Magic Bonus": ["455%", "750%", "1700%"],
      },
    },
    synergies: {
      faction: ["Toy Mischief"],
      roles: ["Mage"],
    },
    recommendedEquipment: [
      "Concentrated Energy",
      "Ice Queen Wand",
      "Feather of Heaven",
      "Holy Crystal",
      "Fleeting Time",
    ],
    attributes: {
      hp: [4000, 6000, 10000],
      physicalAtk: [105, 160, 210],
      magicAtk: [105, 160, 210],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [30, 30, 30],
      manaCap: [50, 50, 50],
    },
  },
  {
    id: 40,
    name: "Aulus",
    cost: 3,
    image: "/images/heroes/aulus.png",
    skill: {
      name: "The Power of Axe",
      description:
        "Aulus deals (+320%Total Physical ATK) Physical DMG to enemies in a fan-shaped area.",
      sdescription: "Deals Physical DMG to enemies in a fan-shaped area.",
      icon: "/images/skills/aulus.png",
      attributes: {
        "Physical Bonus": ["320%", "320%", "470%"],
      },
    },
    synergies: {
      faction: ["Wrestler"],
      roles: ["Weapon Master"],
    },
    recommendedEquipment: [
      "Endless Battle",
      "Blade of Despair",
      "Malefic Roar",
      "Bloodlust Axe",
      "Warrior Boots",
    ],
    attributes: {
      hp: [2576, 4637, 9789],
      physicalAtk: [145, 220, 290],
      magicAtk: [145, 220, 290],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [20, 20, 20],
      manaCap: [40, 40, 40],
    },
  },
  {
    id: 41,
    name: "Barats",
    cost: 4,
    image: "/images/heroes/barats.png",
    skill: {
      name: 'Missile "Expert"',
      description:
        "Barats fires missiles forward, dealing (+140%Total Physical ATK) Physical DMG. The missiles expel fumes from their exhausts upon landing, dealing (+100%Total Physical ATK) Physical DMG to enemies in a larger area. Passive: Each time Barats deals DMG, Detona grows larger and gains 8 Hybrid DEF, stacking up to 5 time(s).",
      sdescription:
        "Fires missiles dealing Physical DMG, followed by fumes dealing AoE Physical DMG. Passive: Detona grows, gaining Hybrid DEF stacks.",
      icon: "/images/skills/barats.png",
      attributes: {
        "Physical Bonus": ["140%", "140%", "450%"],
        "Physical Bonus 2": ["100%", "100%", "300%"],
      },
    },
    synergies: {
      faction: ["Toy Mischief"],
      roles: ["Dauntless"],
    },
    recommendedEquipment: [
      "Guardian Helmet",
      "Dominance Ice",
      "Oracle",
      "Radiant Armor",
      "Cursed Helmet",
    ],
    attributes: {
      hp: [3857, 6943, 17164],
      physicalAtk: [175, 265, 370],
      magicAtk: [175, 265, 370],
      atkSpeed: [0.65, 0.65, 0.65],
      atkRange: [1, 1, 1],
      initialManaCap: [30, 30, 30],
      manaCap: [50, 50, 50],
    },
  },
  {
    id: 42,
    name: "Jawhead",
    cost: 1,
    image: "/images/heroes/jawhead.png",
    skill: {
      name: "Ejector",
      description:
        "Jawhead knocks the target airborne, dealing (+100%Total Physical ATK) Physical DMG and stunning them for 0.6s when they land. Passive: When battle starts, grant 100 Shield to himself and left and right allied Heroes.",
      sdescription:
        "Knocks target airborne, deals Physical DMG, and stuns. Passive: Grants Shield to self and adjacent allies at battle start.",
      icon: "/images/skills/jawhead.png",
      attributes: {
        "Physical Bonus": ["100%", "160%", "280%"],
        Shield: [100, 150, 200],
      },
    },
    synergies: {
      faction: ["Toy Mischief"],
      roles: ["Bruiser"],
    },
    recommendedEquipment: [
      "Endless Battle",
      "Blade of Despair",
      "Malefic Roar",
      "Bloodlust Axe",
      "Warrior Boots",
    ],
    attributes: {
      hp: [1840, 3312, 5962],
      physicalAtk: [110, 165, 230],
      magicAtk: [110, 165, 230],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [80, 80, 80],
      manaCap: [100, 100, 100],
    },
  },
  {
    id: 43,
    name: "Uranus",
    cost: 2,
    image: "/images/heroes/uranus.png",
    skill: {
      name: "Energy Awakening",
      description:
        "Uranus releases stored energy within to gain 930 Shield for 4s.",
      sdescription: "Releases stored energy to gain Shield for 4s.",
      icon: "/images/skills/uranus.png",
      attributes: {
        Shield: [930, 1630, 3900],
      },
    },
    synergies: {
      faction: ["Toy Mischief"],
      roles: ["Defender"],
    },
    recommendedEquipment: [
      "Guardian Helmet",
      "Dominance Ice",
      "Oracle",
      "Radiant Armor",
      "Cursed Helmet",
    ],
    attributes: {
      hp: [2233, 4019, 7235],
      physicalAtk: [115, 175, 240],
      magicAtk: [115, 175, 240],
      atkSpeed: [0.65, 0.65, 0.65],
      atkRange: [1, 1, 1],
      initialManaCap: [60, 60, 60],
      manaCap: [80, 80, 80],
    },
  },
  {
    id: 44,
    name: "Aldous",
    cost: 2,
    image: "/images/heroes/aldous.png",
    skill: {
      name: "Contract: Transform",
      description:
        "Aldous unleashes his inner energy to enhance his next Basic ATK, dealing (+340%Total Physical ATK) Physical DMG to the target and gaining (+100%Total Physical ATK) Shield.",
      sdescription:
        "Aldous unleashes his inner energy to enhance his next Basic ATK, dealing Physical DMG to the target and gaining Shield.",
      icon: "/images/skills/aldous.png",
      attributes: {
        "Physical Bonus": ["340%", "350%", "530%"],
        "Shield Bonus": ["100%", "130%", "200%"],
      },
    },
    synergies: {
      faction: ["Glory League"],
      roles: ["Bruiser"],
    },
    recommendedEquipment: [
      "Endless Battle",
      "Blade of Despair",
      "Malefic Roar",
      "Bloodlust Axe",
    ],
    attributes: {
      hp: [2024, 3643, 6558],
      physicalAtk: [120, 180, 250],
      magicAtk: [120, 180, 250],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [30, 30, 30],
      manaCap: [50, 50, 50],
    },
  },
  {
    id: 45,
    name: "Minotaur",
    cost: 3,
    image: "/images/heroes/minotaur.png",
    skill: {
      name: "Despair Stomp",
      description:
        "Minotaur knocks surrounding enemies airborne, dealing (+300%Total Physical ATK) Physical DMG and restoring 15% Max HP.",
      sdescription:
        "Minotaur knocks surrounding enemies airborne, dealing Physical DMG and restoring 15% Max HP.",
      icon: "/images/skills/minotaur.png",
      attributes: {
        "Base DMG": ["300%", "300%", "430%"],
        "HP Regen": ["15%", "15%", "20%"],
      },
    },
    synergies: {
      faction: ["Glory League"],
      roles: ["Defender"],
    },
    recommendedEquipment: [
      "Guardian Helmet",
      "Dominance Ice",
      "Oracle",
      "Radiant Armor",
    ],
    attributes: {
      hp: [2700, 4860, 10260],
      physicalAtk: [135, 205, 270],
      magicAtk: [135, 205, 270],
      atkSpeed: [0.65, 0.65, 0.65],
      atkRange: [1, 1, 1],
      initialManaCap: [60, 60, 60],
      manaCap: [80, 80, 80],
    },
  },
  {
    id: 46,
    name: "Claude",
    cost: 4,
    image: "/images/heroes/claude.png",
    skill: {
      name: "Blazing Duet",
      description:
        "Claude dashes to the current target and shoots for 3s, then returns to his original position. Each shot deals (+85%Total Physical ATK) Physical DMG and triggers ATK Effects. Number of shots increases with ATK Speed. Gains Control Immunity during skill cast.",
      sdescription:
        "Claude dashes to the current target and shoots for 3s, then returns to his original position. Each shot deals Physical DMG and triggers ATK Effects. Number of shots increases with ATK Speed. Gains Control Immunity during skill cast.",
      icon: "/images/skills/claude.png",
      attributes: {
        "Physical Bonus": ["85%", "85%", "230%"],
      },
    },
    synergies: {
      faction: ["Glory League"],
      roles: ["Marksman"],
    },
    recommendedEquipment: [
      "Endless Battle",
      "Blade of Despair",
      "Malefic Roar",
      "Demon Hunter Sword",
    ],
    attributes: {
      hp: [3100, 5580, 13795],
      physicalAtk: [165, 250, 345],
      magicAtk: [165, 250, 345],
      atkSpeed: [0.8, 0.8, 0.8],
      atkRange: [4, 4, 4],
      initialManaCap: [80, 80, 80],
      manaCap: [100, 100, 100],
    },
  },
  {
    id: 47,
    name: "Granger",
    cost: 4,
    image: "/images/heroes/granger.png",
    skill: {
      name: "Death Sonata",
      description:
        "Granger deals (+370%Total Physical ATK) Physical DMG to the target enemy and an additional (+260%Total Physical ATK) explosive Physical DMG to surrounding enemies.",
      sdescription:
        "Granger deals Physical DMG to the target enemy and an additional explosive Physical DMG to surrounding enemies.",
      icon: "/images/skills/granger.png",
      attributes: {
        "Physical Bonus": ["370%", "370%", "1100%"],
        "Detonation DMG": ["260%", "260%", "760%"],
      },
    },
    synergies: {
      faction: ["Glory League"],
      roles: ["Swiftblade"],
    },
    recommendedEquipment: [
      "Endless Battle",
      "Blade of Despair",
      "Malefic Roar",
      "Hunter Strike",
    ],
    attributes: {
      hp: [3100, 5580, 13795],
      physicalAtk: [165, 250, 345],
      magicAtk: [165, 250, 345],
      atkSpeed: [0.8, 0.8, 0.8],
      atkRange: [4, 4, 4],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 48,
    name: "X.Borg",
    cost: 5,
    image: "/images/heroes/x.borg.png",
    skill: {
      name: "Last Insanity",
      description:
        "X.Borg charges toward the position with the most enemies, gaining a Shield of 10% Max HP. Then he sprays flames at nearby enemies, dealing 7 hits of (+25%Total Physical ATK) Physical DMG. Finally, he triggers an explosion, dealing (+385%Total Physical ATK) Physical DMG to nearby enemies.",
      sdescription:
        "X.Borg charges toward the position with the most enemies, gaining a Shield of 10% Max HP. Then he sprays flames at nearby enemies, dealing 7 hits of Physical DMG. Finally, he triggers an explosion, dealing Physical DMG to nearby enemies.",
      icon: "/images/skills/x.borg.png",
      attributes: {
        Shield: ["10%", "12%", "20%"],
        "Physical Bonus": ["25%", "25%", "120%"],
        "Explosion DMG Multiplier": ["385%", "410%", "1485%"],
      },
    },
    synergies: {
      faction: ["Metro Zero"],
      roles: ["Dauntless"],
    },
    recommendedEquipment: [
      "Bloodlust Axe",
      "Queen's Wings",
      "Ice Queen Wand",
      "Oracle",
    ],
    attributes: {
      hp: [4048, 7286, 33801],
      physicalAtk: [240, 360, 540],
      magicAtk: [240, 360, 540],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [80, 80, 80],
      manaCap: [100, 100, 100],
    },
  },
  {
    id: 49,
    name: "Roger",
    cost: 2,
    image: "/images/heroes/roger.png",
    skill: {
      name: "Wolf Transformation",
      description:
        "Human Form: Roger dashes forward and transforms into a wolf, dealing (+280%Total Physical ATK) Physical DMG and gaining a 500 Shield. Wolf Form: Roger howls, increasing his ATK Speed by 60% for 5s.",
      sdescription:
        "Human Form: Roger dashes forward and transforms into a wolf, dealing Physical DMG and gaining a 500 Shield. Wolf Form: Roger howls, increasing his ATK Speed by 60% for 5s.",
      icon: "/images/skills/roger.png",
      attributes: {
        Shield: [500, 800, 1700],
        "ATK Speed Bonus": ["60%", "60%", "120%"],
        "Physical Bonus": ["280%", "280%", "370%"],
      },
    },
    synergies: {
      faction: ["Metro Zero"],
      roles: ["Weapon Master"],
    },
    recommendedEquipment: [
      "Endless Battle",
      "Blade of Despair",
      "Malefic Roar",
      "Bloodlust Axe",
    ],
    attributes: {
      hp: [2024, 3643, 6558],
      physicalAtk: [125, 190, 265],
      magicAtk: [125, 190, 265],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [2, 2, 2],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 50,
    name: "Ixia",
    cost: 3,
    image: "/images/heroes/ixia.png",
    skill: {
      name: "Star Helix",
      description:
        "Ixia releases Starlum in front of her, dealing (+480%Total Physical ATK) Physical DMG and stunning targets for 0.6s.",
      sdescription:
        "Ixia releases Starlum in front of her, dealing Physical DMG and stunning targets for 0.6s.",
      icon: "/images/skills/ixia.png",
      attributes: {
        "Physical Bonus": ["480%", "550%", "900%"],
      },
    },
    synergies: {
      faction: ["Metro Zero"],
      roles: ["Marksman", "Stargazer"],
    },
    recommendedEquipment: [
      "Endless Battle",
      "Blade of Despair",
      "Malefic Roar",
      "Berserker's Fury",
    ],
    attributes: {
      hp: [2170, 3906, 8246],
      physicalAtk: [130, 195, 260],
      magicAtk: [130, 195, 260],
      atkSpeed: [0.8, 0.8, 0.8],
      atkRange: [4, 4, 4],
      initialManaCap: [80, 80, 80],
      manaCap: [100, 100, 100],
    },
  },
  {
    id: 51,
    name: "Edith",
    cost: 5,
    image: "/images/heroes/edith.png",
    skill: {
      name: "Primal Wrath",
      description:
        "Edith knocks enemies within 9 tiles in front airborne, dealing (+150%Total Physical ATK) Physical DMG and restoring 12% Max HP. Passive: The first time Edith takes fatal DMG, she ejects herself forward from Phylax, dealing (+70%Total Physical ATK) Physical DMG to surrounding enemies. She then converts each extra.",
      sdescription:
        "Edith knocks enemies within 9 tiles in front airborne, dealing Physical DMG and restoring 12% Max HP. Passive: The first time Edith takes fatal DMG, she ejects herself forward from Phylax, dealing Physical DMG to surrounding enemies. She then converts each extra.",
      icon: "/images/skills/edith.png",
      attributes: {
        "Physical Bonus": ["150%", "160%", "700%"],
        "Explosion DMG": ["70%", "80%", "330%"],
        "Magic Bonus": ["35%", "35%", "150%"],
        "ATK Speed": ["10%", "10%", "15%"],
      },
    },
    synergies: {
      faction: ["Beyond the Clouds"],
      roles: ["Defender"],
    },
    recommendedEquipment: [
      "Guardian Helmet",
      "Dominance Ice",
      "Oracle",
      "Cursed Helmet",
    ],
    attributes: {
      hp: [3197, 5755, 26697],
      physicalAtk: [230, 345, 520],
      magicAtk: [230, 345, 520],
      atkSpeed: [0.65, 0.65, 0.65],
      atkRange: [1, 1, 1],
      initialManaCap: [30, 30, 20],
      manaCap: [50, 50, 50],
    },
  },
  {
    id: 52,
    name: "Xavier",
    cost: 3,
    image: "/images/heroes/xavier.png",
    skill: {
      name: "Mystic Field",
      description:
        "Xavier summons a Mystic Barrier, dealing (+140%Total Magic ATK) Magic DMG to the target and enemies within 1 tile to their left and right. He then unleashes Mystic Magic in the current direction, dealing (+150%Total Magic ATK) Magic DMG and activating the Mystic Barrier to create a forbidden zone, dealing (+310%Total Magic ATK) Magic DMG to enemies within 9 tiles.",
      sdescription:
        "Xavier summons a Mystic Barrier, dealing Magic DMG to the target and enemies within 1 tile to their left and right. He then unleashes Mystic Magic in the current direction, dealing Magic DMG and activating the Mystic Barrier to create a forbidden zone, dealing Magic DMG to enemies within 9 tiles.",
      icon: "/images/skills/xavier.png",
      attributes: {
        "Magic Bonus 1": ["140%", "140%", "210%"],
        "Magic Bonus 2": ["150%", "160%", "230%"],
        "Magic Bonus 3": ["310%", "310%", "470%"],
      },
    },
    synergies: {
      faction: ["Beyond the Clouds"],
      roles: ["Stargazer"],
    },
    recommendedEquipment: [
      "Concentrated Energy",
      "Ice Queen Wand",
      "Holy Crystal",
      "Fleeting Time",
    ],
    attributes: {
      hp: [2170, 3906, 8246],
      physicalAtk: [115, 175, 230],
      magicAtk: [115, 175, 230],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [40, 40, 40],
      manaCap: [60, 60, 60],
    },
  },
  {
    id: 53,
    name: "Kagura",
    cost: 2,
    image: "/images/heroes/kagura.png",
    skill: {
      name: "Seimei Umbrella Open",
      description:
        "Kagura unleashes 1 Seimei Umbrella(s), dealing (+550%Total Magic ATK) Magic DMG to enemies in their path.",
      sdescription:
        "Kagura unleashes 1 Seimei Umbrella(s), dealing Magic DMG to enemies in their path.",
      icon: "/images/skills/kagura.png",
      attributes: {
        "Magic Bonus": ["550%", "550%", "650%"],
      },
    },
    synergies: {
      faction: ["Beyond the Clouds"],
      roles: ["Mage"],
    },
    recommendedEquipment: [
      "Concentrated Energy",
      "Ice Queen Wand",
      "Holy Crystal",
      "Fleeting Time",
    ],
    attributes: {
      hp: [1705, 3069, 5524],
      physicalAtk: [90, 135, 190],
      magicAtk: [90, 135, 190],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
];
