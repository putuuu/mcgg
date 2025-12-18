"use client";

import DraftBackground from "./components/background/DraftBackground";
import DraftTopBar from "./components/layout/DraftTopBar";
import PickColumn from "./components/side/PickColumn";
import FinalResultPanel from "./components/center/FinalResultPanel";
import ConfirmActionBar from "./components/center/ConfirmActionBar";
import ShadowPickCard from "./components/center/ShadowPickCard";
import CommanderPool from "./components/player/CommanderPool";
import OrientationGuard from "./components/util/OrientationGuard";

import { useDraftRoom } from "./hooks/useDraftRoom";
import { draftSteps } from "../data/test/draftSteps";

interface DraftScreenProps {
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
}: DraftScreenProps) {
  const {
    draft,
    timer,
    started,
    selesai,
    roles,
    myTeam,
    deviceId,
    isMyTurn,
    current,
    selectCommander,
    startDraft,
    confirmStep,
  } = useDraftRoom(roomId, initialRole);

  const homeLabel = homeName?.trim() || "HOME";
  const awayLabel = awayName?.trim() || "AWAY";

  const isDrafter = myTeam === "HOME" || myTeam === "AWAY";
  const isHost = roles.host === deviceId;
  const isPlayerUI = isDrafter && !broadcast;
  const isSpectatorUI = !isPlayerUI && !broadcast;
  const showActionBar = (isHost || isDrafter) && !broadcast;

  /* USED IDS */
  const usedIds = new Set<number>();
  [
    ...draft.bans.home,
    ...draft.bans.away,
    ...draft.picks.home,
    ...draft.picks.away,
  ].forEach((id) => id !== null && usedIds.add(id));

  return (
    <main className="w-full h-full overflow-hidden text-slate-50 touch-none">
      <OrientationGuard />
      <DraftBackground />

      <DraftTopBar
        homeLabel={homeLabel}
        awayLabel={awayLabel}
        homeBans={draft.bans.home}
        awayBans={draft.bans.away}
        phase={selesai ? "DONE" : current.action}
        step={draft.step + 1}
        totalSteps={draftSteps.length}
        timer={timer}
      />

      {/* BODY */}
      <section className="flex h-full min-h-0 gap-2 px-2 pb-2">
        {/* HOME */}
        <PickColumn team="HOME" label={homeLabel} picks={draft.picks.home} />

        {/* CENTER */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* MAIN CONTENT */}
          <div className="flex-1 min-h-0 flex items-center justify-center relative">
            {isSpectatorUI && draft.temp.length > 0 && (
              <ShadowPickCard team={current.team} tempIds={draft.temp} />
            )}

            {isPlayerUI ? (
              <div className="w-full h-full rounded-2xl bg-black/60 border border-white/10 overflow-hidden">
                <CommanderPool
                  usedIds={usedIds}
                  tempIds={draft.temp}
                  canInteract={started && !selesai && isMyTurn}
                  onSelect={selectCommander}
                />
              </div>
            ) : selesai ? (
              <FinalResultPanel
                homeLabel={homeLabel}
                awayLabel={awayLabel}
                homePicks={draft.picks.home}
                awayPicks={draft.picks.away}
              />
            ) : (
              <div className="w-full h-full" />
            )}
          </div>

          {/* ✅ ACTION BAR — HOST & PLAYER */}
          {showActionBar && (
            <ConfirmActionBar
              started={started}
              selesai={selesai}
              isHost={isHost}
              isMyTurn={isMyTurn}
              canStartDraft={!!roles.home && !!roles.away}
              currentCount={current.count}
              tempCount={draft.temp.length}
              onStart={startDraft}
              onConfirm={confirmStep}
            />
          )}
        </div>

        {/* AWAY */}
        <PickColumn team="AWAY" label={awayLabel} picks={draft.picks.away} />
      </section>
    </main>
  );
}
