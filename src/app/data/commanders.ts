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
    icon: "/images/commander/small/Hero45057.webp",
    image: "/images/commander/Hero45057.png",
    description:
      "Lancelot is a commander who sacrifices Interest entirely—every gold earned is automatically consumed at the end of each round to upgrade his level. He's commonly used in low-cost reroll strategies, focusing on 1 or 2-cost heroes. However, he's also capable of reaching higher levels faster than most, which opens up possibilities for fast 8/9 comps for late-game rerolling. The drawback is limited gold flexibility, making it harder to consistently roll for expensive units",
    sdescription:
      "Sacrifices Interest for bonus Gold each round and upgrades passively. Great for reroll or fast 8/9 strategies.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/lancelot1.png",
        name: "Golden Legacy",
        description:
          "No longer earns Interest. Starting from I/II/III and subsequently stages, gain 2/3/3 bonus Gold each round. At the end of each round, all Gold is consumed to upgrade Lancelot.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/lancelot2.png",
        type: "Passive",
        name: "Golden Blade",
        description:
          "From Stage I/II/III onward, bonus Gold is increased to 3/4/4.",
      },
    ],
  },
  {
    id: 2,
    name: "Kagura",
    slug: "kagura",
    type: "Survival",
    icon: "/images/commander/small/Hero45206.webp",
    image: "/images/commander/Hero45206.png",
    description:
      "Kagura grants a protective shield to a selected hero when their HP drops below 50%. This shield can absorb lethal damage, allowing the unit to survive clutch moments and potentially turn the tide of battle. Choosing the right hero to receive Kagura’s umbrella is key—ideally a high-impact carry or a unit that activates crucial synergy bonuses. Timing and positioning matter, as the shield only triggers once per round. Kagura excels in compositions that rely on protecting fragile carries or frontline heroes who need just a bit more sustain to dominate the fight.",
    sdescription:
      "Grants shield to one hero when HP falls below 50%. Prevents death and enables clutch survivability. Best used on high-impact or synergy-critical units",
    skills: [
      {
        level: 1,
        type: "active",
        icon: "/images/commanderSkill/kagura1.png",
        name: "Shield Umbrella",
        description:
          "During Preparation Stage, you can select a Hero to gain Shield. When that Hero's HP first drops below 50% in battle, they gain a Shield equal to 60% of their Max  HP.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/kagura2.png",
        type: "Passive",
        name: "Yin Yang Gathering",
        description: "Shield value increases to 125% of Max HP.",
      },
    ],
  },
  {
    id: 3,
    name: "Aamon",
    slug: "aamon",
    type: "Strategy",
    icon: "/images/commander/small/Hero45246.webp",
    image: "/images/commander/Hero45246.png",
    description:
      "Aamon specializes in generating Mirror Devices by collecting shards from 2-star Heroes, making him a strong pick for aggressive reroll strategies. Early on, players stack low-cost units to reach multiple 2-star and 3-star heroes while delaying level-ups. Once 3 Mirror Devices are collected, the strategy pivots into fast 8/9 — to search for a high-cost carry. Since you still need 6 real copies of the hero, reaching higher levels increases your odds. With bonus Gold earned from Mirror creation, Aamon can reroll freely without sacrificing momentum, making him a powerful option for players focused on early board strength into late-game spike.",
    sdescription:
      "Generates Mirror Devices from 2-star Heroes. Reroll early, then rush level 8/9 to 3-star a high-cost carry",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/aamon1.png",
        name: "Blade of Resonance",
        description:
          "When a Hero reaches 2-Star, you'll get 1 Shard(s). 7 Shard(s) will be automatically converted into 1 Mirror Device(s). You can obtain up to 3 Mirror Devices.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/aamon2.png",
        type: "Passive",
        name: "Skybreaker Blade",
        description: "Gain 8 extra Gold each time a Mirror Device is created.",
      },
    ],
  },
  {
    id: 4,
    name: "Chou",
    slug: "chou",
    type: "Resource",
    icon: "/images/commander/small/Hero47011.webp",
    image: "/images/commander/Hero47011.png",
    description:
      "Chou offers unmatched economy stability, granting 1 Gold on every win and 2 Gold on every loss — making him the safest pick for long-term planning. This consistent flow of income allows players to build a strong board without sacrificing interest or tempo. Chou fits both win streak and economy-based strategies. He can stabilize early, maintain streaks, and transition into higher levels earlier than most commanders. His flexibility makes him reliable in most metas, especially for players who prefer clean curve management over risky all-ins.",
    sdescription:
      "Earns Gold every round, win or lose. Excellent for stable economy and strong board transitions.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/chou1.png",
        name: "Warrior's Honor",
        description: "Gain 1 Gold after winning a round.",
      },
      {
        level: 2,
        type: "Passive",
        icon: "/images/commanderSkill/chou2.png",
        name: "Win or Lose",
        description: "Additionally, gain 2 gold after losing a round.",
      },
    ],
  },
  {
    id: 5,
    name: "Wanwan",
    slug: "wanwan",
    type: "Combat",
    icon: "/images/commander/small/Hero47021.webp",
    image: "/images/commander/Hero47021.png",
    description:
      "Wanwan is a combat-focused commander with stable early-game economy. Her skill triggers when an enemy Hero falls below 30% HP, launching a flurry of attacks that can easily secure kills — especially in early rounds when enemies lack defensive items. This reliable burst damage often nets up to 3 Gold per round, giving her a strong economic start without sacrificing board strength. While her ability to earn Gold drops off in the late game as enemies gain more survivability, the increasing damage from her skill across stages keeps her relevant in fights. Wanwan is a solid pick for players who want consistent early income and strong board presence throughout the match.",
    sdescription:
      "Triggers bonus damage on low-HP enemies to earn Gold early. Great for stable economy and strong early-game pressure.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/wanwan1.png",
        name: "Tiger Pounce",
        description:
          "The first time an enemy Hero's HP drops belo 30%, Wanwan attacks the enemy Hero with the lowest HP 20 time(s), dealing 120/220/320/400 Physical DMG depending on the current stage.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/wanwan2.png",
        type: "Passive",
        name: "Reinforcement",
        description: "Gain 1 Gold when killing an enemy Hero, up to 3 times.",
      },
    ],
  },
  {
    id: 6,
    name: "Nana",
    slug: "nana",
    type: "Survival",
    icon: "/images/commander/small/Hero47031.webp",
    image: "/images/commander/Hero47031.png",
    description:
      "Nana is a versatile commander used in both early win streak and planned lose streak strategies. Her unique passive triggers on first damage taken, rewarding you with 2 Equipment Chests and 5 Gold, which can accelerate your tempo whether you win or lose. A common tip when using Nana is to deliberately take early damage during the first creep round. Deploy a single unit and aim it at the creep that drops Equipment. Even if you lose, you’ll secure 10 Gold via interest plus 2 Equipment — an excellent start. After that, you can choose to maintain a lose streak for maximum economy or pivot into a win streak once your board stabilizes. Nana fits well in flexible comps, especially those that benefit from early equipment distribution or delayed power spikes.",
    sdescription:
      "Ideal for early win/lose streak setups. Take intentional damage to earn early Gold and Equipment. Great for flexible tempo strategies.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/nana1.png",
        name: "Molina's Blessing",
        description: "Nana avoids her first death, surviving with 1 HP",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/nana2.png",
        type: "Passive",
        name: "Molina's Gift",
        description:
          "Receive 2 Equipment Chest(s) and 4 Gold upon taking DMG for the first time.",
      },
    ],
  },
  {
    id: 7,
    name: "Ling",
    slug: "ling",
    type: "Combat",
    icon: "/images/commander/small/Hero47041.webp",
    image: "/images/commander/Hero47041.png",
    description:
      "Ling creates a Dueling Ring that isolates the farthest enemy Hero into a 1v1 battle with your selected unit, using only Basic Attacks. The allied Hero in the ring gains bonus Attack Speed and can permanently scale Hybrid ATK by winning duels — making Ling an ideal commander for single-carry strategies. He shines in reroll comps where all deployed Heroes are upgraded (2-star or 3-star), ensuring the carry in the ring consistently wins duels and snowballs. Ling forces opponents to think carefully about positioning to avoid having key Heroes dragged into the ring. However, he’s less suited for fast 8/9 or late-game rerolling, since the optimal ring-targeted carry must be deployed early. The best approach is to identify a reliable early-to-mid game carry, focus on upgrading it, and build the rest of the comp around it.",
    sdescription:
      "Isolates enemies in a duel. Scales carry’s power with wins. Best in reroll comps with early board strength.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/ling1.png",
        name: "Showdown",
        description:
          "Creates a Dueling Ring on the Chessboard that lasts for 25s. When the battle starts, the allied Hero in this ring will drag the farthest enemy Hero into the ring and fight with only Basic ATKs. The allied Hero in the Dueling Ring gain 50% extra ATK Speed.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/ling2.png",
        type: "Passive",
        name: "Transcendent Stance",
        description:
          "After winning a duel, permanently gain 5% extra Hybrid ATK (stacks up to 15 stacks).",
      },
    ],
  },
  {
    id: 8,
    name: "Layla",
    slug: "layla",
    type: "Combat",
    icon: "/images/commander/small/Hero47051.webp",
    image: "/images/commander/Hero47051.png",
    description:
      "Layla summons a hologram that deals consistent AoE damage with lasers and gains bonus Attack Speed each round. This makes her particularly strong in the early game, often forcing opponents to scramble before they can stabilize. She fits well in both reroll and fast 8/9 strategies. In reroll comps, Layla’s hologram helps chip away enemy boards while you slowly build up star-level power. In fast-leveling comps, she can maintain early win streaks and tempo pressure thanks to her scaling hologram damage. Additionally, after dealing enough total damage, Layla grants a Hero from your highest-count synergy — giving her strong momentum into the mid-to-late game. Her flexible kit makes her a strong pick for both aggressive and scaling playstyles.",
    sdescription:
      "Hologram deals scaling damage with increasing ATK speed. Ideal for early pressure in both reroll and late-game rerolling, comps.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/layla1.png",
        name: "Hologram: Destruction Rush",
        description:
          "Layla generates a hologram that emits lasers to penetrate enemies, dealing 330 Physical DMG, and increasing ATK speed by 3% each round.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/layla2.png",
        type: "Passive",
        name: "Hologram: Synergy Freedom",
        description:
          "For every 8000 DMG dealt, obtain a Hero from the highest-count Synergy next round.",
      },
    ],
  },
  {
    id: 9,
    name: "Vale",
    slug: "vale",
    type: "Strategy",
    icon: "/images/commander/small/Hero47061.webp",
    image: "/images/commander/Hero47061.png",
    description:
      "Vale excels in reroll strategies by filtering the Shop to show Heroes that share at least one synergy with a selected unit. This allows players to hit early-game synergy pieces more reliably and build a strong board faster. The skill also grants a free Hero purchase from the filtered Shop, improving tempo without hurting economy. Additional skill charges at Rounds I-1, II-1, and III-1 give Vale excellent synergy-building momentum. However, his effectiveness drops off in the late game, as targeting becomes less precise — multiple heroes can share synergies, making the filtered Shop less reliable. Because of this, Vale is best suited for early-to-mid game reroll comps that rely on strong synergy spikes before level 8.",
    sdescription:
      "Filters Shop by synergy for early reroll comps. Less effective late-game as synergy pools widen.",
    skills: [
      {
        level: 1,
        type: "Active",
        icon: "/images/commanderSkill/vale1.png",
        name: "updraft",
        description:
          "Select a Hero, then refresh the Shop to display Heroes that share at least one Synergy with the selected Hero, and also get 1 free Hero purchase from this refreshed Shop. Gain 1 skill charge(s) at the start of Rounds I-1 and II-1.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/vale2.png",
        type: "Passive",
        name: "Shifting Wind",
        description:
          "Gain 1 additional charge(s) at the start of Round III-1 and IV-1.",
      },
    ],
  },
  {
    id: 10,
    name: "Zilong",
    slug: "zilong",
    type: "Combat",
    icon: "/images/commander/small/Hero47071.webp",
    image: "/images/commander/Hero47071.png",
    description:
      "Zilong starts the game with the Great Dragon Spear, granting each Basic Attack a chance to strike multiple times. Throughout the match, players can purchase additional traits from the Shop to enhance the Spear, choosing between effects like Gold generation, healing and control immunity, or a defensive shield. This makes Zilong highly effective in comps that rely on Basic Attack carries. Whether it’s building around sustain (Draco Serenity), economy (Golden Clutch), or survivability (Great Dragon Guard), the Spear provides powerful customization based on board state and matchup. Zilong is a great pick for players who want strong, scaling frontline or hyper-carry strategies centered around consistent attacks.",
    sdescription:
      "Equips an upgradable item that boosts Basic ATKs. Ideal for auto-attack–focused comps with scaling power.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/zilong1.png",
        name: "Great Dragon Spear",
        description:
          "Obtain the Great Dragon Spear at the start of the match: Each Basic ATK has 22% chance to attack 2 additional time(s). You can purchase up to 1 effects from the Shop to enhance the Great Dragon Spear. Trait include: Draco Serenity: Become immune to control for 25s and recover 12% HP based on damage dealt. Gold Bandit: Each Basic ATK has 5% chance to grant 1 Gold. Great Dragon Guard: When HP drops below 30% gain a Shield equal to 40% of Max HP. (If this hasn't been triggered and fatal damage is taken, the Shield will be granted).",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/zilong2.png",
        type: "Passive",
        name: "Dragon's Roar",
        description:
          "You can purchase 2 additional effect(s) to enhance the Great Dragon Spear.",
      },
    ],
  },
  {
    id: 11,
    name: "Fanny",
    slug: "fanny",
    type: "Combat",
    icon: "/images/commander/small/Hero47081.webp",
    image: "/images/commander/Hero47081.png",
    description:
      "Fanny enables you to field one additional Hero via a Launcher constructed outside the battlefield. Once completed after 6 rounds, the Launcher lets you deploy any Hero with an additional 45% bonus HP — a powerful advantage in both synergy completion and frontline durability. Fanny is especially effective in comps that benefit from wide boards. Early on, she pairs well with reroll strategies by launching a durable frontline unit with extra HP. In the late game, the added Hero slot can be game-changing — enabling an extra synergy activation or backup damage dealer. Fanny rewards players who value flexible board compositions and creative synergy planning.",
    sdescription:
      "Launches 1 extra Hero with bonus HP. Great for synergy completion or durable frontline in both early and late game.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/fanny1.png",
        name: "Blade Dancer",
        description:
          "Fanny construct a Hero Launcher outside the battlefield. It takes 13 round(s) to complete and grants 4 Gold upon completion. Then, you can drag a Hero onto the Launcher, and the Hero will join the fight when battle starts.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/fanny2.png",
        type: "Passive",
        name: "Heart of the Blade",
        description:
          "The Hero Launcher will be completes in only 4 rounds, and the launched Hero gains 45% extra HP.",
      },
    ],
  },
  {
    id: 12,
    name: "Angela",
    slug: "angela",
    type: "Survival",
    icon: "/images/commander/small/Hero47091.webp",
    image: "/images/commander/Hero47091.png",
    description:
      "Angela empowers a selected Hero by granting them 180% Mana Regen and a Shield equal to 20% of their Max HP. This effect prioritizes the Hero with the highest Power, especially those with Mana-based abilities — allowing them to cast their skills much faster and stay alive longer in battle. Angela fits seamlessly into various strategies — whether you're running reroll comps with cheap spammable units or fast 8/9 comps focused on high-impact carries. Her support capability makes her incredibly valuable in skill-based lineups where frequent casting can turn the tide of a fight. She's a safe, versatile pick that boosts both survivability and utility.",
    sdescription:
      "Boosts Mana Regen and grants a Shield to key Heroes. Ideal for comps focused on skill spam or high-cast frequency.",
    skills: [
      {
        level: 1,
        type: "Active",
        icon: "/images/commanderSkill/angela1.png",
        name: "Love's Protection",
        description:
          "Select an allied hero to protect, increase their Mana Regen to 180% and granting a Shield equal to 20% of Max HP.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/angela2.png",
        type: "Passive",
        name: "Ripples of Love",
        description:
          "Angela grants additional protection to the Hero with the highest Power. This protection prioritizes Heroes with Mana.",
      },
    ],
  },
  {
    id: 13,
    name: "Moskov",
    slug: "moskov",
    type: "Strategy",
    icon: "/images/commander/small/Hero47111.webp",
    image: "/images/commander/Hero47111.png",
    description:
      "Moskov unlocks a powerful ritual mechanic where placing 1–4 Gold Heroes in order allows you to enhance a chosen unit with +22% Hybrid ATK and HP, and generates two 1-star copies — instantly creating a 2-star version of the selected Hero. Each ritual placement refunds the Hero’s cost plus 1 Gold, making the process cost-efficient but dependent on unit availability. Moskov is most effective in fast 8/9 strategies where you can find a high-cost carry to place in the ritual. It requires a bit of luck (or planning) to collect the correct 1-4 cost units before activating the ritual. A common trick is to save 7 copies of your target carry and place them into the altar to immediately create a 3-star version. While setup-heavy, the payoff is massive and can turn the game instantly when executed well.",
    sdescription:
      "Unlocks ritual to enhance a Hero with buffs and duplicates. Best for fast 8/9 carry spike with careful setup.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/moskov1.png",
        name: "Power of Shadow",
        description:
          "Creates a Shadow Field on the side of the Battle Area. Place the designated 1-Gold, 2-Gold, 3-Gold, and 4 Gold Heroes one by one to complete the ritual. Then place a Hero in it to gain Power of Shadows, enhancing their Hybrid ATK by 22% and HP by 22%. Each time you place a corresponding Hero to complete the ritual, you get a refund of their cost plus additional 2 Gold.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/moskov2.png",
        type: "Passive",
        name: "Dark Star",
        description:
          "Generates two additional 1-Star copies of the enhanced Hero.",
      },
    ],
  },
  {
    id: 14,
    name: "Guinevere",
    slug: "guinevere",
    type: "Resource",
    icon: "/images/commander/small/Hero47121.webp",
    image: "/images/commander/Hero47121.png",
    description:
      "Guinevere is a unique late-game commander who has a chance to generate free Heroes when refreshing the Shop. With her skill’s she enables aggressive rolling at high levels, making her a strong pick for fast 8 or 9 strategies where hitting high-cost carries is critical. The main drawback is her weaker early game; reaching level 8/9 often comes at the cost of HP, so she rewards players who can manage greed and survive until her power spikes. While she thrives in late-game roll comps, Guinevere is also usable in reroll builds — even if the free Heroes are lower-cost, the economic value stacks up over time.",
    sdescription:
      "Generates free Heroes while rolling. Ideal for fast 8/9, but flexible enough for reroll with value over time.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/guinevere1.png",
        name: "Super Magic",
        description:
          "When refreshing the Shop, there's a 14% chance to find 1 free Hero(es).",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/guinevere2.png",
        type: "Passive",
        name: "Mystic Evolution",
        description: "Chance to finding free Hero(es) increases to 26%.",
      },
    ],
  },
  {
    id: 15,
    name: "Lukas",
    slug: "lukas",
    type: "Combat",
    icon: "/images/commander/small/Hero47131.webp",
    image: "/images/commander/Hero47131.png",
    description:
      "Lukas generates a statue that unleashes Shockwave Blast at the start of battle, dealing damage based on enemy Max HP and stunning them. When placed in the front row, it also activates Wild Power — inflicting bonus damage and massively reducing Hybrid DEF in an area. Lukas is an all-round commander whose power depends heavily on positioning. The statue can be used to disrupt enemy frontlines, stall backline carries, or soften clustered targets. His versatility allows him to adapt based on both your lineup and your opponent’s — making him an excellent pick for reactive, strategic players who enjoy flexible board control and crowd control.",
    sdescription:
      "Summons a damage-dealing, stunning statue. Flexible placement makes him a strong all-round disruptor.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/lukas1.png",
        name: "Unleash the Beast",
        description:
          "Generate a statue on the battlefield. When battle starts, it unleashes Shockwave Blast before vanishing. Shockwave Blast: Deals Physical DMG equal to 20% of target's Max HP to enemies in medium range and stuns them for 1s.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/lukas2.png",
        type: "Passive",
        name: "Frenzy",
        description:
          "Shockwave Blast's power increases to 45% of target's Max HP as Physical DMG, and stun duration increases to 1.5s. If the statue is placed in the front row, the Sacred Beast unleashes Wild Power before vanishing. Wild Power: Deals 45% of target's Max HP as Physical DMG to enemies in medium range and reduces their Hybrid DEF by 65.",
      },
    ],
  },
  {
    id: 16,
    name: "Harper",
    slug: "harper",
    type: "Survival",
    icon: "/images/commander/small/Hero45011.webp",
    image: "/images/commander/Hero45011.png",
    description:
      "Harper gains a stackable damage-reduction shield every time you win a round (up to 5 stacks). Each stack blocks 1 instance of damage, reducing incoming hits by 1 before disappearing. In addition, Harper always takes 1 less Commander Damage, giving you more breathing room in close matches. Harper is designed for players who want to survive longer and outlast opponents. His shield system rewards consistent play and allows for calculated comebacks even from low HP. He’s especially effective in metas where every point of HP matters and can tilt matches by enabling you to recover with fewer punishments from losses.",
    sdescription:
      "Stacks shields that reduce incoming damage and takes less Commander DMG. Ideal for survival and comeback strategies.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/harper1.png",
        name: "Victory Contract",
        description:
          "Upon winning, Harper gains a shield that reduces damage received by 1. The shield disappears after taking damage and can stack up to 5 time(s). (During combat, damage predictions shown in the player list will display the reduced values.)",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/harper2.png",
        type: "Passive",
        name: "Warrior's Will",
        description: "Harper takes 1 less Commander DMG",
      },
    ],
  },
  {
    id: 17,
    name: "Eggie",
    slug: "eggie",
    type: "Strategy",
    icon: "/images/commander/small/Hero45081.webp",
    image: "/images/commander/Hero45081.png",
    description:
      "Eggie’s skill unlocks at 7 Capacity, granting both an Equipment Loot Chest and a Magic Crystal Loot Chest. Magic Crystals add a random synergy to the equipped Hero — allowing that Hero to activate and benefit from the associated trait. The impact can be game-changing, but the randomness requires sharp decision-making. Eggie is best suited for experienced players who can adapt quickly and build around whatever synergy the Crystal provides. Surviving until level 7 and reacting fast to integrate the new synergy is key to making the most of Eggie's power spike.",
    sdescription:
      "Grants random synergy Crystal and Equipment at level 7. Best for experienced players who can adapt quickly.",
    skills: [
      {
        level: 1,
        type: "Active",
        icon: "/images/commanderSkill/eggie1.png",
        name: "Fortune",
        description:
          "Unlocks at 7 Capacity. Grants 1 Equipment Loot Chest(s) when used.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/eggie2.png",
        type: "Passive",
        name: "Lucky Streak",
        description: "Get 1 additional Magic Crystal Loot Chest(s).",
      },
    ],
  },
  {
    id: 18,
    name: "Bersi",
    slug: "bersi",
    type: "Combat",
    icon: "/images/commander/small/Hero45181.webp",
    image: "/images/commander/Hero45181.png",
    description:
      "Bersi allows you to select a Hero during the Preparation Stage. If the chosen unit is defeated during battle, it revives once with 30% HP and gains an 80 Hybrid DEF boost — giving it a second chance to carry the fight. Bersi is ideal for comps built around a single hyper-carry. Because the effect only applies to one unit, choosing the right Hero is critical. This commander rewards precise planning, strong itemization, and confident carry selection. When used well, Bersi can shift the outcome of a fight by giving your carry just enough survivability to wipe the board on its second wind.",
    sdescription:
      "Revives your carry once with bonus DEF. Best for single hyper-carry comps with strong positioning and item focus.",
    skills: [
      {
        level: 1,
        type: "Active",
        icon: "/images/commanderSkill/bersi1.png",
        name: "Back from the Dead",
        description:
          "During the Preparation Stage, select an allied Hero. WHen they are defeated, they revive once with 30% HP.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/bersi2.png",
        type: "Passive",
        name: "Bersi's Blessing",
        description: "After revival, the Hero gains 80 Hybrid DEF boost.",
      },
    ],
  },
  {
    id: 19,
    name: "Lunox",
    slug: "lunox",
    type: "Strategy",
    icon: "/images/commander/small/Hero45226.webp",
    image: "/images/commander/Hero45226.png",
    description:
      "Lunox can be activated once after Stage II to grant a random Blessing to a Hero without one. This Blessing adds +1 to one of the Hero’s synergies (Role or Faction), potentially helping you reach key synergy breakpoints. However, once blessed, the Hero cannot be sold without losing the effect. Because each Hero has two synergies, the Blessing may not always boost the synergy you were aiming for. This makes Rya a high-skill commander that requires sharp adaptability and long-term planning. A wrong decision can limit your comp path, but a well-placed Blessing can unlock powerful synergy spikes or complete difficult trait combos.",
    sdescription:
      "Grants one-time synergy Blessing. Requires adaptability in case the boosted synergy isn't the optimal one.",
    skills: [
      {
        level: 1,
        type: "Active",
        icon: "/images/commanderSkill/rya1.png",
        name: "Power of Chaos",
        description:
          "Usable after Stage II. Select a Hero without a Blessing and grants them a random Blessing. Can be used 1 time(s). Blessing: The Hero with the Blessing effect adds 1 count to their Role or Faction Synergy.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/rya2.png",
        type: "Passive",
        name: "Power of Order",
        description:
          "After Lunox casts her skill, gain 4 random Hero(es) from the Synergy it grants (affected by current Shop refresh probabilities).",
      },
    ],
  },
  {
    id: 20,
    name: "Lylia",
    slug: "lylia",
    type: "Strategy",
    icon: "/images/commander/small/Hero45236.webp",
    image: "/images/commander/Hero45236.png",
    description:
      "Lylia's skill activates only after you reach level 8, where she disables the Shop permanently and begins granting you a high-cost Hero from your deployed board each round. Win a round to gain one more. If that Hero is sold out, you’ll get the next-highest-cost alternative instead. Upon losing, your most expensive deployed Hero gains 15% Hybrid ATK — prioritizing the one with more Equipment. Lylia opens up unique playstyles like Reroll to 8 (stacking cheap units early, then pivoting hard at level 8) or Fast 8 (rushing level 8 with strong economy). However, she’s vulnerable to denial strategies — if opponents drain the Shared Hero Pool, her rewards diminish significantly. Even so, her skill’s secondary effect ensures your highest-cost Hero still scales after losses, making her viable in high-damage metas when played with patience and synergy awareness.",
    sdescription:
      "Disables Shop at level 8 and grants a copy of the most expensive deployed Hero each round. On loss, buffs that Hero with +15% Hybrid ATK.",
    skills: [
      {
        level: 1,
        type: "Active",
        icon: "/images/commanderSkill/lylia1.png",
        name: "Go, Tharz!",
        description:
          "Can be used after Capacity reaches 8: The Shop can't be used later on and you immediately gain 1 Hero(es) from the highest-cost Heroes deployed. Upon winning a round, gain 1 more. if that Hero is sold out in the Shared Hero Pool, gain the next highest cost Hero instead.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/lylia2.png",
        type: "Passive",
        name: "Party Time!",
        description:
          "Upon losing, grant 15% Hybrid ATK to the highest-cost Hero deployed. If tide, prioritize the one with more Equipment.",
      },
    ],
  },
  {
    id: 21,
    name: "Popol and Kupa",
    slug: "popolkupa",
    type: "Resource",
    icon: "/images/commander/small/Hero45148.webp",
    image: "/images/commander/Hero45148.png",
    description:
      "Popol & Kupa generate a movable Copy Trap during the Preparation Stage. If an enemy Hero steps on it during battle, you gain a 1-star version of that Hero — up to once per round. Starting from Round II-3, a second trap is added. This commander rewards precise positioning and smart prediction. By carefully placing traps where the enemy’s most valuable Hero (often their highest-cost unit) is likely to land, you can gain a huge advantage — either by copying a strong Hero or denying their unique synergy. Popol & Kupa are ideal for players who enjoy reading enemy boards and turning information into economy and counterplay.",
    sdescription:
      "Places traps that clone enemy Heroes. Requires strong positioning and matchup awareness.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/popol1.png",
        name: "Copy Trap",
        description:
          "During the Preparation Stage, a movable Copy Trap will be generated on your side of the battlefield. When an enemy Hero steps into the trap, obtain their 1-Star version, up to 1 time(s) per round.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/popol2.png",
        type: "Passive",
        name: "Hunter's Mark",
        description: "Generate 1 extra Copy Trap(s) from Round II-3.",
      },
    ],
  },
  {
    id: 22,
    name: "Miya",
    slug: "miya",
    type: "Combat",
    icon: "/images/commander/small/Hero47141.webp",
    image: "/images/commander/Hero47141.png",
    description:
      "Miya links to an allied Hero to support their attacks. Every 6 Basic Attacks from the chosen unit triggers Miya to unleash a volley of arrows, dealing damage based on enemy Max HP. The supported Hero also gains a 40% Attack Speed boost, significantly amplifying their DPS. Miya excels in comps built around fast-hitting ranged carries. She works well in both reroll setups using low-cost ranged units, and fast 8/9 strategies centered on high-impact backline damage. For maximum efficiency, prioritize equipping your linked Hero with Attack Speed items — this helps trigger Miya’s skill more frequently. Be mindful of frontline protection and positioning, as the strategy heavily relies on keeping your carry alive.",
    sdescription:
      "Boosts a ranged carry with ATK Speed and bonus volleys. Works best with fast hitters and ATK Speed items.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/miya1.png",
        name: "Lunar Longbow",
        description:
          "Choose an allied Hero for coordinated attacks. After every 6 Basic ATK(s) of the chosen Hero, Miya rapidly fires 5 arrow(s) at enemies, each dealing Physical DMG equal to 8% of the target's Max HP.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/miya2.png",
        type: "Passive",
        name: "Moonshade Arrow",
        description:
          "Miya fires additional 3 split arrow(s), each dealing Physical DMG equal to 4% of the enemy's Max HP. Additionally, the chosen Hero gains 40% ATK Speed.",
      },
    ],
  },
  {
    id: 23,
    name: "Ragnar",
    slug: "ragnar",
    type: "Survival",
    icon: "/images/commander/small/Hero45041.webp",
    image: "/images/commander/Hero45041.png",
    description:
      "Ragnar can restore 3 HP instantly with a 5-round cooldown. Additionally, if your HP drops below 20, you automatically recover 4 HP at the end of each round. Ragnar is ideal for players who want to intentionally lose early while saving Gold to reach higher levels faster. The healing helps stabilize once you reach Level 8 or 9 and start building a strong board. However, timing is everything — mistiming your recovery window or overestimating your tankiness in the late game can lead to sudden elimination. Use Ragnar if you enjoy playing on the edge with calculated risk and HP management.",
    sdescription:
      "Recovers HP to support lose-streak into fast 8/9. Strong for players who can manage risk and stabilize late.",
    skills: [
      {
        level: 1,
        type: "Active",
        icon: "/images/commanderSkill/ragnar1.png",
        name: "Heal",
        description:
          "Commander restores 3 HP immediately. Cooldown: 5 Round(s)",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/ragnar2.png",
        type: "Passive",
        name: "Recovery",
        description:
          "At the end of each round, restore 4 HP if Commander's HP falls below 20.",
      },
    ],
  },
  {
    id: 24,
    name: "Eva",
    slug: "eva",
    type: "Strategy",
    icon: "/images/commander/small/Hero45061.webp",
    image: "/images/commander/Hero45061.png",
    description:
      "When you activate at least one Synergy with 6 or more units, all allied Heroes gain +10% Hybrid ATK. If only one such Synergy is active and no other Synergy is triggered, all allies gain an additional +8% ATK Speed. Eva rewards players who can carefully control which synergies are active, enabling a focused comp with high scaling. You can still place Heroes that belong to other synergies — as long as those synergies aren't activated — allowing for creative board-building. Timing and precision are critical; one wrong synergy activation can cancel the bonus ATK Speed. Eva is best for advanced players who enjoy maximizing value from minimal synergy activations.",
    sdescription:
      "Grants powerful buffs based on controlled synergy activations. Rewards precision and single-synergy focus.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/eva1.png",
        name: "Blessing",
        description:
          "When at least one Synergy with a count of 6 or more is activated, all allied Heroes' Hybrid ATK inreased by 10%",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/eva2.png",
        type: "Passive",
        name: "Supplication",
        description:
          "When only one Synergy with a count of 6 or more is activated, and no other Synergy is activated, allied Heroes' gain 8% extra ATK Speed.",
      },
    ],
  },
  {
    id: 25,
    name: "Abe",
    slug: "abe",
    type: "Survival",
    icon: "/images/commander/small/Hero45071.webp",
    image: "/images/commander/Hero45071.png",
    description:
      "Abe deals an additional 2 Commander Damage upon winning a round. For every 6 Commander Damage dealt, Abe gains 1 Shield, which absorbs 1 incoming Commander Damage. This commander favors an aggressive playstyle, especially in the early game, where chaining wins is key to building Shield stacks. A strong board early on allows Abe to snowball — either through reroll comps or standard level-up paths — and survive longer in the late game despite limited economy tools. Shield gain from damage makes him a good pick for players who enjoy pressuring opponents while gaining durability over time.",
    sdescription:
      "Deals bonus Commander Damage and gains Shields from it. Requires strong early game to snowball effectively.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/abe1.png",
        name: "Anger",
        description: "Deal an extra 2 Commander DMG upon victory.",
      },
      {
        level: 2,
        type: "Passive",
        icon: "/images/commanderSkill/abe2.png",
        name: "Attack & Defend",
        description: "Gain 1 Shield for every 6 Commander DMG dealt.",
      },
    ],
  },
  // {
  //   id: 26,
  //   name: "Mavis",
  //   slug: "mavis",
  //   type: "Survival",
  //   icon: "/images/small/commander/Hero45101.webp",
  // image   icon: "/images/commander/Hero45101.png",
  //   description:
  //     "Starting from Stage III, Mavis restores 2 HP after each victory. Additionally, whenever another Commander is eliminated, you regain 4 HP. Mavis enables strong late-game scaling for players willing to lose early. By surviving to Stage III, you unlock healing that lets you outlast opponents and punish them for every lost player. This commander fits best in fast 8/9 strategies, where you take early damage in exchange for a massive comeback window. Ideal for players who enjoy high-risk, high-reward tempo.",
  //   sdescription:
  //     "Restores HP after wins and eliminations from Stage III onward. Built for late-game comeback strategies.",
  //   skills: [
  //     {
  //       level: 1,
  //       type: "Passive",
  //       icon: "/images/commanderSkill/mavis1.png",
  //       name: "Gathering Strength",
  //       description: "Starting from Stage III, each win restores 2 HP.",
  //     },
  //     {
  //       level: 2,
  //       type: "Passive",
  //       icon: "/images/commanderSkill/mavis2.png",
  //       name: "A Matter of Life or Death",
  //       description: "When another Commander is defeated, restores 4 HP.",
  //     },
  //   ],
  // }
  {
    id: 26,
    name: "Alice",
    slug: "alice",
    type: "Strategy",
    icon: "/images/commander/small/Hero45105.webp",
    image: "/images/commander/Hero45105.png",
    description: "",
    sdescription: "",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/alice1.png",
        name: "Abyssl Gaze",
        description:
          "Alice grants abyssal power to an allied Hero. After reaching 2-Star, the next time you obtain them will strengthen them immediately by increasing their Max HP by 8% and Hybrid ATK by 8%, up to 12 time(s).",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/alice2.png",
        type: "Passive",
        name: "Crimson Grace",
        description:
          "Attribute boosts increased to 15% Max HP and 20% Hybrid ATK.",
      },
    ],
  },
  {
    id: 27,
    name: "Harley",
    slug: "harley",
    type: "Strategy",
    icon: "/images/commander/small/Hero45125.webp",
    image: "/images/commander/Hero45125.png",
    description:
      "Starting from Round II-6, Harley can refresh the Shop once, replacing it with three random 5-Gold Heroes. The number of 5-Gold Heroes shown increases to 5 with skill upgrades — allowing massive late-game potential and instant access to high-impact units. Harley is a mid-to-late game commander that enables powerful transitions. The strength lies not just in acquiring top-tier Heroes, but also in how well the player can adapt their comp based on what they get. Harley favors players who are flexible and comfortable shifting strategies on the fly. Whether stabilizing at Level 8 or chasing a perfect synergy finish at Level 9, Harley can single-handedly define your win condition.",
    sdescription:
      "Replaces Shop with 5-cost Heroes. Enables powerful late-game transitions for adaptive players.",
    skills: [
      {
        level: 1,
        type: "Active",
        icon: "/images/commanderSkill/harley1.png",
        name: "Midas Touch",
        description:
          "Available from Round II-4. Resets the Shop 1 time(s), filling it with 3 5-Gold Hero(es).",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/harley2.png",
        type: "Passive",
        name: "Gold! Gold! Gold!",
        description:
          "The number of 5-Gold Hero appearing in the Shop becomes 5.",
      },
    ],
  },
  {
    id: 28,
    name: "Pao",
    slug: "pao",
    type: "Combat",
    icon: "/images/commander/small/Hero45151.webp",
    image: "/images/commander/Hero45151.png",
    description:
      "Pao becomes usable after Round III-1, letting you choose one of four permanent buffs: +8% Attack Speed, +15 Hybrid DEF, +9% Hybrid ATK, +400 HP, Each buff’s effect is doubled upon selection. Pao is all about timing and decision-making. Though you must wait until Round III-1, the permanent and powerful bonus you choose can define your comp’s success. Choosing the right buff based on your lineup — whether it's a durable frontline, high DPS backline, or survivability — is essential to maximize its value. Pao is perfect for players who plan ahead and adapt their board to unlock the strongest late-game version of their comp.",
    sdescription:
      "Choose 1 permanent buff after Round III-1. Requires smart timing and buff selection based on your comp.",
    skills: [
      {
        level: 1,
        type: "Active",
        icon: "/images/commanderSkill/pao1.png",
        name: "Dragon's Gift",
        description:
          "Usable after Round III-1 begins. Choose one of four permanent buffs: 8% Attack Speed. 15 Hybrid DEF. 9% Hybrid ATK. 400 HP.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/pao2.png",
        type: "Passive",
        name: "Dragon's Fury",
        description: "Increases buff effect by 100%",
      },
    ],
  },
  {
    id: 29,
    name: "Yuki",
    slug: "yuki",
    type: "Combat",
    icon: "/images/commander/small/Hero45161.webp",
    image: "/images/commander/Hero45161.png",
    description:
      "Starting from Round II-1, choose a Hero to receive Charm. At the start of each round, two adjacent allied Heroes are sacrificed to empower the target. The charmed Hero gains 25% of their combined Hybrid ATK and 40% of the target's HP. Yuki’s skill trades board presence for raw stats, allowing one Hero to carry the fight — but at a cost. Losing two units each round means fewer bodies to absorb damage or contribute synergy. This commander excels when built around a strong carry with great scaling and survivability. Players must carefully position units and control aggro to ensure the charmed unit survives and delivers. Ideal for risk-takers who want to funnel power into one unstoppable Hero.",
    sdescription:
      "Sacrifices 2 allies to empower a carry each round. High risk, requires smart positioning and comp planning.",
    skills: [
      {
        level: 1,
        type: "Active",
        icon: "/images/commanderSkill/yuki1.png",
        name: "Charming",
        description:
          "Can be used starting from Round II-1. Choose a Hero to cast Charm on two adjacent allies at the start of each Round. Charmed allies sacrifice themselves to strengthen the caster, granting the caster 25% of their combined Hybrid ATK.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/yuki2.png",
        type: "Passive",
        name: "Infinite Charm",
        description: "Additionally, gain 40% of the target's HP.",
      },
    ],
  },
  {
    id: 30,
    name: "Connie",
    slug: "connie",
    type: "Strategy",
    icon: "/images/commander/small/Hero45171.webp",
    image: "/images/commander/Hero45171.png",
    description:
      "During Go Go Box Rounds 2 and 3, after all players have made their selections, you can choose one additional unselected Hero. With upgrades, the box expands to include Equipment and Magic Crystals. Connie offers a unique edge in draft rounds, allowing you to grab bonus value that others leave behind. This extra pick can shift the tempo of a match — enabling unexpected synergies, clutch equipment, or a critical high-cost unit. While the impact may feel delayed compared to more immediate commanders, the potential to tip key rounds or finalize a comp makes Connie a strong pick for players who can capitalize on long-term value.",
    sdescription:
      "Gain extra picks from Go Go Box. Best for players who can capitalize on delayed but high-impact value.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/connie1.png",
        name: "I Want all of Them!",
        description:
          "During Go Go Box Rounds 2 and 3, after all players have made their selections, choose one additional Hero from the unselected ones.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/connie2.png",
        type: "Passive",
        name: "Unrestricted",
        description:
          "Expands the selection to include Equipment and Magic Crystals.",
      },
    ],
  },
  {
    id: 31,
    name: "Brown",
    slug: "brown",
    type: "Combat",
    icon: "/images/commander/small/Hero45191.webp",
    image: "/images/commander/Hero45191.png",
    description:
      "Brown allows you to enhance Equipment up to 2 times (4 times after upgrades). Each Equipment can only be enchanted once with one of the following effects: Might: +6% Hybrid ATK, Gigantify: +6% Max HP. This commander revolves around strategic item usage. Each enchantment must be applied wisely, based on the Equipment’s base type and your team composition. For example, Might is best on offensive items for damage dealers, while Gigantify suits tank items for frontline units. Brown is ideal for players who can build around items, adapt to RNG drops, and optimize small advantages into round-winning power.",
    sdescription:
      "Enhance Equipment with permanent stat boosts. Requires precise item usage based on comp and drops.",
    skills: [
      {
        level: 1,
        type: "Active",
        icon: "/images/commanderSkill/brown1.png",
        name: "Reinforce",
        description:
          "Select a piece of Equipment to enhance with one of the following effects. Can be used 2 time(s). Each piece of Equipment can only be enhance once. Might: Increases Hybrid ATK by 6%. Gigantify: Increases Max HP by 6%.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/brown2.png",
        type: "Passive",
        name: "Blazzing Soul",
        description: "Gain 2 extra use(s)",
      },
    ],
  },
  {
    id: 32,
    name: "Johnson",
    slug: "johnson",
    type: "Combat",
    icon: "/images/commander/small/Hero45216.webp",
    image: "/images/commander/Hero45216.png",
    description:
      "Johnson adds a 3-Gold Johnny with a random synergy (from synergies that have high activation caps) to your Shop. Johnny costs 0 Gold. Once your first Johnny is obtained, all future Johnnies will share the same synergy. Johnny is a utility unit with strong CC effects — stunning enemies and charging into the largest cluster with Magic DMG and CC immunity. While free and flexible, the randomly assigned synergy can make or break your build. Adapting your strategy around Johnny’s synergy is crucial. If the synergy differs from your board plan, you’ll need to decide whether to pivot toward it or maintain your current comp. Johnson is best used by players who enjoy making synergy-based decisions on the fly while leveraging value from free utility units.",
    sdescription:
      "Generates free Johnny units with random synergy. Requires fast adaptation and synergy-based decision-making.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/johnson1.png",
        name: "Johnny, Go!",
        description:
          "add a 3-Gold Johnny with a random Synegy from Johnson's Synergy Pool(only includes Synergies with maximum activation count above 6) to your Shop. Johnny's skill Spanner Spin: Fling a wrench at the area with the most enemies, dealing DMG and stunning them for 0.5/0.7/1s. Johnny doesn't cost Gold. After getting your first Johnny, you set all Johnnies in the Shop to the same Synergy.",
      },
      {
        level: 2,
        type: "Passive",
        icon: "/images/commanderSkill/johnson2.png",
        name: "Transform!",
        description:
          "When battle stars, Johnny charges toward the area with the most enemies, dealing Magic DMG equal to 10% of his Max HP to surrounding enemies. Johnny is immune to crowd control while transformed.",
      },
    ],
  },
  {
    id: 33,
    name: "Dubi",
    slug: "dubi",
    type: "Combat",
    icon: "/images/commander/small/Hero45251.webp",
    image: "/images/commander/Hero45251.png",
    description:
      "Grants a special Equipment: Fluffy's Rage. When the carrier changes location, it leaves a Fluffy that explodes, stunning enemies in the same row and column for 0.5s. Enemies hit by Fluffy take 10% extra damage for 2 seconds. Dubi’s strength comes from mobility and timing. To fully utilize Fluffy’s Rage, you’ll need a mobile hero (such as blinkers or dashers) and a strong board that can capitalize on the bonus damage. Though the stun is short, its area effect and damage amplification can swing battles in your favor — especially when combined with AoE or burst compositions. Dubi is ideal for players who understand unit movement and love to exploit enemy formation with well-timed disruption.",
    sdescription:
      "Grants stun-and-debuff equipment. Best with mobile units and fast-kill comps.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/dubi1.png",
        name: "Dubi's Gift",
        description:
          "Obtained Equipment - Fluffy's Rage. The carrier leaves a Fluffy behind each time their location changes. The Fluffy will explode and stun enemy Heroes in the same row and column for 0.5s",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/dubi2.png",
        type: "Passive",
        name: "Awaken! Dubi's Wrath",
        description: "Enemies hit by Fluffy take 10% extra damage for 2s.",
      },
    ],
  },
  {
    id: 34,
    name: "Asta",
    slug: "asta",
    type: "Resource",
    icon: "/images/commander/small/Hero45261.webp",
    image: "/images/commander/Hero45261.png",
    description:
      "When a player is eliminated, gain Gold equal to 12% of their Lineup value. Also receive 1 Hero at their current Star Level. Asta offers huge rewards, but only after other players start getting eliminated. This makes early game very fragile, as Asta provides no direct combat or economic advantage before late-game. Success with this commander requires careful resource management and a stable board to survive until the eliminations start. Once opponents fall, you get a surge of Gold and powerful units to turn the tide. Best suited for players who enjoy comeback mechanics and high-stakes late game swings.",
    sdescription:
      "Gains Gold and a Hero after each player elimination. Weak early, strong if you survive to late game.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/asta1.png",
        name: "Astral Blessing - Gold",
        description:
          "When a player is eleminated, gain 12% Gold based on their Lineup value.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/asta2.png",
        type: "Passive",
        name: "Astral Blessing - Hero",
        description:
          "Additionally gain 1 Hero(es) at their current Star level.",
      },
    ],
  },
  {
    id: 35,
    name: "Aurora",
    slug: "aurora",
    type: "Resource",
    icon: "/images/commander/small/Hero47151.webp",
    image: "/images/commander/Hero47151.png",
    description:
      "Aurora freezes your Shop each round. If you refrain from purchasing Heroes, you gain 3 Frost Energy. Upon reaching 6 Frost Energy, you’re rewarded with random items or Gold worth at least 7 Gold — then the cycle repeats. Aurora is a high-risk, high-reward commander that challenges your timing and discipline. Not buying Heroes can delay board strength and cause early losses, but the rewards can swing momentum in your favor if timed correctly. Mastering Aurora requires smart decision-making: knowing when to skip, when to spend, and how to sync her reward cycle with level-ups and power spikes. She's best suited for experienced players who enjoy calculated greed and late-round payoffs.",
    sdescription:
      "Gain Frost Energy by skipping purchases for strong delayed rewards. High-risk, high-reward with timing-based power spikes.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/aurora1.png",
        name: "Frost Treasure",
        description:
          "At the start of each round, Aurora freezes your shop. If you don't purchase any Heroes in a round, you'll gain 2 Frost Energy. When Frost Energy reaches 6, it grants random rewards worth no less than 6 Gold, then begins accumulating again.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/aurora2.png",
        type: "Passive",
        name: "Icy Blessing",
        description: "Icrease Frost Energy gained to 3.",
      },
    ],
  },
  {
    id: 36,
    name: "Karina",
    slug: "karina",
    type: "Combat",
    icon: "/images/commander/small/Hero47161.webp",
    image: "/images/commander/Hero47161.png",
    description:
      "Karina grants the Shadow Twinblades at the start of the match. This item allows its carrier to execute adjacent enemy Heroes when their HP drops below 15%. Each successful execution increases the carrier’s DMG by 1%, stacking up to 35%. This commander requires careful equipment placement — only melee units (who stay adjacent to enemies) can trigger the effect consistently. Additionally, execution must happen via the Shadow Twinblades, not from other sources of damage, or the stack won’t be gained. Karina is best suited for comps built around one or two strong melee carries that can survive and consistently execute enemies late in fights.",
    sdescription:
      "Grants execution item for melee units. DMG scales on kill, but requires precise positioning and timing.",
    skills: [
      {
        level: 1,
        type: "Passive",
        icon: "/images/commanderSkill/karina1.png",
        name: "Shadow Twinblades",
        description:
          "Gain Shadow Twinblades at the start: When an enemy Hero adjacent to the carrier has HP below 20%, Karina executes the target.",
      },
      {
        level: 2,
        icon: "/images/commanderSkill/karina2.png",
        type: "Passive",
        name: "Twinblades Evolution",
        description:
          "After Karina executes the target, the carrier's DMG is increased by 2%, up to 36%.",
      },
    ],
  },
];
