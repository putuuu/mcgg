export interface Hero {
  id: number;
  name: string;
  cost: number;
  image: string;

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

    synergies: {
      faction: "Exorcist",
      roles: ["Mage"],
    },
  },
];
