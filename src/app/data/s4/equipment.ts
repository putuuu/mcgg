// /data/equipments/physical.ts

export interface EquipmentVariant {
  name: string;
  icon: string;
  subCategory?: string;
  attribute?: string[];
  passive?: string;
  pdesc?: string;
}

export interface Equipment {
  id: number;
  category: string;
  special?: string;
  variants: EquipmentVariant[];
}

export const equipments: Equipment[] = [
  {
    id: 1,
    category: "Physical",
    special: "Tank Killer",
    variants: [
      {
        name: "Demon Hunter Sword",
        icon: "/images/equipment/small/demonhuntersword.webp",
        attribute: ["+10% ATK Speed"],
        passive: "Engulf",
        pdesc:
          "Basic ATKs deal extra Physical DMG equal to 3% of the target's max HP.",
      },
      {
        name: "Enhanced Demon Hunter Sword",
        icon: "/images/equipment/small/enhanced_demonhuntersword.webp",
        attribute: ["+10% ATK Speed"],
        passive: "Engulf",
        pdesc:
          "Basic ATK will deal extra Physical DMG equal to 6% of the target's max HP.",
      },
    ],
  },
  {
    id: 2,
    category: "Physical",
    special: "Extremely High ATK Speed",
    variants: [
      {
        name: "Golden Staff",
        icon: "/images/equipment/small/goldenstaff.webp",
        attribute: ["+15% ATK Speed"],
        passive: "Impulsive",
        pdesc:
          "Each Basic ATK increases ATK Speed by 2.5%, stacking up to 50 time(s).",
      },
      {
        name: "Enhanced Golden Staff",
        icon: "/images/equipment/small/enhanced_goldenstaff.webp",
        attribute: ["+15% ATK Speed"],
        passive: "Impulsive",
        pdesc:
          "Basic ATK increases ATK Speed by 4%, stacking up to 50 time(s).",
      },
    ],
  },
  {
    id: 3,
    category: "Physical",
    special: "Spell Vamp",
    variants: [
      {
        name: "War Axe",
        icon: "/images/equipment/small/waraxe.webp",
        attribute: ["+10% Physical ATK", "+20% Spell Vamp"],
        passive: "Fighting Spirit",
        pdesc:
          "When dealing DMG, increase 6 Hybrid DEF for 3s, stacking up to 5 time(s). At max stacks, gain 15% extra DMG.",
      },
      {
        name: "Enhanced War Axe",
        icon: "/images/equipment/small/enhanced_waraxe.webp",
        attribute: ["+10% Physical ATK", "+20% Spell Vamp"],
        passive: "Fighting Spirit",
        pdesc:
          "When dealing DMG, increase 6 Hybrid DEF for 3s, stacking up to 5 time(s). At max stacks, deal 40% extra DMG.",
      },
    ],
  },
  {
    id: 4,
    category: "Physical",
    special: "Counter Lifesteal",
    variants: [
      {
        name: "Sea Halberd",
        icon: "/images/equipment/small/seahalberd.webp",
        attribute: [
          "+15% Physical ATK",
          "Unique Attribute: +40% Physical Penetration",
        ],
        passive: "Lifebane",
        pdesc: "Deal DMG to reduce the target's HP Regen by 60% for 5s.",
      },
      {
        name: "Enhanced Sea Halberd",
        icon: "/images/equipment/small/enhanced_seahalberd.webp",
        attribute: [
          "+15% Physical ATK",
          "Unique Attribute: +40% Physical Penetration",
        ],
        passive: "Lifebane & Pierce",
        pdesc:
          "Deal DMG to reduce the target's HP Regen by 60% for 5s. Gain 30% Physical Penetration and 30% Physical ATK.",
      },
    ],
  },
  {
    id: 5,
    category: "Physical",
    special: "Increase Crit",
    variants: [
      {
        name: "Berserker's Fury",
        icon: "/images/equipment/small/berserkersfury.webp",
        attribute: ["+15% Physical ATK", "+25% Crit Chance", "+40% Crit DMG"],
      },
      {
        name: "Enhanced Berserker's Fury",
        icon: "/images/equipment/small/enhanced_berserkersfury.webp",
        attribute: ["+15% Physical ATK", "+25% Crit Chance", "+40% Crit DMG"],
        passive: "Valiant",
        pdesc: "Gain 15% Crit Chance.",
      },
    ],
  },
  {
    id: 6,
    category: "Physical",
    special: "Highest Physical ATK",
    variants: [
      {
        name: "Blade of Despair",
        icon: "/images/equipment/small/bladeofdespair.webp",
        attribute: ["+30% Physical ATK"],
        passive: "Despair",
        pdesc:
          "Deal 30% extra DMG for 2s when hitting targets with HP below 50%. (Applies before damage is calculated.)",
      },
      {
        name: "Enhanced Blade of Despair",
        icon: "/images/equipment/small/enhanced_bladeofdespair.webp",
        attribute: ["+30% Physical ATK"],
        passive: "Despair",
        pdesc:
          "Dealing DMG to targets with HP below 50% increases DMG dealt by 60% for 2s. (Applies before DMG is calculated.)",
      },
    ],
  },
  {
    id: 7,
    category: "Physical",
    special: "Lifesteal",
    variants: [
      {
        name: "Haas' Claws",
        icon: "/images/equipment/small/haasclaws.webp",
        attribute: [
          "+20% Physical ATK",
          "+20% Crit Chance",
          "Unique Attribute: +20% Lifesteal",
        ],
      },
      {
        name: "Enhanced Haas' Claws",
        icon: "/images/equipment/small/enhanced_haasclaws.webp",
        attribute: [
          "+20% Physical ATK",
          "+20% Crit Chance",
          "Unique Attribute: +20% Lifesteal",
        ],
        passive: "Frenzy",
        pdesc: "+35% Lifesteal.",
      },
    ],
  },
  {
    id: 8,
    category: "Magic",
    special: "Rapid Skill Cast",
    variants: [
      {
        name: "Enchanted Talisman",
        icon: "/images/equipment/small/enchantedtalisman.webp",
        attribute: ["+25% Magic ATK"],
        passive: "Recharge",
        pdesc: "When battle starts, immediately recover 65% Mana.",
      },
      {
        name: "Enhanced Enchanted Talisman",
        icon: "/images/equipment/small/enhanced_enchantedtalisman.webp",
        attribute: ["+30% Magic ATK"],
        passive: "Recharge",
        pdesc:
          "When battle starts, restore 80% Mana and increase Skill DMG dealt by 20%.",
      },
    ],
  },
  {
    id: 9,
    category: "Magic",
    special: "Enhance Basic ATK",
    variants: [
      {
        name: "Feather of Heaven",
        icon: "/images/equipment/small/featherofheaven.webp",
        attribute: ["+20% Magic ATK", "+20% Lifesteal"],
        passive: "Affliction",
        pdesc: "Each Basic ATK deals (+30% Total Magic ATK) extra Magic DMG.",
      },
      {
        name: "Enhanced Feather of Heaven",
        icon: "/images/equipment/small/enhanced_featherofheaven.webp",
        attribute: ["+10% Magic ATK", "+20% Lifesteal", "+15% ATK Speed"],
        passive: "Affliction",
        pdesc: "Each Basic ATK deals (+90% Total Magic ATK) extra Magic DMG.",
      },
    ],
  },
  {
    id: 10,
    category: "Magic",
    special: "Invincible at Low HP",
    variants: [
      {
        name: "Winter Crown",
        icon: "/images/equipment/small/wintercrown.webp",
        attribute: ["+20% Hybrid ATK", "+15% Max HP"],
        passive: "Freeze",
        pdesc:
          "Become frozen when HP drops below 25% or when taking fatal DMG, and restore 25% HP and 15% Mana over 1s.",
      },
      {
        name: "Enhanced Winter Crown",
        icon: "/images/equipment/small/enhanced_wintercrown.webp",
        attribute: ["+15% Hybrid ATK", "+15% Max HP"],
        passive: "Freeze",
        pdesc:
          "Become frozen when HP drops below 25% or when taking fatal DMG, and restore 40% HP and 25% Mana over 1s.",
      },
    ],
  },
  {
    id: 11,
    category: "Magic",
    special: "Skill Burn",
    variants: [
      {
        name: "Glowing Wand",
        icon: "/images/equipment/small/glowingwand.webp",
        attribute: ["+25% Magic ATK"],
        passive: "Scorch",
        pdesc:
          "Skill DMG burns the target for 3s, dealing Magic DMG equal to 2.5% of their Max HP (10 DMG minimum) per second. Skill also reduces the target's Healing Received by 50% for 3s.",
      },
      {
        name: "Enhanced Glowing Wand",
        icon: "/images/equipment/small/enhanced_glowingwand.webp",
        attribute: ["+25% Magic ATK"],
        passive: "Scorch",
        pdesc:
          "Skill DMG burns the target for 3s, dealing Magic DMG equal to 8% of their Max HP (10 DMG minimum) per second. Skill also reduces the target's Healing Received by 50% for 3s.",
      },
    ],
  },
  {
    id: 12,
    category: "Magic",
    special: "Spell Vamp",
    variants: [
      {
        name: "Ice Queen Wand",
        icon: "/images/equipment/small/icequeenwand.webp",
        attribute: ["+20% Magic ATK", "+20% Spell Vamp"],
        passive: "Ice Bound",
        pdesc:
          "After dealing skill DMG, reduces target's ATK Speed by 15% for 5s.",
      },
      {
        name: "Enhanced Ice Queen Wand",
        icon: "/images/equipment/small/enhanced_icequeenwand.webp",
        attribute: ["+20% Magic ATK", "+20% Spell Vamp"],
        passive: "Ice Bound & Extract",
        pdesc:
          "After dealing skill DMG, reduces target's ATK Speed by 15% for 5s. Gain 20% Spell Vamp.",
      },
    ],
  },
  {
    id: 13,
    category: "Magic",
    special: "Highest Magic DMG",
    variants: [
      {
        name: "Holy Crystal",
        icon: "/images/equipment/small/holycrystal.webp",
        attribute: ["+25% Magic ATK"],
        passive: "Mystery",
        pdesc: "Increases Skill DMG by 25%.",
      },
      {
        name: "Enhanced Holy Crystal",
        icon: "/images/equipment/small/enhanced_holycrystal.webp",
        attribute: ["+25% Magic ATK"],
        passive: "Mystery",
        pdesc: "Increases Skill DMG by 50%.",
      },
    ],
  },
  {
    id: 14,
    category: "Magic",
    special: "Single Control",
    variants: [
      {
        name: "Feline Blade",
        icon: "/images/equipment/small/felineblade.webp",
        attribute: ["+10% Hybrid ATK", "+10% Max HP"],
        passive: "Witchcraft",
        pdesc:
          "When battle starts, transforms the enemy Hero with the highest Star Level into a Leonin for 4s. When Basic ATKs deal DMG, turns the current target into a Leonin for 2s. This effect can be triggered once every 12s.",
      },
      {
        name: "Enhanced Feline Blade",
        icon: "/images/equipment/small/enhanced_felineblade.webp",
        attribute: ["+10% Hybrid ATK", "+10% Max HP"],
        passive: "Witchcraft",
        pdesc:
          "When battle starts, transforms the enemy with the highest Star Level into a Leonin for 4s. Heroes in Leonin state take 60% increased DMG. When Basic ATKs deal DMG, turns the current target into a Leonin for 2s. This effect can be triggered once every 12s.",
      },
    ],
  },
  {
    id: 15,
    category: "Magic",
    special: "Additional Mana Regen",
    variants: [
      {
        name: "Purple Buff",
        icon: "/images/equipment/small/purplebuff.webp",
        attribute: ["+15% Hybrid ATK"],
        passive: "Elemental Power",
        pdesc: "Gain 10 Mana after casting a Skill.",
      },
      {
        name: "Enhanced Purple Buff",
        icon: "/images/equipment/small/enhanced_purplebuff.webp",
        attribute: ["+15% Hybrid ATK"],
        passive: "Elemental Power & Malefic",
        pdesc: "Gain 10 Mana after casting a Skill. Gain 25% Hybrid ATK.",
      },
    ],
  },
  {
    id: 16,
    category: "Defense",
    special: "Physical DMG Bounce",
    variants: [
      {
        name: "Blade Armor",
        icon: "/images/equipment/small/bladearmor.webp",
        attribute: ["+60 Physical DEF"],
        passive: "Vengeance",
        pdesc:
          "Deal 30% of DMG received as Physical DMG to the attacker when hit by a Basic ATK.",
      },
      {
        name: "Enhanced Blade Armor",
        icon: "/images/equipment/small/enhanced_bladearmor.webp",
        attribute: ["+60 Physical DEF"],
        passive: "Vengeance & Defiance",
        pdesc:
          "Deal 30% of DMG received as Physical DMG to the attacker when hit by a Basic ATK. Gain 30 Physical DEF.",
      },
    ],
  },
  {
    id: 17,
    category: "Defense",
    special: "High Base HP",
    variants: [
      {
        name: "Guardian Helmet",
        icon: "/images/equipment/small/guardianhelmet.webp",
        attribute: ["+20% Max HP"],
        passive: "Recovery",
        pdesc: "Regen 2% of Max HP every second.",
      },
      {
        name: "Enhanced Guardian Helmet",
        icon: "/images/equipment/small/enhanced_guardianhelmet.webp",
        attribute: ["+20% Max HP"],
        passive: "Recovery & Titan",
        pdesc: "Regen 2% of Max HP every second. Gain 30% Max HP.",
      },
    ],
  },
  {
    id: 18,
    category: "Defense",
    special: "Reduce Target's Hybrid ATK",
    variants: [
      {
        name: "Antique Cuirass",
        icon: "/images/equipment/small/antiquecuirass.webp",
        attribute: ["+15% Max HP", "+10% DMG Reduction"],
        passive: "Deter",
        pdesc:
          "Reduce the enemy's Hybrid ATK by 5% for 3s when damaged by them. Stacks up to 5 time(s).",
      },
      {
        name: "Enhanced Antique Cuirass",
        icon: "/images/equipment/small/enhanced_antiquecuirass.webp",
        attribute: ["+15% Max HP", "+10% DMG Reduction"],
        passive: "Deter",
        pdesc:
          "When damaged by an enemy, reduce their Hybrid ATK by 8% for 4s. Stacks up to 5 time(s).",
      },
    ],
  },
  {
    id: 19,
    category: "Defense",
    special: "Resurrection",
    variants: [
      {
        name: "Immortality",
        icon: "/images/equipment/small/immortality.webp",
        attribute: ["+30 Hybrid DEF"],
        passive: "Immortal",
        pdesc: "Resurrect after 2s upon death and gets 40% HP.",
      },
      {
        name: "Enhanced Immortality",
        icon: "/images/equipment/small/enhanced_immortality.webp",
        attribute: ["+30 Hybrid DEF"],
        passive: "Immortal",
        pdesc: "Resurrect in 2s upon death and gain 60% HP.",
      },
    ],
  },
  {
    id: 20,
    category: "Defense",
    special: "Control Resistance",
    variants: [
      {
        name: "Brute Force Breastplate",
        icon: "/images/equipment/small/bruteforcebreastplate.webp",
        attribute: ["+25 Hybrid DEF"],
        passive: "Brute Force",
        pdesc:
          "Deal DMG to gain 6% Hybrid ATK for 3s, stacking up to 5 times. At max stacks, gain 50% Control Duration resistance.",
      },
      {
        name: "Enhanced Brute Force Breastplate",
        icon: "/images/equipment/small/enhanced_bruteforcebreastplate.webp",
        attribute: ["+25 Hybrid DEF"],
        passive: "Brute Force & Unafraid",
        pdesc:
          "Deal DMG to gain 6% Hybrid ATK for 3s, stacking up to 5 times. At max stacks, gain 50% Control Duration resistance. Gain 20% DMG Reduction.",
      },
    ],
  },
  {
    id: 21,
    category: "Defense",
    special: "Group DEF",
    variants: [
      {
        name: "Oracle",
        icon: "/images/equipment/small/oracle.webp",
        attribute: ["+25 Hybrid DEF"],
        passive: "Magic Resist",
        pdesc:
          "When battle starts, allied Heroes in the same row gain 25 Hybrid DEF.",
      },
      {
        name: "Enhanced Oracle",
        icon: "/images/equipment/small/enhanced_oracle.webp",
        attribute: ["+25 Hybrid DEF"],
        passive: "Magic Resist",
        pdesc:
          "When battle starts, allies in the same row as the carrier gain 25 Hybrid DEF and 8% HP.",
      },
    ],
  },
  {
    id: 22,
    category: "Defense",
    special: "Tank Mana Regeneration",
    variants: [
      {
        name: "Dominance Ice",
        icon: "/images/equipment/small/dominanceice.webp",
        attribute: ["+60 Magic DEF", "+15% Max HP"],
        passive: "Arctic Cold",
        pdesc:
          "Reduce nearby enemy Heroes' ATK Speed by 20%. Increase Mana Regen by 25% when taking DMG.",
      },
      {
        name: "Enhanced Dominance Ice",
        icon: "/images/equipment/small/enhanced_dominanceice.webp",
        attribute: ["+60 Magic DEF", "+15% Max HP"],
        passive: "Arctic Cold",
        pdesc:
          "Reduce nearby enemies' ATK Speed by 20%. Increase Mana Regen by 50% when taking DMG.",
      },
    ],
  },
  {
    id: 23,
    category: "Defense",
    special: "Taunt & DEF",
    variants: [
      {
        name: "Ancient Wrath",
        icon: "/images/equipment/small/ancientwrath.webp",
        attribute: ["+30% Max HP"],
        passive: "Provocation",
        pdesc:
          "When battle starts, taunt nearby enemies. The carrier gains 10 Hybrid DEF for each enemy targeting them.",
      },
      {
        name: "Enhanced Ancient Wrath",
        icon: "/images/equipment/small/enhanced_ancientwrath.webp",
        attribute: ["+30% Max HP"],
        passive: "Provocation",
        pdesc:
          "When battle starts, taunt nearby enemies. The carrier gains 25 Hybrid DEF for each enemy targeting them.",
      },
    ],
  },
  {
    id: 24,
    category: "Magic Crystal",
    special: "Obtain Bruiser Synergy",
    variants: [
      {
        name: "Bruiser Magic Crystal",
        icon: "/images/equipment/small/bruiser_magiccrystal.webp",
        passive: "Potent",
        pdesc: "Equip on a Hero to grant Bruiser Synergy.",
      },
    ],
  },
  {
    id: 25,
    category: "Magic Crystal",
    special: "Obtain Dauntless Synergy",
    variants: [
      {
        name: "Dauntless Magic Crystal",
        icon: "/images/equipment/small/dauntless_magiccrystal.webp",
        passive: "Fearless",
        pdesc: "Equip on a Hero to grant Dauntless Synergy.",
      },
    ],
  },
  {
    id: 26,
    category: "Magic Crystal",
    special: "Obtain Defender Synergy",
    variants: [
      {
        name: "Defender Magic Crystal",
        icon: "/images/equipment/small/defender_magiccrystal.webp",
        passive: "Fortitude",
        pdesc: "Equip on a Hero to grant Defender Synergy.",
      },
    ],
  },
  {
    id: 27,
    category: "Magic Crystal",
    special: "Obtain Weapon Master Synergy",
    variants: [
      {
        name: "Weapon Master Magic Crystal",
        icon: "/images/equipment/small/weaponmaster_magiccrystal.webp",
        passive: "Frenzy",
        pdesc: "Equip on a Hero to grant Weapon Master Synergy.",
      },
    ],
  },
  {
    id: 28,
    category: "Magic Crystal",
    special: "Obtain Marksman Synergy",
    variants: [
      {
        name: "Marksman Magic Crystal",
        icon: "/images/equipment/small/marksman_magiccrystal.webp",
        passive: "Precision",
        pdesc: "Equip on a Hero to grant Marksman Synergy.",
      },
    ],
  },
  {
    id: 29,
    category: "Magic Crystal",
    special: "Obtain Mage Synergy",
    variants: [
      {
        name: "Mage Magic Crystal",
        icon: "/images/equipment/small/mage_magiccrystal.webp",
        passive: "Mysticism",
        pdesc: "Equip on a Hero to grant Mage Synergy.",
      },
    ],
  },
  {
    id: 30,
    category: "Magic Crystal",
    special: "Obtain Stargazer Synergy",
    variants: [
      {
        name: "Stargazer Magic Crystal",
        icon: "/images/equipment/small/stargazer_magiccrystal.webp",
        passive: "Universe",
        pdesc: "Equip on a Hero to grant Stargazer Synergy.",
      },
    ],
  },
  {
    id: 31,
    category: "Magic Crystal",
    special: "Obtain Swiftblade Synergy",
    variants: [
      {
        name: "Swiftblade Magic Crystal",
        icon: "/images/equipment/small/swiftblade_magiccrystal.webp",
        passive: "Conceal",
        pdesc: "Equip on a Hero to grant Swiftblade Synergy.",
      },
    ],
  },
  {
    id: 32,
    category: "Magic Crystal",
    special: "Obtain Soul Vessels Synergy",
    variants: [
      {
        name: "Soul Vessels Magic Crystal",
        icon: "/images/equipment/small/soulvessels_magiccrystal.webp",
        passive: "Subdue",
        pdesc: "Equip on a Hero to grant Soul Vessels Synergy.",
      },
    ],
  },
  {
    id: 33,
    category: "Magic Crystal",
    special: "Obtain Shadowcell Synergy",
    variants: [
      {
        name: "Shadowcell Magic Crystal",
        icon: "/images/equipment/small/shadowcell_magiccrystal.webp",
        passive: "Raid",
        pdesc: "Equip on a Hero to grant Shadowcell Synergy.",
      },
    ],
  },
  {
    id: 34,
    category: "Magic Crystal",
    special: "Obtain Starwing Synergy",
    variants: [
      {
        name: "Starwing Magic Crystal",
        icon: "/images/equipment/small/starwing_magiccrystal.webp",
        passive: "Muster",
        pdesc: "Equip on a Hero to grant Starwing Synergy.",
      },
    ],
  },
  {
    id: 35,
    category: "Magic Crystal",
    special: "Obtain KOF Synergy",
    variants: [
      {
        name: "KOF Magic Crystal",
        icon: "/images/equipment/small/kof_magiccrystal.webp",
        passive: "King of Fighters",
        pdesc: "Equip on a Hero to grant KOF Synergy.",
      },
    ],
  },
  {
    id: 36,
    category: "Magic Crystal",
    special: "Obtain Luminexus Synergy",
    variants: [
      {
        name: "Luminexus Magic Crystal",
        icon: "/images/equipment/small/luminexus_magiccrystal.webp",
        passive: "Radiance",
        pdesc: "Equip on a Hero to grant Luminexus Synergy.",
      },
    ],
  },
  {
    id: 37,
    category: "Magic Crystal",
    special: "Obtain Aspirants Synergy",
    variants: [
      {
        name: "Aspirants Magic Crystal",
        icon: "/images/equipment/small/aspirants_magiccrystal.webp",
        passive: "Aspirant",
        pdesc: "Equip on a Hero to grant Aspirants Synergy.",
      },
    ],
  },
  {
    id: 38,
    category: "Magic Crystal",
    special: "Obtain Toy Mischief Synergy",
    variants: [
      {
        name: "Toy Mischief Magic Crystal",
        icon: "/images/equipment/small/toymischief_magiccrystal.webp",
        passive: "Playful",
        pdesc: "Equip on a Hero to grant Toy Mischief Synergy.",
      },
    ],
  },
  {
    id: 39,
    category: "Magic Crystal",
    special: "Capacity +1",
    variants: [
      {
        name: "Go Go Magic Crystal",
        icon: "/images/equipment/small/gogo_magiccrystal.webp",
        passive: "Expansion",
        pdesc: "Increase Capacity by 1.",
      },
    ],
  },
  {
    id: 40,
    category: "Special",
    special: "Creep Round",
    variants: [
      {
        name: "Inspire",
        icon: "/images/equipment/small/inspire.webp",
        passive: "Inspire",
        pdesc:
          "Provide 20/25/30/40% ATK Speed (increases with Stage progression).",
      },
      {
        name: "Inspire - Burning Will",
        icon: "/images/equipment/small/inspire_burningwill.webp",
        passive: "Burning Will",
        pdesc:
          "Provide 15/20/25/30% ATK Speed (increases with Stage progression).",
      },
      {
        name: "Inspire - Thunderous Will",
        icon: "/images/equipment/small/inspire_thunderouswill.webp",
        passive: "Thunderous Will",
        pdesc:
          "When battle starts, grants 10/12/15/20% ATK Speed to self and adjacent allied Heroes. This bonus increases with Stage progression.",
      },
    ],
  },
  {
    id: 41,
    category: "Special",
    special: "Creep Round",
    variants: [
      {
        name: "Revitalize",
        icon: "/images/equipment/small/revitalize.webp",
        passive: "Revitalize",
        pdesc:
          "Summon a Healing Spring for 5s when HP is below 50%, restoring 6% HP every 1s for allies within the area.",
      },
      {
        name: "Revitalize - Sacred Offering",
        icon: "/images/equipment/small/revitalize_sacredoffering.webp",
        passive: "Crimson Chalcedony",
        pdesc: "When HP falls below 50%, restore 10% HP every 1s for 5s.",
      },
      {
        name: "Revitalize - Sacred Tide",
        icon: "/images/equipment/small/revitalize_sacredtide.webp",
        passive: "Azure Spring",
        pdesc:
          "When HP falls below 50%, restore 8% HP every 1s to nearby allies within the area for 5s.",
      },
    ],
  },
  {
    id: 42,
    category: "Special",
    special: "Creep Round",
    variants: [
      {
        name: "Purify",
        icon: "/images/equipment/small/purify.webp",
        attribute: ["+15% ATK Speed"],
        passive: "Purify",
        pdesc:
          "When battle starts, gain control and displacement immunity for the first 30s.",
      },
      {
        name: "Purify - Dragonblood Ritual",
        icon: "/images/equipment/small/purify_dragonblood.webp",
        attribute: ["+20% ATK Speed"],
        passive: "Purify",
        pdesc:
          "When battle starts, gain control and displacement immunity for the first 30s.",
      },
      {
        name: "Purify - Frost Immune",
        icon: "/images/equipment/small/purify_frostimmune.webp",
        attribute: ["+10% ATK Speed"],
        passive: "Frost Immune",
        pdesc:
          "When battle starts, grants self and adjacent allied Heroes 15s of Control Resistance and 10% ATK Speed.",
      },
    ],
  },
  {
    id: 43,
    category: "Special",
    special: "Creep Round",
    variants: [
      {
        name: "Aegis",
        icon: "/images/equipment/small/aegis.webp",
        passive: "Aegis",
        pdesc:
          "When battle starts, grants a Shield equal to 25% HP that lasts 25s to the Hero and allies within 1 tile to the left and right.",
      },
      {
        name: "Aegis - Ember Fortress",
        icon: "/images/equipment/small/aegis_emberfortress.webp",
        passive: "Dragonsoul Shield",
        pdesc:
          "When battle starts, gain a Shield equal to 30% HP that lasts 25s.",
      },
      {
        name: "Aegis - Azure Guardian",
        icon: "/images/equipment/small/aegis_azureguardian.webp",
        passive: "Froststeel Shield",
        pdesc:
          "When battle starts, grants a Shield equal to 20% HP that lasts 25s to self and allied Heroes within 1 tile to the left and right.",
      },
    ],
  },
  {
    id: 44,
    category: "Special",
    special: "Creep Round",
    variants: [
      {
        name: "Retribution",
        icon: "/images/equipment/small/retribution.webp",
        passive: "Retribution",
        pdesc:
          "Provide 20/25/30/40% extra DMG (increases with Stage progression).",
      },
      {
        name: "Retribution - Crimson Hunt",
        icon: "/images/equipment/small/retribution_crimsonhunt.webp",
        passive: "Crimson Hunt",
        pdesc: "Get 20/25/30/40% extra DMG (increases with Stage progression).",
      },
      {
        name: "Retribution - Azure Hunt",
        icon: "/images/equipment/small/retribution_azurehunt.webp",
        passive: "Azure Hunt",
        pdesc:
          "When battle starts, grants 10/15/20/25% extra DMG to self and adjacent allied Heroes. This bonus increases with Stage progression.",
      },
    ],
  },

  // === Synergy Exclusive (Each Own ID) ===
  {
    id: 45,
    category: "Special",
    special: "Synergy Exclusive",
    variants: [
      {
        name: "Exorcist's Seal (Basic)",
        icon: "/images/equipment/small/exorcistseal_basic.webp",
        attribute: ["+25% Hybrid ATK"],
      },
    ],
  },
  {
    id: 46,
    category: "Special",
    special: "Synergy Exclusive",
    variants: [
      {
        name: "Exorcist's Seal (Advanced)",
        icon: "/images/equipment/small/exorcistseal_advanced.webp",
        attribute: ["+50% Hybrid ATK"],
      },
    ],
  },
  {
    id: 47,
    category: "Special",
    special: "Synergy Exclusive",
    variants: [
      {
        name: "Party Rocket",
        icon: "/images/equipment/small/partyrocket.webp",
        attribute: ["+30% Hybrid ATK"],
        passive: "Rocket Frenzy",
        pdesc:
          "Launch 2/4/6/10 missiles at random enemies on cast (based on Toy Mischief Synergy count). Each missile deals True DMG equal to 30% of Hybrid ATK. At 10-Toy Mischief, missiles upgrade and DMG increases to 90% of Hybrid ATK.",
      },
    ],
  },
  {
    id: 48,
    category: "Special",
    special: "Synergy Exclusive",
    variants: [
      {
        name: "Prankster Ring",
        icon: "/images/equipment/small/pranksterring.webp",
        attribute: ["+30% Max HP"],
        passive: "Splash Prank",
        pdesc:
          "Deal Magic DMG to surrounding enemies every 3s based on Toy Mischief Synergy count: 6%/9%/12% of own HP. At 10-Toy Mischief, ATK range expands and DMG increases to 24% of HP.",
      },
    ],
  },
  {
    id: 49,
    category: "Special",
    special: "Synergy Exclusive",
    variants: [
      {
        name: "Jolly Cannon",
        icon: "/images/equipment/small/jollycannon.webp",
        attribute: ["+50% Hybrid ATK"],
        passive: "Boom!",
        pdesc:
          "When battle starts, the carrier is launched forward (prioritizing enemy back row). Deals 700/1000/1300/8000 True DMG upon landing based on Synergy count.",
      },
    ],
  },

  // === Commander Item (Each Own ID) ===
  {
    id: 50,
    category: "Special",
    special: "Commander Item",
    variants: [
      {
        name: "Lunar Longbow",
        icon: "/images/equipment/small/lunarlongbow.webp",
        attribute: ["+40% ATK Speed"],
        passive: "Moonlight",
        pdesc:
          "Heal the ally with the lowest HP percentage for 1200 HP when killing enemies.",
      },
    ],
  },
  {
    id: 51,
    category: "Special",
    special: "Commander Item",
    variants: [
      {
        name: "Great Dragon Spear",
        icon: "/images/equipment/small/greatdragonspear.webp",
        passive: "Dragon Flurry",
        pdesc:
          "Each Basic ATK has a 28% chance of being followed by 2 extra ATK(s).",
      },
    ],
  },
  {
    id: 52,
    category: "Special",
    special: "Commander Item",
    variants: [
      {
        name: "Fluffy's Rage",
        icon: "/images/equipment/small/fluffyrage.webp",
        passive: "Explosive Fluffy",
        pdesc:
          "The carrier leaves a Fluffy behind each time their location changes. The Fluffy will explode and stun enemy Heroes in the same row and column.",
      },
    ],
  },
  {
    id: 53,
    category: "Special",
    special: "Commander Item",
    variants: [
      {
        name: "Shadow Twinblades",
        icon: "/images/equipment/small/shadowtwinblades.webp",
        attribute: ["+35% Hybrid ATK", "+25% Max HP"],
        passive: "Execute",
        pdesc:
          "Karina executes adjacent enemy Heroes when their HP falls below 18%.",
      },
    ],
  },
  {
    id: 54,
    category: "Special",
    special: "Commander Item",
    variants: [
      {
        name: "Supreme Blades",
        icon: "/images/equipment/small/supremeblades.webp",
        attribute: ["+35% Hybrid ATK", "+25% Max HP"],
        passive: "Gift",
        pdesc:
          "When adjacent enemy's HP falls below 18%, Karina will execute them. After execution, the carrier gains 2% extra DMG, up to 36%.",
      },
    ],
  },
  {
    id: 55,
    category: "Special",
    special: "Commander Item",
    variants: [
      {
        name: "Tier 3 Boxing Glove",
        icon: "/images/equipment/small/boxingglove_t3.webp",
        passive: "Glory",
        pdesc: "Copy 3-Gold Hero.",
      },
    ],
  },
  {
    id: 56,
    category: "Special",
    special: "Commander Item",
    variants: [
      {
        name: "Tier 4 Boxing Glove",
        icon: "/images/equipment/small/boxingglove_t4.webp",
        passive: "Glory",
        pdesc: "Copy 4-Gold Hero.",
      },
    ],
  },
  {
    id: 57,
    category: "Special",
    special: "Commander Item",
    variants: [
      {
        name: "Tier 5 Boxing Glove",
        icon: "/images/equipment/small/boxingglove_t5.webp",
        passive: "Glory",
        pdesc: "Copy 5-Gold Hero.",
      },
    ],
  },

  // === Uncategorized (Each Own ID) ===
  {
    id: 58,
    category: "Special",
    special: "Uncategorized",
    variants: [
      {
        name: "Mirror Device",
        icon: "/images/equipment/small/mirrordevice.webp",
        passive: "Mirror",
        pdesc: "Clone an allied Hero.",
      },
    ],
  },
  {
    id: 59,
    category: "Special",
    special: "Uncategorized",
    variants: [
      {
        name: "Claude's Theft Device",
        icon: "/images/equipment/small/claudetheftdevice.webp",
        passive: "Neat Pick",
        pdesc:
          "When battle starts, copy 2 pieces of random Equipment from the Equipment pool. Counts as equipping 3 pieces of Equipment.",
      },
    ],
  },
  {
    id: 60,
    category: "Special",
    special: "Uncategorized",
    variants: [
      {
        name: "Blessing Shifter",
        icon: "/images/equipment/small/blessingshifter.webp",
        passive: "Blessing",
        pdesc:
          "Grants Blessing to one Hero and removes another existing Blessing effect. (Drops in Round III-3, the Creep Round.)",
      },
    ],
  },
  {
    id: 61,
    category: "Special",
    special: "Uncategorized",
    variants: [
      {
        name: "Equipment Duplicator",
        icon: "/images/equipment/small/equipmentduplicator.webp",
        passive: "Copycat",
        pdesc:
          "Use on Equipment to get 3 copies of it. (Special Equipment cannot be copied.)",
      },
    ],
  },
];
