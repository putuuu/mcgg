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
    cost: 4,
    image: "/images/hero/ling.png",
    mana: {
      initial: 100,
      max: 125,
    },
    skill: {
      name: "Tempest of Blades",
      description:
        "Ling soars skyward, unleashing his ultimate sword technique and becoming invincible. Upon lading, he deals (+290%/290%/750% Physical ATK) DMG to enemies within medium range.",
      sdescription:
        "Soars into the air and becomes invincible. Deals massive damage to nearby enemies upon landing.",
      icon: "/images/skills/ling.png",
    },
    synergies: {
      faction: "Dragon Altar",
      roles: ["Swordsman"],
    },
  },
  {
    id: 1703,
    name: "Wanwan",
    cost: 1,
    image: "/images/hero/wanwan.png",
    mana: {
      initial: 0,
      max: 0,
    },
    skill: {
      name: "Tiger Pace",
      description:
        "Enemy Heroes hit by Wanwan's ATKs 3 times will have their weaknesses exposed. Wanwan can deal an extra (+65%/70%/100% Total Physical ATK) DMG with her Basic ATKs. Passive: Enemies with exposed weakness will enter a vulnerable state, taking 10% extra DMG.",
      sdescription:
        "Marks enemies after 3 hits, exposing their weakness. Basic attacks deal bonus damage, and marked enemies take extra damage.",
      icon: "/images/skills/wanwan.png",
    },
    synergies: {
      faction: "Dragon Altar",
      roles: ["Marksman"],
    },
  },
  {
    id: 1803,
    name: "Sun",
    cost: 5,
    image: "/images/hero/sun.png",
    mana: {
      initial: 25,
      max: 50,
    },
    skill: {
      name: "Clone Techniques",
      description:
        "Upon first skill cast, Sun summons 2 Doppelgangers that take 75%/70%/50% extra DMG. (Magic Crystal are ineffective on Doppelgangers, and a maximum of 2 Doppelgangers can exist at the same time.) In subsequent casts, Sun and the Doppelgangers strike forward with their staves, dealing (+180%/200%/1100% Total Physical ATK) Physical DMG to enemies within 3 tiles along the path.",
      sdescription:
        "Summons 2 Doppelgangers on first cast. On subsequent casts, Sun and his clones strike forward, dealing damage to enemies in a line.",
      icon: "/images/skills/sun.png",
    },
    synergies: {
      faction: "Dragon Altar",
      roles: ["Summoner"],
    },
  },
  {
    id: 2003,
    name: "Chang'e",
    cost: 3,
    image: "/images/hero/change.png",
    mana: {
      initial: 50,
      max: 50,
    },
    skill: {
      name: "Starmoon Shockwave",
      description:
        "Chang'e sends 5 energy spheres to the target, each dealing (+175%/175%/250% Total Magic ATK) Magic DMG. The spheres will spread out when they hit the target and continue to fly, dealing damage to enemies behind the target.",
      sdescription:
        "Launches 5 energy spheres at a target, dealing damage and hitting enemies behind them.",
      icon: "/images/skills/change.png",
    },
    synergies: {
      faction: "Dragon Altar",
      roles: ["Stargazer"],
    },
  },
  {
    id: 1104,
    name: "Badang",
    cost: 1,
    image: "/images/hero/badang.png",
    mana: {
      initial: 0,
      max: 0,
    },
    skill: {
      name: "Chivalry Fist",
      description:
        "Badang's every 4 Basic ATK(s) will enhance the next Basic ATK to deal (+420%/450%/550% Physical ATK) Physical DMG and gain a 100/200/450 Shield. Passive: When battle starts, Badang grants 6 Hybrid DEF to himself and allied Heroes to his left and right.",
      sdescription:
        "Every 4th attack is enhanced, dealing bonus damage and granting a shield. Grants Hybrid DEF to nearby allies at battle start.",
      icon: "/images/skills/badang.png",
    },
    synergies: {
      faction: "Emberlord",
      roles: ["Bruiser"],
    },
  },
  {
    id: 121304,
    name: "Kaja",
    cost: 4,
    image: "/images/hero/kaja.png",
    mana: {
      initial: 75,
      max: 100,
    },
    skill: {
      name: "Ring of Order",
      description:
        "Kaja releases a Ringed Electric Blade that quickly expands and contracts, dealing (+130%/135%/375% Total Magic ATK) Magic DMG to enemies hit and restoring (+25%/35%/65% Total Magic ATK) HP to himself",
      sdescription:
        "Unleashes a ringed blade that expands and contracts, damaging enemies and restoring HP.",
      icon: "/images/skills/kaja.png",
    },
    synergies: {
      faction: "Emberlord",
      roles: ["Defender", "Support"],
    },
  },
  {
    id: 1404,
    name: "Balmond",
    cost: 2,
    image: "/images/hero/balmond.png",
    mana: {
      initial: 75,
      max: 75,
    },
    skill: {
      name: "Cyclone Sweep",
      description:
        "Balmond launches 14 strikes within 3s, each dealing (+45%/55%/70% Total Physical ATK) Physical DMG to adjacent enemies and reducing their healing received by 30%.",
      sdescription:
        "Strikes nearby enemies repeatedly, dealing damage and reducing their healing.",
      icon: "/images/skills/balmond.png",
    },
    synergies: {
      faction: "Emberlord",
      roles: ["Dauntless"],
    },
  },
  {
    id: 1504,
    name: "Thamuz",
    cost: 3,
    image: "/images/hero/thamuz.png",
    mana: {
      initial: 50,
      max: 75,
    },
    skill: {
      name: "Molten Scythes",
      description:
        "Thamuz throws War Scythe toward the current target direction and recalls it, dealing (+250%/260%/400% Total Physical ATK) Physical DMG to enemies hit in the 3 front tile(s) and stunning them for 0.6s/1s/2.2s.",
      sdescription:
        "Hurls a scythe forward and recalls it, damaging and stunning enemies in its path.",
      icon: "/images/skills/thamuz.png",
    },
    synergies: {
      faction: "Emberlord",
      roles: ["Weapon Master"],
    },
  },
  {
    id: 1704,
    name: "Moskov",
    cost: 5,
    image: "/images/hero/moskov.png",
    mana: {
      initial: 50,
      max: 75,
    },
    skill: {
      name: "Spear of Destruction",
      description:
        "Moskov throws out Spear of Destruction toward the location with the most enemies. The spear deals (+285%/300%/1320% Total Physical ATK) Physical DMG to enemies in its path, and his own ATK Speed is increased by 20%/25%/40% for 6s.",
      sdescription:
        "Throws a spear toward the most enemies, dealing damage in a line and increasing his Attack Speed.",
      icon: "/images/skills/moskov.png",
    },
    synergies: {
      faction: "Emberlord",
      roles: ["Marksman"],
    },
  },
  {
    id: 1904,
    name: "Gord",
    cost: 4,
    image: "/images/hero/gord.png",
    mana: {
      initial: 75,
      max: 75,
    },
    skill: {
      name: "Mystic Gush",
      description:
        "Gord continuously unleashes an energy beam in a designated direction, dealing (+150%/150%/320% Total Magic ATK) Magic DMG 12 time(s) to enemies in its path. (If no target can be attacked, immediately ends casting and  refunds some Mana.)",
      sdescription:
        "Fires a continuous energy beam, dealing damage to enemies in a line.",
      icon: "/images/skills/gord.png",
    },
    synergies: {
      faction: "Emberlord",
      roles: ["Mage"],
    },
  },
  {
    id: 1205,
    name: "Minotaur",
    cost: 5,
    image: "/images/hero/minotaur.png",
    mana: {
      initial: 100,
      max: 125,
    },
    skill: {
      name: "Minoan Fury",
      description:
        "Minotaur hammers the ground 3 times, sending shockwaves that deal (+90%/100%/340% Total Physical ATK) Physical DMG to enemies within a large area and reduces their Movement Speed by 70% for 2s for the first two strikes. The fineal shockwave deals (+180%/200%/675% Total Physical ATK) Physical DMG and knocks targets airborne for 1s. Minotaur is immune to CC while casting this skill. For 5s after casting this skill, Minotaur will recover 2%/2%/5% HP when he takes damage.",
      sdescription:
        "Hammers the ground 3 times, damaging and slowing enemies. Final strike knocks them airborne. Gains CC immunity while casting and heals when damaged afterward.",
      icon: "/images/skills/minotaur.png",
    },
    synergies: {
      faction: "Astro Power",
      roles: ["Defender"],
    },
  },
  {
    id: 1505,
    name: "Martis",
    cost: 2,
    image: "/images/hero/martis.png",
    mana: {
      initial: 50,
      max: 50,
    },
    skill: {
      name: "Minoan Fury",
      description:
        "Martis deal (+270%/270%/320% Total Physical ATK) Physical DMG to the target and gains a Shield equal to 10%/10%/15% of his Max HP for 3s. Passive: When casting the skill for the first time, grants the entire lineup 10% ATK Speed for 6s.",
      sdescription:
        "Strikes a target, gaining a shield. On first cast, grants Attack Speed to all allies.",
      icon: "/images/skills/martis.png",
    },
    synergies: {
      faction: "Astro Power",
      roles: ["Weapon Master"],
    },
  },
  {
    id: 1605,
    name: "Karina",
    cost: 3,
    image: "/images/hero/karina.png",
    mana: {
      initial: 75,
      max: 100,
    },
    skill: {
      name: "Minoan Fury",
      description:
        "Upon first skill Cast, Karina dashes to the enemy Hero with the highest damage otput within 3 tiles (prioritizes ranged Heroes) and enters the Elusiveness state for 2s/4s/6s, during which she is immune to 5/6/8 Basic ATKs MdCallReceived. Passive: After attacking a target twice in a Rows, Karina's third attack deals an extra (+250% TOtal Magic ATK) Magic DMG to the target.",
      sdescription:
        "Dashes to the highest damage enemy and becomes elusive, avoiding several Basic Attacks. Every third attack deals bonus magic damage.",
      icon: "/images/skills/karina.png",
    },
    synergies: {
      faction: "Astro Power",
      roles: ["Swordsman"],
    },
  },
  {
    id: 1805,
    name: "Zhask",
    cost: 1,
    image: "/images/hero/zhask.png",
    mana: {
      initial: 100,
      max: 100,
    },
    skill: {
      name: "Nightmaric Spawn",
      description:
        "Zhask summons a Nightmaric Spawn next to him that will automatically attack nearby EventEmitterAsyncResource, dealing (+130% Total Magic ATK) Magic DMG with each attack. These attacks also reduce the target's Magic DEF by 6, stacking up to 4 times.",
      sdescription:
        "Summons a spawn that attacks nearby enemies, dealing magic damage and reducing their Magic DEF.",
      icon: "/images/skills/zhask.png",
    },
    synergies: {
      faction: "Astro Power",
      roles: ["Summoner"],
    },
  },
  {
    id: 1905,
    name: "Odette",
    cost: 3,
    image: "/images/hero/odette.png",
    mana: {
      initial: 75,
      max: 75,
    },
    skill: {
      name: "Blue Nova",
      description:
        "Odette releases a set of magic energy balls that deal (+500%/575%/750% Total Magic ATK) Magic DMG to the target enemy and one nearby enemy when hit, immobilizing them for 0.8s.",
      sdescription:
        "Releases magic energy that hits a target and a nearby enemy, dealing damage and briefly immobilizing them.",
      icon: "/images/skills/odette.png",
    },
    synergies: {
      faction: "Astro Power",
      roles: ["Mage"],
    },
  },
  {
    id: 2005,
    name: "Lunox",
    cost: 4,
    image: "/images/hero/lunox.png",
    mana: {
      initial: 25,
      max: 50,
    },
    skill: {
      name: "Power of Chaos: Darkening",
      description:
        "Lunox dashes to a safe location and releases 3 Chaos Assaults, each dealing (+270%/270%/540% Total Magic ATK) Magic DiGitMerge. Killing an enemy Hero grants 1 additional cast of Chaos GiBunkerAssault.",
      sdescription:
        "Dashes to safety and fires 3 Chaos attacks, each dealing magic damage. Gains an extra cast when she kills an enemy Hero.",
      icon: "/images/skills/lunox.png",
    },
    synergies: {
      faction: "Astro Power",
      roles: ["Stargazer"],
    },
  },
  {
    id: 1206,
    name: "Johnson",
    cost: 3,
    image: "/images/hero/johnson.png",
    mana: {
      initial: 75,
      max: 75,
    },
    skill: {
      name: "Impact Wrench",
      description:
        "Johnson throws his Impact Wrench at his current target, dealing (+560%/560%/790% Total Magic ATK) Magic DMG and gaining a Shield equal to 25%/25%/30% of Max HP that lasts 4s.",
      sdescription:
        "Throws a wrench at his target, dealing magic damage and gaining a shield based on his Max HP.",
      icon: "/images/skills/johnson.png",
    },
    synergies: {
      faction: "Eruditio",
      roles: ["Defender"],
    },
  },
  {
    id: 1306,
    name: "Diggie",
    cost: 2,
    image: "/images/hero/diggie.png",
    mana: {
      initial: 25,
      max: 50,
    },
    skill: {
      name: "Auto Alarm Bomb",
      description:
        "Diggie throws an ownl alarm clock at the current target, dealing (+300% Total Magic ATK) Magic DMG to enemies on adjacent tiles and reducing their Magic DEF by 12.",
      sdescription:
        "Throws an alarm clock at the target, dealing area magic damage and reducing nearby enemies’ Magic DEF.",
      icon: "/images/skills/diggie.png",
    },
    synergies: {
      faction: "Eruditio",
      roles: ["Support"],
    },
  },
  {
    id: 1406,
    name: "Lolita",
    cost: 1,
    image: "/images/hero/lolita.png",
    mana: {
      initial: 50,
      max: 75,
    },
    skill: {
      name: "Noumenon Energy Core",
      description:
        "Lolita grants herself and two allied Heroes a 320/580/1500 Shield that lasts 3s.",
      sdescription:
        "Grants a shield to herself and two nearby allies for a short duration.",
      icon: "/images/skills/lolita.png",
    },
    synergies: {
      faction: "Eruditio",
      roles: ["Dauntless"],
    },
  },
  {
    id: 1606,
    name: "Nolan",
    cost: 4,
    image: "/images/hero/nolan.png",
    mana: {
      initial: 60,
      max: 60,
    },
    skill: {
      name: "Fracture",
      description:
        "Nolan dashes to the farthest enemy within nearby 3 tiles, leaving a Rift and dealing (+220%/220%/600% Total Physical ATK) Physical DMG. After a short delay, the Rift activates and deals (+220%/220%/600% Total Physical ATK) Physical DMG, then Nolan moves to a nearby tile.",
      sdescription:
        "Dashes to the farthest enemy, leaving a Rift that explodes after a delay. Deals damage twice and relocates afterward.",
      icon: "/images/skills/nolan.png",
    },
    synergies: {
      faction: "Eruditio",
      roles: ["Swordsman"],
    },
  },
  {
    id: 1706,
    name: "Layla",
    cost: 2,
    image: "/images/hero/layla.png",
    mana: {
      initial: 25,
      max: 50,
    },
    skill: {
      name: "Void Projectile",
      description:
        "Layla fires an orb of Malefic Energy at the target dealing (+180%/200%/400% Total Physical ATK) Physical DMG to the target and stunning them for 0.5s/1s/1.5s. Passive: When the battle begins, increase the Physical ATK of herself and the allies to her right and left by 15%.",
      sdescription:
        "Fires a Malefic orb that damages and stuns the target. At battle start, boosts Physical ATK of nearby allies.",
      icon: "/images/skills/layla.png",
    },
    synergies: {
      faction: "Eruditio",
      roles: ["Marksman"],
    },
  },
  {
    id: 2006,
    name: "Natan",
    cost: 5,
    image: "/images/hero/natan.png",
    mana: {
      initial: 50,
      max: 75,
    },
    skill: {
      name: "Superposition",
      description:
        "Natan launchhes a projectile with Basic ATK, dealing (+90%/100%/120% Total Magic ATK) Magic DMG to enemies in its path. The projectiles will return after Natan casts the skill, increasing 10%/20%/220% all DMG dealt to enemies by him.",
      sdescription:
        "Fires a projectile that damages enemies and returns, increasing all damage Natan deals.",
      icon: "/images/skills/natan.png",
    },
    synergies: {
      faction: "Eruditio",
      roles: ["Stargazer"],
    },
  },
  {
    id: 1107,
    name: "Aldous",
    cost: 2,
    image: "/images/hero/aldous.png",
    mana: {
      initial: 25,
      max: 50,
    },
    skill: {
      name: "Contract: Transform",
      description:
        "Aldous unleashes his inner energy to enhance his next Basic ATK, dealing (+340%/350%/530% Total Physical ATK) Physical DMG to the target and gaining (+100%/130%/200% Total Physical ATK) Shiled.",
      sdescription:
        "Empowers his next attack to deal heavy damage and gain a shield.",
      icon: "/images/skills/aldous.png",
    },
    synergies: {
      faction: "Dawnbringer",
      roles: ["Bruiser"],
    },
  },
  {
    id: 1207,
    name: "Terizla",
    cost: 4,
    image: "/images/hero/terizla.png",
    mana: {
      initial: 75,
      max: 75,
    },
    skill: {
      name: "Penalty Zone",
      description:
        "Terizla leaps up and slams down forcefully, dealing (+240%/240%/690% Total Physical ATK) Physical DMG to adjacent enemies and knocking them Airborne for 0/6s, While gaining a Shield equal to 16%/18%/30% of his Max HP for 4s.",
      sdescription:
        "Leaps and slams the ground, damaging and knocking enemies airborne. Gains a shield based on Max HP.",
      icon: "/images/skills/terizla.png",
    },
    synergies: {
      faction: "Dawnbringer",
      roles: ["Defender"],
    },
  },
  {
    id: 1407,
    name: "Uranus",
    cost: 3,
    image: "/images/hero/uranus.png",
    mana: {
      initial: 50,
      max: 50,
    },
    skill: {
      name: "Ionic Edge",
      description:
        "Uranus releases two energy blades that orbit around himself, dealing (+250%/250%/340% Total Magic ATK) Magic DMG to enemies while gaining 60 Hybrid DEF for 4s.",
      sdescription:
        "Releases orbiting blades that deal magic damage to enemies and increases his Hybrid DEF.",
      icon: "/images/skills/uranus.png",
    },
    synergies: {
      faction: "Dawnbringer",
      roles: ["Dauntless"],
    },
  },
  {
    id: 1607,
    name: "Gusion",
    cost: 2,
    image: "/images/hero/gusion.png",
    mana: {
      initial: 25,
      max: 50,
    },
    skill: {
      name: "Shadowblade Slaughter",
      description:
        "Gusion throws daggers forward, each dealing (+50%/60%/80% Total Magic ATK) Magic DMG to the target hit. Then he recalls the daggers, dealing the same Magic DMG. Passive Dealing DMG reduces the target's Hybrid DEF by 6.",
      sdescription:
        "Throws daggers that deal damage twice—when thrown and when recalled. Reduces target’s Hybrid DEF on hit.",
      icon: "/images/skills/gusion.png",
    },
    synergies: {
      faction: "Dawnbringer",
      roles: ["Swordsman"],
    },
  },
  {
    id: 1807,
    name: "Vexana",
    cost: 4,
    image: "/images/hero/vexana.png",
    mana: {
      initial: 100,
      max: 100,
    },
    skill: {
      name: "Eternal Guard",
      description:
        "Vexana summons the Eternal Guard to ravage the battlefield, dealing (+315%/315%/820% Total MAgic ATK) Magic DMG to enemies within medium range and knocking them airborne for 0.6s. The Eternal Guard's Basic ATKs deal (+175%/175%/460% Total Magic ATK) Magic DMG.",
      sdescription:
        "Summons the Eternal Guard to strike nearby enemies, dealing magic damage and knocking them airborne. The Guard's attacks deal additional magic damage.",
      icon: "/images/skills/vexana.png",
    },
    synergies: {
      faction: "Dawnbringer",
      roles: ["Summoner"],
    },
  },
  {
    id: 1907,
    name: "Vale",
    cost: 1,
    image: "/images/hero/vale.png",
    mana: {
      initial: 25,
      max: 50,
    },
    skill: {
      name: "Wind Blade",
      description:
        "Vale unleashes 2 wind blades towards the left and right of a target area, dealing (+300%/300%/430% Total Magic ATK) Magic DMG to enemies hit. At the start of battle, Vale grats 10 Mana to himself and his left and right allies.",
      sdescription:
        "Unleashes wind blades to both sides, dealing magic damage. Grants Mana to nearby allies at battle start.",
      icon: "/images/skills/vale.png",
    },
    synergies: {
      faction: "Dawnbringer",
      roles: ["Mage"],
    },
  },
  {
    id: 1508,
    name: "Alpha",
    cost: 5,
    image: "/images/hero/alpha.png",
    mana: {
      initial: 25,
      max: 75,
    },
    skill: {
      name: "Force Swing",
      description:
        "Alpha unleashes 2 sweeping slashes in a fan-shaped area in the front dealing (+120%/130%/530% Total Physical ATK) Physical DMG to enemies. From the third cast onward additionally releases 3 linear energy waves forward at different angles, each dealing (+85%/90%/370% Total Physical ATK) Physical DMG.",
      sdescription:
        "Unleashes wind blades to both sides, dealing magic damage. Grants Mana to nearby allies at battle start.",
      icon: "/images/skills/alpha.png",
    },
    synergies: {
      faction: "Shadeweaver",
      roles: ["Weapon Master"],
    },
  },
  {
    id: 1608,
    name: "Helcurt",
    cost: 1,
    image: "/images/hero/helcurt.png",
    mana: {
      initial: 50,
      max: 75,
    },
    skill: {
      name: "Deadly Stinger",
      description:
        "Helcurt blinks to the enemy Hero with highest damage output within 3 tiles (prioritizes ranged Heroes) Upon first skill cast, and then fires 5 Deadly Stinger(s) forward, each dealing (+110%/110%/150% Total Physical ATK) Physical DMG to enemies. Passive: Upon death, Helcurt spreads a curse, increasing damage taken by adjacent enemies by 15%/20%/30% for the next 8s.",
      sdescription:
        "Blinks to the highest damage enemy and fires 5 stingers forward, dealing physical damage. On death, curses nearby enemies to take increased damage.",
      icon: "/images/skills/helcurt.png",
    },
    synergies: {
      faction: "Shadeweaver",
      roles: ["Swordsman"],
    },
  },
  {
    id: 1708,
    name: "Clint",
    cost: 3,
    image: "/images/hero/clint.png",
    mana: {
      initial: 25,
      max: 25,
    },
    skill: {
      name: "Grenade  Bobardment",
      description:
        "Clint launches a grenade in the target direction that explodes on the first enemy hit, dealing (+300%/310%/420% Total Physical ATK) Physical DMG.",
      sdescription:
        "Launches a grenade that explodes on impact, dealing physical damage to the first enemy hit.",
      icon: "/images/skills/clint.png",
    },
    synergies: {
      faction: "Shadeweaver",
      roles: ["Marksman"],
    },
  },
  {
    id: 2008,
    name: "Luo Yi",
    cost: 2,
    image: "/images/hero/luoyi.png",
    mana: {
      initial: 75,
      max: 100,
    },
    skill: {
      name: "Dispersion",
      description:
        "Luo Yi releases the skill in the target direction, dealing (+570%/570%/670% Total Magic ATK) Magic DMG to the first enemy hit and those behind them in a fan-shaped area.",
      sdescription:
        "Releases energy in a target direction, dealing magic damage to the first enemy hit and others in a fan-shaped area behind.",
      icon: "/images/skills/luoyi.png",
    },
    synergies: {
      faction: "Shadeweaver",
      roles: ["Stargazer"],
    },
  },
  {
    id: 1109,
    name: "Guinevere",
    cost: 4,
    image: "/images/hero/guinevere.png",
    mana: {
      initial: 50,
      max: 50,
    },
    skill: {
      name: "Super Magic",
      description:
        "Guinevere launches an enhanced Basic ATK, dealing (+420%/420%/1100% Total Magic ATK) Magic DMG to the target and recovering (+110%/130%/200% Total Magic ATK) HP.",
      sdescription:
        "Fires an enhanced attack that deals magic damage and restores HP.",
      icon: "/images/skills/guinevere.png",
    },
    synergies: {
      faction: "Faeborn",
      roles: ["Bruiser"],
    },
  },
  {
    id: 131409,
    name: "Esmeralda",
    cost: 3,
    image: "/images/hero/esmeralda.png",
    mana: {
      initial: 50,
      max: 75,
    },
    skill: {
      name: "Stardust Dance",
      description:
        "Esmeralda deals (+170%/170%/235% Total Physical ATK) Physical DMG and (+170%/170%/235% Total Magic ATK) Magic DMG to surrounding enemies. Passive: When dealing DMG, Esmeralda grants enemy Heroes a Shield equal to 100% of DMG dealt and gradually steals their Shield. Passive: Esmeralda's Basic ATK deals (+50% Total Physical ATK) Physical DMG and (+50% Total Magic ATK) Magic DMG.",
      sdescription:
        "Deals physical and magic damage to nearby enemies. Grants shields to enemies hit and gradually steals them. Her Basic Attacks also deal mixed damage.",
      icon: "/images/skills/esmeralda.png",
    },
    synergies: {
      faction: "Faeborn",
      roles: ["Support", "Dauntless"],
    },
  },
  {
    id: 1909,
    name: "Angela",
    cost: 2,
    image: "/images/hero/angela.png",
    mana: {
      initial: 50,
      max: 75,
    },
    skill: {
      name: "Puppet-on-a-String",
      description:
        "Angela launches a string that connects to the target, and gradually reduces their Hybrid DEF (up to 36/60/84) during the connection. If the target is still connected to the string after 0.8s, they will take (+900%/900%/1000% Total Magic ATK) Magic DMG.",
      sdescription:
        "Connects to a target, reducing their Hybrid DEF over time. If the link holds, deals heavy magic damage.",
      icon: "/images/skills/angela.png",
    },
    synergies: {
      faction: "Faeborn",
      roles: ["Mage"],
    },
  },
  {
    id: 1110,
    name: "Yu Zhong",
    cost: 5,
    image: "/images/hero/yuzhong.png",
    mana: {
      initial: 25,
      max: 50,
    },
    skill: {
      name: "Black Dragon Form",
      description:
        "Yu Zhong transforms into his Black Dragon Form and rampages through enemy Heroes up to 5s, gaining 50% DMG Reduction and dealing (+220%/240%/760% Total Physical ATK) Physical DMG to enemy Heroes. Gains 25%/40%/60% ATK Speed until the end of battle, and subsequent skills slash enemies within 2 tiles, dealing (+150%/165%/600% Total Physical ATK) Physical DMG. (Both rampage and slash DMG count as Basic ATK DMG.)",
      sdescription:
        "Transforms into Black Dragon Form, rampaging through enemies with reduced damage taken. Gains Attack Speed and enhanced slashes that deal bonus damage.",
      icon: "/images/skills/yuzhong.png",
    },
    synergies: {
      faction: "Exorcist",
      roles: ["Bruiser"],
    },
  },
  {
    id: 1610,
    name: "Hayabusa",
    cost: 4,
    image: "/images/hero/hayabusa.png",
    mana: {
      initial: 75,
      max: 100,
    },
    skill: {
      name: "Ougi: Shadow Kill",
      description:
        "Hayabusa turns into a shadow and strikes enemies in range 3/5/7 time(s), dealing a total of (945%/965%2660% Total Physical ATK) Physical DMG.",
      sdescription:
        "Turns into a shadow and strikes nearby enemies multiple times, dealing massive physical damage.",
      icon: "/images/skills/hayabusa.png",
    },
    synergies: {
      faction: "Exorcist",
      roles: ["Swordsman"],
    },
  },
  {
    id: 1710,
    name: "Granger",
    cost: 2,
    image: "/images/hero/granger.png",
    mana: {
      initial: 25,
      max: 50,
    },
    skill: {
      name: "Rhapsody",
      description:
        "Granger rapidly fires 3 shots at the target, each dealing (+180%/180%/240% Total Physical ATK) Physical DMG.",
      sdescription:
        "Fires 3 rapid shots at the target, each dealing physical damage.",
      icon: "/images/skills/granger.png",
    },
    synergies: {
      faction: "Exorcist",
      roles: ["Marksman"],
    },
  },
  {
    id: 1910,
    name: "Kagura",
    cost: 3,
    image: "/images/hero/kagura.png",
    mana: {
      initial: 50,
      max: 75,
    },
    skill: {
      name: "Seimei Umbrella Open",
      description:
        "Kagura unleashes 3 Seimei Umbrella(s), dealing (+550%/550%/650% Total Magic ATK) Magic DMG to enemies in their path.",
      sdescription:
        "Unleashes 3 umbrellas that travel forward, dealing magic damage to enemies in their path.",
      icon: "/images/skills/kagura.png",
    },
    synergies: {
      faction: "Exorcist",
      roles: ["Mage"],
    },
  },
];
