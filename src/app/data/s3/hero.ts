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
    faction: string;
    roles: string[];
  };
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: "Hylos",
    cost: 2,
    image: "/images/hero/hylos.png",
    skill: {
      name: "Law and Order",
      description:
        "Hylos deals Magic DMG to the target and gain a Shield. \n Passive: When battle starts, grants a Shield to himself and allied Heroes to his left and right.",
      sdescription: "",
      icon: "/images/skills/hylos.png",
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
    image: "/images/hero/phoveus.png",
    skill: {
      name: "Demonic Impact",
      description:
        "Phoveus slams his monolith into the ground, dealing Physical DMG to enemies in the area and gaining a Shield, while leaving behind an Astaros Eye that implodes after a short dedlay, dealing Magic DMG to the enemies.",
      sdescription: "",
      icon: "/images/skills/phoveus.png",
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
    image: "/images/hero/argus.png",
    skill: {
      name: "Warmonger",
      description:
        "Enhance Argus' next Basic ATK to launch a Demonic Slash, dealing Physical DMG twice. \n Passive: When taking fatal DMG for the first time, Argus enters the Fallen Angel state and gains 40% ATK Speed for 3s, becoming immune to death for 1s.",
      sdescription: "",
      icon: "/images/skills/argus.png",
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
    image: "/images/hero/irithel.png",
    skill: {
      name: "Strafe",
      description:
        "Irithel launches flaming arrows at the target, dealing Physical DMG, enhancing the next 3 Basic ATK(s). On hit, the enhanced Basic ATK deals Physical DMG. \n Passive Each Basic ATK deals 3 hit(s) of Physical DMG.",
      sdescription: "",
      icon: "/images/skills/irithel.png",
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
    image: "/images/hero/cyclops.png",
    skill: {
      name: "Planets Attack",
      description:
        "Cyclops uses the power of stars to generate 5 starlit sphere(s) spinning around him. The sphere will attack nearby enemy Heroes, each dealing Magic DMG. \n Passive: Grants 10% Hybrid ATK to two allied Heroes within 1 tile.",
      sdescription: "",
      icon: "/images/skills/cyclops.png",
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
    image: "/images/hero/hanzo.png",
    skill: {
      name: "Ninjutsu: Demon Feast",
      description:
        "Hanzo deals Physical DMG to the target, restore lost HP, and increases Skill DMG.",
      sdescription: "",
      icon: "/images/skills/hanzo.png",
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
    image: "/images/hero/gloo.png",
    skill: {
      name: "Slam, Slam",
      description:
        "Gloo reaches out, and next ATK slams the target, dealing Magic DMG and stunning them. \n Passive: When HP drops below 50%, a Goo drops and restores 20% Gloo's Max HP",
      sdescription: "",
      icon: "/images/skills/gloo.png",
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
    image: "/images/hero/baxia.png",
    skill: {
      name: "Tortoise's Puissance",
      description:
        "Baxia holds his shield in front, reducing DMG taken. Afterward, he curls into his shield and leaps down to enemies, dealing Magic DMG to the target and surrounding enemies.",
      sdescription: "",
      icon: "/images/skills/baxia.png",
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
    image: "/images/hero/alucard.png",
    skill: {
      name: "Fission Wave",
      description:
        "Alucard deals Physical DMG to the target and absorbs Hybrid DEF.",
      sdescription: "",
      icon: "/images/skills/alucard.png",
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
    image: "/images/hero/yve.png",
    skill: {
      name: "Void Blast",
      description:
        "Yve channels Galactic Energy, dealing Magic DMG to the target, then detonates this energy, dealing Magic DMG to enemies on adjacent tiles.",
      sdescription: "",
      icon: "/images/skills/yve.png",
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
    image: "/images/hero/natalia.png",
    skill: {
      name: "The Hunt",
      description:
        "Natalia launches a back-and-forth assault on the farthest enemy within 4 tiles (prioritizing ranged units), daling Physical DMG 2 times. \n Passive: Natalia prioritizes targeting back-row units. When there are no enemies within 1 tile of Natalia, she gains 100% Movement Speed and her next Basic ATK dashes to the target.",
      sdescription: "",
      icon: "/images/skills/natalia.png",
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
    image: "/images/hero/eudora.png",
    skill: {
      name: "Thunderstuck",
      description:
        "Eudora summons a great storm of lightning, dealing Magic DMG to the target.",
      sdescription: "",
      icon: "/images/skills/eudora.png",
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
    image: "/images/hero/belerick.png",
    skill: {
      name: "Nature's Strike",
      description:
        "Belerick empowers his next Basic ATK to deal Magic DMG to the target and recovers his lost HP, then gain ATK Speed.",
      sdescription: "",
      icon: "/images/skills/belerick.png",
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
    image: "/images/hero/atlas.png",
    skill: {
      name: "Annihilate",
      description:
        "Passive: Atlas generates Frigid Breath arround him, Enemeies in the area will have their ATK Speed reduced.",
      sdescription: "",
      icon: "/images/skills/atlas.png",
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
    image: "/images/hero/mathilda.png",
    skill: {
      name: "Guiding Wind",
      description:
        "Mathilda provides extra ATK Speed to 2 random allied Heroes within range (including herself), and releases wisp(s) to deal Magic DMG.",
      sdescription: "",
      icon: "/images/skills/mathilda.png",
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
    image: "/images/hero/saber.png",
    skill: {
      name: "Triple Sweep",
      description:
        "Saber charges toward an enemy, knocking them airborne and dealing Physical DMG, then slashes twice, each dealing Physical DMG. The first cast targets the enemy with the highest DMG output. Saber gain DMG Reduction during skill cast and restores Mana when killing the enemy Hero.",
      sdescription: "",
      icon: "/images/skills/saber.png",
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
    image: "/images/hero/nana.png",
    skill: {
      name: "Molina Blitz",
      description:
        "Nana summons Molina to strike the target area 3 times, each time dealing Magic DMG to enemies within.",
      sdescription: "",
      icon: "/images/skills/nana.png",
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
    image: "/images/hero/harley.png",
    skill: {
      name: "Poker Trick",
      description:
        "Harley moves to the farthest enemy and quickly throws wave(s) of cards, then returns. Each wave releases 3 card(s), with each card dealing Magic DMG to enemies.",
      sdescription: "",
      icon: "/images/skills/harley.png",
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
    image: "/images/hero/badang.png",
    skill: {
      name: "Chivalry Fist",
      description:
        "Badang's every 4 Basic ATK(s) will enhance the next Basic ATK to deal Physical DMG and gain a Shield. \n Passive: When battle starts, Badang grants 6 Hybrid DEF to himself and allied Heroes to his left and right.",
      sdescription: "",
      icon: "/images/skills/badang.png",
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
    image: "/images/hero/balmond.png",
    skill: {
      name: "Cyclone Sweep",
      description:
        "Balmond launches strike(s), each dealing Physical DMG to adjacent enemies.",
      sdescription: "",
      icon: "/images/skills/balmond.png",
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
    image: "/images/hero/thamuz.png",
    skill: {
      name: "Molten Scythes",
      description:
        "Thamuz throws War Scythe toward the current target direction and racalls it, dealing Physical DMG to enemies hit in the 3 front tile(s) and stunning them.",
      sdescription: "",
      icon: "/images/skills/thamuz.png",
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
    image: "/images/hero/moskov.png",
    skill: {
      name: "Spear of Destruction",
      description:
        "Moskov throws out Spear of Destruction toward the location with the most enemies. The spear deals Physical DMG to enemies in its path, and his own ATK Speed is increased.",
      sdescription: "",
      icon: "/images/skills/moskov.png",
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
    image: "/images/hero/khaleed.png",
    skill: {
      name: "Sand Walk",
      description:
        "Khaleed rises with the sands and enhances the next Basic ATK to deal Physical DMG to the target.",
      sdescription: "",
      icon: "/images/skills/khaleed.png",
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
    image: "/images/hero/martis.png",
    skill: {
      name: "Decimation",
      description:
        "Martis deals Physical DMG to the target. Restores all Mana if it kills a Hero.",
      sdescription: "",
      icon: "/images/skills/martis.png",
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
    image: "/images/hero/kalea.png",
    skill: {
      name: "Rolling Wave",
      description:
        "Kalea can jumps and slams down at the position with the most enemies, dealing damange and also enhances the next 3 Basic Attack to deal damage and restore (90% Total Physical Attack) HP",
      sdescription: "",
      icon: "/images/skills/kalea.png",
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
    image: "/images/hero/lolita.png",
    skill: {
      name: "Noumenon Energy Core",
      description:
        "Lolita grants herself and two allied Heroes a Shield that last 4s",
      sdescription: "",
      icon: "/images/skills/lolita.png",
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
    image: "/images/hero/cici.png",
    skill: {
      name: "Yo-Yo Blitz",
      description:
        "Cici attacks the 2 nearest enemies 4 time(s) with Yo-Yo, dealing physiocal damage with each hit and reducing their Healing Received by 30% for 4s",
      sdescription: "",
      icon: "/images/skills/cici.png",
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
    image: "/images/hero/novaria.png",
    skill: {
      name: "Star Shatter",
      description:
        "Novaria summons an Astral Sphere at the current target and dealing damage. a Passive: When battle starts, Novaria unleashes an Astral Echo that deals Magic Damage to enemies hit.",
      sdescription: "",
      icon: "/images/skills/novaria.png",
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
    image: "/images/hero/zhuxin.png",
    skill: {
      name: "Lantern Flare",
      description:
        "Zhuxin summons spirit Lantern to deal Magic Damage to all enemies in range eery 0.5s for 2.5s.",
      sdescription: "",
      icon: "/images/skills/zhuxin.png",
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
    image: "/images/hero/aamon.png",
    skill: {
      name: "Soul Shards",
      description:
        "Aamon enhances his next Attack with shars and dealing Magic Damage to enemies.",
      sdescription: "",
      icon: "/images/skills/aamon.png",
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
    image: "/images/hero/ruby.png",
    skill: {
      name: "Don't Run, Wolf King!",
      description:
        "Ruby swings her giant scythe in 2 spinning strikes, each dealing Physical Damage and restoring 5% Max HP.",
      sdescription: "",
      icon: "/images/skills/ruby.png",
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
    image: "/images/hero/layla.png",
    skill: {
      name: "Malefic Gun",
      description:
        "Passive: When battle starts, grants 10% Attack speed to self and allied heroes within 2 tiles to the left and right. Additionally, increase Attack Range to 4. Basic Attack Damage increases with distance from enemies ranging from 100% to 130%",
      sdescription: "",
      icon: "/images/skills/layla.png",
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
    image: "/images/hero/change.png",
    skill: {
      name: "Meteor Shower",
      description:
        "Chang'e gathers energy and controls the Crescent Moon to shoot out 30 Meteor(s), each dealing Magic Damage.",
      sdescription: "",
      icon: "/images/skills/change.png",
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
    image: "/images/hero/fanny.png",
    skill: {
      name: "Cut Throat",
      description:
        "Fanny deals (+330% Total Physical ATK) physical Damage to the current target and (+150% Total Physical ATK) Physical Damage to nearby enemies. Subsequent cast only damage the current target. Upon first cast, she dashes to the furthest enemy within 3 tiles,",
      sdescription: "",
      icon: "/images/skills/fanny.png",
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
    image: "/images/hero/angela.png",
    skill: {
      name: "Heartguard",
      description:
        "Angela protects the allied Hero with the lowest HP percentage, granting them Shield. After 1.5s, she attaches to them and emits 5 light waes toward the nearest enemy, dealing Magic Damage. (Angela cannot attach to another Angela.)",
      sdescription: "",
      icon: "/images/skills/angela.png",
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
    image: "/images/hero/lesley.png",
    skill: {
      name: "Ultimate Snipe",
      description:
        "Leslet fires 4 bullet(s) at the furthest enemy Hero, each dealing Physical Damage. (Bullets can be blocked by other enemy heroes.)",
      sdescription: "",
      icon: "/images/skills/lesley.png",
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
    image: "/images/hero/aldous.png",
    skill: {
      name: "Contract: Transform",
      description:
        "Aldous unleashes his inner energy to enhance his next Basic Attack, dealing Physical Damage to the target and gaining shield.",
      sdescription: "",
      icon: "/images/skills/aldous.png",
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
    image: "/images/hero/minsitthar.png",
    skill: {
      name: "King's Calling",
      description:
        "Minshitthar deals Physical Damage to nearby enemies, stuns them for 0.6s, and restores 10% HP for himself. He then summons guards beside the current enemy and the farthest enemy. The guards inherit of his Attack and last for 3s. a Passive: Any enemy attacked by Minsitthar will transform into a guard upon death.",
      sdescription: "",
      icon: "/images/skills/minsitthar.png",
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
    image: "/images/hero/uranus.png",
    skill: {
      name: "Ionic Edge",
      description:
        "Uranus releases two energy blaeds that orbit around himself, dealing Magic Damage to enemies while gaining 60 Hybrid Def for 4s.",
      sdescription: "",
      icon: "/images/skills/uranus.png",
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
    image: "/images/hero/gusion.png",
    skill: {
      name: "Shadowblade Slaughter",
      description:
        "Gusion throws dagger forward, each dealing Magic Damage to the target hit. Then he reaclls the daggers, dealing the same Magic Damage. a Passive: Dealing Damage reduces the target's Hybrid Deff by 6.",
      sdescription: "",
      icon: "/images/skills/gusion.png",
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
    image: "/images/hero/vale.png",
    skill: {
      name: "Wind Blade",
      description:
        "Vale unleashes 2 wind blades towards the left and right of a target area, dealing Magic Damage to enemies hit. At the start of battle, Vale grants 10 Mana to himself and his left and right allies.",
      sdescription: "",
      icon: "/images/skills/vale.png",
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
    image: "/images/hero/valentina.png",
    skill: {
      name: "Arcane Shade",
      description:
        "Valentina fires 6 Shadow Bolts at nearby enemies that deal Magic Damage Each.",
      sdescription: "",
      icon: "/images/skills/valentina.png",
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
    image: "/images/hero/tigreal.png",
    skill: {
      name: "Implosion",
      description:
        "Tigreal unleashes the power of his hammer, gaining a Shield and dealing Physical DMG to enemies within 8 tiles, stunning them.",
      sdescription: "",
      icon: "/images/skills/tigreal.png",
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
    image: "/images/hero/alpha.png",
    skill: {
      name: "Implosion",
      description:
        "Alpha unleashes 2 sweeping slashes in a fan-shaped area in the front, dealing Physical DMG to enemeies. From the third cast onward, additionally releases 3 linear energy waves forward at different angles, each dealing Physical DMG.",
      sdescription: "",
      icon: "/images/skills/alpha.png",
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
    image: "/images/hero/clint.png",
    skill: {
      name: "Grenade Bombardment",
      description:
        "Clint launches a grenade in the target direction that explodes on the first enemy hit, dealing Physical DMG.",
      sdescription: "",
      icon: "/images/skills/clint.png",
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
    image: "/images/hero/helcurt.png",
    skill: {
      name: "Deadly Stinger",
      description:
        "On first cast, Helcurt blinks to the enemy Hero with the highest DMG output within 3 tiles (prioritizing ranged Heroes) and fires 5 Deadly Stinger(s) forward, each dealing Physical DMG.",
      sdescription: "",
      icon: "/images/skills/helcurt.png",
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
    image: "/images/hero/xborg.png",
    skill: {
      name: "Last Insanity",
      description:
        "X.Borg charges toward the position with the most enemies, gaining a Shield of 10% Max HP. Then he sprays flames at nearby enemies, dealing 7 hits of Physical DMG. Finally, he triggers an explosion, dealing Physical DMG to nearby enemies.",
      sdescription: "",
      icon: "/images/skills/xborg.png",
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
    image: "/images/hero/roger.png",
    skill: {
      name: "Wolf Transformation",
      description:
        "Human Form: Roger dashes forward and transforms into a wolf, dealing Physical DMG and gaining a Shield. \nWolf Form: Roger howls, increasing his ATK Speed by 60% for 5s.",
      sdescription: "",
      icon: "/images/skills/roger.png",
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
    image: "/images/hero/ixia.png",
    skill: {
      name: "Star Helix",
      description:
        "Ixia releases Starlium in front of her, dealing Physical DMG and stunning targets.",
      sdescription: "",
      icon: "/images/skills/ixia.png",
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
    image: "/images/hero/yuzhong.png",
    skill: {
      name: "Black Dragon Form",
      description:
        "Yu Zhong transforms into his Black Dragon Form and rampages through enemy Heroes for up to 5s, gaining 50% Damage Reduction and dealing Physical Damage to enemy heroes touched. Then leaps up and slams down at the area with the most enemies, dealing Physical Damage in two hits to adjacent enemies and gains 25% Attack Speed until the end of battle. Subsequent skills slash enemies within 2 tiles, dealing Physical Damage. (Rampage, slam, and slash Damage all count as Basic Attack Damage.)",
      sdescription: "",
      icon: "/images/skills/yuzhong.png",
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
    image: "/images/hero/granger.png",
    skill: {
      name: "Rhapsody",
      description:
        "Granger rapidly fires 3 shots at the target, each dealing Physical Damage.",
      sdescription: "",
      icon: "/images/skills/granger.png",
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
    image: "/images/hero/hayabusa.png",
    skill: {
      name: "Ougi: Shadow Kill",
      description:
        "Hayabusa turns into a shadow and strikes enemies in range 3 time(s), dealing a total of (+945% Total Physical Attack) Physical Damage.",
      sdescription: "",
      icon: "/images/skills/hayabusa.png",
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
    image: "/images/hero/kagura.png",
    skill: {
      name: "Seimei Umbrella Open",
      description:
        "Kagura unleshes 3 Seimei Umbrella(s), dealing Magic Damage to Enemies in their path.",
      sdescription: "",
      icon: "/images/skills/kagura.png",
    },
    synergies: {
      faction: "Exorcist",
      roles: ["Mage"],
    },
  },
];
