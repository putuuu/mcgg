import type { DraftAction, DraftTeam } from "../data/test/draftSteps";

export interface DraftHistoryItem {
  stepIndex: number;
  team: DraftTeam;
  action: DraftAction;
  ids: number[];
  timestamp: number;
}

export interface DraftSlots {
  home: number[];
  away: number[];
}

export interface DraftState {
  step: number;
  temp: number[];
  bans: DraftSlots;
  picks: DraftSlots;
  history: DraftHistoryItem[];
}

export interface DraftRoles {
  host: string | null;
  home: string | null;
  away: string | null;
}

export interface DraftRoomDoc {
  draft: DraftState;
  timer: number;
  started: boolean;
  selesai: boolean;
  updatedAt: number;
  roles: DraftRoles;
}

export type DeviceId = string | null;

export interface UseDraftRoomOptions {
  roomId?: string;
}
