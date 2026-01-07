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

  isSummon?: boolean;
  summonSource?: "soul-vessels";

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
    image: "/images/heroes/Hero266.png",

    skill: {
      name: "The Way of Dragon",
      description:
        "Iori Yagami gains CC Immunity and performs a Roundhouse Kick, dealing (+70% Total Physical ATK) Physical DMG to the target and knocking them airborne to the farthest empty tile behind them. He then blinks to the target, dealing (+650% Total Physical ATK) Physical DMG. Passive: ATKs following a blink can trigger ATK Effects. When triggering Bruiser Synergy's effect, deals additional Physical DMG. Skill DMG executes targets with HP below a certain threshold.",
      sdescription:
        "Blinks to enemies, dealing massive Physical DMG and executing low-HP targets.",
      icon: "/images/skills/S2630_Skin01.png",

      attributes: {
        "Physical Bonus (Kick)": ["70%", "80%", "370%"],
        "Extra DMG for Bruisers": ["60%", "65%", "170%"],
        "Physical Bonus (Blink)": ["650%", "700%", "1500%"],
      },
    },

    synergies: {
      faction: ["KOF", "Mortal Rivals"],
      roles: ["Bruiser"],
    },

    recommendedEquipment: [
      "Blade of Despair",
      "Endless Battle",
      "Bloodlust Axe",
      "War Axe",
    ],

    attributes: {
      hp: [4466, 8039, 48010],
      physicalAtk: [240, 360, 660],
      magicAtk: [240, 360, 660],
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
    image: "/images/heroes/Hero1038.png",

    skill: {
      name: "Knockout Strike",
      description:
        "Terry Bogard gains a Shield equal to 8% Max HP for 3s, becomes CC Immune and charges toward the target with an uppercut, dealing (+320% Total Physical ATK) Physical DMG to enemies in range and stunning them for 0.5s before retreating. DMG decreases for each enemy hit.",
      sdescription:
        "Charges forward with an uppercut, stunning enemies and gaining a shield.",
      icon: "/images/skills/S10335_Skin07.png",

      attributes: {
        "Physical Bonus": ["320%", "320%", "955%"],
      },
    },

    synergies: {
      faction: ["KOF"],
      roles: ["Defender"],
    },

    recommendedEquipment: [
      "Guardian Helmet",
      "Cursed Helmet",
      "Blade Armor",
      "Oracle",
    ],

    attributes: {
      hp: [3857, 6943, 17164],
      physicalAtk: [175, 265, 395],
      magicAtk: [175, 265, 395],
      atkSpeed: [0.65, 0.65, 0.65],
      atkRange: [1, 1, 1],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 3,
    name: "Chris",
    cost: 2,
    image: "/images/heroes/Hero853.png",

    skill: {
      name: "Spectre Step",
      description:
        "Chris unleashes a Circle Strike, dealing (+200% Total Physical ATK) DMG to nearby enemies and restoring (+170% Total Physical ATK) HP. DMG decreases for each enemy hit. Passive: When battle starts, Chris and allies within 1 tile to his left and right gain 10% Hybrid Lifesteal.",
      sdescription:
        "Deals AoE damage, restores HP, and grants nearby allies Hybrid Lifesteal.",
      icon: "/images/skills/S8540_Skin01.png",

      attributes: {
        "Physical Bonus": ["200%", "200%", "270%"],
        "Physical Bonus on Restore": ["170%", "170%", "220%"],
      },
    },

    synergies: {
      faction: ["KOF"],
      roles: ["Dauntless"],
    },

    recommendedEquipment: [
      "Enchanted Talisman",
      "Haas's Claws",
      "Blade of Despair",
      "Demon Hunter Sword",
    ],

    attributes: {
      hp: [2233, 4019, 7235],
      physicalAtk: [115, 175, 230],
      magicAtk: [115, 175, 230],
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
    image: "/images/heroes/Hero366.png",

    skill: {
      name: "Hailstone Blast",
      description:
        "Kula summons an icy meteorite to strike the target, dealing (+930% Total Magic ATK) Magic DMG.",
      sdescription:
        "Summons an icy meteorite to deal heavy Magic DMG to a single target.",
      icon: "/images/skills/S3610_Skin01.png",

      attributes: {
        "Magic Bonus": ["930%", "930%", "1140%"],
      },
    },

    synergies: {
      faction: ["KOF"],
      roles: ["Stargazer"],
    },

    recommendedEquipment: [
      "Lightning Truncheon",
      "Ice Queen Wand",
      "Genius Wand",
      "Enchanted Talisman",
    ],

    attributes: {
      hp: [1550, 2790, 4650],
      physicalAtk: [80, 120, 160],
      magicAtk: [80, 120, 160],
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
    image: "/images/heroes/Hero567.png",

    skill: {
      name: "Blazing Requiem",
      description:
        "K' launches multiple blazing flames forward, each dealing (+85% Total Magic ATK) Magic DMG on hit. After the first skill cast, he dashes to the enemy with the highest DMG output within 4 tiles and recalls the flames, dealing the same amount of Magic DMG.",
      sdescription:
        "Launches flames forward, then dashes and recalls them to deal Magic DMG again.",
      icon: "/images/skills/S5620_Skin01.png",

      attributes: {
        "Magic Bonus": ["85%", "85%", "255%"],
      },
    },

    synergies: {
      faction: ["KOF"],
      roles: ["Swiftblade"],
    },

    recommendedEquipment: [
      "Ice Queen Wand",
      "Lightning Truncheon",
      "Genius Wand",
      "Enchanted Talisman",
    ],

    attributes: {
      hp: [4166, 7498, 18537],
      physicalAtk: [180, 270, 405],
      magicAtk: [180, 270, 405],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [40, 40, 40],
      manaCap: [60, 60, 60],
    },
  },
  {
    id: 6,
    name: "Kyo Kusanagi",
    cost: 5,
    image: "/images/heroes/Hero105711.png",

    skill: {
      name: "Burst Fireball",
      description:
        "Kyo Kusanagi fires 4 Burst Fireballs at different enemies, each dealing (+130% Total Magic ATK) explosive Magic DMG to enemies within 9 tiles and leaving flames behind. The flames deal (+20% Total Magic ATK) Magic DMG to enemies within range 3 times over 1s, then deal (+130% Total Magic ATK) Magic DMG again. DMG decreases for each enemy hit.",
      sdescription:
        "Fires multiple explosive fireballs that deal burst and sustained Magic DMG.",
      icon: "/images/skills/S5730_Skin10.png",

      attributes: {
        "Detonation DMG": ["130%", "135%", "400%"],
        "Sustained DMG": ["20%", "25%", "70%"],
        "Final DMG": ["130%", "135%", "400%"],
      },
    },

    synergies: {
      faction: ["KOF", "Mortal Rivals"],
      roles: ["Mage"],
    },

    recommendedEquipment: [
      "Genius Wand",
      "Ice Queen Wand",
      "Lightning Truncheon",
      "Enchanted Talisman",
    ],

    attributes: {
      hp: [3387, 6096, 36408],
      physicalAtk: [160, 240, 440],
      magicAtk: [160, 240, 440],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [50, 50, 20],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 7,
    name: "Leona",
    cost: 3,
    image: "/images/heroes/Hero087.png",

    skill: {
      name: "Elusiveness",
      description:
        "Upon first skill cast, Leona dashes to the enemy with the highest DMG output within 3 tiles (prioritizes ranged heroes) and enters the Elusiveness state for a duration, during which she is immune to a set number of Basic ATKs. Passive: After attacking a target twice in a row, Leona's third attack deals extra Magic DMG based on Total Magic ATK.",
      sdescription:
        "Dashes to high-threat enemies, evades attacks, and deals bonus Magic DMG.",
      icon: "/images/skills/S810_Skin01.png",

      attributes: {
        Cooldown: [2.0, 4.0, 6.0],
        Duration: [2, 4, 6],
        "Basic ATK Times": [5, 6, 8],
        "Magic Bonus": ["250%", "250%", "390%"],
      },
    },

    synergies: {
      faction: ["KOF"],
      roles: ["Scavenger"],
    },

    recommendedEquipment: [
      "Concentrated Energy",
      "Holy Crystal",
      "Ice Queen Wand",
      "Enchanted Talisman",
    ],

    attributes: {
      hp: [2842, 5116, 9663],
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
    image: "/images/heroes/Hero110499.png",

    skill: {
      name: "Slam, Slam",
      description:
        "Gloo enhances his next Basic ATK, dealing (+800% Total Magic ATK) Magic DMG to the target and stunning them for a short duration. Passive: When HP first drops below 50%, a Goo drops and restores a portion of Gloo's Max HP.",
      sdescription:
        "Empowers next attack to stun enemies and restores HP when low.",
      icon: "/images/skills/S10410.png",

      attributes: {
        "Stun Duration": [0.8, 1.0, 1.2],
        "Magic Bonus": ["800%", "850%", "1400%"],
      },
    },

    synergies: {
      faction: ["Soul Vessels"],
      roles: ["Dauntless"],
    },

    recommendedEquipment: [
      "Cursed Helmet",
      "Guardian Helmet",
      "Antique Cuirass",
      "Oracle",
    ],

    attributes: {
      hp: [2842, 5116, 9663],
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
    name: "Benedetta",
    cost: 5,
    image: "/images/heroes/Hero979.png",

    skill: {
      name: "Alecto: Final Blow",
      description:
        "Benedetta clenches Alecto, becoming briefly untargetable before dashing forward and slashing, detonating Sword Intent along her path. She continuously slashes enemies for a short duration, dealing up to (+700% Total Physical ATK) Physical DMG. DMG decreases for each enemy hit.",
      sdescription:
        "Becomes untargetable, dashes forward, and slashes enemies repeatedly.",
      icon: "/images/skills/alecto_final_blow.png",

      attributes: {
        "Physical Bonus": ["700%", "755%", "3120%"],
      },
    },

    synergies: {
      faction: ["Soul Vessels"],
      roles: ["Weapon Master"],
    },

    recommendedEquipment: [
      "War Axe",
      "Hunter Strike",
      "Ice Queen Wand",
      "Blade of Despair",
    ],

    attributes: {
      hp: [4466, 8039, 48010],
      physicalAtk: [240, 360, 660],
      magicAtk: [240, 360, 660],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [50, 50, 20],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 10,
    name: "Hanabi",
    cost: 4,
    image: "/images/heroes/Hero106010.png",

    skill: {
      name: "Ninjutsu: Petal Barrage",
      description:
        "Hanabi throws a Higanbana at an enemy, briefly immobilizing them and dealing (+200% Total Physical ATK) Physical DMG. After 1s, the Higanbana blooms, dealing (+200% Total Physical ATK) Physical DMG to enemies in the area. Passive: After hitting a target, Hanabi's Basic ATKs bounce to surrounding enemies, dealing bonus Physical DMG.",
      sdescription:
        "Throws a Higanbana that immobilizes enemies and causes bouncing Basic ATKs.",
      icon: "/images/skills/ninjutsu_petal_barrage.png",

      attributes: {
        "Bounce DMG": ["30%", "30%", "35%"],
        "Physical Bonus": ["200%", "200%", "600%"],
        "Explosion DMG": ["200%", "200%", "600%"],
      },
    },

    synergies: {
      faction: ["Soul Vessels"],
      roles: ["Marksman"],
    },

    recommendedEquipment: [
      "Windtalker",
      "Demon Hunter Sword",
      "Endless Battle",
      "Haas's Claws",
    ],

    attributes: {
      hp: [3100, 5580, 15450],
      physicalAtk: [165, 250, 450],
      magicAtk: [165, 250, 450],
      atkSpeed: [0.8, 0.8, 0.8],
      atkRange: [4, 4, 4],
      initialManaCap: [50, 50, 25],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 11,
    name: "Aamon",
    cost: 2,
    image: "/images/heroes/Hero1095.png",

    skill: {
      name: "Soul Shards",
      description:
        "Aamon enhances his next Basic ATK with soul shards, dealing (+580% Total Magic ATK) Magic DMG to the target.",
      sdescription: "Empowers next attack to deal high Magic DMG.",
      icon: "/images/skills/soul_shards.png",

      attributes: {
        "Magic Bonus": ["580%", "580%", "750%"],
      },
    },

    synergies: {
      faction: ["Soul Vessels"],
      roles: ["Swiftblade"],
    },

    recommendedEquipment: [
      "Calamity Reaper",
      "Ice Queen Wand",
      "Holy Crystal",
      "Enchanted Talisman",
    ],

    attributes: {
      hp: [2233, 4019, 7235],
      physicalAtk: [120, 180, 240],
      magicAtk: [120, 180, 240],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [40, 40, 40],
      manaCap: [60, 60, 60],
    },
  },
  {
    id: 12,
    name: "Cecilion",
    cost: 1,
    image: "/images/heroes/Hero918.png",

    skill: {
      name: "Bat Impact",
      description:
        "Cecilion commands a bat-like great peril to assault the target, dealing (+1200% Total Magic ATK) Magic DMG. Passive: When battle starts, Cecilion provides 10 Mana to himself and allies to his left and right.",
      sdescription:
        "Deals massive single-target Magic DMG and grants Mana to nearby allies.",
      icon: "/images/skills/bat_impact.png",

      attributes: {
        "Magic Bonus": ["1200%", "1200%", "1500%"],
      },
    },

    synergies: {
      faction: ["Soul Vessels"],
      roles: ["Mage"],
    },

    recommendedEquipment: [
      "Lightning Truncheon",
      "Ice Queen Wand",
      "Holy Crystal",
      "Calamity Reaper",
    ],

    attributes: {
      hp: [1550, 2790, 4650],
      physicalAtk: [80, 120, 160],
      magicAtk: [80, 120, 160],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [70, 70, 70],
      manaCap: [90, 90, 90],
    },
  },
  {
    id: 13,
    name: "Clint",
    cost: 2,
    image: "/images/heroes/Hero101313.png",

    skill: {
      name: "Quick Draw",
      description:
        "Clint rapidly shoots 5 bullets at the target, each dealing (+85% Total Physical ATK) Physical DMG.",
      sdescription:
        "Rapidly fires multiple bullets to deal sustained Physical DMG.",
      icon: "/images/skills/quick_draw.png",

      attributes: {
        "Physical Bonus": ["85%", "85%", "110%"],
      },
    },

    synergies: {
      faction: ["Soul Vessels"],
      roles: ["Phasewarper"],
    },

    recommendedEquipment: [
      "Windtalker",
      "Endless Battle",
      "Haas's Claws",
      "Demon Hunter Sword",
    ],

    attributes: {
      hp: [1705, 3069, 5524],
      physicalAtk: [110, 165, 220],
      magicAtk: [110, 165, 220],
      atkSpeed: [0.8, 0.8, 0.8],
      atkRange: [4, 4, 4],
      initialManaCap: [30, 30, 30],
      manaCap: [50, 50, 50],
    },
  },
  {
    id: 14,
    name: "Khufra",
    cost: 3,
    image: "/images/heroes/Hero617841.png",

    skill: {
      name: "Khufra's Embrace",
      description:
        "Khufra gains a shield for a short duration and sweeps enemies in front of him, dealing (+465% Total Physical ATK) Physical DMG and stunning them. DMG decreases for each enemy hit.",
      sdescription: "Gains a shield, sweeps enemies, and stuns them.",
      icon: "/images/skills/khufras_embrace.png",

      attributes: {
        Shield: [250, 250, 250],
        "Physical Bonus": ["465%", "520%", "875%"],
        "Stun Duration": [1, 1, 1],
      },
    },

    synergies: {
      faction: ["Heartbond"],
      roles: ["Defender"],
    },

    recommendedEquipment: [
      "Cursed Helmet",
      "Guardian Helmet",
      "Antique Cuirass",
      "Oracle",
    ],

    attributes: {
      hp: [2842, 5116, 9663],
      physicalAtk: [135, 205, 270],
      magicAtk: [135, 205, 270],
      atkSpeed: [0.65, 0.65, 0.65],
      atkRange: [1, 1, 1],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 15,
    name: "Esmeralda",
    cost: 4,
    image: "/images/heroes/Hero618141.png",

    skill: {
      name: "Falling Starmoon",
      description:
        "Esmeralda coheres the power of Astrospace, gaining a shield for a short duration. She deals (+215% Total Magic ATK) Magic DMG to nearby enemies and stuns them briefly. DMG decreases for each enemy hit. Passive: Basic ATKs deal additional Physical and Magic DMG based on Total ATK.",
      sdescription:
        "Gains a shield, deals AoE Magic DMG, and stuns nearby enemies.",
      icon: "/images/skills/falling_starmoon.png",

      attributes: {
        Shield: [180, 300, 1350],
        "Magic Bonus": ["215%", "215%", "680%"],
        "Stun Duration": [0.5, 0.5, 0.5],
      },
    },

    synergies: {
      faction: ["Heartbond"],
      roles: ["Dauntless"],
    },

    recommendedEquipment: [
      "Oracle",
      "Antique Cuirass",
      "Brute Force Breastplate",
      "Cursed Helmet",
    ],

    attributes: {
      hp: [3857, 6943, 17164],
      physicalAtk: [180, 270, 405],
      magicAtk: [180, 270, 405],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 16,
    name: "Alucard",
    cost: 1,
    image: "/images/heroes/Hero076.png",

    skill: {
      name: "Groundsplitter",
      description:
        "Alucard deals (+500% Total Physical ATK) Physical DMG to the target.",
      sdescription:
        "Deals a powerful burst of Physical DMG to a single target.",
      icon: "/images/skills/groundsplitter.png",

      attributes: {
        "Physical Bonus": ["500%", "500%", "650%"],
      },
    },

    synergies: {
      faction: ["Heartbond"],
      roles: ["Weapon Master"],
    },

    recommendedEquipment: [
      "Endless Battle",
      "Blade of Despair",
      "Bloodlust Axe",
      "Oracle",
    ],

    attributes: {
      hp: [2030, 3654, 6090],
      physicalAtk: [110, 165, 220],
      magicAtk: [110, 165, 220],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [60, 60, 60],
      manaCap: [80, 80, 80],
    },
  },
  {
    id: 17,
    name: "Miya",
    cost: 3,
    image: "/images/heroes/Hero017.png",

    skill: {
      name: "Moon Arrow",
      description:
        "Miya gains 60% ATK Speed for a short duration. During this time, she shoots extra Split Arrows that deal reduced DMG and can trigger ATK Effects.",
      sdescription:
        "Gains ATK Speed and fires extra split arrows that trigger ATK effects.",
      icon: "/images/skills/moon_arrow.png",

      attributes: {
        "ATK Speed Bonus": ["60%", "60%", "60%"],
        "Split Arrows": [1, 2, 3],
      },
    },

    synergies: {
      faction: ["Heartbond"],
      roles: ["Marksman"],
    },

    recommendedEquipment: [
      "Windtalker",
      "Scarlet Phantom",
      "Haas's Claws",
      "Demon Hunter Sword",
    ],

    attributes: {
      hp: [2170, 3906, 7378],
      physicalAtk: [130, 195, 260],
      magicAtk: [130, 195, 260],
      atkSpeed: [0.8, 0.8, 0.8],
      atkRange: [4, 4, 4],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 18,
    name: "Odette",
    cost: 2,
    image: "/images/heroes/Hero461.png",

    skill: {
      name: "Lakeshore Ambience",
      description:
        "Odette launches a Musical Note, dealing (+650% Total Magic ATK) Magic DMG to the target. If there are nearby enemies, the Note bounces to them to deal Magic DMG again. Enemies hit have their Healing Received reduced for a short duration.",
      sdescription:
        "Launches bouncing magic notes that deal Magic DMG and reduce healing.",
      icon: "/images/skills/lakeshore_ambience.png",

      attributes: {
        "Magic Bonus": ["650%", "650%", "870%"],
      },
    },

    synergies: {
      faction: ["Heartbond"],
      roles: ["Stargazer"],
    },

    recommendedEquipment: [
      "Clock of Destiny",
      "Lightning Truncheon",
      "Ice Queen Wand",
      "Genius Wand",
    ],

    attributes: {
      hp: [1705, 3069, 5524],
      physicalAtk: [90, 135, 180],
      magicAtk: [90, 135, 180],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 19,
    name: "Lancelot",
    cost: 5,
    image: "/images/heroes/Hero104713.png",

    skill: {
      name: "Phantom Execution",
      description:
        "Lancelot dashes twice, dealing (+125% Total Physical ATK) Physical DMG to enemies along the path. The final dash targets the enemy with the highest power, dealing (+90% Total Physical ATK) Physical DMG multiple times to the target and nearby enemies.",
      sdescription:
        "Dashes through enemies and executes the strongest target with multiple strikes.",
      icon: "/images/skills/phantom_execution.png",

      attributes: {
        "Physical Bonus": ["125%", "135%", "540%"],
        "AoE DMG": ["90%", "100%", "400%"],
      },
    },

    synergies: {
      faction: ["Heartbond"],
      roles: ["Phasewarper"],
    },

    recommendedEquipment: [
      "Blade of Despair",
      "Endless Battle",
      "Hunter Strike",
      "War Axe",
    ],

    attributes: {
      hp: [4466, 8039, 48010],
      physicalAtk: [240, 360, 660],
      magicAtk: [240, 360, 660],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [50, 50, 20],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 20,
    name: "Masha",
    cost: 3,
    image: "/images/heroes/Hero885.png",

    skill: {
      name: "Thunderclap",
      description:
        "Masha deals (+360% Total Physical ATK) Basic ATK Physical DMG to the current target and adjacent enemies. DMG decreases for each enemy hit, then she gains increased ATK Speed and Lifesteal for a short duration.",
      sdescription:
        "Strikes nearby enemies and gains massive ATK Speed and Lifesteal.",
      icon: "/images/skills/thunderclap.png",

      attributes: {
        "Physical Bonus": ["360%", "360%", "500%"],
      },
    },

    synergies: {
      faction: ["Luminexus"],
      roles: ["Bruiser"],
    },

    recommendedEquipment: [
      "Blade of Despair",
      "Endless Battle",
      "Haas's Claws",
      "Demon Hunter Sword",
    ],

    attributes: {
      hp: [2842, 5116, 9663],
      physicalAtk: [145, 220, 290],
      magicAtk: [145, 220, 290],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 21,
    name: "Cici",
    cost: 2,
    image: "/images/heroes/Hero1233.png",

    skill: {
      name: "Yo-Yo Blitz",
      description:
        "Cici attacks the 2 nearest enemies 4 times with her Yo-Yo, each hit dealing (+130% Total Physical ATK) Physical DMG.",
      sdescription:
        "Rapidly strikes nearby enemies multiple times with her Yo-Yo.",
      icon: "/images/skills/yo_yo_blitz.png",

      attributes: {
        "Physical Bonus": ["130%", "130%", "170%"],
      },
    },

    synergies: {
      faction: ["Luminexus"],
      roles: ["Weapon Master"],
    },

    recommendedEquipment: [
      "Endless Battle",
      "Blade of Despair",
      "Haas's Claws",
      "Hunter Strike",
    ],

    attributes: {
      hp: [2233, 4019, 7235],
      physicalAtk: [120, 180, 240],
      magicAtk: [120, 180, 240],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [2, 2, 2],
      initialManaCap: [60, 60, 60],
      manaCap: [80, 80, 80],
    },
  },
  {
    id: 22,
    name: "Rafaela",
    cost: 5,
    image: "/images/heroes/Hero148.png",

    skill: {
      name: "Light of Retribution",
      description:
        "Rafaela unleashes the power of Holy Light, dealing a total of (+180% Total Magic ATK) Magic DMG to all enemies on the battlefield. DMG decreases for each enemy hit. Passive: Rafaela casts her skill once immediately at the start of battle. 3-Star Effect: Restores a portion of Max HP to all allies upon skill cast.",
      sdescription:
        "Deals global Magic DMG and automatically casts at battle start.",
      icon: "/images/skills/light_of_retribution.png",

      attributes: {
        "Magic Bonus": ["180%", "190%", "540%"],
      },
    },

    synergies: {
      faction: ["Luminexus"],
      roles: ["Stargazer"],
    },

    recommendedEquipment: [
      "Lightning Truncheon",
      "Ice Queen Wand",
      "Holy Crystal",
      "Enchanted Talisman",
    ],

    attributes: {
      hp: [3565, 6417, 38324],
      physicalAtk: [175, 265, 480],
      magicAtk: [175, 265, 480],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [40, 40, 20],
      manaCap: [40, 40, 40],
    },
  },
  {
    id: 23,
    name: "Nolan",
    cost: 1,
    image: "/images/heroes/Hero1224.png",

    skill: {
      name: "Expansion",
      description:
        "Nolan creates a Rift, dealing (+320% Total Magic ATK) Magic DMG to the target and increasing their DMG taken for a short duration.",
      sdescription: "Deals Magic DMG and amplifies damage taken by the target.",
      icon: "/images/skills/expansion.png",

      attributes: {
        "Magic Bonus": ["320%", "320%", "450%"],
      },
    },

    synergies: {
      faction: ["Luminexus"],
      roles: ["Swiftblade"],
    },

    recommendedEquipment: [
      "Hunter Strike",
      "Endless Battle",
      "Blade of Despair",
      "Ice Queen Wand",
    ],

    attributes: {
      hp: [2030, 3654, 6090],
      physicalAtk: [110, 165, 220],
      magicAtk: [110, 165, 220],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 24,
    name: "Valentina",
    cost: 4,
    image: "/images/heroes/Hero1104.png",

    skill: {
      name: "Arcane Shade",
      description:
        "Valentina fires multiple Shadow Bolts, each hitting a nearby enemy. If there are not enough nearby enemies, the remaining bolts target random enemies. Each bolt deals (+215% Total Magic ATK) Magic DMG.",
      sdescription:
        "Fires multiple shadow bolts that deal Magic DMG to nearby or random enemies.",
      icon: "/images/skills/arcane_shade.png",

      attributes: {
        "Magic Bonus": ["215%", "215%", "420%"],
      },
    },

    synergies: {
      faction: ["Luminexus"],
      roles: ["Mage"],
    },

    recommendedEquipment: [
      "Lightning Truncheon",
      "Holy Crystal",
      "Ice Queen Wand",
      "Genius Wand",
    ],

    attributes: {
      hp: [3100, 5580, 13795],
      physicalAtk: [130, 195, 295],
      magicAtk: [130, 195, 295],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 25,
    name: "Floryn",
    cost: 4,
    image: "/images/heroes/Hero1126.png",

    skill: {
      name: "Sprout",
      description:
        "Floryn casts a blob of energy that explodes upon hitting an enemy, dealing (+675% Total Magic ATK) Magic DMG to nearby enemies and stunning them briefly. DMG decreases for each enemy hit.",
      sdescription:
        "Launches an energy sprout that explodes, dealing Magic DMG and stunning enemies.",
      icon: "/images/skills/sprout.png",

      attributes: {
        "Magic Bonus": ["675%", "675%", "1765%"],
      },
    },

    synergies: {
      faction: ["Luminexus"],
      roles: ["Scavenger"],
    },

    recommendedEquipment: [
      "Lightning Truncheon",
      "Ice Queen Wand",
      "Enchanted Talisman",
      "Holy Crystal",
    ],

    attributes: {
      hp: [3100, 5580, 13795],
      physicalAtk: [130, 195, 295],
      magicAtk: [130, 195, 295],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [30, 30, 30],
      manaCap: [50, 50, 50],
    },
  },
  {
    id: 26,
    name: "Yu Zhong",
    cost: 4,
    image: "/images/heroes/Hero955.png",

    skill: {
      name: "Black Dragon Form",
      description:
        "Yu Zhong unleashes Dragon Soul ATK, dealing (+500% Total Physical ATK) Physical DMG to all enemies in range and enters Dragonoid Form on first cast.",
      sdescription: "Deals massive AoE Physical DMG and transforms.",
      icon: "/images/skills/black_dragon_form.png",

      attributes: {
        "Physical Bonus": ["500%", "500%", "1450%"],
      },
    },

    synergies: {
      faction: ["Exorcist"],
      roles: ["Bruiser"],
    },

    attributes: {
      hp: [3857, 6943, 17164],
      physicalAtk: [180, 270, 405],
      magicAtk: [180, 270, 405],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [60, 60, 60],
      manaCap: [80, 80, 80],
    },
  },
  {
    id: 27,
    name: "Granger",
    cost: 2,
    image: "/images/heroes/Hero107910.png",

    skill: {
      name: "Rhapsody",
      description:
        "Granger rapidly fires 3 shots at the target, each dealing (+200% Total Physical ATK) Physical DMG.",
      sdescription: "Rapid burst shots with high Physical DMG.",
      icon: "/images/skills/rhapsody.png",

      attributes: {
        "Physical Bonus": ["200%", "200%", "275%"],
      },
    },

    synergies: {
      faction: ["Exorcist"],
      roles: ["Marksman"],
    },

    attributes: {
      hp: [1705, 3069, 5524],
      physicalAtk: [110, 165, 220],
      magicAtk: [110, 165, 220],
      atkSpeed: [0.8, 0.8, 0.8],
      atkRange: [4, 4, 4],
      initialManaCap: [30, 30, 30],
      manaCap: [50, 50, 50],
    },
  },
  {
    id: 28,
    name: "Saber",
    cost: 3,
    image: "/images/heroes/Hero031.png",

    skill: {
      name: "Orbiting Swords",
      description:
        "Saber releases orbiting swords that deal (+85% Total Physical ATK) Physical DMG to enemies hit.",
      sdescription: "Orbiting blades that deal repeated Physical DMG.",
      icon: "/images/skills/orbiting_swords.png",

      attributes: {
        "Physical Bonus": ["85%", "85%", "130%"],
      },
    },

    synergies: {
      faction: ["Exorcist"],
      roles: ["Swiftblade"],
    },

    attributes: {
      hp: [2842, 5116, 9663],
      physicalAtk: [145, 220, 290],
      magicAtk: [145, 220, 290],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [60, 60, 60],
      manaCap: [80, 80, 80],
    },
  },
  {
    id: 29,
    name: "Hayabusa",
    cost: 4,
    image: "/images/heroes/Hero102110.png",

    skill: {
      name: "Ougi: Shadow Kill",
      description:
        "Hayabusa turns into shadows and strikes enemies multiple times, dealing massive Physical DMG.",
      sdescription: "Multiple shadow strikes dealing huge burst DMG.",
      icon: "/images/skills/shadow_kill.png",

      attributes: {
        "Total Physical Bonus": ["945%", "965%", "2660%"],
      },
    },

    synergies: {
      faction: ["Exorcist"],
      roles: ["Phasewarper"],
    },

    attributes: {
      hp: [3664, 6595, 16305],
      physicalAtk: [170, 255, 340],
      magicAtk: [170, 255, 340],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [80, 80, 80],
      manaCap: [100, 100, 100],
    },
  },
  {
    id: 30,
    name: "Phoveus",
    cost: 1,
    image: "/images/heroes/Hero1061.png",

    skill: {
      name: "Demonic Impact",
      description:
        "Phoveus enhances his next Basic ATK, dealing (+250% Total Physical ATK) Physical DMG and gaining a Shield.",
      sdescription: "Empowered strike with shield and debuff.",
      icon: "/images/skills/demonic_impact.png",

      attributes: {
        "Physical Bonus": ["250%", "250%", "340%"],
        "Shield %": ["8%", "8%", "10%"],
      },
    },

    synergies: {
      faction: ["Exorcist"],
      roles: ["Scavenger"],
    },

    attributes: {
      hp: [2030, 3654, 6090],
      physicalAtk: [105, 160, 210],
      magicAtk: [105, 160, 210],
      atkSpeed: [0.65, 0.65, 0.65],
      atkRange: [1, 1, 1],
      initialManaCap: [30, 30, 30],
      manaCap: [50, 50, 50],
    },
  },
  {
    id: 31,
    name: "Ruby",
    cost: 5,
    image: "/images/heroes/Hero291.png",

    skill: {
      name: "Don't Run, Wolf King!",
      description:
        "Ruby dashes into enemies, dealing Physical DMG and taunting them while gaining Lifesteal.",
      sdescription: "AoE taunt with sustain and control.",
      icon: "/images/skills/dont_run_wolf_king.png",

      attributes: {
        "Physical Bonus": ["160%", "170%", "280%"],
      },
    },

    synergies: {
      faction: ["Exorcist"],
      roles: ["Dauntless"],
    },

    attributes: {
      hp: [4263, 7673, 45827],
      physicalAtk: [230, 345, 635],
      magicAtk: [230, 345, 635],
      atkSpeed: [0.65, 0.65, 0.65],
      atkRange: [1, 1, 1],
      initialManaCap: [80, 80, 20],
      manaCap: [100, 100, 100],
    },
  },
  {
    id: 32,
    name: "Gatotkaca",
    cost: 2,
    image: "/images/heroes/Hero104199.png",

    skill: {
      name: "Blast Iron Fist",
      description:
        "Gatotkaca launches an Enhanced Basic ATK, restoring HP and dealing Magic DMG.",
      sdescription: "Enhanced basic attack with healing.",
      icon: "/images/skills/blast_iron_fist.png",

      attributes: {
        "HP Regen": ["400", "700", "1500"],
        "Enhanced Basic ATK": ["400%", "400%", "550%"],
      },
    },

    synergies: {
      faction: ["Neobeast"],
      roles: ["Defender", "Bruiser"],
    },

    attributes: {
      hp: [2233, 4019, 7235],
      physicalAtk: [115, 175, 230],
      magicAtk: [115, 175, 230],
      atkSpeed: [0.65, 0.65, 0.65],
      atkRange: [1, 1, 1],
      initialManaCap: [60, 60, 60],
      manaCap: [80, 80, 80],
    },
  },
  {
    id: 33,
    name: "Fredrinn",
    cost: 3,
    image: "/images/heroes/Hero1174.png",

    skill: {
      name: "Piercing Strike",
      description:
        "Fredrinn thrusts forward, dealing Physical DMG, gaining a shield, and enhancing his next Basic ATK.",
      sdescription: "Pierce damage with shield and empowered attack.",
      icon: "/images/skills/piercing_strike.png",

      attributes: {
        "Physical Bonus": ["280%", "280%", "410%"],
        "Percentage Shield": ["10%", "10%", "12%"],
        "Basic ATK DMG": ["420%", "420%", "575%"],
      },
    },

    synergies: {
      faction: ["Neobeast"],
      roles: ["Weapon Master"],
    },

    attributes: {
      hp: [2842, 5116, 9663],
      physicalAtk: [145, 220, 290],
      magicAtk: [145, 220, 290],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 34,
    name: "Brody",
    cost: 1,
    image: "/images/heroes/Hero1008.png",

    skill: {
      name: "Abyss Corrosion",
      description:
        "Brody grants ATK Speed to nearby allies and amplifies damage taken by enemies hit by his Basic ATK.",
      sdescription: "Supportive damage amplifier.",
      icon: "/images/skills/abyss_corrosion.png",

      attributes: {
        "Physical Bonus": ["20%", "25%", "30%"],
      },
    },

    synergies: {
      faction: ["Neobeast"],
      roles: ["Marksman"],
    },

    attributes: {
      hp: [1550, 2790, 4650],
      physicalAtk: [90, 135, 180],
      magicAtk: [90, 135, 180],
      atkSpeed: [0.8, 0.8, 0.8],
      atkRange: [4, 4, 4],
      initialManaCap: [0, 0, 0],
      manaCap: [0, 0, 0],
    },
  },
  {
    id: 35,
    name: "Pharsa",
    cost: 4,
    image: "/images/heroes/Hero105211.png",

    skill: {
      name: "Feathered Air Strike",
      description:
        "Pharsa bombards enemies from mid-air, dealing repeated Magic DMG.",
      sdescription: "Multi-hit long-range magic bombardment.",
      icon: "/images/skills/feathered_air_strike.png",

      attributes: {
        "Magic Bonus": ["370%", "370%", "870%"],
      },
    },

    synergies: {
      faction: ["Neobeast"],
      roles: ["Stargazer"],
    },

    attributes: {
      hp: [3100, 5580, 13795],
      physicalAtk: [130, 195, 295],
      magicAtk: [130, 195, 295],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 36,
    name: "Ling",
    cost: 5,
    image: "/images/heroes/Hero108410.png",

    skill: {
      name: "Soaring Plume",
      description:
        "Ling perches on a structure, regenerating Mana before diving into enemies with massive Physical DMG.",
      sdescription: "Mana regen into lethal dive attack.",
      icon: "/images/skills/soaring_plume.png",

      attributes: {
        "Physical Bonus": ["300%", "320%", "930%"],
        "Physical Bonus (Dive)": ["380%", "420%", "1225%"],
        "Physical Bonus (Final)": ["460%", "500%", "2570%"],
      },
    },

    synergies: {
      faction: ["Neobeast"],
      roles: ["Swiftblade"],
    },

    attributes: {
      hp: [4019, 7235, 43209],
      physicalAtk: [240, 360, 660],
      magicAtk: [240, 360, 660],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [70, 70, 20],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 37,
    name: "Lylia",
    cost: 2,
    image: "/images/heroes/Hero866.png",

    skill: {
      name: "Magic Shockwave",
      description:
        "Lylia releases Gloom energy forward, dealing piercing Magic DMG.",
      sdescription: "Linear magic burst damage.",
      icon: "/images/skills/magic_shockwave.png",

      attributes: {
        "Magic Bonus": ["720%", "720%", "875%"],
      },
    },

    synergies: {
      faction: ["Neobeast"],
      roles: ["Mage"],
    },

    attributes: {
      hp: [1705, 3069, 5524],
      physicalAtk: [90, 135, 180],
      magicAtk: [90, 135, 180],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [30, 30, 30],
      manaCap: [50, 50, 50],
    },
  },
  {
    id: 38,
    name: "Jawhead",
    cost: 1,
    image: "/images/heroes/Hero547.png",

    skill: {
      name: "Ejector",
      description:
        "Jawhead knocks the target airborne, dealing Physical DMG and stunning them. At battle start, grants Shield to himself and adjacent allies.",
      sdescription: "Single-target CC with early shield support.",
      icon: "/images/skills/ejector.png",

      attributes: {
        "Physical Bonus": ["100%", "160%", "280%"],
        Shield: ["100", "150", "200"],
      },
    },

    synergies: {
      faction: ["Toy Mischief"],
      roles: ["Bruiser"],
    },

    attributes: {
      hp: [2030, 3654, 6090],
      physicalAtk: [110, 165, 220],
      magicAtk: [110, 165, 220],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [80, 80, 80],
      manaCap: [100, 100, 100],
    },
  },

  {
    id: 39,
    name: "Uranus",
    cost: 2,
    image: "/images/heroes/Hero595.png",

    skill: {
      name: "Energy Awakening",
      description:
        "Uranus releases stored energy to gain a large Shield for a short duration.",
      sdescription: "High shield sustain tank.",
      icon: "/images/skills/energy_awakening.png",

      attributes: {
        Shield: ["930", "1630", "3900"],
      },
    },

    synergies: {
      faction: ["Toy Mischief"],
      roles: ["Defender"],
    },

    attributes: {
      hp: [2233, 4019, 7235],
      physicalAtk: [115, 175, 230],
      magicAtk: [115, 175, 230],
      atkSpeed: [0.65, 0.65, 0.65],
      atkRange: [1, 1, 1],
      initialManaCap: [60, 60, 60],
      manaCap: [80, 80, 80],
    },
  },

  {
    id: 40,
    name: "Barats",
    cost: 4,
    image: "/images/heroes/Hero993.png",

    skill: {
      name: 'Missile "Expert"',
      description:
        "Barats fires missiles dealing Physical DMG, followed by an explosion that damages enemies in a larger area.",
      sdescription: "AoE physical damage bruiser.",
      icon: "/images/skills/missile_expert.png",

      attributes: {
        "Physical Bonus": ["140%", "140%", "450%"],
        "Explosion Bonus": ["120%", "120%", "380%"],
      },
    },

    synergies: {
      faction: ["Toy Mischief"],
      roles: ["Dauntless"],
    },

    attributes: {
      hp: [3857, 6943, 17164],
      physicalAtk: [175, 265, 395],
      magicAtk: [175, 265, 395],
      atkSpeed: [0.65, 0.65, 0.65],
      atkRange: [1, 1, 1],
      initialManaCap: [30, 30, 30],
      manaCap: [50, 50, 50],
    },
  },

  {
    id: 41,
    name: "Aulus",
    cost: 3,
    image: "/images/heroes/Hero1083.png",

    skill: {
      name: "The Power of Axe",
      description:
        "Aulus swings his axe in a fan-shaped area, dealing massive Physical DMG.",
      sdescription: "High burst physical AoE.",
      icon: "/images/skills/power_of_axe.png",

      attributes: {
        "Physical Bonus": ["355%", "355%", "560%"],
      },
    },

    synergies: {
      faction: ["Toy Mischief"],
      roles: ["Weapon Master"],
    },

    attributes: {
      hp: [2842, 5116, 9663],
      physicalAtk: [145, 220, 290],
      magicAtk: [145, 220, 290],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [20, 20, 20],
      manaCap: [40, 40, 40],
    },
  },

  {
    id: 42,
    name: "Cyclops",
    cost: 4,
    image: "/images/heroes/Hero333.png",

    skill: {
      name: "Planets Attack",
      description:
        "Cyclops generates Starlit Spheres that orbit and attack enemies, increasing in number with each cast.",
      sdescription: "Scaling magic DPS over time.",
      icon: "/images/skills/planets_attack.png",

      attributes: {
        "Magic Bonus": ["170%", "170%", "430%"],
      },
    },

    synergies: {
      faction: ["Toy Mischief"],
      roles: ["Stargazer"],
    },

    attributes: {
      hp: [3100, 5580, 13795],
      physicalAtk: [130, 195, 295],
      magicAtk: [130, 195, 295],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [30, 30, 30],
      manaCap: [50, 50, 50],
    },
  },

  {
    id: 43,
    name: "Harith",
    cost: 3,
    image: "/images/heroes/Hero734.png",

    skill: {
      name: "Chrono Dash",
      description:
        "Harith dashes to a safe position and empowers his next Basic ATK with Magic DMG.",
      sdescription: "Mobile burst mage.",
      icon: "/images/skills/chrono_dash.png",

      attributes: {
        "Magic Bonus": ["470%", "770%", "1680%"],
      },
    },

    synergies: {
      faction: ["Toy Mischief"],
      roles: ["Mage"],
    },

    attributes: {
      hp: [2170, 3906, 7378],
      physicalAtk: [105, 160, 210],
      magicAtk: [105, 160, 210],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [4, 4, 4],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 44,
    name: "Aldous",
    cost: 2,
    image: "/images/heroes/Hero645.png",

    skill: {
      name: "Contract: Transform",
      description:
        "Aldous enhances his next Basic ATK, dealing heavy Physical DMG and gaining a Shield.",
      sdescription: "Empowered strike with shield.",
      icon: "/images/skills/contract_transform.png",

      attributes: {
        "Physical Bonus": ["340%", "350%", "530%"],
        "Shield Bonus": ["100%", "130%", "200%"],
      },
    },

    synergies: {
      faction: ["Glory League"],
      roles: ["Bruiser"],
    },

    attributes: {
      hp: [2233, 4019, 7235],
      physicalAtk: [120, 180, 240],
      magicAtk: [120, 180, 240],
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
    image: "/images/heroes/Hero196.png",

    skill: {
      name: "Despair Stomp",
      description:
        "Minotaur knocks nearby enemies airborne, dealing Physical DMG and restoring Max HP.",
      sdescription: "AoE knock-up with sustain.",
      icon: "/images/skills/despair_stomp.png",

      attributes: {
        "Physical Bonus": ["360%", "360%", "540%"],
        "HP Regen": ["15%", "15%", "20%"],
      },
    },

    synergies: {
      faction: ["Glory League"],
      roles: ["Defender"],
    },

    attributes: {
      hp: [2842, 5116, 9663],
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
    name: "Roger",
    cost: 4,
    image: "/images/heroes/Hero398.png",

    skill: {
      name: "Wolf Transformation",
      description:
        "Roger transforms between Human and Wolf forms, dealing Physical DMG and gaining Shield.",
      sdescription: "Form-switching bruiser with burst.",
      icon: "/images/skills/wolf_transformation.png",

      attributes: {
        "Physical Bonus": ["150%", "150%", "480%"],
        Shield: ["500", "900", "4000"],
        "Physical Bonus (Wolf)": ["175%", "175%", "540%"],
      },
    },

    synergies: {
      faction: ["Glory League"],
      roles: ["Weapon Master"],
    },

    attributes: {
      hp: [3857, 6943, 17164],
      physicalAtk: [180, 270, 405],
      magicAtk: [180, 270, 405],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [2, 2, 2],
      initialManaCap: [40, 40, 40],
      manaCap: [60, 60, 60],
    },
  },
  {
    id: 47,
    name: "Beatrix",
    cost: 2,
    image: "/images/heroes/Hero1056.png",

    skill: {
      name: "Bennett Bombardment",
      description:
        "Beatrix bombards enemies with Bennett, dealing AoE Physical DMG.",
      sdescription: "High burst AoE artillery.",
      icon: "/images/skills/bennett_bombardment.png",

      attributes: {
        "Physical Bonus": ["590%", "590%", "730%"],
      },
    },

    synergies: {
      faction: ["Glory League"],
      roles: ["Marksman"],
    },

    attributes: {
      hp: [1705, 3069, 5524],
      physicalAtk: [110, 165, 220],
      magicAtk: [110, 165, 220],
      atkSpeed: [0.8, 0.8, 0.8],
      atkRange: [4, 4, 4],
      initialManaCap: [30, 30, 30],
      manaCap: [50, 50, 50],
    },
  },
  {
    id: 48,
    name: "Silvanna",
    cost: 1,
    image: "/images/heroes/Hero109010.png",

    skill: {
      name: "Knightess' Resolve",
      description:
        "Silvanna awakens her will, gaining Shield and Attack Speed.",
      sdescription: "Grants shield and attack speed boost.",
      icon: "/images/skills/knightess_resolve.png",

      attributes: {
        "Shield Bonus": ["250", "360", "430"],
        "ATK Speed Bonus": ["30%", "40%", "60%"],
      },
    },

    synergies: {
      faction: ["Mystic Meow"],
      roles: ["Dauntless"],
    },

    attributes: {
      hp: [2030, 3654, 6090],
      physicalAtk: [110, 165, 220],
      magicAtk: [110, 165, 220],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
  {
    id: 49,
    name: "Lesley",
    cost: 5,
    image: "/images/heroes/Hero105312.png",

    skill: {
      name: "Ultimate Snipe",
      description:
        "Lesley fires a fatal bullet and summons Leonins to attack enemies.",
      sdescription: "High-damage snipe with summoned attacks.",
      icon: "/images/skills/ultimate_snipe.png",

      attributes: {
        "Physical Bonus": ["200%", "200%", "1200%"],
        "Summon Bonus": ["100%", "100%", "400%"],
      },
    },

    synergies: {
      faction: ["Mystic Meow"],
      roles: ["Marksman"],
    },

    attributes: {
      hp: [3565, 6417, 38324],
      physicalAtk: [330, 495, 910],
      magicAtk: [330, 495, 910],
      atkSpeed: [0.4, 0.4, 0.4],
      atkRange: [18, 18, 18],
      initialManaCap: [20, 20, 20],
      manaCap: [40, 40, 40],
    },
  },
  {
    id: 50,
    name: "Julian",
    cost: 3,
    image: "/images/heroes/Hero1166.png",

    skill: {
      name: "Enhanced Scythe",
      description:
        "Julian throws a scythe dealing Magic DMG and持续 damage over time.",
      sdescription: "Magic burst followed by AoE DoT.",
      icon: "/images/skills/enhanced_scythe.png",

      attributes: {
        "Base DMG": ["550%", "550%", "820%"],
        "DMG Per Hit": ["50%", "50%", "70%"],
      },
    },

    synergies: {
      faction: ["Mystic Meow"],
      roles: ["Mage", "Phasewarper"],
    },

    attributes: {
      hp: [2170, 3906, 7378],
      physicalAtk: [105, 160, 210],
      magicAtk: [105, 160, 210],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [40, 40, 40],
      manaCap: [60, 60, 60],
    },
  },
  {
    id: 51,
    name: "Edith",
    cost: 5,
    image: "/images/heroes/Hero1115.png",

    skill: {
      name: "Primal Wrath",
      description:
        "Edith knocks enemies airborne in front of her, dealing Physical DMG and restoring HP. When HP is low, she transforms and gains ATK Speed.",
      sdescription: "Frontline knock-up with sustain and transformation.",
      icon: "/images/skills/primal_wrath.png",

      attributes: {
        "Physical Bonus": ["195%", "210%", "900%"],
        "Magic Bonus": ["40%", "40%", "240%"],
      },
    },

    synergies: {
      faction: ["Beyond the Clouds"],
      roles: ["Defender"],
    },

    attributes: {
      hp: [3325, 5985, 35745],
      physicalAtk: [230, 345, 635],
      magicAtk: [230, 345, 635],
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
    image: "/images/heroes/Hero1155.png",

    skill: {
      name: "Mystic Field",
      description:
        "Xavier summons a Mystic Barrier, dealing Magic DMG and later unleashing a forbidden zone that damages enemies in a wide area.",
      sdescription: "Zoning mage with layered AoE magic damage.",
      icon: "/images/skills/mystic_field.png",

      attributes: {
        "Magic Bonus": ["140%", "160%", "525%"],
      },
    },

    synergies: {
      faction: ["Beyond the Clouds"],
      roles: ["Stargazer"],
    },

    attributes: {
      hp: [2170, 3906, 7378],
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
    name: "Natalia",
    cost: 2,
    image: "/images/heroes/Hero249.png",

    skill: {
      name: "The Hunt",
      description:
        "Natalia activates Assassin Instinct, empowering her next Basic ATK to deal massive Physical DMG.",
      sdescription: "Single-target burst assassin.",
      icon: "/images/skills/the_hunt.png",

      attributes: {
        "Physical Bonus": ["600%", "600%", "855%"],
      },
    },

    synergies: {
      faction: ["Beyond the Clouds"],
      roles: ["Swiftblade"],
    },

    attributes: {
      hp: [2233, 4019, 7488],
      physicalAtk: [120, 180, 240],
      magicAtk: [120, 180, 240],
      atkSpeed: [0.75, 0.75, 0.75],
      atkRange: [1, 1, 1],
      initialManaCap: [50, 50, 50],
      manaCap: [70, 70, 70],
    },
  },
];
