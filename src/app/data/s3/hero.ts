export interface Hero {
  id: number;
  name: string;
  cost: number;
  image: string;

  synergies: {
    faction: string;
    roles: string[];
  };

  skill: {
    name: string;
    icon: string;
    description: string;
    passive?: string; // Optional, jika ada
    statsByStar: {
      star: number;
      shield?: number;
      magicBonus?: number;
      physicalBonus?: number;
    }[];
  };

  attributes: {
    starStats: {
      star: number;
      hp: number;
      physicalAtk: number;
      magicAtk: number;
      atkSpeed: number;
      atkRange: number;
      manaStats: {
        initial: number;
        cap: number;
      };
    }[];
  };
}

export const heroes: Hero[] = [
  {
    id: 1201,
    name: "Hylos",
    cost: 2,
    image: "/images/heroes/hylos.png",

    synergies: {
      faction: "Doomsworn",
      roles: ["Defender"],
    },

    skill: {
      name: "Law and Order",
      icon: "/images/skills/hylos.png",
      description:
        "Hylos deals (+260% Total Magic ATK) Magic DMG to the target and gain a 150 Shield for 3s.",
      passive:
        "When battle starts, grant a 150 Shield to himself and allied Heroes to his left and right.",
      statsByStar: [
        { star: 1, shield: 150, magicBonus: 260 },
        { star: 2, shield: 250, magicBonus: 270 },
        { star: 3, shield: 500, magicBonus: 350 },
      ],
    },

    attributes: {
      starStats: [
        {
          star: 1,
          hp: 2233,
          physicalAtk: 115,
          magicAtk: 115,
          atkSpeed: 0.65,
          atkRange: 1,
          manaStats: {
            initial: 50,
            cap: 50,
          },
        },
        {
          star: 2,
          hp: 4019,
          physicalAtk: 175,
          magicAtk: 175,
          atkSpeed: 0.65,
          atkRange: 1,
          manaStats: {
            initial: 50,
            cap: 50,
          },
        },
        {
          star: 3,
          hp: 7235,
          physicalAtk: 260,
          magicAtk: 260,
          atkSpeed: 0.65,
          atkRange: 1,
          manaStats: {
            initial: 50,
            cap: 50,
          },
        },
      ],
    },
  },
  {
    id: 1301,
    name: "Phoveus",
    cost: 4,
    image: "/images/heroes/phoveus.png",

    synergies: {
      faction: "Doomsworn",
      roles: ["Dauntless"],
    },

    skill: {
      name: "Demonic Impact",
      icon: "/images/skills/phoveus.png",
      description:
        "Phoveus slams his monolith into the ground, dealing (+110% Total Physical ATK) Physical DMG to enemies in the area and gaining a Shield of 8% Max HP, while leaving behind an Astaros Eye that implodes after a short delay, dealing (+110% Total Physical ATK) Magic DMG to the enemies.",
      passive: "",
      statsByStar: [
        { star: 1, shield: 8, physicalBonus: 110 },
        { star: 2, shield: 10, physicalBonus: 110 },
        { star: 3, shield: 15, physicalBonus: 315 },
      ],
    },

    attributes: {
      starStats: [
        {
          star: 1,
          hp: 3496,
          physicalAtk: 180,
          magicAtk: 180,
          atkSpeed: 0.75,
          atkRange: 1,
          manaStats: {
            initial: 30,
            cap: 50,
          },
        },
        {
          star: 2,
          hp: 6293,
          physicalAtk: 270,
          magicAtk: 270,
          atkSpeed: 0.75,
          atkRange: 1,
          manaStats: {
            initial: 30,
            cap: 50,
          },
        },
        {
          star: 3,
          hp: 14683,
          physicalAtk: 360,
          magicAtk: 360,
          atkSpeed: 0.75,
          atkRange: 1,
          manaStats: {
            initial: 30,
            cap: 50,
          },
        },
      ],
    },
  },
  {
    id: 1401,
    name: "Argus",
    cost: 4,
    image: "/images/heroes/argus.png",

    synergies: {
      faction: "Doomsworn",
      roles: ["Weapon Master"],
    },

    skill: {
      name: "Warmonger",
      icon: "/images/skills/argus.png",
      description:
        "Enhance Argus' next Basic ATK to launch a Demonic Slash, dealing (+170% Physical ATK) Physical DMG twice.",
      passive:
        "When taking fatal DMG for the first time, Argus enters the Fallen Angel state and gains 40% ATK Speed for 3s, becoming immune to death for 1s.",
      statsByStar: [
        { star: 1, shield: 8, physicalBonus: 110 },
        { star: 2, shield: 10, physicalBonus: 110 },
        { star: 3, shield: 15, physicalBonus: 315 },
      ],
    },

    attributes: {
      starStats: [
        {
          star: 1,
          hp: 3496,
          physicalAtk: 180,
          magicAtk: 180,
          atkSpeed: 0.75,
          atkRange: 1,
          manaStats: {
            initial: 30,
            cap: 50,
          },
        },
        {
          star: 2,
          hp: 6293,
          physicalAtk: 270,
          magicAtk: 270,
          atkSpeed: 0.75,
          atkRange: 1,
          manaStats: {
            initial: 30,
            cap: 50,
          },
        },
        {
          star: 3,
          hp: 14683,
          physicalAtk: 360,
          magicAtk: 360,
          atkSpeed: 0.75,
          atkRange: 1,
          manaStats: {
            initial: 30,
            cap: 50,
          },
        },
      ],
    },
  },
];
