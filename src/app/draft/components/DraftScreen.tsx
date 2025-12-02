"use client";

import Image from "next/image";
import { useMemo } from "react";
import { usedFromDraft } from "../../../utils/filterNums";
import CommanderPool from "./CommanderPool";
import OrientationGuard from "./OrientationGuard";
import { useDraftRoom } from "../hooks/useDraftRoom";
import { draftSteps } from "../../data/test/draftSteps";
import { findIcon, findImage } from "./sharedLookup";

interface Props {
  roomId: string;
  initialRole?: "host" | "home" | "away" | "spec";
  broadcast?: boolean;
  homeName?: string;
  awayName?: string;
}

export default function DraftScreen({
  roomId,
  initialRole,
  broadcast = false,
  homeName,
  awayName,
}: Props) {
  const {
    draft,
    timer,
    started,
    selesai,
    roles,
    myTeam,
    isHost,
    isMyTurn,
    current,
    canStartDraft,
    selectCommander,
    confirmStep,
    startDraft,
  } = useDraftRoom(roomId, initialRole);

  const usedIds = usedFromDraft(draft);

  const teamHomeLabel = homeName?.trim() || "HOME";
  const teamAwayLabel = awayName?.trim() || "AWAY";

  const isDrafter = myTeam === "HOME" || myTeam === "AWAY";
  const isHomeTurn = current.team === "HOME";
  const isAwayTurn = current.team === "AWAY";
  const thisRoleLabel = myTeam ?? "SPECTATOR";

  const isPickPhase = started && !selesai && current.action === "PICK";
  const showFinal = selesai;
  const isBroadcast = broadcast && !isDrafter;

  // hero yang sedang di-shadow / terakhir dipick (untuk viewer/broadcast)
  const showcaseIds: number[] = useMemo(() => {
    if (!started || selesai || current.action !== "PICK") return [];
    if (draft.temp.length > 0) return draft.temp.slice(0, current.count);

    const arr = current.team === "HOME" ? draft.picks.home : draft.picks.away;
    if (!arr.length) return [];
    const n = Math.min(current.count, arr.length);
    return arr.slice(-n);
  }, [
    draft.temp,
    draft.picks.home,
    draft.picks.away,
    started,
    selesai,
    current,
  ]);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#05060a] text-slate-50">
      <OrientationGuard />

      {/* BACKGROUND — ganti src sesuai season nanti */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/bg/draft-arcade.png"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 flex flex-col h-screen px-3 pt-3 pb-[80px] sm:px-4 md:px-6 gap-3">
        {/* TOP: BAN HOME | TIMER | BAN AWAY */}
        <section className="flex items-center justify-between gap-2 md:gap-4">
          <BanPill
            title={teamHomeLabel}
            ids={draft.bans.home}
            active={
              isHomeTurn && current.action === "BAN" && started && !selesai
            }
            variant="home"
          />

          <div className="flex flex-col items-center gap-1 px-4 py-2 rounded-full bg-black/60 border border-white/10">
            <span className="uppercase text-[10px] tracking-[0.2em] text-slate-400">
              {selesai ? "DONE" : current.action}
            </span>
            <span
              className={`text-3xl md:text-4xl font-extrabold leading-none ${
                timer <= 5 && !selesai && started
                  ? "text-red-400"
                  : "text-slate-50"
              }`}
            >
              {selesai || !started ? "—" : timer}
            </span>
            <span className="text-[10px] text-slate-500">
              STEP {draft.step + 1} / {draftSteps.length}
            </span>
          </div>

          <BanPill
            title={teamAwayLabel}
            ids={draft.bans.away}
            active={
              isAwayTurn && current.action === "BAN" && started && !selesai
            }
            variant="away"
            reverse
          />
        </section>

        {/* MIDDLE: HOME PICK | CENTER | AWAY PICK */}
        <section className="flex-1 flex items-stretch justify-between gap-2 md:gap-4 min-h-0">
          {/* LEFT PICK COLUMN */}
          <PickColumn
            label={teamHomeLabel}
            ids={draft.picks.home}
            active={
              isHomeTurn && current.action === "PICK" && started && !selesai
            }
            variant="home"
          />

          {/* CENTER AREA */}
          <div className="flex-1 h-full flex items-stretch justify-center min-w-0 px-1 overflow-hidden">
            {isDrafter && !isBroadcast ? (
              // DRAFTER POV: commander pool di tengah
              <div className="w-full max-w-[1100px] h-full rounded-[28px] bg-black/60 border border-white/10 overflow-hidden">
                <div className="h-[calc(100dvh-220px)] sm:h-full overflow-y-auto">
                  <CommanderPool
                    usedIds={usedIds}
                    tempIds={draft.temp}
                    canInteract={isMyTurn && started && !selesai}
                    onSelect={selectCommander}
                  />
                </div>
              </div>
            ) : showFinal ? (
              // HOST / SPECTATOR / BROADCAST: selesai → final lineup (VS)
              <FinalLineup
                home={draft.picks.home}
                away={draft.picks.away}
                homeLabel={teamHomeLabel}
                awayLabel={teamAwayLabel}
              />
            ) : started && isPickPhase && showcaseIds.length > 0 ? (
              // HOST / SPECTATOR / BROADCAST: pick phase → display pick 3:4 kecil
              <ShowcasePanelSmall
                ids={showcaseIds}
                team={current.team}
                label={current.team === "HOME" ? teamHomeLabel : teamAwayLabel}
              />
            ) : (
              <ViewerIdleLabel started={started} />
            )}
          </div>

          {/* RIGHT PICK COLUMN */}
          <PickColumn
            label={teamAwayLabel}
            ids={draft.picks.away}
            active={
              isAwayTurn && current.action === "PICK" && started && !selesai
            }
            variant="away"
          />
        </section>

        {/* FOOTER INFO — disembunyikan di broadcast */}
        {!isBroadcast && (
          <section className="flex justify-between items-center text-[10px] sm:text-xs text-slate-400 mt-1">
            <div>
              You:{" "}
              <span className="font-semibold text-slate-200">
                {thisRoleLabel}
              </span>{" "}
              {isHost && (
                <span className="text-emerald-400 font-semibold">(HOST)</span>
              )}
            </div>
            <div className="flex gap-3">
              <span>
                {teamHomeLabel}:{" "}
                <span
                  className={roles.home ? "text-cyan-300" : "text-slate-500"}
                >
                  {roles.home ? "joined" : "waiting"}
                </span>
              </span>
              <span>
                {teamAwayLabel}:{" "}
                <span
                  className={roles.away ? "text-rose-300" : "text-slate-500"}
                >
                  {roles.away ? "joined" : "waiting"}
                </span>
              </span>
            </div>
          </section>
        )}
      </div>

      {/* FLOATING CONTROLS — non broadcast saja */}
      {!isBroadcast &&
        (isDrafter ? (
          <DrafterFloatingControls
            started={started}
            selesai={selesai}
            isHost={isHost}
            canStartDraft={canStartDraft}
            isMyTurn={isMyTurn}
            currentCount={current.count}
            tempIds={draft.temp}
            turnTeam={current.team}
            onStart={startDraft}
            onConfirm={confirmStep}
          />
        ) : (
          <ViewerBottomBar
            started={started}
            selesai={selesai}
            isHost={isHost}
            canStartDraft={canStartDraft}
            onStart={startDraft}
          />
        ))}
    </main>
  );
}

/* ========== SMALL COMPONENTS ========== */

function ViewerIdleLabel({ started }: { started: boolean }) {
  return (
    <span className="text-[11px] text-slate-400 text-center max-w-xs">
      {started ? "Waiting for picks…" : "Waiting for host to start the draft…"}
    </span>
  );
}

/* ========== BAN PILL & SLOT ========== */

function BanPill({
  title,
  ids,
  active,
  reverse,
  variant,
}: {
  title: string;
  ids: (number | null)[];
  active?: boolean;
  reverse?: boolean;
  variant: "home" | "away";
}) {
  const isHome = variant === "home";
  const ringColor =
    variant === "home" ? "ring-cyan-400/70" : "ring-rose-400/70";

  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-full bg-black/60 border border-white/10 min-w-[150px] sm:min-w-[220px] ${
        reverse ? "flex-row-reverse" : ""
      } ${active ? `ring-2 ${ringColor}` : ""}`}
    >
      <span
        className={`text-[10px] sm:text-xs uppercase tracking-[0.20em] ${
          isHome ? "text-cyan-300" : "text-rose-300"
        }`}
      >
        {title}
      </span>
      <div className="flex gap-1.5">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <BanSlot key={i} id={ids[i] ?? null} />
          ))}
      </div>
    </div>
  );
}

function BanSlot({ id }: { id: number | null }) {
  if (id === null) {
    return (
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900/80 border border-dashed border-slate-600 flex items-center justify-center">
        <span className="text-[9px] text-slate-500">—</span>
      </div>
    );
  }

  const src = id ? findImage(id) || findIcon(id) : "";
  return (
    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900/80 border border-white/15 flex items-center justify-center overflow-hidden">
      {id && src ? (
        <div className="relative w-full h-full">
          <Image src={src} alt="" fill className="object-fill" />
        </div>
      ) : (
        <span className="text-[9px] text-slate-500">?</span>
      )}
    </div>
  );
}

/* ========== PICK COLUMN ========== */

function PickColumn({
  label,
  ids,
  active,
  variant,
}: {
  label: string;
  ids: number[];
  active?: boolean;
  variant: "home" | "away";
}) {
  const isHome = variant === "home";
  const ringColor =
    variant === "home" ? "ring-cyan-400/80" : "ring-rose-400/80";

  return (
    <div
      className={`flex w-12 sm:w-16 md:w-20 lg:w-24 mt-8 sm:mt-4 md:mt-2 lg:mt-0 rounded-[24px] bg-black/60 border border-white/15 flex-col items-center py-3 gap-2 ${
        active ? `ring-2 ${ringColor}` : ""
      }`}
    >
      <span
        className={`text-[9px] sm:text-[10px] uppercase tracking-[0.25em] ${
          isHome ? "text-cyan-300" : "text-rose-300"
        }`}
      >
        {label}
      </span>
      <div className="flex flex-col gap-2">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <PickSlot key={i} id={ids[i]} variant={variant} />
          ))}
      </div>
    </div>
  );
}

function PickSlot({
  id,
  variant,
}: {
  id?: number | null;
  variant: "home" | "away";
}) {
  const src = id ? findImage(id) || findIcon(id) : "";
  const borderColor =
    variant === "home" ? "border-cyan-400/70" : "border-red-400/70";

  return (
    <div
      className={`w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-slate-900/90 border ${borderColor} flex items-center justify-center overflow-hidden`}
    >
      {id && src ? (
        <div className="relative w-full h-full">
          <Image src={src} alt="" fill className="object-fill" />
        </div>
      ) : (
        <span className="text-xs text-slate-600">?</span>
      )}
    </div>
  );
}

/* ========== SHOWCASE PICK 3:4 (HOST / SPEC / BROADCAST) ========== */

function ShowcasePanelSmall({
  ids,
  team,
  label,
}: {
  ids: number[];
  team: "HOME" | "AWAY";
  label: string;
}) {
  const limited = ids.slice(0, 2);
  const border =
    team === "HOME"
      ? "border-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.45)]"
      : "border-rose-300 shadow-[0_0_16px_rgba(248,113,113,0.45)]";

  const labelColor = team === "HOME" ? "text-cyan-300" : "text-rose-300";

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex gap-3">
        {limited.map((id, idx) => {
          const src = id ? findImage(id) || findIcon(id) : "";
          return (
            <div
              key={id ?? idx}
              className={`relative 
                w-[56px] h-[76px]
                sm:w-[70px] sm:h-[94px]
                md:w-[90px] md:h-[120px]
                lg:w-[110px] lg:h-[146px]
                rounded-xl overflow-hidden bg-black/70 border-2 ${border}`}
            >
              {src ? (
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-fill object-top"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-slate-500">
                  ?
                </div>
              )}
            </div>
          );
        })}
      </div>

      <span className={`text-[9px] uppercase tracking-[0.2em] ${labelColor}`}>
        {label} PICK
      </span>
    </div>
  );
}

/* ========== FINAL LINEUP (VS) ========== */

function FinalLineup({
  home,
  away,
  homeLabel,
  awayLabel,
}: {
  home: number[];
  away: number[];
  homeLabel: string;
  awayLabel: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-xs text-slate-300 uppercase tracking-[0.2em]">
        FINAL LINEUP
      </span>

      <div className="flex items-center gap-4 sm:gap-6">
        <TeamLineup label={homeLabel} ids={home} variant="home" />
        <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-[0.25em]">
          VS
        </span>
        <TeamLineup label={awayLabel} ids={away} variant="away" />
      </div>
    </div>
  );
}

function TeamLineup({
  label,
  ids,
  variant,
}: {
  label: string;
  ids: number[];
  variant: "home" | "away";
}) {
  const isHome = variant === "home";
  const labelColor = isHome ? "text-cyan-300" : "text-rose-300";

  return (
    <div className="flex flex-col items-center gap-1">
      <span className={`text-[10px] uppercase tracking-[0.22em] ${labelColor}`}>
        {label}
      </span>
      <div className="flex gap-2">
        {Array(4)
          .fill(0)
          .map((_, i) => {
            const id = ids[i];
            const src = id ? findImage(id) || findIcon(id) : "";
            return (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-slate-900/80 border border-white/20 flex items-center justify-center overflow-hidden"
              >
                {id && src ? (
                  <Image src={src} alt="" fill className="object-fill" />
                ) : (
                  <span className="text-[10px] text-slate-600">?</span>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

/* ========== TEMP SLOT & FLOATING CONTROLS (DRAFTER) ========== */

function TempSlot({ id }: { id?: number | null }) {
  const src = id ? findImage(id) || findIcon(id) : "";
  return (
    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-slate-400/60 bg-black/70 flex items-center justify-center overflow-hidden">
      {id && src ? (
        <div className="relative w-full h-full">
          <Image src={src} alt="" fill className="object-fill" />
        </div>
      ) : (
        <span className="text-[10px] text-slate-500">?</span>
      )}
    </div>
  );
}

interface DrafterFloatingControlsProps {
  started: boolean;
  selesai: boolean;
  isHost: boolean;
  canStartDraft: boolean;
  isMyTurn: boolean;
  currentCount: number;
  tempIds: number[];
  turnTeam: "HOME" | "AWAY";
  onStart: () => void;
  onConfirm: () => void;
}

function DrafterFloatingControls({
  started,
  selesai,
  isHost,
  canStartDraft,
  isMyTurn,
  currentCount,
  tempIds,
  turnTeam,
  onStart,
  onConfirm,
}: DrafterFloatingControlsProps) {
  return (
    <div className="pointer-events-none fixed bottom-[10vh] left-0 right-0 z-30 flex justify-center">
      <div className="pointer-events-auto w-full max-w-sm px-3">
        {started && !selesai && (
          <div className="flex justify-center gap-3 mb-2">
            {Array(currentCount)
              .fill(0)
              .map((_, i) => (
                <TempSlot key={i} id={tempIds[i]} />
              ))}
          </div>
        )}

        {!started ? (
          isHost ? (
            <button
              onClick={onStart}
              disabled={!canStartDraft}
              className={`w-full py-3 rounded-full text-sm font-semibold transition ${
                !canStartDraft
                  ? "bg-slate-800/80 text-slate-500 cursor-not-allowed border border-white/10"
                  : "bg-white text-slate-900 hover:bg-slate-100 border border-transparent"
              }`}
            >
              {canStartDraft ? "START DRAFT" : "WAITING HOME & AWAY"}
            </button>
          ) : (
            <div className="w-full py-2 rounded-full bg-black/60 border border-white/10 text-center text-[11px] text-slate-400">
              Waiting for host to start the draft…
            </div>
          )
        ) : selesai ? (
          <div className="w-full py-2 rounded-full bg-emerald-500/20 border border-emerald-400/60 text-center text-sm font-medium text-emerald-300">
            Draft Completed ✔
          </div>
        ) : (
          <button
            onClick={onConfirm}
            disabled={!isMyTurn || tempIds.length !== currentCount}
            className={`w-full py-3 rounded-full text-sm font-semibold transition ${
              !isMyTurn || tempIds.length !== currentCount
                ? "bg-slate-800/80 text-slate-500 cursor-not-allowed border border-white/10"
                : turnTeam === "HOME"
                ? "bg-gradient-to-r from-cyan-400 to-emerald-400 text-black hover:brightness-110 border border-transparent"
                : "bg-gradient-to-r from-rose-400 to-red-500 text-black hover:brightness-110 border border-transparent"
            }`}
          >
            {isMyTurn ? "CONFIRM" : `${turnTeam} TURN`}
          </button>
        )}
      </div>
    </div>
  );
}

/* ========== BOTTOM BAR VIEWER (HOST / SPEC) ========== */

function ViewerBottomBar({
  started,
  selesai,
  isHost,
  canStartDraft,
  onStart,
}: {
  started: boolean;
  selesai: boolean;
  isHost: boolean;
  canStartDraft: boolean;
  onStart: () => void;
}) {
  return (
    <div className="pointer-events-none fixed bottom-3 left-0 right-0 z-30 flex justify-center">
      <div className="pointer-events-auto w-full max-w-sm px-3">
        {!started ? (
          isHost ? (
            <button
              onClick={onStart}
              disabled={!canStartDraft}
              className={`w-full py-3 rounded-full text-sm font-semibold transition ${
                !canStartDraft
                  ? "bg-slate-800/80 text-slate-500 cursor-not-allowed border border-white/10"
                  : "bg-white text-slate-900 hover:bg-slate-100 border border-transparent"
              }`}
            >
              {canStartDraft ? "START DRAFT" : "WAITING HOME & AWAY"}
            </button>
          ) : (
            <div className="w-full py-2 rounded-full bg-black/60 border border-white/10 text-center text-[11px] text-slate-400">
              Waiting for host to start the draft…
            </div>
          )
        ) : selesai ? (
          <div className="w-full py-2 rounded-full bg-emerald-500/20 border border-emerald-400/60 text-center text-sm font-medium text-emerald-300">
            Draft Completed ✔
          </div>
        ) : null}
      </div>
    </div>
  );
}
