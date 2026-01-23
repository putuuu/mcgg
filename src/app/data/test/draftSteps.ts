export type DraftAction = "BAN" | "PICK";
export type DraftTeam = "HOME" | "AWAY";

export interface DraftStep {
  action: DraftAction;
  team: DraftTeam;
  count: number;
}

export const draftSteps: DraftStep[] = [
  // ===== BAN PHASE 1 (OPENING) =====
  { action: "BAN", team: "HOME", count: 1 },
  { action: "BAN", team: "AWAY", count: 1 },
  { action: "BAN", team: "HOME", count: 1 },
  { action: "BAN", team: "AWAY", count: 1 },
  // ===== PICK PHASE 1 =====
  { action: "PICK", team: "HOME", count: 1 },
  { action: "PICK", team: "AWAY", count: 2 },
  { action: "PICK", team: "HOME", count: 1 },

  // ===== BAN PHASE 2 (MID DRAFT) =====
  { action: "BAN", team: "HOME", count: 1 },
  { action: "BAN", team: "AWAY", count: 1 },
  { action: "BAN", team: "HOME", count: 1 },
  { action: "BAN", team: "AWAY", count: 1 },
  // ===== PICK PHASE 2 (FINALIZE) =====
  { action: "PICK", team: "HOME", count: 1 },
  { action: "PICK", team: "AWAY", count: 2 },
  { action: "PICK", team: "HOME", count: 1 },
];
