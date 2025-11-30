export type DraftAction = "BAN" | "PICK";
export type DraftTeam = "HOME" | "AWAY";

export interface DraftStep {
  action: DraftAction;
  team: DraftTeam;
  count: number; // jumlah ban / pick di step itu
}

export const draftSteps: DraftStep[] = [
  { action: "BAN", team: "HOME", count: 1 },
  { action: "BAN", team: "AWAY", count: 1 },
  { action: "PICK", team: "HOME", count: 1 },
  { action: "PICK", team: "AWAY", count: 2 },
  { action: "PICK", team: "HOME", count: 1 },
  { action: "BAN", team: "HOME", count: 1 },
  { action: "BAN", team: "AWAY", count: 1 },
  { action: "BAN", team: "HOME", count: 1 },
  { action: "BAN", team: "AWAY", count: 1 },
  { action: "PICK", team: "HOME", count: 1 },
  { action: "PICK", team: "AWAY", count: 2 },
  { action: "PICK", team: "HOME", count: 1 },
];
