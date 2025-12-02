"use client";

import { useParams, useSearchParams } from "next/navigation";
import DraftScreen from "../components/DraftScreen";

export default function DraftRoomPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const search = useSearchParams();

  const rawRole = search.get("role"); // host | home | away | spectator | spec
  const role =
    rawRole === "spectator"
      ? "spec"
      : (rawRole as "host" | "home" | "away" | "spec" | null);

  // mode broadcast: ?mode=broadcast atau ?broadcast=1
  const mode = search.get("mode");
  const broadcast = mode === "broadcast" || search.get("broadcast") === "1";

  // custom nama tim: ?homeName=TEAM%20A&awayName=TEAM%20B
  const homeNameParam = search.get("homeName") || undefined;
  const awayNameParam = search.get("awayName") || undefined;

  if (!roomId) {
    return (
      <div className="min-h-screen bg-[#05060a] text-white flex items-center justify-center">
        Invalid room
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-[#05060a] overflow-hidden">
      <style>{`nav { display: none !important; }`}</style>
      <DraftScreen
        roomId={roomId}
        initialRole={role ?? undefined}
        broadcast={broadcast}
        homeName={homeNameParam}
        awayName={awayNameParam}
      />
    </div>
  );
}
