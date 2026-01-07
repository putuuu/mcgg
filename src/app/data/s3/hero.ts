export interface Hero {
  id: number;
  name: string;
  cost: number;
  image: string;
  skill: {
    name: string;
    description: string;
    sdescription: string;
    icon: string;
  };
  synergies: {
    faction: string[];
    roles: string[];
  };
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: "Hylos",
    cost: 2,
    image: "/images/hero/small/hylos.webp",
    skill: {
      name: "Law and Order",
      description:
        "Hylos deals Magic DMG to the target and gain a Shield. \n Passive: When battle starts, grants a Shield to himself and allied Heroes to his left and right.",
      sdescription: "",
      icon: "/images/skills/small/hylos.webp",
    },
    synergies: {
      faction: "Doomsworn",
      roles: ["Defender"],
    },
  },
  {
    id: 2,
    name: "Phoveus",
    cost: 4,
    image: "/images/hero/small/phoveus.webp",
    skill: {
      name: "Demonic Impact",
      description:
        "Phoveus slams his monolith into the ground, dealing Physical DMG to enemies in the area and gaining a Shield, while leaving behind an Astaros Eye that implodes after a short dedlay, dealing Magic DMG to the enemies.",
      sdescription: "",
      icon: "/images/skills/small/phoveus.webp",
    },
    synergies: {
      faction: "Doomsworn",
      roles: ["Dauntless"],
    },
  },
  {
    id: 3,
    name: "Argus",
    cost: 4,
    image: "/images/hero/small/argus.webp",
    skill: {
      name: "Warmonger",
      description:
        "Enhance Argus' next Basic ATK to launch a Demonic Slash, dealing Physical DMG twice. \n Passive: When taking fatal DMG for the first time, Argus enters the Fallen Angel state and gains 40% ATK Speed for 3s, becoming immune to death for 1s.",
      sdescription: "",
      icon: "/images/skills/small/argus.webp",
    },
    synergies: {
      faction: "Doomsworn",
      roles: ["Weapon Master"],
    },
  },
  {
    id: 4,
    name: "Irithel",
    cost: 4,
    image: "/images/hero/small/irithel.webp",
    skill: {
      name: "Strafe",
      description:
        "Irithel launches flaming arrows at the target, dealing Physical DMG, enhancing the next 3 Basic ATK(s). On hit, the enhanced Basic ATK deals Physical DMG. \n Passive Each Basic ATK deals 3 hit(s) of Physical DMG.",
      sdescription: "",
      icon: "/images/skills/small/irithel.webp",
    },
    synergies: {
      faction: "Doomsworn",
      roles: ["Marksman"],
    },
  },
  {
    id: 5,
    name: "Cyclops",
    cost: 1,
    image: "/images/hero/small/cyclops.webp",
    skill: {
      name: "Planets Attack",
      description:
        "Cyclops uses the power of stars to generate 5 starlit sphere(s) spinning around him. The sphere will attack nearby enemy Heroes, each dealing Magic DMG. \n Passive: Grants 10% Hybrid ATK to two allied Heroes within 1 tile.",
      sdescription: "",
      icon: "/images/skills/small/cyclops.webp",
    },
    synergies: {
      faction: "Doomsworn",
      roles: ["Stargazer"],
    },
  },
  {
    id: 6,
    name: "Hanzo",
    cost: 3,
    image: "/images/hero/small/hanzo.webp",
    skill: {
      name: "Ninjutsu: Demon Feast",
      description:
        "Hanzo deals Physical DMG to the target, restore lost HP, and increases Skill DMG.",
      sdescription: "",
      icon: "/images/skills/small/hanzo.webp",
    },
    synergies: {
      faction: "Doomsworn",
      roles: ["Scavenger"],
    },
  },
  {
    id: 7,
    name: "Gloo",
    cost: 3,
    image: "/images/hero/small/gloo.webp",
    skill: {
      name: "Slam, Slam",
      description:
        "Gloo reaches out, and next ATK slams the target, dealing Magic DMG and stunning them. \n Passive: When HP drops below 50%, a Goo drops and restores 20% Gloo's Max HP",
      sdescription: "",
      icon: "/images/skills/small/gloo.webp",
    },
    synergies: {
      faction: "Shadowcell",
      roles: ["Bruiser"],
    },
  },
  {
    id: 8,
    name: "Baxia",
    cost: 4,
    image: "/images/hero/small/baxia.webp",
    skill: {
      name: "Tortoise's Puissance",
      description:
        "Baxia holds his shield in front, reducing DMG taken. Afterward, he curls into his shield and leaps down to enemies, dealing Magic DMG to the target and surrounding enemies.",
      sdescription: "",
      icon: "/images/skills/small/baxia.webp",
    },
    synergies: {
      faction: "Shadowcell",
      roles: ["Defender"],
    },
  },
  {
    id: 9,
    name: "Alucard",
    cost: 1,
    image: "/images/hero/small/alucard.webp",
    skill: {
      name: "Fission Wave",
      description:
        "Alucard deals Physical DMG to the target and absorbs Hybrid DEF.",
      sdescription: "",
      icon: "/images/skills/small/alucard.webp",
    },
    synergies: {
      faction: "Shadowcell",
      roles: ["Weapon Master"],
    },
  },
  {
    id: 10,
    name: "Yve",
    cost: 4,
    image: "/images/hero/small/yve.webp",
    skill: {
      name: "Void Blast",
      description:
        "Yve channels Galactic Energy, dealing Magic DMG to the target, then detonates this energy, dealing Magic DMG to enemies on adjacent tiles.",
      sdescription: "",
      icon: "/images/skills/small/yve.webp",
    },
    synergies: {
      faction: "Shadowcell",
      roles: ["Stargazer"],
    },
  },
  {
    id: 11,
    name: "Natalia",
    cost: 5,
    image: "/images/hero/small/natalia.webp",
    skill: {
      name: "The Hunt",
      description:
        "Natalia launches a back-and-forth assault on the farthest enemy within 4 tiles (prioritizing ranged units), daling Physical DMG 2 times. \n Passive: Natalia prioritizes targeting back-row units. When there are no enemies within 1 tile of Natalia, she gains 100% Movement Speed and her next Basic ATK dashes to the target.",
      sdescription: "",
      icon: "/images/skills/small/natalia.webp",
    },
    synergies: {
      faction: "Shadowcell",
      roles: ["Swordsman"],
    },
  },
  {
    id: 12,
    name: "Eudora",
    cost: 2,
    image: "/images/hero/small/eudora.webp",
    skill: {
      name: "Thunderstuck",
      description:
        "Eudora summons a great storm of lightning, dealing Magic DMG to the target.",
      sdescription: "",
      icon: "/images/skills/small/eudora.webp",
    },
    synergies: {
      faction: "Shadowcell",
      roles: ["Mage"],
    },
  },
  {
    id: 13,
    name: "Belerick",
    cost: 3,
    image: "/images/hero/small/belerick.webp",
    skill: {
      name: "Nature's Strike",
      description:
        "Belerick empowers his next Basic ATK to deal Magic DMG to the target and recovers his lost HP, then gain ATK Speed.",
      sdescription: "",
      icon: "/images/skills/small/belerick.webp",
    },
    synergies: {
      faction: "Starwing",
      roles: ["Bruiser"],
    },
  },
  {
    id: 14,
    name: "Atlas",
    cost: 1,
    image: "/images/hero/small/atlas.webp",
    skill: {
      name: "Annihilate",
      description:
        "Passive: Atlas generates Frigid Breath arround him, Enemeies in the area will have their ATK Speed reduced.",
      sdescription: "",
      icon: "/images/skills/small/atlas.webp",
    },
    synergies: {
      faction: "Starwing",
      roles: ["Defender"],
    },
  },
  {
    id: 15,
    name: "Mathilda",
    cost: 2,
    image: "/images/hero/small/mathilda.webp",
    skill: {
      name: "Guiding Wind",
      description:
        "Mathilda provides extra ATK Speed to 2 random allied Heroes within range (including herself), and releases wisp(s) to deal Magic DMG.",
      sdescription: "",
      icon: "/images/skills/small/mathilda.webp",
    },
    synergies: {
      faction: "Starwing",
      roles: ["Stargazer"],
    },
  },
  {
    id: 16,
    name: "Saber",
    cost: 4,
    image: "/images/hero/small/saber.webp",
    skill: {
      name: "Triple Sweep",
      description:
        "Saber charges toward an enemy, knocking them airborne and dealing Physical DMG, then slashes twice, each dealing Physical DMG. The first cast targets the enemy with the highest DMG output. Saber gain DMG Reduction during skill cast and restores Mana when killing the enemy Hero.",
      sdescription: "",
      icon: "/images/skills/small/saber.webp",
    },
    synergies: {
      faction: "Starwing",
      roles: ["Swordsman"],
    },
  },
  {
    id: 17,
    name: "Nana",
    cost: 4,
    image: "/images/hero/small/nana.webp",
    skill: {
      name: "Molina Blitz",
      description:
        "Nana summons Molina to strike the target area 3 times, each time dealing Magic DMG to enemies within.",
      sdescription: "",
      icon: "/images/skills/small/nana.webp",
    },
    synergies: {
      faction: "Starwing",
      roles: ["Mage"],
    },
  },
  {
    id: 18,
    name: "Harley",
    cost: 5,
    image: "/images/hero/small/harley.webp",
    skill: {
      name: "Poker Trick",
      description:
        "Harley moves to the farthest enemy and quickly throws wave(s) of cards, then returns. Each wave releases 3 card(s), with each card dealing Magic DMG to enemies.",
      sdescription: "",
      icon: "/images/skills/small/harley.webp",
    },
    synergies: {
      faction: "Starwing",
      roles: ["Phasewarper"],
    },
  },
  {
    id: 19,
    name: "Badang",
    cost: 1,
    image: "/images/hero/small/badang.webp",
    skill: {
      name: "Chivalry Fist",
      description:
        "Badang's every 4 Basic ATK(s) will enhance the next Basic ATK to deal Physical DMG and gain a Shield. \n Passive: When battle starts, Badang grants 6 Hybrid DEF to himself and allied Heroes to his left and right.",
      sdescription: "",
      icon: "/images/skills/small/badang.webp",
    },
    synergies: {
      faction: "Emberlord",
      roles: ["Bruiser"],
    },
  },
  {
    id: 20,
    name: "Balmond",
    cost: 2,
    image: "/images/hero/small/balmond.webp",
    skill: {
      name: "Cyclone Sweep",
      description:
        "Balmond launches strike(s), each dealing Physical DMG to adjacent enemies.",
      sdescription: "",
      icon: "/images/skills/small/balmond.webp",
    },
    synergies: {
      faction: "Emberlord",
      roles: ["Dauntless"],
    },
  },
  {
    id: 21,
    name: "Thamuz",
    cost: 3,
    image: "/images/hero/small/thamuz.webp",
    skill: {
      name: "Molten Scythes",
      description:
        "Thamuz throws War Scythe toward the current target direction and racalls it, dealing Physical DMG to enemies hit in the 3 front tile(s) and stunning them.",
      sdescription: "",
      icon: "/images/skills/small/thamuz.webp",
    },
    synergies: {
      faction: "Emberlord",
      roles: ["Weapon Master"],
    },
  },
  {
    id: 22,
    name: "Moskov",
    cost: 5,
    image: "/images/hero/small/moskov.webp",
    skill: {
      name: "Spear of Destruction",
      description:
        "Moskov throws out Spear of Destruction toward the location with the most enemies. The spear deals Physical DMG to enemies in its path, and his own ATK Speed is increased.",
      sdescription: "",
      icon: "/images/skills/small/moskov.webp",
    },
    synergies: {
      faction: "Emberlord",
      roles: ["Marksman"],
    },
  },
  {
    id: 23,
    name: "Khaleed",
    cost: 2,
    image: "/images/hero/small/khaleed.webp",
    skill: {
      name: "Sand Walk",
      description:
        "Khaleed rises with the sands and enhances the next Basic ATK to deal Physical DMG to the target.",
      sdescription: "",
      icon: "/images/skills/small/khaleed.webp",
    },
    synergies: {
      faction: "Emberlord",
      roles: ["Phasewarper"],
    },
  },
  {
    id: 24,
    name: "Martis",
    cost: 4,
    image: "/images/hero/small/martis.webp",
    skill: {
      name: "Decimation",
      description:
        "Martis deals Physical DMG to the target. Restores all Mana if it kills a Hero.",
      sdescription: "",
      icon: "/images/skills/small/martis.webp",
    },
    synergies: {
      faction: "Emberlord",
      roles: ["Scavenger"],
    },
  },
  {
    id: 25,
    name: "Kalea",
    cost: 4,
    image: "/images/hero/small/kalea.webp",
    skill: {
      name: "Rolling Wave",
      description:
        "Kalea can jumps and slams down at the position with the most enemies, dealing damange and also enhances the next 3 Basic Attack to deal damage and restore (90% Total Physical Attack) HP",
      sdescription: "",
      icon: "/images/skills/small/kalea.webp",
    },
    synergies: {
      faction: "Luminexus",
      roles: ["Bruiser"],
    },
  },
  {
    id: 26,
    name: "Lolita",
    cost: 1,
    image: "/images/hero/small/lolita.webp",
    skill: {
      name: "Noumenon Energy Core",
      description:
        "Lolita grants herself and two allied Heroes a Shield that last 4s",
      sdescription: "",
      icon: "/images/skills/small/lolita.webp",
    },
    synergies: {
      faction: "Luminexus",
      roles: ["Dauntless"],
    },
  },
  {
    id: 27,
    name: "Cici",
    cost: 2,
    image: "/images/hero/small/cici.webp",
    skill: {
      name: "Yo-Yo Blitz",
      description:
        "Cici attacks the 2 nearest enemies 4 time(s) with Yo-Yo, dealing physiocal damage with each hit and reducing their Healing Received by 30% for 4s",
      sdescription: "",
      icon: "/images/skills/small/cici.webp",
    },
    synergies: {
      faction: "Luminexus",
      roles: ["Weapon Master"],
    },
  },
  {
    id: 28,
    name: "Novaria",
    cost: 5,
    image: "/images/hero/small/novaria.webp",
    skill: {
      name: "Star Shatter",
      description:
        "Novaria summons an Astral Sphere at the current target and dealing damage. a Passive: When battle starts, Novaria unleashes an Astral Echo that deals Magic Damage to enemies hit.",
      sdescription: "",
      icon: "/images/skills/small/novaria.webp",
    },
    synergies: {
      faction: "Luminexus",
      roles: ["Stargazer"],
    },
  },
  {
    id: 29,
    name: "Zhuxin",
    cost: 3,
    image: "/images/hero/small/zhuxin.webp",
    skill: {
      name: "Lantern Flare",
      description:
        "Zhuxin summons spirit Lantern to deal Magic Damage to all enemies in range eery 0.5s for 2.5s.",
      sdescription: "",
      icon: "/images/skills/small/zhuxin.webp",
    },
    synergies: {
      faction: "Luminexus",
      roles: ["Mage"],
    },
  },
  {
    id: 30,
    name: "Aamon",
    cost: 2,
    image: "/images/hero/small/aamon.webp",
    skill: {
      name: "Soul Shards",
      description:
        "Aamon enhances his next Attack with shars and dealing Magic Damage to enemies.",
      sdescription: "",
      icon: "/images/skills/small/aamon.webp",
    },
    synergies: {
      faction: "Luminexus",
      roles: ["Scavenger"],
    },
  },
  {
    id: 31,
    name: "Ruby",
    cost: 2,
    image: "/images/hero/small/ruby.webp",
    skill: {
      name: "Don't Run, Wolf King!",
      description:
        "Ruby swings her giant scythe in 2 spinning strikes, each dealing Physical Damage and restoring 5% Max HP.",
      sdescription: "",
      icon: "/images/skills/small/ruby.webp",
    },
    synergies: {
      faction: "Aspirants",
      roles: ["Defender", "Dauntless"],
    },
  },
  {
    id: 32,
    name: "Layla",
    cost: 1,
    image: "/images/hero/small/layla.webp",
    skill: {
      name: "Malefic Gun",
      description:
        "Passive: When battle starts, grants 10% Attack speed to self and allied heroes within 2 tiles to the left and right. Additionally, increase Attack Range to 4. Basic Attack Damage increases with distance from enemies ranging from 100% to 130%",
      sdescription: "",
      icon: "/images/skills/small/layla.webp",
    },
    synergies: {
      faction: "Aspirants",
      roles: ["Marksman"],
    },
  },
  {
    id: 33,
    name: "Chang'e",
    cost: 4,
    image: "/images/hero/small/change.webp",
    skill: {
      name: "Meteor Shower",
      description:
        "Chang'e gathers energy and controls the Crescent Moon to shoot out 30 Meteor(s), each dealing Magic Damage.",
      sdescription: "",
      icon: "/images/skills/small/change.webp",
    },
    synergies: {
      faction: "Aspirants",
      roles: ["Stargazer"],
    },
  },
  {
    id: 34,
    name: "Fanny",
    cost: 3,
    image: "/images/hero/small/fanny.webp",
    skill: {
      name: "Cut Throat",
      description:
        "Fanny deals (+330% Total Physical ATK) physical Damage to the current target and (+150% Total Physical ATK) Physical Damage to nearby enemies. Subsequent cast only damage the current target. Upon first cast, she dashes to the furthest enemy within 3 tiles,",
      sdescription: "",
      icon: "/images/skills/small/fanny.webp",
    },
    synergies: {
      faction: "Aspirants",
      roles: ["Swordsman"],
    },
  },
  {
    id: 35,
    name: "Angela",
    cost: 5,
    image: "/images/hero/small/angela.webp",
    skill: {
      name: "Heartguard",
      description:
        "Angela protects the allied Hero with the lowest HP percentage, granting them Shield. After 1.5s, she attaches to them and emits 5 light waes toward the nearest enemy, dealing Magic Damage. (Angela cannot attach to another Angela.)",
      sdescription: "",
      icon: "/images/skills/small/angela.webp",
    },
    synergies: {
      faction: "Aspirants",
      roles: ["Mage"],
    },
  },
  {
    id: 36,
    name: "Lesley",
    cost: 3,
    image: "/images/hero/small/lesley.webp",
    skill: {
      name: "Ultimate Snipe",
      description:
        "Leslet fires 4 bullet(s) at the furthest enemy Hero, each dealing Physical Damage. (Bullets can be blocked by other enemy heroes.)",
      sdescription: "",
      icon: "/images/skills/small/lesley.webp",
    },
    synergies: {
      faction: "Aspirants",
      roles: ["Phasewarper"],
    },
  },
  {
    id: 37,
    name: "Aldous",
    cost: 2,
    image: "/images/hero/small/aldous.webp",
    skill: {
      name: "Contract: Transform",
      description:
        "Aldous unleashes his inner energy to enhance his next Basic Attack, dealing Physical Damage to the target and gaining shield.",
      sdescription: "",
      icon: "/images/skills/small/aldous.webp",
    },
    synergies: {
      faction: "Dawnbringer",
      roles: ["Bruiser"],
    },
  },
  {
    id: 38,
    name: "Minsitthar",
    cost: 5,
    image: "/images/hero/small/minsitthar.webp",
    skill: {
      name: "King's Calling",
      description:
        "Minshitthar deals Physical Damage to nearby enemies, stuns them for 0.6s, and restores 10% HP for himself. He then summons guards beside the current enemy and the farthest enemy. The guards inherit of his Attack and last for 3s. a Passive: Any enemy attacked by Minsitthar will transform into a guard upon death.",
      sdescription: "",
      icon: "/images/skills/small/minsitthar.webp",
    },
    synergies: {
      faction: "Dawnbringer",
      roles: ["Defender"],
    },
  },
  {
    id: 39,
    name: "Uranus",
    cost: 3,
    image: "/images/hero/small/uranus.webp",
    skill: {
      name: "Ionic Edge",
      description:
        "Uranus releases two energy blaeds that orbit around himself, dealing Magic Damage to enemies while gaining 60 Hybrid Def for 4s.",
      sdescription: "",
      icon: "/images/skills/small/uranus.webp",
    },
    synergies: {
      faction: "Dawnbringer",
      roles: ["Dauntless"],
    },
  },
  {
    id: 40,
    name: "Gusion",
    cost: 2,
    image: "/images/hero/small/gusion.webp",
    skill: {
      name: "Shadowblade Slaughter",
      description:
        "Gusion throws dagger forward, each dealing Magic Damage to the target hit. Then he reaclls the daggers, dealing the same Magic Damage. a Passive: Dealing Damage reduces the target's Hybrid Deff by 6.",
      sdescription: "",
      icon: "/images/skills/small/gusion.webp",
    },
    synergies: {
      faction: "Dawnbringer",
      roles: ["Swordsman"],
    },
  },
  {
    id: 41,
    name: "Vale",
    cost: 1,
    image: "/images/hero/small/vale.webp",
    skill: {
      name: "Wind Blade",
      description:
        "Vale unleashes 2 wind blades towards the left and right of a target area, dealing Magic Damage to enemies hit. At the start of battle, Vale grants 10 Mana to himself and his left and right allies.",
      sdescription: "",
      icon: "/images/skills/small/vale.webp",
    },
    synergies: {
      faction: "Dawnbringer",
      roles: ["Mage"],
    },
  },
  {
    id: 42,
    name: "Valentina",
    cost: 4,
    image: "/images/hero/small/valentina.webp",
    skill: {
      name: "Arcane Shade",
      description:
        "Valentina fires 6 Shadow Bolts at nearby enemies that deal Magic Damage Each.",
      sdescription: "",
      icon: "/images/skills/small/valentina.webp",
    },
    synergies: {
      faction: "Dawnbringer",
      roles: ["Phasewarper"],
    },
  },

  {
    id: 43,
    name: "Tigreal",
    cost: 3,
    image: "/images/hero/small/tigreal.webp",
    skill: {
      name: "Implosion",
      description:
        "Tigreal unleashes the power of his hammer, gaining a Shield and dealing Physical DMG to enemies within 8 tiles, stunning them.",
      sdescription: "",
      icon: "/images/skills/small/tigreal.webp",
    },
    synergies: {
      faction: "Shadeweaver",
      roles: ["Defender"],
    },
  },
  {
    id: 44,
    name: "Alpha",
    cost: 5,
    image: "/images/hero/small/alpha.webp",
    skill: {
      name: "Implosion",
      description:
        "Alpha unleashes 2 sweeping slashes in a fan-shaped area in the front, dealing Physical DMG to enemeies. From the third cast onward, additionally releases 3 linear energy waves forward at different angles, each dealing Physical DMG.",
      sdescription: "",
      icon: "/images/skills/small/alpha.webp",
    },
    synergies: {
      faction: "Shadeweaver",
      roles: ["Weapon Master"],
    },
  },
  {
    id: 45,
    name: "Clint",
    cost: 3,
    image: "/images/hero/small/clint.webp",
    skill: {
      name: "Grenade Bombardment",
      description:
        "Clint launches a grenade in the target direction that explodes on the first enemy hit, dealing Physical DMG.",
      sdescription: "",
      icon: "/images/skills/small/clint.webp",
    },
    synergies: {
      faction: "Shadeweaver",
      roles: ["Marksman"],
    },
  },
  {
    id: 46,
    name: "Helcurt",
    cost: 1,
    image: "/images/hero/small/helcurt.webp",
    skill: {
      name: "Deadly Stinger",
      description:
        "On first cast, Helcurt blinks to the enemy Hero with the highest DMG output within 3 tiles (prioritizing ranged Heroes) and fires 5 Deadly Stinger(s) forward, each dealing Physical DMG.",
      sdescription: "",
      icon: "/images/skills/small/helcurt.webp",
    },
    synergies: {
      faction: "Shadeweaver",
      roles: ["Swordsman"],
    },
  },
  {
    id: 47,
    name: "X.Borg",
    cost: 5,
    image: "/images/hero/small/xborg.webp",
    skill: {
      name: "Last Insanity",
      description:
        "X.Borg charges toward the position with the most enemies, gaining a Shield of 10% Max HP. Then he sprays flames at nearby enemies, dealing 7 hits of Physical DMG. Finally, he triggers an explosion, dealing Physical DMG to nearby enemies.",
      sdescription: "",
      icon: "/images/skills/small/xborg.webp",
    },
    synergies: {
      faction: "Metro Zero",
      roles: ["Dauntless"],
    },
  },
  {
    id: 48,
    name: "Roger",
    cost: 2,
    image: "/images/hero/small/roger.webp",
    skill: {
      name: "Wolf Transformation",
      description:
        "Human Form: Roger dashes forward and transforms into a wolf, dealing Physical DMG and gaining a Shield. \nWolf Form: Roger howls, increasing his ATK Speed by 60% for 5s.",
      sdescription: "",
      icon: "/images/skills/small/roger.webp",
    },
    synergies: {
      faction: "Metro Zero",
      roles: ["Weapon Master"],
    },
  },
  {
    id: 49,
    name: "Ixia",
    cost: 3,
    image: "/images/hero/small/ixia.webp",
    skill: {
      name: "Star Helix",
      description:
        "Ixia releases Starlium in front of her, dealing Physical DMG and stunning targets.",
      sdescription: "",
      icon: "/images/skills/small/ixia.webp",
    },
    synergies: {
      faction: "Metro Zero",
      roles: ["Stargazer", "Marksman"],
    },
  },
  {
    id: 50,
    name: "Yu Zhong",
    cost: 5,
    image: "/images/hero/small/yuzhong.webp",
    skill: {
      name: "Black Dragon Form",
      description:
        "Yu Zhong transforms into his Black Dragon Form and rampages through enemy Heroes for up to 5s, gaining 50% Damage Reduction and dealing Physical Damage to enemy heroes touched. Then leaps up and slams down at the area with the most enemies, dealing Physical Damage in two hits to adjacent enemies and gains 25% Attack Speed until the end of battle. Subsequent skills slash enemies within 2 tiles, dealing Physical Damage. (Rampage, slam, and slash Damage all count as Basic Attack Damage.)",
      sdescription: "",
      icon: "/images/skills/small/yuzhong.webp",
    },
    synergies: {
      faction: "Exorcist",
      roles: ["Bruiser"],
    },
  },
  {
    id: 51,
    name: "Granger",
    cost: 2,
    image: "/images/hero/small/granger.webp",
    skill: {
      name: "Rhapsody",
      description:
        "Granger rapidly fires 3 shots at the target, each dealing Physical Damage.",
      sdescription: "",
      icon: "/images/skills/small/granger.webp",
    },
    synergies: {
      faction: "Exorcist",
      roles: ["Marksman"],
    },
  },
  {
    id: 52,
    name: "Hayabusa",
    cost: 4,
    image: "/images/hero/small/hayabusa.webp",
    skill: {
      name: "Ougi: Shadow Kill",
      description:
        "Hayabusa turns into a shadow and strikes enemies in range 3 time(s), dealing a total of (+945% Total Physical Attack) Physical Damage.",
      sdescription: "",
      icon: "/images/skills/small/hayabusa.webp",
    },
    synergies: {
      faction: "Exorcist",
      roles: ["Swordsman"],
    },
  },
  {
    id: 53,
    name: "Kagura",
    cost: 3,
    image: "/images/hero/small/kagura.webp",
    skill: {
      name: "Seimei Umbrella Open",
      description:
        "Kagura unleshes 3 Seimei Umbrella(s), dealing Magic Damage to Enemies in their path.",
      sdescription: "",
      icon: "/images/skills/small/kagura.webp",
    },
    synergies: {
      faction: "Exorcist",
      roles: ["Mage"],
    },
  },
];
