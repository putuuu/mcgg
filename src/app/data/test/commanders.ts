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
    icon: "/images/commander/Texture2D/Hero45057.png",
    image: "/images/commander/Texture2D/Hero45057.png",
    description:
      "An economy-focused commander who converts Gold into long-term scaling power, allowing steady growth across stages.",
    sdescription: "Economy-based scaling commander.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Golden Legacy",
        description:
          "No longer earns Interest. Starting from Stage I/II/III and subsequent stages, gain 2/3/3 bonus Gold each round. At the end of each round, all Gold is consumed to upgrade Lancelot.",
        icon: "/images/commanderSkill/lancelot1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Golden Blade",
        description:
          "From Stage I/II/III onward, bonus Gold gained each round increases to 3/4/4.",
        icon: "/images/commanderSkill/lancelot2.png",
      },
    ],
  },
  {
    id: 2,
    name: "Harley",
    slug: "harley",
    type: "Strategy",
    icon: "/images/commander/Texture2D/Hero45125.png",
    image: "/images/commander/Texture2D/Hero45125.png",
    description:
      "A high-roll focused commander that accelerates access to 5-Gold Heroes by manipulating the Shop early.",
    sdescription: "High-roll commander for fast 5-Gold units.",
    skills: [
      {
        level: 1,
        type: "Active",
        name: "Midas Touch!",
        description:
          "Available from Round II-4. Resets the Shop 1 time(s), filling it with 3 5-Gold Hero(es).",
        icon: "/images/commanderSkill/harley1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Gold! Gold! Gold!",
        description:
          "The number of 5-Gold Heroes appearing in the Shop becomes 5.",
        icon: "/images/commanderSkill/harley2.png",
      },
    ],
  },
  {
    id: 3,
    name: "Popol and Kupa",
    slug: "popol-and-kupa",
    type: "Resource",
    icon: "/images/commander/Texture2D/Hero45148.png",
    image: "/images/commander/Texture2D/Hero45148.png",
    description:
      "A utility-focused commander that disrupts enemies by copying Heroes and generating extra Gold through traps.",
    sdescription: "Utility commander with copy mechanics.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Copy Trap",
        description:
          "During the Preparation Stage, a movable Copy Trap will be generated on your side of the battlefield. When an enemy Hero steps into the trap, obtain their 1-Star version, up to 1 time(s) per round.",
        icon: "/images/commanderSkill/popol-and-kupa1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Hunter's Mark",
        description:
          "Gain 1 Gold when copying a Hero. If no Hero is copied by the end of the round, gain 2 Gold.",
        icon: "/images/commanderSkill/popol-and-kupa2.png",
      },
    ],
  },
  {
    id: 4,
    name: "Yu Zhong",
    slug: "yu-zhong",
    type: "Strategy",
    icon: "/images/commander/Texture2D/Hero45151.png",
    image: "/images/commander/Texture2D/Hero45151.png",
    description:
      "A treasure-focused commander that upgrades Go Go Cards and grants powerful Black Dragon Treasures to accelerate scaling.",
    sdescription: "Treasure-based scaling commander.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Soul Grip",
        description:
          "Go Go Cards at the start of Round II-3 are upgraded by 1 quality tier. If already at maximum quality, receive a random Black Dragon Treasure instead.",
        icon: "/images/commanderSkill/yu-zhong1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Cursing Touch",
        description:
          "The quality upgrade also applies to Go Go Cards at the start of Round III-3. Receive an extra Black Dragon Treasure x1 during the Round I-2 Go Go Card selection.",
        icon: "/images/commanderSkill/yu-zhong2.png",
      },
    ],
  },
  {
    id: 5,
    name: "Minotaur",
    slug: "minotaur",
    type: "Strategy",
    icon: "/images/commander/Texture2D/Hero45191.png",
    image: "/images/commander/Texture2D/Hero45191.png",
    description:
      "An equipment-focused commander that enhances items and converts equipment upgrades into additional Gold.",
    sdescription: "Equipment enhancement commander.",
    skills: [
      {
        level: 1,
        type: "Active",
        name: "Molten Decree",
        description:
          "Select an Equipment to enhance. Can be used 3 time(s). (Special Equipment and Enhanced Equipment cannot be enhanced.)",
        icon: "/images/commanderSkill/minotaur1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Bloodline Resonance",
        description:
          "Obtain 1 Equipment Chest(s). Gain 4 Gold for every Equipment enhanced by this skill.",
        icon: "/images/commanderSkill/minotaur2.png",
      },
    ],
  },
  {
    id: 6,
    name: "Kagura",
    slug: "kagura",
    type: "Survival",
    icon: "/images/commander/Texture2D/Hero45206.png",
    image: "/images/commander/Texture2D/Hero45206.png",
    description:
      "A defensive support commander that provides powerful shields to keep key Heroes alive during critical moments.",
    sdescription: "Shield-based support commander.",
    skills: [
      {
        level: 1,
        type: "Active",
        name: "Shield Umbrella",
        description:
          "During Preparation Stage, you can select a Hero to gain Shield. When that Hero's HP first drops below 50% in battle, they gain a Shield equal to 60% of their Max HP.",
        icon: "/images/commanderSkill/kagura1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Yin Yang Gathering",
        description: "Shield value increases to 125% of Max HP.",
        icon: "/images/commanderSkill/kagura2.png",
      },
    ],
  },
  {
    id: 7,
    name: "Johnson",
    slug: "johnson",
    type: "Combat",
    icon: "/images/commander/Texture2D/Hero45216.png",
    image: "/images/commander/Texture2D/Hero45216.png",
    description:
      "A synergy-manipulation commander that provides exclusive Johnny units and controls Shop outcomes to create powerful, focused compositions.",
    sdescription: "Synergy-focused commander with exclusive units.",
    skills: [
      {
        level: 1,
        type: "Active",
        name: "Johnny, Go!",
        description:
          "Tap the skill to open an exclusive Shop. Choose 1 out of 5 Johnnies (3-Gold) for free. Each Johnny has 2 different Synergies randomly selected from Johnson's Synergy Pool. After selection, the Shop will only refresh Johnnies with the same Synergies. The exclusive shop displays up to 2 different Faction Synergies. Johnny's skill \"Spanner Spin\" flings a wrench at the area with the most enemies, dealing damage and stunning them for 0.5 / 0.7 / 1 s. Johnnies obtained by other Commanders do not have Synergies.",
        icon: "/images/commanderSkill/johnson1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Transform!",
        description:
          "When battle starts, Johnny charges toward the area with the most enemies, dealing Magic Damage equal to 10% of his Max HP to surrounding enemies. Johnny is immune to crowd control while transformed.",
        icon: "/images/commanderSkill/johnson2.png",
      },
    ],
  },
  {
    id: 8,
    name: "Lunox",
    slug: "lunox",
    type: "Strategy",
    icon: "/images/commander/Texture2D/Hero45226.png",
    image: "/images/commander/Texture2D/Hero45226.png",
    description:
      "A blessing-focused commander that grants random Blessings to enhance synergies and generate additional value.",
    sdescription: "Blessing-based synergy commander.",
    skills: [
      {
        level: 1,
        type: "Active",
        name: "Power of Chaos",
        description:
          "Usable after Stage I-2. Lunox selects a Hero without a Blessing and grants them a random Blessing. Can be used 1 time(s). Blessing: The Hero with the Blessing effect adds 1 count to their Role or Faction Synergy. Blessings granted by Lunox cannot be transferred using the Blessing Shifter.",
        icon: "/images/commanderSkill/lunox1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Power of Order",
        description:
          "After Lunox casts her skill, gain 4 random Hero(es) from the Synergy it grants (affected by current Shop refresh probabilities) and 3 Gold.",
        icon: "/images/commanderSkill/lunox2.png",
      },
    ],
  },
  {
    id: 9,
    name: "Lylia",
    slug: "lylia",
    type: "Strategy",
    icon: "/images/commander/Texture2D/Hero45236.png",
    image: "/images/commander/Texture2D/Hero45236.png",
    description:
      "A late-game focused commander that accelerates access to high-cost Heroes and boosts their combat power after losses.",
    sdescription: "High-cost hero focused commander.",
    skills: [
      {
        level: 1,
        type: "Active",
        name: "Go, Tharz!",
        description:
          "Can be used after Capacity reaches 8. The Shop can't be used later on and you immediately gain 1 Hero(es) from the highest-cost Heroes deployed. Upon winning a round, gain 1 more. If that Hero is sold out in the Shared Hero Pool, gain the next highest cost Hero instead.",
        icon: "/images/commanderSkill/lylia1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Party Time!",
        description:
          "Upon losing, grant 15% Hybrid ATK to the highest-cost Hero deployed. If tied, prioritize the one with more Equipment.",
        icon: "/images/commanderSkill/lylia2.png",
      },
    ],
  },
  {
    id: 10,
    name: "Aamon",
    slug: "aamon",
    type: "Strategy",
    icon: "/images/commander/Texture2D/Hero45246.png",
    image: "/images/commander/Texture2D/Hero45246.png",
    description:
      "An economy-oriented commander that generates Mirror Devices through hero upgrades and converts them into large amounts of Gold.",
    sdescription: "Mirror Device economy commander.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Blade of Resonance",
        description:
          "Obtain 1 Mirror Device at the start of the match. When a Hero reaches 2-Star, you'll get 1 Shard(s). 7 Shard(s) will be automatically converted into 1 Mirror Device(s). You can obtain up to 2 Mirror Devices.",
        icon: "/images/commanderSkill/aamon1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Skybreaker Blade",
        description: "Gain 12 extra Gold each time a Mirror Device is created.",
        icon: "/images/commanderSkill/aamon2.png",
      },
    ],
  },
  {
    id: 11,
    name: "Cyclops",
    slug: "cyclops",
    type: "Resource",
    icon: "/images/commander/Texture2D/Hero45261.png",
    image: "/images/commander/Texture2D/Hero45261.png",
    description:
      "A comeback-oriented commander that gains value from eliminated opponents and provides emergency power spikes when HP drops low.",
    sdescription: "Comeback and value-steal commander.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Astral Blessing",
        description:
          "When another Commander is eliminated, Cyclops opens a Star-Core Jar to gain Gold equal to 14% of the eliminated Commander's lineup value and 1 random Hero(es) from their lineup at their current star level(s).",
        icon: "/images/commanderSkill/cyclops1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Astral Resonance",
        description:
          "When your HP first drops to 80 or below, gain 3 Hero(es) of your current highest-count Synergy and 1 Equipment Chest(s).",
        icon: "/images/commanderSkill/cyclops2.png",
      },
    ],
  },
  {
    id: 12,
    name: "Zilong",
    slug: "zilong",
    type: "Combat",
    icon: "/images/commander/Texture2D/Hero46081.png",
    image: "/images/commander/Texture2D/Hero46081.png",
    description:
      "A carry-oriented commander that empowers a single hero with the Great Dragon Spear, enabling strong sustained damage and clutch survivability.",
    sdescription: "Single-carry enhancement commander.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Great Dragon Spear",
        description:
          "Gain Zilong's Great Dragon Spear at the start of the match, granting the carrier a 20% chance to activate 2 extra attacks every Basic ATK. You can purchase up to 1 trait(s) in the Shop to enhance the Great Dragon Spear. Traits include: Control Immunity & Lifesteal (become immune to control for 25s and restore 16% HP based on damage dealt), Gold Bandit (each Basic ATK has a 5% chance to grant 1 Gold), and Low-HP Shield (when HP drops below 30%, gain a Shield equal to 50% of Max HP).",
        icon: "/images/commanderSkill/zilong1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Dragon's Roar",
        description:
          "You can purchase 2 additional trait(s) to further enhance the Great Dragon Spear.",
        icon: "/images/commanderSkill/zilong2.png",
      },
    ],
  },
  {
    id: 13,
    name: "Chou",
    slug: "chou",
    type: "Resource",
    icon: "/images/commander/Texture2D/Hero47011.png",
    image: "/images/commander/Texture2D/Hero47011.png",
    description:
      "A simple economy commander that provides consistent Gold income regardless of battle outcome.",
    sdescription: "Stable gold income commander.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Warrior's Honor",
        description: "Gain 2 Gold after winning a round.",
        icon: "/images/commanderSkill/chou1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Win or Lose",
        description: "Additionally, gain 2 Gold after losing a round.",
        icon: "/images/commanderSkill/chou2.png",
      },
    ],
  },
  {
    id: 14,
    name: "Wanwan",
    slug: "wanwan",
    type: "Combat",
    icon: "/images/commander/Texture2D/Hero47021.png",
    image: "/images/commander/Texture2D/Hero47021.png",
    description:
      "An aggressive carry commander that executes low-HP enemies and rewards successful takedowns with extra Gold.",
    sdescription: "Execution-focused carry commander.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Tiger Pounce",
        description:
          "The first time an enemy Hero's HP drops below 30%, Wanwan attacks the enemy Hero with the lowest HP 20 time(s), dealing 130/235/335/430 Physical DMG depending on the current stage.",
        icon: "/images/commanderSkill/wanwan1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Reinforcement",
        description: "Gain 1 Gold when killing an enemy Hero, up to 3 times.",
        icon: "/images/commanderSkill/wanwan2.png",
      },
    ],
  },
  {
    id: 15,
    name: "Nana",
    slug: "nana",
    type: "Survival",
    icon: "/images/commander/Texture2D/Hero47031.png",
    image: "/images/commander/Texture2D/Hero47031.png",
    description:
      "A survival-focused commander that prevents early elimination and provides recovery resources after taking damage.",
    sdescription: "Survivability and recovery commander.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Molina's Blessing",
        description: "Nana avoids her first death, surviving with 1 HP.",
        icon: "/images/commanderSkill/nana1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Molina's Gift",
        description:
          "Receive 2 Equipment Chest(s) and 3 Gold upon taking DMG for the first time.",
        icon: "/images/commanderSkill/nana2.png",
      },
    ],
  },
  {
    id: 16,
    name: "Ling",
    slug: "ling",
    type: "Combat",
    icon: "/images/commander/Texture2D/Hero47041.png",
    image: "/images/commander/Texture2D/Hero47041.png",
    description:
      "A duelist-focused commander that forces isolated battles and permanently strengthens allies through repeated victories.",
    sdescription: "Duel-based scaling commander.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Showdown",
        description:
          "Ling creates a Dueling Ring on the Chessboard that lasts for 25s. When battle starts, the ally in this ring will drag the farthest enemy into the ring and fight with only Basic ATKs. The ally in the Dueling Ring gains 50% extra ATK Speed.",
        icon: "/images/commanderSkill/ling1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Transcendent Stance",
        description:
          "After winning a duel, permanently gain 4% extra Hybrid ATK (up to 15 stacks).",
        icon: "/images/commanderSkill/ling2.png",
      },
    ],
  },
  {
    id: 17,
    name: "Layla",
    slug: "layla",
    type: "Combat",
    icon: "/images/commander/Texture2D/Hero47051.png",
    image: "/images/commander/Texture2D/Hero47051.png",
    description:
      "A damage-focused commander that continuously ramps up attack speed and converts high damage output into additional Heroes.",
    sdescription: "Damage-scaling carry commander.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Hologram: Destruction Rush",
        description:
          "Layla generates a hologram that emits lasers to penetrate enemies, dealing 260 Physical DMG and increasing ATK Speed by 3% each round.",
        icon: "/images/commanderSkill/layla1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Hologram: Synergy Freedom",
        description:
          "For every 8000 DMG dealt, obtain a Hero from your highest activated Synergy in the next round.",
        icon: "/images/commanderSkill/layla2.png",
      },
    ],
  },
  {
    id: 18,
    name: "Vale",
    slug: "vale",
    type: "Strategy",
    icon: "/images/commander/Texture2D/Hero47061.png",
    image: "/images/commander/Texture2D/Hero47061.png",
    description:
      "A shop-control commander that manipulates Shop refreshes to consistently find Heroes sharing the same Synergies.",
    sdescription: "Shop refresh and synergy control commander.",
    skills: [
      {
        level: 1,
        type: "Active",
        name: "Updraft",
        description:
          "Select a Hero, then refresh the Shop to display Heroes that share at least one Synergy with the selected Hero, and also obtain 1 free Hero purchase from this refreshed Shop. Gain 1 skill charge(s) at the start of Rounds II-1 and II-3.",
        icon: "/images/commanderSkill/vale1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Shifting Wind",
        description:
          "Gain 1 additional charge(s) at the start of Rounds III-1 and IV-1.",
        icon: "/images/commanderSkill/vale2.png",
      },
    ],
  },
  {
    id: 19,
    name: "Fanny",
    slug: "fanny",
    type: "Combat",
    icon: "/images/commander/Texture2D/Hero47081.png",
    image: "/images/commander/Texture2D/Hero47081.png",
    description:
      "A tempo-oriented commander that accelerates board strength by launching an extra Hero into battle after a short preparation.",
    sdescription: "Hero launcher tempo commander.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Blade Dancer",
        description:
          "Fanny constructs a Hero Launcher outside the battlefield. It takes 13 round(s) to complete and grants 7 Gold upon completion. You can drag a Hero onto the Launcher, and the Hero will join the fight when battle starts.",
        icon: "/images/commanderSkill/fanny1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Heart of the Blade",
        description:
          "The Hero Launcher construction completes in only 6 rounds, and the launched Hero gains 45% extra HP.",
        icon: "/images/commanderSkill/fanny2.png",
      },
    ],
  },
  {
    id: 20,
    name: "Angela",
    slug: "angela",
    type: "Survival",
    icon: "/images/commander/Texture2D/Hero47091.png",
    image: "/images/commander/Texture2D/Hero47091.png",
    description:
      "A pure support commander that protects key allies with shields and mana-focused enhancements.",
    sdescription: "Protective support commander.",
    skills: [
      {
        level: 1,
        type: "Active",
        name: "Love's Protection",
        description:
          "Select an allied Hero to protect, increasing their Mana Regen to 180% and granting a Shield equal to 25% of Max HP.",
        icon: "/images/commanderSkill/angela1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Ripples of Love",
        description:
          "Angela grants additional protection to the Hero with the highest Power. This protection prioritizes Heroes with Mana.",
        icon: "/images/commanderSkill/angela2.png",
      },
    ],
  },
  {
    id: 21,
    name: "Moskov",
    slug: "moskov",
    type: "Strategy",
    icon: "/images/commander/Texture2D/Hero47111.png",
    image: "/images/commander/Texture2D/Hero47111.png",
    description:
      "A high-risk, high-reward damage commander that empowers a chosen Hero through shadow rituals and duplication.",
    sdescription: "Shadow-based damage amplifier.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Power of Shadow",
        description:
          "Creates a Shadow Field on the side of the Battle Area. Place the designated 1-Gold, 2-Gold, 3-Gold, and 4-Gold Heroes one by one to complete the ritual. Place a Hero in it to gain Power of Shadows, increasing Hybrid ATK by 22% and HP by 22%. Each time the designated Hero completes the ritual, refund their cost plus 2 Gold.",
        icon: "/images/commanderSkill/moskov1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Dark Star",
        description:
          "Generates two additional 1-Star copies of the enhanced Hero.",
        icon: "/images/commanderSkill/moskov2.png",
      },
    ],
  },
  {
    id: 22,
    name: "Guinevere",
    slug: "guinevere",
    type: "Resource",
    icon: "/images/commander/Texture2D/Hero47121.png",
    image: "/images/commander/Texture2D/Hero47121.png",
    description:
      "An economy-oriented commander focused on generating free Heroes and early equipment advantages.",
    sdescription: "Free hero and item economy commander.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Super Magic",
        description:
          "Obtain 1 Equipment at match start. 14% chance for 1 free Hero to appear in the Shop after auto-refresh.",
        icon: "/images/commanderSkill/guinevere1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Mystic Evolution",
        description: "Chance of finding free Hero(es) increases to 25%.",
        icon: "/images/commanderSkill/guinevere2.png",
      },
    ],
  },
  {
    id: 23,
    name: "Lukas",
    slug: "lukas",
    type: "Combat",
    icon: "/images/commander/Texture2D/Hero47131.png",
    image: "/images/commander/Texture2D/Hero47131.png",
    description:
      "A control-oriented commander that disrupts enemies with powerful shockwaves and crowd control based on enemy Max HP.",
    sdescription: "AOE control and disruption commander.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Unleash the Beast",
        description:
          "Generate a statue on the battlefield. When battle starts, it unleashes Shockwave Blast before vanishing. Shockwave Blast deals Physical DMG equal to 20% of the target's Max HP to enemies in medium range and stuns them for 1s.",
        icon: "/images/commanderSkill/lukas1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Frenzy",
        description:
          "Shockwave Blast's power increases to 45% of target's Max HP as Physical DMG, and stun duration increases to 1.5s. If the statue is placed in the front row, the Sacred Beast unleashes Wild Power before vanishing, dealing 45% of target's Max HP as Physical DMG in medium range and reducing their Hybrid DEF by 65.",
        icon: "/images/commanderSkill/lukas2.png",
      },
    ],
  },
  {
    id: 24,
    name: "Miya",
    slug: "miya",
    type: "Combat",
    icon: "/images/commander/Texture2D/Hero47141.png",
    image: "/images/commander/Texture2D/Hero47141.png",
    description:
      "A damage-focused commander that enhances a chosen carry with rapid follow-up attacks and Max HP–based physical damage.",
    sdescription: "Attack speed and single-target burst commander.",
    skills: [
      {
        level: 1,
        type: "Active",
        name: "Lunar Longbow",
        description:
          "Choose an allied Hero for coordinated attacks. After every 6 Basic ATKs of the chosen Hero, Miya rapidly fires 5 arrows at enemies, each dealing Physical DMG equal to 7% of the target's Max HP.",
        icon: "/images/commanderSkill/miya1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Moonshade Arrow",
        description:
          "Miya fires 3 additional split arrows, each dealing Physical DMG equal to 4% of the enemy's Max HP. Additionally, the chosen Hero gains 40% ATK Speed.",
        icon: "/images/commanderSkill/miya2.png",
      },
    ],
  },
  {
    id: 25,
    name: "Aurora",
    slug: "aurora",
    type: "Strategy",
    icon: "/images/commander/Texture2D/Hero47151.png",
    image: "/images/commander/Texture2D/Hero47151.png",
    description:
      "An economy-oriented commander that rewards patience by freezing the Shop and converting Frost Energy into valuable resources.",
    sdescription:
      "Slow-roll economy commander with delayed high-value rewards.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Frost Treasures",
        description:
          "At the start of each round, Aurora freezes your Shop. If you don't purchase any Heroes in a round, you'll gain 2 Frost Energy. When Frost Energy reaches 6, it grants random rewards worth no less than 9 Gold, then begins accumulating again.",
        icon: "/images/commanderSkill/aurora1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Icy Blessing",
        description: "Increases Frost Energy gained to 3.",
        icon: "/images/commanderSkill/aurora2.png",
      },
    ],
  },
  {
    id: 26,
    name: "Karina",
    slug: "karina",
    type: "Combat",
    icon: "/images/commander/Texture2D/Hero47161.png",
    image: "/images/commander/Texture2D/Hero47161.png",
    description:
      "An execution-focused commander that empowers a carry to instantly finish off low-HP enemies and snowball damage through repeated executions.",
    sdescription: "Execution-based damage scaling commander.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Shadow Twinblades",
        description:
          "Obtain Shadow Twinblades at the start. When an enemy Hero adjacent to the carrier has HP below 18%, Karina executes the target.",
        icon: "/images/commanderSkill/karina1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Twinblades Evolution",
        description:
          "After Karina executes a target, the carrier gains 2% extra damage, stacking up to 36%.",
        icon: "/images/commanderSkill/karina2.png",
      },
    ],
  },
  {
    id: 27,
    name: "Valir",
    slug: "valir",
    type: "Strategy",
    icon: "/images/commander/Texture2D/Hero47171.png",
    image: "/images/commander/Texture2D/Hero47171.png",
    description:
      "A tempo-focused commander that accelerates Commander EXP and provides early advantage through enhanced Go Go Card selection.",
    sdescription: "Commander EXP acceleration and card advantage.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Blazing Inferno",
        description:
          "Valir can choose Go Go Cards twice in the Go Go Card Stage of Round II-3.",
        icon: "/images/commanderSkill/valir1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Incinerate",
        description:
          "Gain extra Commander EXP based on Card Quality in Round II-3: 20 EXP for purple cards and 30 EXP for blue cards.",
        icon: "/images/commanderSkill/valir2.png",
      },
    ],
  },
  {
    id: 28,
    name: "Dyrroth",
    slug: "dyrroth",
    type: "Strategy",
    icon: "/images/commander/Texture2D/Hero47181.png",
    image: "/images/commander/Texture2D/Hero47181.png",
    description:
      "A high-risk, high-reward commander that upgrades Heroes through devouring mechanics and synergy manipulation.",
    sdescription: "Hero devour and quality upgrade mechanics.",
    skills: [
      {
        level: 1,
        type: "Active",
        name: "Abyssal Devourer",
        description:
          "After Round I-3, Dyrroth devours a 1-Star Hero every 3 rounds and returns a Hero with higher quality (Gold cost +1, max 5-Gold).",
        icon: "/images/commanderSkill/dyrroth1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Abyssal Favor",
        description:
          "Dyrroth gains 1 Commander EXP per devour. After every 2 devours, the next devour grants 2 Heroes sharing one Synergy with the devoured Hero (preferably 1 Role + 1 Faction). If unavailable, grants higher-quality Heroes from a random Synergy instead (Gold cost +1, max 5-Gold).",
        icon: "/images/commanderSkill/dyrroth2.png",
      },
    ],
  },
  {
    id: 29,
    name: "Paquito",
    slug: "paquito",
    type: "Strategy",
    icon: "/images/commander/Texture2D/Hero47191.png",
    image: "/images/commander/Texture2D/Hero47191.png",
    description:
      "A commander focused on duplication mechanics, allowing key Heroes to be quickly upgraded through Boxing Gloves.",
    sdescription: "Hero duplication and fast upgrade setup.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Fist of Glory",
        description:
          "In Round III-1 and Round III-1, obtain Boxing Gloves for 3-Gold and 4-Gold Heroes respectively. Equip the Glove to a Hero of the corresponding cost to obtain their 1-Star copy x2.",
        icon: "/images/commanderSkill/paquito1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Champ Stance",
        description:
          "In Round IV-1, obtain a Boxing Glove for 5-Gold Heroes. Equip the Glove to a Hero of this cost to obtain their 1-Star copy x2.",
        icon: "/images/commanderSkill/paquito2.png",
      },
    ],
  },
  {
    id: 30,
    name: "Gusion",
    slug: "gusion",
    type: "Strategy",
    icon: "/images/commander/Texture2D/Hero47201.png",
    image: "/images/commander/Texture2D/Hero47201.png",
    description:
      "A synergy-manipulation commander that temporarily grants Role Synergies through a Light Sigil, enabling flexible mid-game transitions and gold gain.",
    sdescription: "Temporary Role Synergy injection and gold generation.",
    skills: [
      {
        level: 1,
        type: "Passive",
        name: "Light Sigil",
        description:
          "Gusion summons a Light Sigil displaying a random Role Synergy. Drag a Hero onto the Sigil to grant them the Synergy. The Sigil then expires, granting 8 Gold. You have 3 chances to refresh the Role Synergy. Synergies granted by the Light Sigil are not inherited by other players.",
        icon: "/images/commanderSkill/gusion1.png",
      },
      {
        level: 2,
        type: "Passive",
        name: "Sigil Resonance",
        description:
          "After Stage II, the Light Sigil can be used one additional time.",
        icon: "/images/commanderSkill/gusion2.png",
      },
    ],
  },
];
