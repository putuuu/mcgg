export type EquipmentCategory =
  | "physical"
  | "magic"
  | "defense"
  | "magic-crystal"
  | "special";

export type EquipmentTier = "basic" | "enhanced";

export interface Equipment {
  id: string;
  name: string;
  icon: string;

  category: EquipmentCategory;
  tier: EquipmentTier;

  stats: {
    attack?: number;
    magic?: number;
    defense?: number;
    hp?: number;
    atkSpeed?: number;
  };

  passive?: string;
}
export const equipments: Equipment[] = [
  // ================= PHYSICAL =================
  {
    id: "demon-hunter-sword",
    name: "Demon Hunter Sword",
    icon: "/images/equipment/demon_hunter_sword.png",
    category: "physical",
    tier: "basic",
    stats: { attack: 30 },
    passive: "Deals bonus damage based on target HP.",
  },
  {
    id: "golden-staff",
    name: "Golden Staff",
    icon: "/images/equipment/golden_staff.png",
    category: "physical",
    tier: "basic",
    stats: { atkSpeed: 25 },
    passive: "Converts crit chance into attack speed.",
  },
  {
    id: "war-axe",
    name: "War Axe",
    icon: "/images/equipment/war_axe.png",
    category: "physical",
    tier: "basic",
    stats: { attack: 35 },
    passive: "Stacks physical penetration on hit.",
  },
  {
    id: "sea-halberd",
    name: "Sea Halberd",
    icon: "/images/equipment/sea_halberd.png",
    category: "physical",
    tier: "basic",
    stats: { attack: 25 },
    passive: "Reduces enemy regeneration.",
  },
  {
    id: "berserker-fury",
    name: "Berserker's Fury",
    icon: "/images/equipment/berserker_fury.png",
    category: "physical",
    tier: "basic",
    stats: { attack: 40 },
    passive: "Increases critical damage.",
  },
  {
    id: "blade-of-despair",
    name: "Blade of Despair",
    icon: "/images/equipment/blade_of_despair.png",
    category: "physical",
    tier: "basic",
    stats: { attack: 50 },
    passive: "Deals more damage to low HP enemies.",
  },
  {
    id: "haas-claws",
    name: "Haas' Claws",
    icon: "/images/equipment/haas_claws.png",
    category: "physical",
    tier: "basic",
    stats: { attack: 20 },
    passive: "Provides lifesteal.",
  },

  // ================= MAGIC =================
  {
    id: "holy-crystal",
    name: "Holy Crystal",
    icon: "/images/equipment/holy_crystal.png",
    category: "magic",
    tier: "basic",
    stats: { magic: 20 },
    passive: "Increases skill damage by 10%.",
  },
  {
    id: "lightning-truncheon",
    name: "Lightning Truncheon",
    icon: "/images/equipment/lightning_truncheon.png",
    category: "magic",
    tier: "basic",
    stats: { magic: 15 },
    passive: "Deals burst magic damage periodically.",
  },
  {
    id: "genius-wand",
    name: "Genius Wand",
    icon: "/images/equipment/genius_wand.png",
    category: "magic",
    tier: "basic",
    stats: { magic: 10 },
    passive: "Reduces enemy magic defense.",
  },

  // ================= DEFENSE =================
  {
    id: "guardian-armor",
    name: "Guardian Armor",
    icon: "/images/equipment/guardian_armor.png",
    category: "defense",
    tier: "basic",
    stats: { defense: 30 },
    passive: "Reduces damage taken.",
  },
  {
    id: "guardian-helm",
    name: "Guardian Helm",
    icon: "/images/equipment/guardian_helm.png",
    category: "defense",
    tier: "basic",
    stats: { hp: 400 },
    passive: "Restores HP over time.",
  },

  // ================= MAGIC CRYSTAL =================
  {
    id: "magic-crystal",
    name: "Magic Crystal",
    icon: "/images/equipment/magic_crystal.png",
    category: "magic-crystal",
    tier: "basic",
    stats: {},
    passive: "Enhances magic-based synergies.",
  },

  // ================= SPECIAL =================
  {
    id: "special-token",
    name: "Special Token",
    icon: "/images/equipment/special_token.png",
    category: "special",
    tier: "basic",
    stats: {},
    passive: "Triggers special effects.",
  },
  {
    id: "demon-hunter-sword",
    name: "Demon Hunter Sword",
    icon: "/images/equipment/demon_hunter_sword.png",
    category: "physical",
    tier: "basic",
    stats: { attack: 30 },
    passive: "Deals bonus damage based on target HP.",
  },
  {
    id: "golden-staff",
    name: "Golden Staff",
    icon: "/images/equipment/golden_staff.png",
    category: "physical",
    tier: "basic",
    stats: { atkSpeed: 25 },
    passive: "Converts crit chance into attack speed.",
  },
  {
    id: "war-axe",
    name: "War Axe",
    icon: "/images/equipment/war_axe.png",
    category: "physical",
    tier: "basic",
    stats: { attack: 35 },
    passive: "Stacks physical penetration on hit.",
  },
  {
    id: "sea-halberd",
    name: "Sea Halberd",
    icon: "/images/equipment/sea_halberd.png",
    category: "physical",
    tier: "basic",
    stats: { attack: 25 },
    passive: "Reduces enemy regeneration.",
  },
  {
    id: "berserker-fury",
    name: "Berserker's Fury",
    icon: "/images/equipment/berserker_fury.png",
    category: "physical",
    tier: "basic",
    stats: { attack: 40 },
    passive: "Increases critical damage.",
  },
  {
    id: "blade-of-despair",
    name: "Blade of Despair",
    icon: "/images/equipment/blade_of_despair.png",
    category: "physical",
    tier: "basic",
    stats: { attack: 50 },
    passive: "Deals more damage to low HP enemies.",
  },
  {
    id: "haas-claws",
    name: "Haas' Claws",
    icon: "/images/equipment/haas_claws.png",
    category: "physical",
    tier: "basic",
    stats: { attack: 20 },
    passive: "Provides lifesteal.",
  },

  // ================= MAGIC =================
  {
    id: "holy-crystal",
    name: "Holy Crystal",
    icon: "/images/equipment/holy_crystal.png",
    category: "magic",
    tier: "basic",
    stats: { magic: 20 },
    passive: "Increases skill damage by 10%.",
  },
  {
    id: "lightning-truncheon",
    name: "Lightning Truncheon",
    icon: "/images/equipment/lightning_truncheon.png",
    category: "magic",
    tier: "basic",
    stats: { magic: 15 },
    passive: "Deals burst magic damage periodically.",
  },
  {
    id: "genius-wand",
    name: "Genius Wand",
    icon: "/images/equipment/genius_wand.png",
    category: "magic",
    tier: "basic",
    stats: { magic: 10 },
    passive: "Reduces enemy magic defense.",
  },

  // ================= DEFENSE =================
  {
    id: "guardian-armor",
    name: "Guardian Armor",
    icon: "/images/equipment/guardian_armor.png",
    category: "defense",
    tier: "basic",
    stats: { defense: 30 },
    passive: "Reduces damage taken.",
  },
  {
    id: "guardian-helm",
    name: "Guardian Helm",
    icon: "/images/equipment/guardian_helm.png",
    category: "defense",
    tier: "basic",
    stats: { hp: 400 },
    passive: "Restores HP over time.",
  },

  // ================= MAGIC CRYSTAL =================
  {
    id: "magic-crystal",
    name: "Magic Crystal",
    icon: "/images/equipment/magic_crystal.png",
    category: "magic-crystal",
    tier: "basic",
    stats: {},
    passive: "Enhances magic-based synergies.",
  },

  // ================= SPECIAL =================
  {
    id: "special-token",
    name: "Special Token",
    icon: "/images/equipment/special_token.png",
    category: "special",
    tier: "basic",
    stats: {},
    passive: "Triggers special effects.",
  },
];
