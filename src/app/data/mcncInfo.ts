export const mcncInfo = {
  title: "Magic Chess National Championship (MCNC)",
  description:
    "MCNC is a competitive community formed in 2024 for the game Magic Chess Go Go (MCGG), uniting dozens of professional teams and hundreds of players across various platforms.",
  quote: "Unite your squad. Claim the crown!",
  rules: [
    "8 teams compete in a round-robin format.",
    "Top 4 teams advance to the playoffs.",
    "Points system: 1st = 4 pts, 2nd = 3 pts, 3rd = 2 pts, 4th = 1 pt.",
    "Tiebreakers decided by total win rounds and head-to-head results.",
  ],
  seasonHighlight:
    "MCNC Squad Season 3 marks the return of top-level team competition in celebration of the official launch of Magic Chess Go Go.",
};

export const mcncRules = {
  mode: "Squad Mode (4v4), up to 20 Teams",
  banned: "No banned commander or synergy (subject to change)",
  venue: "Online - MCNC Stream Channels (YouTube, TikTok, Facebook)",
  // registration: "Rp 2.500.000 / team",
  // prizePool: "Rp 50.000.000",
  pointSystem: [
    "1st place: 8 pts",
    "2nd place: 6 pts",
    "3rd place: 5 pts",
    "4th place: 4 pts",
    "5th place: 3 pts",
    "6th place: 2 pts",
    "7th place: 1 pt",
    "8th place: 0 pt",
    "Minimum team total per match: 15 pts",
  ],
  stages: [
    {
      name: "Open Qualifier",
      format: [
        "Half-league, Best of 3",
        "Each team plays every other team once",
        "2 matches per team per day",
        "Top teams qualify to Regular Season",
        // "Rp 250.000 from down payment becomes qualifier prize pool",
        // "Qualified teams pay remaining Rp 1.500.000",
        // "Non-qualified teams get Rp 1.000.000 refund",
      ],
    },
    {
      name: "Regular Season",
      format: [
        "Half-league, Best of 3",
        "Teams play 3 matches/week (every 2 days)",
        "Final matchday played simultaneously by all teams",
        "Top 16 teams advance to Playoffs",
      ],
    },
    {
      name: "Playoff Stage",
      format: [
        "Elimination bracket based on Regular Season rank",
        "Elims = Best of 3",
        "Upper Final, Lower Semis & Final = Best of 5",
        "Grand Final = Best of 7",
        "Open transfer window until 2 days before playoffs",
      ],
    },
  ],
  draft: {
    mode: "Draft Pick",
    timeout: "1 minute between drafts",
    tiebreak: [
      "Total points",
      "Total match wins",
      "Number of 2-0 wins",
      "Head-to-head",
    ],
  },
};
