export type Tier = "S" | "A" | "B" | "C" | "F";

export const tiers: Tier[] = ["S", "A", "B", "C", "F"];

export interface HeroTier {
  heroName: string;
  tier: Tier;
}

export interface SynergyTier {
  synergyName: string;
  tier: Tier;
}

export const heroTiers: HeroTier[] = [
  // S tier
  { heroName: "Ling", tier: "S" },
  { heroName: "Yu Zhong", tier: "S" },

  // A tier
  { heroName: "Rafaela", tier: "A" },
  { heroName: "Hayabusa", tier: "A" },
  { heroName: "Pharsa", tier: "A" },
  { heroName: "Cyclops", tier: "A" },
  { heroName: "Valentina", tier: "A" },
  { heroName: "Barats", tier: "A" },
  { heroName: "Terry Bogard", tier: "A" },
  { heroName: "K'", tier: "A" },
  { heroName: "Fredrinn", tier: "A" },
  { heroName: "Saber", tier: "A" },
  { heroName: "Khufra", tier: "A" },
  { heroName: "Miya", tier: "A" },
  { heroName: "Minotaur", tier: "A" },
  { heroName: "Leona", tier: "A" },
  { heroName: "Gatotkaca", tier: "A" },
  // B tier
  { heroName: "Lancelot", tier: "B" },
  { heroName: "Ruby", tier: "B" },
  { heroName: "Benedetta", tier: "B" },
  { heroName: "Iori Yagami", tier: "B" },
  { heroName: "Edith", tier: "B" },
  { heroName: "Roger", tier: "B" },
  { heroName: "Hanabi", tier: "B" },
  { heroName: "Floryn", tier: "B" },
  { heroName: "Gloo", tier: "B" },
  { heroName: "Julian", tier: "B" },
  { heroName: "Aulus", tier: "B" },
  { heroName: "Xavier", tier: "B" },
  { heroName: "Uranus", tier: "B" },
  { heroName: "Beatrix", tier: "B" },
  { heroName: "Phoveus", tier: "B" },

  // C tier
  { heroName: "Kyo Kusanagi", tier: "C" },
  { heroName: "Esmeralda", tier: "C" },
  { heroName: "Harith", tier: "C" },
  { heroName: "Masha", tier: "C" },
  { heroName: "Aldous", tier: "C" },
  { heroName: "Granger", tier: "C" },
  { heroName: "Odette", tier: "C" },
  { heroName: "Cici", tier: "C" },
  { heroName: "Chris", tier: "C" },
  { heroName: "Natalia", tier: "C" },
  { heroName: "Brody", tier: "C" },
  { heroName: "Alucard", tier: "C" },
  { heroName: "Cecilion", tier: "C" },
  { heroName: "Silvanna", tier: "C" },

  // F tier
  { heroName: "Lesley", tier: "F" },
  { heroName: "Lylia", tier: "F" },
  { heroName: "Aamon", tier: "F" },
  { heroName: "Clint", tier: "F" },
  { heroName: "Jawhead", tier: "F" },
  { heroName: "Kula", tier: "F" },
  { heroName: "Nolan", tier: "F" },
];

export const synergyTiers: SynergyTier[] = [
  { synergyName: "Exorcist", tier: "S" },
  { synergyName: "Neobeast", tier: "S" },
  { synergyName: "Scavenger", tier: "S" },
  { synergyName: "Stargazer", tier: "S" },

  { synergyName: "Glory League", tier: "A" },
  { synergyName: "Toy Mischief", tier: "A" },
  { synergyName: "Heartbond", tier: "A" },
  { synergyName: "KOF", tier: "A" },
  { synergyName: "Luminexus", tier: "A" },
  { synergyName: "Phasewarper", tier: "A" },
  { synergyName: "Bruiser", tier: "A" },
  { synergyName: "Weapon Master", tier: "A" },
  { synergyName: "Swiftblade", tier: "A" },

  { synergyName: "Soul Vessels", tier: "B" },
  { synergyName: "Mystic Meow", tier: "B" },
  { synergyName: "Defender", tier: "B" },
  { synergyName: "Dauntless", tier: "B" },

  { synergyName: "Beyond the Clouds", tier: "C" },
  { synergyName: "Marksman", tier: "C" },

  { synergyName: "Mage", tier: "F" },
];
