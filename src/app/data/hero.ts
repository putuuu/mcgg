export interface Hero {
  id: number;
  name: string;
  cost: number;
  image: string;
  mana: {
    initial: number;
    max: number;
  };
  skill: {
    name: string;
    description: string;
    sdescription: string;
    icon: string;
  };
  synergies: {
    faction: string;
    roles: string[];
  };
}

export const heroes: Hero[] = [
  {
    id: 1101,
    name: "Dyrroth",
    cost: 3,
    image: "/images/hero/dyrroth.png",
    mana: {
      initial: 75,
      max: 75,
    },
    skill: {
      name: "Spectre Step",
      description:
        "Dyrroth deals (+275%/+275%/+390% Total Physical ATK) Physical DMG to the target and restores (+190%/220%/370% Total Physical ATK) HP. Passive: After every 3 Basic ATK(s), Dyrrooth's next Basic ATK releases a Circle strike that deals(+150%/150%/220% Total Physical ATK) DMG.",
      sdescription:
        "Strikes a target to deal damage and restore HP. Every 4th attack unleashes a Circle Strike.",
      icon: "/images/skills/dyrroth.png",
    },
    synergies: {
      faction: "Doomsworn",
      roles: ["Bruiser"],
    },
  },
  {
    id: 1201,
    name: "Hylos",
    cost: 2,
    image: "/images/hero/hylos.png",
    mana: {
      initial: 50,
      max: 50,
    },
    skill: {
      name: "Law and Order",
      description:
        "Hylos deals (+260%/270%/350% Total Magic ATK) Magic DMG to the target and gain a 150 Shield for 3s. Passive: When battle starts, grant a 150/250/500 Shield to himself and allied Heroes to his left and right.",
      sdescription:
        "Deals magic damage and gains a shield. At battle start, grants shields to adjacent allies.",
      icon: "/images/skills/hylos.png",
    },
    synergies: {
      faction: "Doomsworn",
      roles: ["Defender"],
    },
  },
  {
    id: 1401,
    name: "Franco",
    cost: 5,
    image: "/images/hero/franco.png",
    mana: {
      initial: 50,
      max: 75,
    },
    skill: {
      name: "Bloody Hunt",
      description:
        "Franco launches an iron hook towards the futhest enemy and drags them back, dealing (+120%/125%/500% Total Physical ATK) Physical DMG. He also deals (+100%/110%/450% Total Physical ATK) Physical DMG 6 times to the surrounding enemies.",
      sdescription:
        "Pulls the farthest enemy with a hook. Slams surrounding enemies with 6 heavy hits.",
      icon: "/images/skills/franco.png",
    },
    synergies: {
      faction: "Doomsworn",
      roles: ["Dauntless"],
    },
  },
  {
    id: 1501,
    name: "Argus",
    cost: 4,
    image: "/images/hero/argus.png",
    mana: {
      initial: 75,
      max: 100,
    },
    skill: {
      name: "Warmonger",
      description:
        "Enhance Argus' next Basic ATK to launch a Demonic Slash, dealing (+170%/170%/420% Physical ATK) Physical DMG twice. Passive: When taking fatal DMG for the first time, Argus enters the Fallen Angel state and gains 40%/60%/140% ATK Speed for 3s, becoming immune to death for 1s/1.6s/2.2s.",
      sdescription:
        "Empowers next attack with a double slash. When near death, becomes immune briefly and gains ATK Speed.",
      icon: "/images/skills/argus.png",
    },
    synergies: {
      faction: "Doomsworn",
      roles: ["Weapon Master"],
    },
  },
  {
    id: 1701,
    name: "Irithel",
    cost: 4,
    image: "/images/hero/irithel.png",
    mana: {
      initial: 75,
      max: 100,
    },
    skill: {
      name: "Strafe",
      description:
        "Irithel launches flaming arrows at the target, dealing (+135%/135%/400% Total Physical ATK) Physical DMG, enhancing the next 3 Basic ATK(s). On hit, the enhanced Basic ATK deals (+320%/320%/850% Total Physical ATK) Physical DMG. Passive: Each Basic ATK deals 3 hit(s) of (+35% Total Physical ATK) Physical DMG.",
      sdescription:
        "Empowers next 3 attacks with burst damage. Each attack hits 3 times.",
      icon: "/images/skills/irithel.png",
    },
    synergies: {
      faction: "Doomsworn",
      roles: ["Marksman"],
    },
  },
  {
    id: 2001,
    name: "Cyclops",
    cost: 1,
    image: "/images/hero/cyclops.png",
    mana: {
      initial: 25,
      max: 50,
    },
    skill: {
      name: "Planet Attack",
      description:
        "Cyclops uses the power of stars to generate 5 starlit sphere(s) spinning around him. The sphere will attack nearby enemy Heroes, each dealing (+150%/150%/200% Total Magic ATK) Magic DMG. Passive: Grants 10% Hybrid ATK to two allied Heroes within 1 tile.",
      sdescription:
        "Creates 5 spinning spheres that strike nearby enemies. Grants Hybrid ATK to 2 nearby allies.",
      icon: "/images/skills/cyclops.png",
    },
    synergies: {
      faction: "Doomsworn",
      roles: ["Stargazer"],
    },
  },
  {
    id: 1102,
    name: "Masha",
    cost: 2,
    image: "/images/hero/masha.png",
    mana: {
      initial: 50,
      max: 75,
    },
    skill: {
      name: "Wild Power",
      description:
        "Masha increase the DMG for the next 8 Basic ATKs to 150%/150%/180%, gaining 85%/85%/165% extra ATK Speed anf 10%/10%/20% Hybrid Lifesteal.",
      sdescription:
        "Empowers next 8 attacks with bonus damage. Gains extra ATK Speed and Hybrid Lifesteal.",
      icon: "/images/skills/masha.png",
    },
    synergies: {
      faction: "Northern Vale",
      roles: ["Bruiser"],
    },
  },
  {
    id: 1202,
    name: "Atlas",
    cost: 1,
    image: "/images/hero/atlas.png",
    mana: {
      initial: 0,
      max: 0,
    },
    skill: {
      name: "Annihilate",
      description:
        "Passive: Atlas generates Frigid Breath around him. Enemies in the area will have their ATK Speed reduced by 1%/2%/4% every 0.5s (up to 5%).",
      sdescription:
        "Generates a freezing aura around him. Reduces enemy ATK Speed over time.",
      icon: "/images/skills/atlas.png",
    },
    synergies: {
      faction: "Northern Vale",
      roles: ["Defender"],
    },
  },
  {
    id: 1502,
    name: "Freya",
    cost: 3,
    image: "/images/hero/freya.png",
    mana: {
      initial: 50,
      max: 50,
    },
    skill: {
      name: "Valkyrie",
      description:
        "Freya enters the Valkyrie state, gaining 35%/35%/50% Physical ATK, 30%/40%/50% ATK Speed, and a 700/1000/2500 shield. Meanwhile, her Basic ATKs deal 25% Splash DMG.",
      sdescription:
        "Enters Valkyrie state to gain ATK, ATK Speed, and a shield. Basic Attacks deal splash damage.",
      icon: "/images/skills/freya.png",
    },
    synergies: {
      faction: "Northern Vale",
      roles: ["Weapon Master"],
    },
  },
  {
    id: 1802,
    name: "Popol and Kupa",
    cost: 3,
    image: "/images/hero/popol.png",
    mana: {
      initial: 50,
      max: 75,
    },
    skill: {
      name: "I Need You, Kupa!",
      description:
        "Popol prays intently to call Kupa to the battlefield, who wll leave in 4s. After 3 consecutive attacks, Kupa unleashes 3 rapid blows, each dealing (+135%/155%/260% Total Physical ATK) Physical DMG.",
      sdescription:
        "Summons Kupa to fight for a short time. After 3 attacks, Kupa unleashes a flurry of strikes.",
      icon: "/images/skills/popol.png",
    },
    synergies: {
      faction: "Northern Vale",
      roles: ["Summoner"],
    },
  },
  {
    id: 1902,
    name: "Aurora",
    cost: 5,
    image: "/images/hero/aurora.png",
    mana: {
      initial: 50,
      max: 75,
    },
    skill: {
      name: "Hailstone Blast",
      description:
        "Aurora summons an icy meteorite to strike at the location with the most enemies, dealing (+95% Total Magic ATK) Magic DMG 6 times within medium range. When reaching 3-Star, she summons a freezing wind that deals high Magic DMG to all enemies.",
      sdescription:
        "Drops an icy meteor that hits enemies repeatedly. At 3-Star, unleashes freezing wind to damage all enemies.",
      icon: "/images/skills/aurora.png",
    },
    synergies: {
      faction: "Northern Vale",
      roles: ["Mage"],
    },
  },
  {
    id: 2002,
    name: "Yve",
    cost: 4,
    image: "/images/hero/yve.png",
    mana: {
      initial: 35,
      max: 35,
    },
    skill: {
      name: "Void Blast",
      description:
        "Yve channels Galactic Energy, dealing (+470% Total Magic ATK) Magic DMG to the target, then detonates this energy, dealing (+240% Total Magic ATK) Magic DMG to enemies on adjacent tiles.",
      sdescription:
        "Blasts a target with Galactic Energy. Then detonates it to damage nearby enemies.",
      icon: "/images/skills/yve.png",
    },
    synergies: {
      faction: "Northern Vale",
      roles: ["Stargazer"],
    },
  },
  {
    id: 1403,
    name: "Akai",
    cost: 2,
    image: "/images/hero/akai.png",
    mana: {
      initial: 50,
      max: 75,
    },
    skill: {
      name: "Body Slam",
      description:
        "Akai slams the ground, dealing (+260%/260%/350% Total Physical ATK) Physical DMG to adjacent enemies while gaining a Shield equal to 240/350/800 +5%/5%/9% of his Max HP.",
      sdescription:
        "Slams the ground to damage nearby enemies. Gains a shield based on his Max HP.",
      icon: "/images/skills/akai.png",
    },
    synergies: {
      faction: "Dragon Altar",
      roles: ["Dauntless"],
    },
  },
  {
    id: 1503,
    name: "Suyou",
    cost: 2,
    image: "/images/hero/suyou.png",
    mana: {
      initial: 25,
      max: 50,
    },
    skill: {
      name: "Soul Sever",
      description:
        "Suyou deals (+300%/300%/400% Total Physical ATK) Physical DMG to enemies in a fan-shaped area in front of him.",
      sdescription:
        "Strikes enemies in front with a wide slash. Deals damage in a fan-shaped area.",
      icon: "/images/skills/suyou.png",
    },
    synergies: {
      faction: "Dragon Altar",
      roles: ["Weapon Master"],
    },
  },
  {
    id: 1603,
    name: "Ling",
    cost: 2,
    image: "/images/hero/ling.png",
    mana: {
      initial: 100,
      max: 125,
    },
    skill: {
      name: "Tempest of Blades",
      description:
        "Suyou deals (+300% Total Physical ATK) Physical DMG to enemies in a fan-shaped area in front of him.",
      sdescription:
        "Strikes enemies in front with a wide slash. Deals damage in a fan-shaped area.",
      icon: "/images/skills/ling.png",
    },
    synergies: {
      faction: "Dragon Altar",
      roles: ["Swordsman"],
    },
  },
];
