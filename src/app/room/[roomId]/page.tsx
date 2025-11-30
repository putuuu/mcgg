"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getState, setState, listenState } from "@/lib/roomDraft";
import DraftUI from "../../draft/page"; // UI yang sudah kamu buat

export default function RoomPage({ params }: { params: { roomId: string } }) {
  const roomId = params.roomId;
  const search = useSearchParams();
  const role = search.get("role")?.toUpperCase(); // HOST, HOME, AWAY, SPEC

  const [state, setLocalState] = useState<any | null>(null);

  // listen realtime
  useEffect(() => {
    const unsub = listenState(roomId, (remoteState) => {
      setLocalState(remoteState);
    });
    return () => unsub();
  }, [roomId]);

  // start room (host only)
  const startDraft = async () => {
    if (role !== "HOST") return;
    await setState(roomId, {
      status: "DRAFTING",
      step: 0,
      timer: 35,
      temp: [],
      home: { name: "Home", bans: [], picks: [] },
      away: { name: "Away", bans: [], picks: [] },
    });
  };

  // pilih commander (HOME / AWAY)
  const selectCommander = async (id: number) => {
    if (!state || (role !== "HOME" && role !== "AWAY")) return;

    // hanya giliran tim ini yang boleh pilih
    const currentTeam = state.stepTeam; // definisikan dari langkah draft
    if (currentTeam !== role) return;

    const isPicked = state.temp.includes(id);
    const newTemp = isPicked
      ? state.temp.filter((x: number) => x !== id)
      : [...state.temp, id];

    await setState(roomId, { temp: newTemp });
  };

  // confirm
  const confirm = async () => {
    if (role !== "HOME" && role !== "AWAY") return;
    // logika confirm draft... (sama dengan versi offline)
    // setelah hitung ban/pick → state.step++ dan reset temp
  };

  // render
  if (!state) return <div className="text-white">Loading...</div>;
  return (
    <DraftUI
      state={state}
      role={role}
      onSelect={selectCommander}
      onConfirm={confirm}
      onStart={startDraft}
    />
  );
}
