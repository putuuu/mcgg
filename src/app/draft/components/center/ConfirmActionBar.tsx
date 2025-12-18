"use client";

interface ConfirmActionBarProps {
  started: boolean;
  selesai: boolean;
  isHost: boolean;
  isMyTurn: boolean;
  canStartDraft: boolean;
  currentCount: number;
  tempCount: number;
  onStart: () => void;
  onConfirm: () => void;
}

export default function ConfirmActionBar({
  started,
  selesai,
  isHost,
  isMyTurn,
  canStartDraft,
  currentCount,
  tempCount,
  onStart,
  onConfirm,
}: ConfirmActionBarProps) {
  return (
    <div
      className="
        sticky bottom-0 z-20
        w-full
        bg-black/80 backdrop-blur
        border-t border-white/10
        px-3 py-2
      "
    >
      {!started ? (
        isHost ? (
          <button
            onClick={onStart}
            disabled={!canStartDraft}
            className={`
              w-full py-3 rounded-xl text-sm font-semibold transition
              ${
                canStartDraft
                  ? "bg-white text-black"
                  : "bg-slate-700 text-slate-400 cursor-not-allowed"
              }
            `}
          >
            {canStartDraft ? "START DRAFT" : "WAITING PLAYERS"}
          </button>
        ) : (
          <div className="text-center text-xs text-slate-400 py-2">
            Waiting for host to start the draft…
          </div>
        )
      ) : selesai ? (
        <div className="text-center text-sm text-emerald-400 font-semibold py-2">
          Draft Completed
        </div>
      ) : (
        <button
          onClick={onConfirm}
          disabled={!isMyTurn || tempCount !== currentCount}
          className={`
            w-full py-3 rounded-xl text-sm font-semibold transition
            ${
              !isMyTurn || tempCount !== currentCount
                ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                : "bg-gradient-to-r from-cyan-400 to-emerald-400 text-black"
            }
          `}
        >
          {isMyTurn ? `CONFIRM (${tempCount}/${currentCount})` : "WAITING TURN"}
        </button>
      )}
    </div>
  );
}
