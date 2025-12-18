"use client";

import { useParams, useSearchParams } from "next/navigation";
import DraftScreen from "../DraftScreen";

export default function Page() {
  const { roomId } = useParams<{ roomId: string }>();
  const search = useSearchParams();

  const role = search.get("role") as "host" | "home" | "away" | "spec" | null;

  const broadcast =
    search.get("mode") === "broadcast" || search.get("broadcast") === "1";

  if (!roomId) {
    return <div>Invalid room</div>;
  }

  return (
    <div
      className="fixed inset-0 bg-black overflow-hidden"
      style={{
        width: "100dvw",
        height: "100dvh",
        overscrollBehavior: "none",
      }}
    >
      <style>{`nav { display: none !important; }`}</style>
      <style>{`footer { display: none !important; }`}</style>
      <DraftScreen
        roomId={roomId}
        initialRole={role ?? undefined}
        broadcast={broadcast}
      />
    </div>
  );
}
