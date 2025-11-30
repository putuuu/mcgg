export interface CommanderSkill {
  level: number;
  type: string;
  name: string;
  description: string;
  icon: string;
}

export interface Commander {
  id: number;
  name: string;
  slug: string;
  type: string;
  icon: string;
  image: string;
  skills: CommanderSkill[];
  description: string;
  sdescription: string;
}

export const commanders: Commander[] = [
  {
    id: 1,
    name: "Lancelot",
    slug: "lancelot",
    type: "Resource",
    icon: "/images/commander/small/Lancelot.webp",
    image: "/images/commander/Lancelot.png",
    description:
      "Lancelot is a commander who sacrifices Interest entirely—every gold earned is automatically consumed at the end of each round to upgrade his level. He's commonly used in low-cost reroll strategies, focusing on 1 or 2-cost heroes. However, he's also capable of reaching higher levels faster than most, which opens up possibilities for fast 8/9 comps for late-game rerolling. The drawback is limited gold flexibility, making it harder to consistently roll for expensive units.",
    sdescription:
      "Sacrifices Interest to upgrade automatically—ideal for fast level-up or reroll strategies.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Golden Legacy",
        icon: "/images/commanderSkill/lancelot1.png",
        description:
          "No longer earns Interest. Starting from I/II/III and subsequent stages, gain 2/3/3 bonus Gold each round. At the end of each round, all Gold is consumed to upgrade Lancelot.",
      },
      {
        level: 2,
        type: "Passive",
        name: "Golden Blade",
        icon: "/images/commanderSkill/lancelot2.png",
        description:
          "From Stage I/II/III onward, bonus Gold increases to 3/4/5.",
      },
    ],
  },
  {
    id: 2,
    name: "Popol and Kupa",
    slug: "popol-and-kupa",
    type: "Strategy",
    icon: "/images/commander/small/PopolandKupa.webp",
    image: "/images/commander/PopolandKupa.png",
    description:
      "Popol and Kupa focus on creating copy traps that allow you to clone enemy heroes during battle. The traps are set in the preparation phase and can grant you copies of enemy units when triggered. As the skill levels up, the number of traps increases, allowing for more cloning opportunities.",
    sdescription:
      "Places traps that copy enemy heroes—great for creative and adaptive strategies.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Copy Trap",
        icon: "/images/commanderSkill/popol1.png",
        description:
          "During the Preparation Stage, a movable Copy Trap will be generated on your side of the battlefield. When an enemy Hero steps into the trap, obtain their 1-Star version, up to 1 time(s) per round.",
      },
      {
        level: 2,
        type: "Passive",
        name: "Hunter's Mark",
        icon: "/images/commanderSkill/popol2.png",
        description: "Generate 1 extra Copy Trap(s) from Round II-3.",
      },
    ],
  },
  {
    id: 3,
    name: "Kagura",
    slug: "kagura",
    type: "Survival",
    icon: "/images/commander/small/Kagura.webp",
    image: "/images/commander/Kagura.png",
    description:
      "Kagura provides shields to allied heroes, helping them survive critical moments in battle. She can select a hero to gain a large shield that triggers when their HP drops low, making her ideal for sustaining carries or frontline heroes.",
    sdescription:
      "Provides strong shields to allies, enhancing their survivability in battle.",
    skills: [
      {
        level: 1,
        type: "Active",
        name: "Shield Umbrella",
        icon: "/images/commanderSkill/kagura1.png",
        description:
          "During Preparation Stage, you can select a Hero to gain Shield. When that Hero's HP first drops below 50% in battle, they gain a Shield equal to 60% of their Max HP.",
      },
      {
        level: 2,
        type: "Passive",
        name: "Yin Yang Gathering",
        icon: "/images/commanderSkill/kagura2.png",
        description: "Shield value increases to 125% of Max HP.",
      },
    ],
  },
  {
    id: 4,
    name: "Lunox",
    slug: "lunox",
    type: "Strategy",
    icon: "/images/commander/small/Lunox.webp",
    image: "/images/commander/Lunox.png",
    description:
      "Lunox grants blessings to heroes, allowing them to contribute to additional synergies. Her active skill lets her grant random blessings, and as she levels up, she gains the ability to summon additional heroes from the synergy she strengthens.",
    sdescription:
      "Grants random blessings to heroes and summons synergy-based units for flexible team building.",
    skills: [
      {
        level: 1,
        type: "Active",
        name: "Power of Chaos",
        icon: "/images/commanderSkill/lunox1.png",
        description:
          "Usable after Stage I-2. Lunox selects a Hero without a Blessing and grants them a random Blessing. Can be used 1 time(s). Blessing: The Hero with the Blessing effect adds 1 count to their Role or Faction Synergy. Blessings granted by Lunox cannot be transferred using the Blessing Shifter.",
      },
      {
        level: 2,
        type: "Passive",
        name: "Power of Order",
        icon: "/images/commanderSkill/lunox2.png",
        description:
          "After Lunox casts her skill, gain 4 random Hero(es) from the Synergy it grants (affected by current Shop refresh probabilities).",
      },
    ],
  },
  {
    id: 5,
    name: "Lylia",
    slug: "lylia",
    type: "Strategy",
    icon: "/images/commander/small/Lylia.webp",
    image: "/images/commander/Lylia.png",
    description:
      "Lylia offers risky but high-reward strategies. Her skill can disable the Shop and instantly provide top-cost heroes from your field, allowing quick power spikes at the cost of flexibility. Losing rounds empowers her carry further.",
    sdescription:
      "Sacrifices shop control for instant high-cost heroes and comeback power boosts.",
    skills: [
      {
        level: 1,
        type: "Active",
        name: "Go, Tharz!",
        icon: "/images/commanderSkill/lylia1.png",
        description:
          "Can be used after Capacity reaches 8: The Shop can't be used later on and you immediately gain 1 Hero(es) from the highest-cost Heroes deployed. Upon winning a round, gain 1 more. If that Hero is sold out in the Shared Hero Pool, gain the next highest cost Hero instead.",
      },
      {
        level: 2,
        type: "Passive",
        name: "Party Time!",
        icon: "/images/commanderSkill/lylia2.png",
        description:
          "Upon losing, grant 15% Hybrid ATK to the highest-cost Hero deployed. If tied, prioritize the one with more Equipment.",
      },
    ],
  },
  {
    id: 6,
    name: "Aamon",
    slug: "aamon",
    type: "Resource",
    icon: "/images/commander/small/Aamon.webp",
    image: "/images/commander/Aamon.png",
    description:
      "Aamon focuses on creating Mirror Devices when your heroes reach 2 stars. These devices can multiply units and generate gold, making him ideal for compositions that upgrade heroes frequently.",
    sdescription:
      "Generates Mirror Devices when heroes reach 2 stars—great for reroll and economy strategies.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Blade of Resonance",
        icon: "/images/commanderSkill/aamon1.png",
        description:
          "When a Hero reaches 2-Star, you'll get 1 Shard(s). 7 Shard(s) will be automatically converted into 1 Mirror Device(s). You can obtain up to 3 Mirror Devices.",
      },
      {
        level: 2,
        type: "Passive",
        name: "Skybreaker Blade",
        icon: "/images/commanderSkill/aamon2.png",
        description: "Gain 12 extra Gold each time a Mirror Device is created.",
      },
    ],
  },
  {
    id: 7,
    name: "Chou",
    slug: "chou",
    type: "Resource",
    icon: "/images/commander/small/Chou.webp",
    image: "/images/commander/Chou.png",
    description:
      "Chou helps maintain a steady economy by granting gold whether you win or lose. This makes him a stable choice for consistent income throughout the match.",
    sdescription:
      "Earns gold every round—consistent economy support for stable progress.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Warrior's Honor",
        icon: "/images/commanderSkill/chou1.png",
        description: "Gain 1 Gold after winning a round.",
      },
      {
        level: 2,
        type: "Passive",
        name: "Win or Lose",
        icon: "/images/commanderSkill/chou2.png",
        description: "Additionally, gain 2 Gold after losing a round.",
      },
    ],
  },
  {
    id: 8,
    name: "Wanwan",
    slug: "wanwan",
    type: "Combat",
    icon: "/images/commander/small/Wanwan.webp",
    image: "/images/commander/Wanwan.png",
    description:
      "Wanwan is an offensive commander who focuses on finishing off weakened enemies. She rewards aggressive play by granting gold for kills and powerful burst attacks during fights.",
    sdescription:
      "Aggressive commander who strikes weakened enemies and earns gold from kills.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Tiger Pounce",
        icon: "/images/commanderSkill/wanwan1.png",
        description:
          "The first time an enemy Hero's HP drops below 30%, Wanwan attacks the enemy Hero with the lowest HP 20 time(s), dealing 120/220/320/400 Physical DMG depending on the current stage.",
      },
      {
        level: 2,
        type: "Passive",
        name: "Reinforcement",
        icon: "/images/commanderSkill/wanwan2.png",
        description: "Gain 1 Gold when killing an enemy Hero, up to 3 times.",
      },
    ],
  },
  {
    id: 9,
    name: "Nana",
    slug: "nana",
    type: "Survival",
    icon: "/images/commander/small/Nana.webp",
    image: "/images/commander/Nana.png",
    description:
      "Nana provides defensive support by preventing fatal damage and granting valuable resources after being hit. She’s ideal for survival-focused compositions.",
    sdescription:
      "Prevents fatal damage and grants rewards after taking hits—great for sustain strategies.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Molina's Blessing",
        icon: "/images/commanderSkill/nana1.png",
        description: "Nana avoids her first death, surviving with 1 HP.",
      },
      {
        level: 2,
        type: "Passive",
        name: "Molina's Gift",
        icon: "/images/commanderSkill/nana2.png",
        description:
          "Receive 2 Equipment Chest(s) and 3 Gold upon taking DMG for the first time.",
      },
    ],
  },
  {
    id: 10,
    name: "Ling",
    slug: "ling",
    type: "Combat",
    icon: "/images/commander/small/Ling.webp",
    image: "/images/commander/Ling.png",
    description:
      "Ling creates a dueling ring that isolates one-on-one fights, rewarding victories with permanent attack boosts. He’s ideal for aggressive and high-damage strategies.",
    sdescription:
      "Creates dueling zones that reward victories with stacking attack power.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Showdown",
        icon: "/images/commanderSkill/ling1.png",
        description:
          "Ling creates a Dueling Ring on the Chessboard that lasts for 25s. When battle starts, the ally in this ring will drag the farthest enemy into the ring and fight with only Basic ATKs. The ally in the Dueling Ring gains 50% extra ATK Speed.",
      },
      {
        level: 2,
        type: "Passive",
        name: "Transcendent Stance",
        icon: "/images/commanderSkill/ling2.png",
        description:
          "After winning a duel, permanently gain 5% extra Hybrid ATK (stacks up to 15 stacks).",
      },
    ],
  },
  {
    id: 11,
    name: "Layla",
    slug: "layla",
    type: "Combat",
    icon: "/images/commander/small/Layla.webp",
    image: "/images/commander/Layla.png",
    description:
      "Layla generates holographic duplicates that deal additional damage and increase attack speed. Her skills also reward damage dealt with new synergy-based heroes.",
    sdescription:
      "Boosts damage output and summons synergy heroes from high damage performance.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Hologram: Destruction Rush",
        icon: "/images/commanderSkill/layla1.png",
        description:
          "Layla generates a hologram that emits lasers to penetrate enemies, dealing 310 Physical DMG, and increasing ATK speed by 3% each round.",
      },
      {
        level: 2,
        type: "Passive",
        name: "Hologram: Synergy Freedom",
        icon: "/images/commanderSkill/layla2.png",
        description:
          "For every 8000 DMG dealt, obtain a Hero from your highest activated Synergy next round.",
      },
    ],
  },
  {
    id: 12,
    name: "Vale",
    slug: "vale",
    type: "Strategy",
    icon: "/images/commander/small/Vale.webp",
    image: "/images/commander/Vale.png",
    description:
      "Vale provides synergy-based shop refreshing. His skills let you target heroes of the same synergy and gain free purchases, encouraging precise team-building strategies.",
    sdescription:
      "Refreshes shop for synergy-matching heroes and gives free hero purchases.",
    skills: [
      {
        level: 1,
        type: "Active",
        name: "Updraft",
        icon: "/images/commanderSkill/vale1.png",
        description:
          "Select a Hero, then refresh the Shop to display Heroes that share at least one Synergy with the selected Hero, and also get 1 free Hero purchase from this refreshed Shop. Gain 1 skill charge(s) at the start of Rounds II-1 and II-3.",
      },
      {
        level: 2,
        type: "Passive",
        name: "Shifting Wind",
        icon: "/images/commanderSkill/vale2.png",
        description:
          "Gain 1 additional charge(s) at the start of Rounds III-1 and IV-1.",
      },
    ],
  },
  {
    id: 13,
    name: "Zilong",
    slug: "zilong",
    type: "Combat",
    icon: "/images/commander/small/Zilong.webp",
    image: "/images/commander/Zilong.png",
    description:
      "Zilong equips the Great Dragon Spear, gaining various traits that enhance survivability, gold gain, or control. As he levels up, he can unlock more traits for further customization.",
    sdescription:
      "Wields the Great Dragon Spear with customizable traits to boost combat and utility.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Great Dragon Spear",
        icon: "/images/commanderSkill/zilong1.png",
        description:
          "Obtain the Great Dragon Spear at the start of the match: Each Basic ATK has a 28% chance to attack 2 additional time(s). You can purchase up to 1 trait(s) in the Shop to enhance the Great Dragon Spear.",
      },
      {
        level: 2,
        type: "Passive",
        name: "Dragon's Roar",
        icon: "/images/commanderSkill/zilong2.png",
        description:
          "You can purchase 2 additional trait(s) to enhance the Great Dragon Spear.",
      },
    ],
  },
  {
    id: 14,
    name: "Fanny",
    slug: "fanny",
    type: "Resource",
    icon: "/images/commander/small/Fanny.webp",
    image: "/images/commander/Fanny.png",
    description:
      "Fanny constructs a Hero Launcher that automatically joins battles after several rounds. It can be accelerated and grants bonuses to the launched hero once completed.",
    sdescription:
      "Builds a Hero Launcher that joins fights and grants extra HP after upgrade.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Blade Dancer",
        icon: "/images/commanderSkill/fanny1.png",
        description:
          "Fanny constructs a Hero Launcher outside the battlefield. It takes 13 round(s) to complete and grants 4 Gold upon completion. Then, you can drag a Hero onto the Launcher, and the Hero will join the fight when battle starts.",
      },
      {
        level: 2,
        type: "Passive",
        name: "Heart of the Blade",
        icon: "/images/commanderSkill/fanny2.png",
        description:
          "The Hero Launcher construction completes in only 6 rounds, and the launched Hero gains 45% extra HP.",
      },
    ],
  },
  {
    id: 15,
    name: "Angela",
    slug: "angela",
    type: "Survival",
    icon: "/images/commander/small/Angela.webp",
    image: "/images/commander/Angela.png",
    description:
      "Angela protects key allies by boosting their Mana Regen and providing shields. At higher levels, she automatically supports the strongest hero in the lineup.",
    sdescription:
      "Protects key allies with shields and mana regen—ideal for defensive playstyles.",
    skills: [
      {
        level: 1,
        type: "Active",
        name: "Love's Protection",
        icon: "/images/commanderSkill/angela1.png",
        description:
          "Select an allied Hero to protect, increasing their Mana Regen to 180% and granting a Shield equal to 20% of Max HP.",
      },
      {
        level: 2,
        type: "Passive",
        name: "Ripples of Love",
        icon: "/images/commanderSkill/angela2.png",
        description:
          "Angela grants additional protection to the Hero with the highest Power. This protection prioritizes Heroes with Mana.",
      },
    ],
  },
  {
    id: 16,
    name: "Moskov",
    slug: "moskov",
    type: "Combat",
    icon: "/images/commander/small/Moskov.webp",
    image: "/images/commander/Moskov.png",
    description:
      "Moskov’s Power of Shadow ritual empowers a chosen hero by offering large stat boosts and gold refunds during the ritual. His second skill doubles down by creating additional hero copies.",
    sdescription:
      "Empowers a chosen hero with great stats and copies via shadow rituals.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Power of Shadow",
        icon: "/images/commanderSkill/moskov1.png",
        description:
          "Creates a Shadow Field on the side of the Battle Area. Place specific Heroes one by one to complete the ritual, then empower a Hero with 22% Hybrid ATK and HP. Refunds cost plus extra gold.",
      },
      {
        level: 2,
        type: "Passive",
        name: "Dark Star",
        icon: "/images/commanderSkill/moskov2.png",
        description:
          "Generates two additional 1-Star copies of the enhanced Hero.",
      },
    ],
  },
  {
    id: 17,
    name: "Guinevere",
    slug: "guinevere",
    type: "Resource",
    icon: "/images/commander/small/Guinevere.webp",
    image: "/images/commander/Guinevere.png",
    description:
      "Guinevere offers random free heroes when refreshing the Shop, allowing surprise bonuses. Her upgraded skill improves this chance, helping reroll compositions thrive.",
    sdescription:
      "Chance to find free heroes during shop refreshes—great for reroll compositions.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Super Magic",
        icon: "/images/commanderSkill/guinevere1.png",
        description:
          "When refreshing the Shop, there's a 14% chance to find 1 free Hero(es).",
      },
      {
        level: 2,
        type: "Passive",
        name: "Mystic Evolution",
        icon: "/images/commanderSkill/guinevere2.png",
        description: "Chance of finding free Hero(es) increases to 27%.",
      },
    ],
  },
  {
    id: 18,
    name: "Lukas",
    slug: "lukas",
    type: "Combat",
    icon: "/images/commander/small/Lukas.webp",
    image: "/images/commander/Lukas.png",
    description:
      "Lukas summons a Sacred Beast statue that releases a powerful shockwave before vanishing. The upgraded version greatly increases damage and adds defense reduction.",
    sdescription:
      "Summons a Sacred Beast statue that deals heavy AoE damage and reduces enemy defenses.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Unleash the Beast",
        icon: "/images/commanderSkill/lukas1.png",
        description:
          "Generate a statue that unleashes Shockwave Blast, dealing Physical DMG equal to 20% of target's Max HP to enemies in range and stuns them for 1s.",
      },
      {
        level: 2,
        type: "Passive",
        name: "Frenzy",
        icon: "/images/commanderSkill/lukas2.png",
        description:
          "Increases Shockwave Blast to 45% Max HP and adds 1.5s stun. Front-row placement triggers Wild Power that reduces enemy DEF.",
      },
    ],
  },
  {
    id: 19,
    name: "Miya",
    slug: "miya",
    type: "Combat",
    icon: "/images/commander/small/Miya.webp",
    image: "/images/commander/Miya.png",
    description:
      "Miya assists an allied hero by triggering bonus coordinated attacks, scaling with attack speed. Her upgrades enhance attack output for both Miya and her ally.",
    sdescription:
      "Triggers bonus coordinated attacks and boosts attack speed for allies.",
    skills: [
      {
        level: 1,
        type: "Active",
        name: "Lunar Longbow",
        icon: "/images/commanderSkill/miya1.png",
        description:
          "Choose an allied Hero for coordinated attacks. After every 6 Basic ATKs of the chosen Hero, Miya rapidly fires 5 arrows dealing Physical DMG equal to 7% of target's Max HP.",
      },
      {
        level: 2,
        type: "Passive",
        name: "Moonshade Arrow",
        icon: "/images/commanderSkill/miya2.png",
        description:
          "Miya fires 3 extra arrows, each dealing Physical DMG equal to 4% of Max HP. The chosen Hero gains 40% ATK Speed.",
      },
    ],
  },
  {
    id: 22,
    name: "Johnson",
    slug: "johnson",
    type: "Strategy",
    icon: "/images/commander/small/Hero45078.webp",
    image: "/images/commander/Hero45078.png",
    description:
      "Johnson opens an exclusive shop to recruit special 'Johnny' units with unique random Synergies. After selection, the shop will only refresh Johnnies with the same Synergies. His unique mechanic adds control and creativity in building team compositions.",
    sdescription:
      "Opens a unique shop to recruit Johnny units with random Synergies for creative strategies.",
    skills: [
      {
        level: 1,
        type: "Active",
        icon: "/images/commanderSkill/johnson1.png",
        name: "Johnny, Go!",
        description:
          "Tap the skill to open an exclusive shop. Choose 1 out of 5 Johnnies (3-Gold) for free. Each Johnny has 2 different Synergies randomly selected from Johnson's Synergy Pool.",
      },
      {
        level: 2,
        type: "Passive",
        icon: "/images/commanderSkill/johnson2.png",
        name: "Transform!",
        description:
          "When battle starts, Johnny charges toward enemies, dealing Magic DMG equal to 10% of Max HP and becoming immune to crowd control while transformed.",
      },
    ],
  },
  {
    id: 23,
    name: "Valir",
    slug: "valir",
    type: "Strategy",
    icon: "/images/commander/small/Hero45079.webp",
    image: "/images/commander/Hero45079.png",
    description:
      "Valir focuses on Go Go Card optimization, providing additional card selection and Commander EXP bonuses based on card quality. Ideal for flexible builds that benefit from enhanced card rewards.",
    sdescription:
      "Grants bonus Go Go Card selections and Commander EXP for high-quality cards.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/valir1.png",
        name: "Blazing Inferno",
        description:
          "Valir can choose Go Go Cards twice in the Go Go Card Stage of Round II-3.",
      },
      {
        level: 2,
        type: "Passive",
        icon: "/images/commanderSkill/valir2.png",
        name: "Incinerate",
        description:
          "Gain extra Commander EXP based on Card Quality in Round II-3: 16 EXP for purple card, 24 EXP for blue card.",
      },
    ],
  },
  {
    id: 24,
    name: "Dyrroth",
    slug: "dyrroth",
    type: "Combat",
    icon: "/images/commander/small/Hero45080.webp",
    image: "/images/commander/Hero45080.png",
    description:
      "Dyrroth devours Heroes every few rounds to transform them into higher-quality versions, gaining Commander EXP and sometimes duplicating Heroes with shared Synergies. Excellent for scaling rosters and long-term team growth.",
    sdescription:
      "Devours Heroes to strengthen them and gain EXP; may duplicate based on Synergy.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/dyrroth1.png",
        name: "Abyssal Devourer",
        description:
          "After Round I-4, Dyrroth can devour a 1-Star Hero every 3 rounds to transform them into a higher-quality Hero.",
      },
      {
        level: 2,
        type: "Passive",
        icon: "/images/commanderSkill/dyrroth2.png",
        name: "Abyssal Favor",
        description:
          "Gain 1 Commander EXP per devour. Every 2 devours, the next grants 2 Heroes sharing Synergy with the devoured one.",
      },
    ],
  },
  {
    id: 25,
    name: "Paquito",
    slug: "paquito",
    type: "Combat",
    icon: "/images/commander/small/Hero45081.webp",
    image: "/images/commander/Hero45081.png",
    description:
      "Paquito’s fighting spirit grants items at specific rounds to duplicate Heroes of different Gold costs. Great for reinforcing high-value Heroes and boosting late-game potential.",
    sdescription:
      "Earns items to duplicate 3–5-Gold Heroes at specific rounds.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/paquito1.png",
        name: "Fist of Glory",
        description:
          "In Round II-1 and Round III-1, gain items that can be used on 3-Gold and 4-Gold Heroes respectively to duplicate them.",
      },
      {
        level: 2,
        type: "Passive",
        icon: "/images/commanderSkill/paquito2.png",
        name: "Champ Stance",
        description:
          "In Round IV-1, gain extra items for 5-Gold Heroes to duplicate them.",
      },
    ],
  },
  {
    id: 26,
    name: "Cyclops",
    slug: "cyclops",
    type: "Resource",
    icon: "/images/commander/small/Hero45082.webp",
    image: "/images/commander/Hero45082.png",
    description:
      "Cyclops gains resources from eliminated Commanders and boosts lineup value, obtaining Gold and Heroes from fallen opponents. He also rewards survival by granting Heroes and Equipment when HP drops low.",
    sdescription:
      "Collects Gold and Heroes from eliminated foes; gains rewards when HP drops.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/cyclops1.png",
        name: "Astral Blessing",
        description:
          "When another Commander is eliminated, gain Gold equal to 14% of their lineup value and 1 random Hero from their lineup.",
      },
      {
        level: 2,
        type: "Passive",
        icon: "/images/commanderSkill/cyclops2.png",
        name: "Astral Resonance",
        description:
          "When HP first drops to 80 or below, gain 3 Heroes of your highest Synergy and 1 Equipment Chest.",
      },
    ],
  },
];
