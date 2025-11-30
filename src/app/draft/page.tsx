"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { commanders } from "../data/commanders";

/* 12 STEP DRAFT */
type Action = "BAN" | "PICK";
type Team = "HOME" | "AWAY";
interface DraftStep {
  action: Action;
  team: Team;
  count: number;
}

const steps: DraftStep[] = [
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

/* STATE */
interface DraftState {
  home: { bans: (number | null)[]; picks: number[] };
  away: { bans: (number | null)[]; picks: number[] };
  step: number;
  temp: number[];
}

export default function DraftPage() {
  const [draft, setDraft] = useState<DraftState>({
    home: { bans: [], picks: [] },
    away: { bans: [], picks: [] },
    step: 0,
    temp: [],
  });

  const [timer, setTimer] = useState(35);
  const [finished, setFinished] = useState(false);

  const current = steps[draft.step];
  const tempRequired = current.count;

  /* pool commander tersisa */
  const getPool = () => {
    const used = new Set([
      ...(draft.home.bans.filter(Boolean) as number[]),
      ...(draft.away.bans.filter(Boolean) as number[]),
      ...draft.home.picks,
      ...draft.away.picks,
    ]);
    return commanders.filter((c) => !used.has(c.id));
  };

  /* pilih commander (shadow pick) */
  const select = (id: number) => {
    if (finished) return;
    const used = new Set([
      ...(draft.home.bans.filter(Boolean) as number[]),
      ...(draft.away.bans.filter(Boolean) as number[]),
      ...draft.home.picks,
      ...draft.away.picks,
    ]);
    if (used.has(id)) return;

    const limit = current.count;

    if (draft.temp.includes(id)) {
      setDraft((prev) => ({
        ...prev,
        temp: prev.temp.filter((x) => x !== id),
      }));
      return;
    }

    if (limit === 1) {
      setDraft((prev) => ({ ...prev, temp: [id] }));
      return;
    }

    if (limit === 2) {
      if (draft.temp.length === 0) {
        setDraft((prev) => ({ ...prev, temp: [id] }));
        return;
      }
      if (draft.temp.length === 1) {
        setDraft((prev) => ({ ...prev, temp: [...prev.temp, id] }));
        return;
      }
      // replace last
      setDraft((prev) => ({ ...prev, temp: [prev.temp[0], id] }));
    }
  };

  /* confirm */
  const confirm = () => {
    const step = steps[draft.step];
    const ids = draft.temp;

    setDraft((prev) => {
      const next = structuredClone(prev);

      if (step.action === "BAN") {
        if (step.team === "HOME") next.home.bans.push(ids[0] ?? null);
        else next.away.bans.push(ids[0] ?? null);
      } else {
        if (step.team === "HOME") next.home.picks.push(...ids);
        else next.away.picks.push(...ids);
      }

      next.temp = [];

      if (prev.step + 1 >= steps.length) {
        setFinished(true);
      } else {
        next.step = prev.step + 1;
      }

      return next;
    });
  };

  /* ===== AUTO ACTIONS ===== */

  const autoFillPartial = () => {
    const pool = getPool();
    const need = tempRequired - draft.temp.length;

    const random = pool
      .sort(() => Math.random() - 0.5)
      .slice(0, need)
      .map((c) => c.id);

    const final = [...draft.temp, ...random];

    setDraft((prev) => {
      const next = structuredClone(prev);
      const step = steps[prev.step];

      // FINAL INSERT langsung ke picks
      if (step.team === "HOME") next.home.picks.push(...final);
      else next.away.picks.push(...final);

      next.temp = [];

      // lanjut step / selesai draft
      if (prev.step + 1 >= steps.length) setFinished(true);
      else next.step = prev.step + 1;

      return next;
    });
  };

  const autoPickRandom = () => {
    const pool = getPool();
    const random = pool
      .sort(() => Math.random() - 0.5)
      .slice(0, tempRequired)
      .map((c) => c.id);

    setDraft((prev) => {
      const next = structuredClone(prev);
      const step = steps[prev.step];

      if (step.team === "HOME") next.home.picks.push(...random);
      else next.away.picks.push(...random);

      next.temp = [];
      if (prev.step + 1 >= steps.length) setFinished(true);
      else next.step = prev.step + 1;

      return next;
    });
  };

  const autoSkipBan = () => {
    const step = steps[draft.step];
    setDraft((prev) => {
      const next = structuredClone(prev);
      if (step.team === "HOME") next.home.bans.push(null);
      else next.away.bans.push(null);
      next.temp = [];

      if (prev.step + 1 >= steps.length) {
        setFinished(true);
      } else {
        next.step = prev.step + 1;
      }

      return next;
    });
  };

  /* ===== TIMER ===== */

  useEffect(() => {
    const i = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    if (!finished) setTimer(10);
  }, [draft.step, finished]);

  useEffect(() => {
    if (finished) return;
    if (timer > 0) return;

    const step = steps[draft.step];

    if (draft.temp.length === step.count) return confirm();
    if (draft.temp.length > 0) return autoFillPartial();
    if (step.action === "BAN") return autoSkipBan();
    return autoPickRandom();
  }, [timer]);

  /* ===== UI ===== */

  return (
    <main className="min-h-screen bg-[#05060a] text-slate-50 flex flex-col">
      <section className="flex items-start justify-between px-8 pt-6">
        <BanBar title="Team Home" ids={draft.home.bans} />
        <Status step={draft.step} timer={timer} finished={finished} />
        <BanBar title="Team Away" ids={draft.away.bans} reverse />
      </section>

      <section className="flex flex-1 px-6 pb-6 pt-4 gap-4">
        <SidePanel ids={draft.home.picks} />
        <CommanderPool draft={draft} onSelect={select} />
        <SidePanel ids={draft.away.picks} />
      </section>

      <section className="h-28 border-t border-white/5 px-8 bg-black/60 backdrop-blur flex flex-col items-center justify-center gap-2">
        <div className="flex gap-3">
          {Array(tempRequired)
            .fill(0)
            .map((_, i) => (
              <TempSlot key={i} id={draft.temp[i]} />
            ))}
        </div>

        {finished ? (
          <span className="text-green-400 text-sm font-semibold mt-1">
            Draft Complete ✔
          </span>
        ) : (
          <>
            <span className="text-[11px] uppercase tracking-wide text-slate-300">
              {current.team} — {current.action} {tempRequired}
            </span>
            <button
              onClick={confirm}
              disabled={draft.temp.length !== tempRequired}
              className={`px-12 py-3 rounded-full text-base font-semibold transition ${
                draft.temp.length === tempRequired
                  ? "bg-emerald-500 hover:bg-emerald-400 text-black"
                  : "bg-gray-700 text-gray-400 cursor-not-allowed"
              }`}
            >
              CONFIRM
            </button>
          </>
        )}
      </section>
    </main>
  );
}

/* ===== COMPONENTS ===== */

function Status({ step, timer, finished }: any) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-sm uppercase tracking-[0.3em] text-slate-400">
        {finished ? "DONE" : steps[step].action}
      </span>
      <span
        className={`text-4xl font-semibold ${
          timer <= 5 && !finished ? "text-red-400 animate-pulse" : ""
        }`}
      >
        {finished ? "—" : timer}
      </span>
      <span className="text-xs text-slate-500">
        Step {step + 1} / {steps.length}
      </span>
    </div>
  );
}

function BanBar({ title, ids, reverse }: any) {
  return (
    <div
      className={`flex items-center gap-3 bg-white/5 rounded-full px-4 py-2 min-w-[260px] ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <span className="text-xs uppercase tracking-wide text-slate-300">
        {title}
      </span>
      <div className="flex gap-2">
        {Array(3)
          .fill(0)
          .map((_, i) => {
            const id = ids[i];
            const src = id ? findIcon(id) : "";
            return (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 overflow-hidden flex items-center justify-center"
              >
                {id && src ? (
                  <div className="relative w-full h-full">
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                ) : (
                  <span className="text-xs text-slate-500">?</span>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

function SidePanel({ ids }: any) {
  return (
    <div className="w-40 bg-[#05070d] rounded-3xl border border-white/5 flex flex-col items-center py-4 gap-3">
      <Slot id={ids[0]} big />
      {[1, 2, 3].map((i) => (
        <Slot key={i} id={ids[i]} />
      ))}
    </div>
  );
}

function Slot({ id, big }: any) {
  const cls = big ? "w-16 h-16" : "w-14 h-14";
  const src = id ? findImage(id) || findIcon(id) : "";
  return (
    <div
      className={`${cls} rounded-2xl bg-slate-900 border border-white/10 overflow-hidden flex items-center justify-center`}
    >
      {id && src ? (
        <div className="relative w-full h-full">
          <Image src={src} alt="" fill className="object-cover" />
        </div>
      ) : (
        <span className="text-xs text-slate-500">?</span>
      )}
    </div>
  );
}

function CommanderPool({ draft, onSelect }: any) {
  const used = new Set([
    ...(draft.home.bans.filter(Boolean) as number[]),
    ...(draft.away.bans.filter(Boolean) as number[]),
    ...draft.home.picks,
    ...draft.away.picks,
  ]);

  return (
    <div className="flex-1 flex flex-col bg-[#0b0d13] rounded-3xl border border-white/5 overflow-hidden">
      <div className="flex items-center justify-between px-4 pt-3 pb-1 bg-black/30">
        <div className="flex gap-3 text-xs">
          <span className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-900">
            All
          </span>
        </div>
        <span className="text-[11px] text-slate-400 border border-white/10 rounded-full px-2 py-1">
          Filter
        </span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4 pt-2">
        <div className="grid grid-cols-9 gap-2">
          {commanders.map((c) => {
            const isUsed = used.has(c.id);
            const isTemp = draft.temp.includes(c.id);

            return (
              <button
                key={c.id}
                onClick={() => !isUsed && onSelect(c.id)}
                className={`flex flex-col items-center gap-1 text-[10px] transition ${
                  isUsed
                    ? "opacity-30 cursor-not-allowed"
                    : isTemp
                    ? "scale-110 drop-shadow-[0_0_6px_#22d3ee]"
                    : "hover:scale-105"
                }`}
              >
                <div className="relative w-12 h-12 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
                  <Image
                    src={c.icon}
                    alt={c.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="truncate max-w-[64px] text-slate-200">
                  {c.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TempSlot({ id }: any) {
  const src = id ? findIcon(id) : "";
  return (
    <div className="w-12 h-12 rounded-full border-dashed border border-slate-500 overflow-hidden flex items-center justify-center">
      {id && src ? (
        <div className="relative w-full h-full">
          <Image src={src} alt="" fill className="object-cover" />
        </div>
      ) : (
        <span className="text-xs text-slate-500">?</span>
      )}
    </div>
  );
}

/* ICON / IMAGE LOOKUP */
function findCommander(id: number) {
  return commanders.find((c) => c.id === id);
}
function findIcon(id: number) {
  return findCommander(id)?.icon || "";
}
function findImage(id: number) {
  return findCommander(id)?.image || "";
}
