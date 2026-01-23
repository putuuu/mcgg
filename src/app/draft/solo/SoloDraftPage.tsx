"use client";

import DraftBackground from "../components/background/DraftBackground";
import DraftTopBar from "../components/layout/DraftTopBar";
import PickColumn from "../components/side/PickColumn";
import FinalResultPanel from "../components/center/FinalResultPanel";
import ConfirmActionBar from "../components/center/ConfirmActionBar";
import CommanderPool from "../components/player/CommanderPool";
import OrientationGuard from "../components/util/OrientationGuard";

import { useSoloDraftRoom } from "./useSoloDraftRoom";
import { draftSteps } from "../../data/test/draftSteps";

export default function SoloDraftScreen() {
  const {
    draft,
    timer,
    started,
    selesai,
    isMyTurn,
    current,
    selectCommander,
    startDraft,
    confirmStep,
  } = useSoloDraftRoom();

  const homeLabel = "HOME";
  const awayLabel = "AWAY";

  /* SOLO FLAGS */
  const isHost = true;
  const isPlayerUI = true;
  const showActionBar = true;

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
        phase={selesai ? "DONE" : (current?.action ?? "BAN")}
        step={draft.step + 1}
        totalSteps={draftSteps.length}
        timer={timer}
      />

      {/* BODY */}
      <section
        className="
    flex h-full min-h-0
    gap-1 sm:gap-2 lg:gap-3
    px-2 sm:px-3 lg:px-4
    pb-2
  "
      >
        {/* HOME */}
        <div className="w-[96px] shrink-0">
          <PickColumn team="HOME" label={homeLabel} picks={draft.picks.home} />
        </div>

        {/* CENTER */}
        <div className="flex-1 flex flex-col min-h-0 items-center">
          <div className="flex-1 min-h-0 flex items-center justify-center relative">
            {!started ? (
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-xl font-semibold">Ready to Draft?</h2>
                <button
                  onClick={startDraft}
                  className="px-10 py-4 rounded-full bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition"
                >
                  START DRAFT
                </button>
              </div>
            ) : isPlayerUI ? (
              <div className="w-full h-full overflow-hidden">
                <div
                  className="
    w-full
    max-w-[1100px]
    xl:max-w-[1200px]
    2xl:max-w-[1280px]
    h-full
    rounded-2xl
    bg-black/60
    border border-white/10
    overflow-hidden
  "
                >
                  <CommanderPool
                    usedIds={usedIds}
                    tempIds={draft.temp}
                    canInteract={!selesai && isMyTurn}
                    onSelect={selectCommander}
                    variant="solo" // 👈 optional, lihat step 3
                  />
                </div>
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

          {showActionBar && (
            <ConfirmActionBar
              started={started}
              selesai={selesai}
              isHost={isHost}
              isMyTurn={isMyTurn}
              canStartDraft={true}
              currentCount={current?.count ?? 0}
              tempCount={draft.temp.length}
              onStart={startDraft}
              onConfirm={confirmStep}
            />
          )}
        </div>

        {/* AWAY */}
        <div className="w-[96px] shrink-0">
          <PickColumn team="AWAY" label={homeLabel} picks={draft.picks.away} />
        </div>
      </section>
    </main>
  );
}
