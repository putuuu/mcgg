"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { ref, onValue, update, get } from "firebase/database";
import { rtdb } from "../../../lib/firebase";
import { commanders } from "../../data/commanders";
import { draftSteps } from "../../data/test/draftSteps";
import type { DraftTeam } from "../../data/test/draftSteps";

export interface DraftSlots {
  home: (number | null)[];
  away: (number | null)[];
}

export interface DraftState {
  step: number;
  temp: number[];
  bans: DraftSlots;
  picks: DraftSlots;
}

export interface DraftRoles {
  host: string | null;
  home: string | null;
  away: string | null;
}

export interface DraftRoom {
  draft: DraftState;
  timer: number;
  started: boolean;
  selesai: boolean;
  roles: DraftRoles;
}

const EMPTY_DRAFT: DraftState = {
  step: 0,
  temp: [],
  bans: { home: [], away: [] },
  picks: { home: [], away: [] },
};

type InitialRole = "host" | "home" | "away" | "spec";

function pickRandomIds(pool: number[], count: number): number[] {
  const src = [...pool];
  const result: number[] = [];
  const max = Math.min(count, src.length);
  for (let i = 0; i < max; i++) {
    const idx = Math.floor(Math.random() * src.length);
    result.push(src[idx]);
    src.splice(idx, 1);
  }
  return result;
}

export function useDraftRoom(roomId: string, initialRole?: InitialRole) {
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [draft, setDraft] = useState<DraftState>(EMPTY_DRAFT);
  const [timer, setTimer] = useState(10);
  const [started, setStarted] = useState(false);
  const [selesai, setSelesai] = useState(false);
  const [roles, setRoles] = useState<DraftRoles>({
    host: null,
    home: null,
    away: null,
  });
  const [lastAutoStep, setLastAutoStep] = useState<number | null>(null);

  /* DEVICE ID */
  useEffect(() => {
    if (typeof window === "undefined") return;
    let id = window.localStorage.getItem("mcgg-device-id");
    if (!id) {
      id = "dev-" + Math.random().toString(36).slice(2) + "-" + Date.now();
      window.localStorage.setItem("mcgg-device-id", id);
    }
    setDeviceId(id);
  }, []);

  /* SUBSCRIBE REALTIME DB */
  useEffect(() => {
    const roomRef = ref(rtdb, `draftRooms/${roomId}`);
    const unsub = onValue(roomRef, (snap) => {
      const data = snap.val() as DraftRoom | null;
      if (!data) return;

      setRoles(data.roles);
      setStarted(data.started);
      setSelesai(data.selesai);
      setTimer(data.timer);

      setDraft({
        step: data.draft?.step ?? 0,
        temp: data.draft?.temp ?? [],
        bans: {
          home: data.draft?.bans?.home ?? [],
          away: data.draft?.bans?.away ?? [],
        },
        picks: {
          home: data.draft?.picks?.home ?? [],
          away: data.draft?.picks?.away ?? [],
        },
      });
    });

    return () => unsub();
  }, [roomId]);

  /* TEAM & TURN */
  const myTeam: DraftTeam | null = useMemo(() => {
    if (!deviceId) return null;
    if (roles.home === deviceId) return "HOME";
    if (roles.away === deviceId) return "AWAY";
    return null;
  }, [roles, deviceId]);

  const current = draftSteps[draft.step] ?? draftSteps[0];
  const isHost = roles.host === deviceId;
  const isMyTurn = started && !selesai && myTeam === current.team;
  const canStartDraft = !!roles.home && !!roles.away;

  /* SAFE SYNC */
  const sync = useCallback(
    (patch: Partial<DraftRoom>) => {
      if (!isHost && !isMyTurn) return;
      update(
        ref(rtdb, `draftRooms/${roomId}`),
        patch as Record<string, unknown>
      );
    },
    [isHost, isMyTurn, roomId]
  );

  /* COMMANDER SELECT */
  const selectCommander = (id: number) => {
    if (!isMyTurn || !started || selesai) return;

    const used = new Set<number>([
      ...draft.bans.home.filter((x): x is number => x !== null),
      ...draft.bans.away.filter((x): x is number => x !== null),
      ...draft.picks.home,
      ...draft.picks.away,
    ]);
    if (used.has(id)) return;

    const limit = current.count;
    let nextTemp = [...draft.temp];

    if (nextTemp.includes(id)) {
      nextTemp = nextTemp.filter((x) => x !== id);
    } else if (limit === 1) {
      nextTemp = [id];
    } else if (nextTemp.length < limit) {
      nextTemp = [...nextTemp, id];
    } else {
      nextTemp[limit - 1] = id;
    }

    setDraft((p) => ({ ...p, temp: nextTemp }));
    update(ref(rtdb, `draftRooms/${roomId}/draft`), { temp: nextTemp });
  };

  /* CONFIRM STEP */
  const confirmStep = () => {
    if (!isMyTurn || !started || selesai) return;
    if (draft.temp.length !== current.count) return;

    const ids = draft.temp.slice(0, current.count);
    const nextDraft = structuredClone(draft);

    if (current.action === "BAN") {
      const id = ids[0] ?? null;
      if (current.team === "HOME") nextDraft.bans.home.push(id);
      else nextDraft.bans.away.push(id);
    } else {
      if (current.team === "HOME") nextDraft.picks.home.push(...ids);
      else nextDraft.picks.away.push(...ids);
    }

    const nextStepIdx = draft.step + 1;
    nextDraft.step = Math.min(nextStepIdx, draftSteps.length - 1);
    const finish = nextStepIdx >= draftSteps.length;
    nextDraft.temp = [];

    setDraft(nextDraft);
    setTimer(10);
    setLastAutoStep(null);

    sync({
      draft: {
        step: nextDraft.step,
        temp: [],
        bans: nextDraft.bans,
        picks: nextDraft.picks,
      },
      timer: 10,
      started: true,
      selesai: finish,
    });
  };

  /* START DRAFT */
  const startDraft = () => {
    if (!isHost || !roles.home || !roles.away) return;

    setDraft(EMPTY_DRAFT);
    setTimer(10);
    setSelesai(false);
    setStarted(true);
    setLastAutoStep(null);

    sync({
      draft: {
        step: 0,
        temp: [],
        bans: { home: [], away: [] },
        picks: { home: [], away: [] },
      },
      timer: 10,
      started: true,
      selesai: false,
    });
  };

  /* TIMER TICK (HOST ONLY) */
  useEffect(() => {
    if (!isHost || !started || selesai) return;

    const interval = setInterval(() => {
      setTimer((t) => {
        if (t <= 0) return 0;
        const next = t - 1;
        sync({ timer: next });
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isHost, started, selesai, sync]);

  /* AUTO ACTION WHEN TIMEOUT */
  useEffect(() => {
    if (!isHost || !started || selesai) return;
    if (timer !== 0) return;
    if (lastAutoStep === draft.step) return;
    setLastAutoStep(draft.step);

    const stepCfg = current;
    const limit = stepCfg.count;
    const nextDraft = structuredClone(draft);

    const used = new Set<number>([
      ...draft.bans.home.filter((x): x is number => x !== null),
      ...draft.bans.away.filter((x): x is number => x !== null),
      ...draft.picks.home,
      ...draft.picks.away,
    ]);

    const availableIds = commanders
      .filter((c) => !used.has(c.id) && !draft.temp.includes(c.id))
      .map((c) => c.id);

    /* IF TIMEOUT */
    if (stepCfg.action === "BAN") {
      if (stepCfg.team === "HOME") nextDraft.bans.home.push(null);
      else nextDraft.bans.away.push(null);
    } else {
      if (draft.temp.length === limit) {
        if (stepCfg.team === "HOME") nextDraft.picks.home.push(...draft.temp);
        else nextDraft.picks.away.push(...draft.temp);
      } else if (draft.temp.length > 0) {
        let result = draft.temp.slice(0, limit);
        const need = limit - result.length;
        const rand = pickRandomIds(availableIds, need);
        result = [...result, ...rand].slice(0, limit);
        if (stepCfg.team === "HOME") nextDraft.picks.home.push(...result);
        else nextDraft.picks.away.push(...result);
      } else {
        const rand = pickRandomIds(availableIds, limit);
        if (stepCfg.team === "HOME") nextDraft.picks.home.push(...rand);
        else nextDraft.picks.away.push(...rand);
      }
    }

    nextDraft.temp = [];
    const nextStepIdx = draft.step + 1;
    nextDraft.step = Math.min(nextStepIdx, draftSteps.length - 1);
    const finish = nextStepIdx >= draftSteps.length;

    setDraft(nextDraft);
    setTimer(10);

    sync({
      draft: {
        step: nextDraft.step,
        temp: [],
        bans: nextDraft.bans,
        picks: nextDraft.picks,
      },
      timer: 10,
      started: true,
      selesai: finish,
    });
  }, [timer, isHost, started, selesai, draft, current, lastAutoStep, sync]);

  /* CLAIM ROLES */
  const claimHost = useCallback(async () => {
    if (!deviceId) return;
    const roleRef = ref(rtdb, `draftRooms/${roomId}/roles`);
    const snap = await get(roleRef);
    const data = snap.val() as DraftRoles | null;
    if (data?.host && data.host !== deviceId) return;
    update(roleRef, { host: deviceId });
  }, [deviceId, roomId]);

  const claimTeam = useCallback(
    async (team: DraftTeam) => {
      if (!deviceId) return;
      const key = team === "HOME" ? "home" : "away";
      const roleRef = ref(rtddb, `draftRooms/${roomId}/roles`);
      const snap = await get(roleRef);
      const data = snap.val() as DraftRoles | null;
      if (data?.[key] && data[key] !== deviceId) return;
      update(roleRef, { [key]: deviceId });
    },
    [deviceId, roomId]
  );

  /* AUTO CLAIM FROM ?role QUERY */
  useEffect(() => {
    if (!deviceId) return;
    if (!initialRole || initialRole === "spec") return;

    const already =
      roles.host === deviceId ||
      roles.home === deviceId ||
      roles.away === deviceId;
    if (already) return;

    (async () => {
      if (initialRole === "host") await claimHost();
      if (initialRole === "home") await claimTeam("HOME");
      if (initialRole === "away") await claimTeam("AWAY");
    })();
  }, [deviceId, initialRole, roles, claimHost, claimTeam]);

  return {
    draft,
    timer,
    started,
    selesai,
    roles,
    deviceId,
    myTeam,
    isHost,
    isMyTurn,
    current,
    canStartDraft,
    selectCommander,
    confirmStep,
    startDraft,
    claimHost,
    claimTeam,
  };
}
