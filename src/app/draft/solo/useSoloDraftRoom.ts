"use client";

import { useState } from "react";
import type { DraftState } from "../types";
import { draftSteps } from "../../data/test/draftSteps";

const DEVICE_ID = "SOLO_DEVICE";

function createInitialDraft(): DraftState {
  return {
    step: 0,
    temp: [],
    bans: { home: [], away: [] },
    picks: { home: [], away: [] },
    history: [],
  };
}

export function useSoloDraftRoom() {
  const [draft, setDraft] = useState<DraftState>(createInitialDraft());
  const [started, setStarted] = useState(false);

  const selesai = draft.step >= draftSteps.length;
  const current = started ? draftSteps[draft.step] : undefined;

  /* ===== SELECT (SHADOW PICK) ===== */
  function selectCommander(id: number) {
    if (!started || selesai || !current) return;

    setDraft((prev) => {
      const used = new Set<number>([
        ...prev.bans.home.filter(Boolean),
        ...prev.bans.away.filter(Boolean),
        ...prev.picks.home,
        ...prev.picks.away,
      ]);

      if (used.has(id)) return prev;

      const limit = current.count;
      let temp = [...prev.temp];

      if (temp.includes(id)) {
        temp = temp.filter((x) => x !== id);
      } else if (limit === 1) {
        temp = [id];
      } else if (limit === 2) {
        temp = temp.length === 1 ? [...temp, id] : [id];
      }

      return { ...prev, temp };
    });
  }

  /* ===== CONFIRM STEP ===== */
  function confirmStep() {
    if (!started || selesai || !current) return;

    setDraft((prev) => {
      const next = structuredClone(prev);
      const ids = prev.temp;
      const team = current.team;

      if (current.action === "BAN") {
        if (team === "HOME") next.bans.home.push(ids[0] ?? null);
        else next.bans.away.push(ids[0] ?? null);
      } else {
        if (team === "HOME") next.picks.home.push(...ids);
        else next.picks.away.push(...ids);
      }

      next.temp = [];
      next.step += 1;
      return next;
    });
  }

  /* ===== START ===== */
  function startDraft() {
    setStarted(true);
  }

  return {
    /* DraftScreen-compatible API */
    draft,
    timer: 999, // dummy
    started,
    selesai,

    roles: {
      host: DEVICE_ID,
      home: DEVICE_ID,
      away: DEVICE_ID,
    },

    deviceId: DEVICE_ID,

    // 🔑 SOLO = 1 user ambil HOME & AWAY sesuai step
    myTeam: current?.team,
    isMyTurn: started,

    current,

    selectCommander,
    startDraft,
    confirmStep,
  };
}
