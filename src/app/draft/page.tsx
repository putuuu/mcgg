"use client";

import { useState } from "react";

type Room = {
  id: string;
  homeTeam: string;
  awayTeam: string;
};

export default function DraftLobbyPage() {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(false);

  async function createRoom() {
    if (!homeTeam || !awayTeam) return;
    setLoading(true);

    const res = await fetch("/api/draft", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ homeTeam, awayTeam }),
    });

    if (!res.ok) {
      alert("Failed to create room");
      setLoading(false);
      return;
    }

    const data: Room = await res.json();
    setRoom(data);
    setLoading(false);
  }

  const origin = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="w-full max-w-md rounded-2xl bg-black/55 backdrop-blur-md border border-white/10 shadow-2xl p-6 space-y-6">
        {/* Header */}

        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Draft Lobby
          </h1>
          <p className="text-sm text-neutral-400">
            Create room & share draft roles
          </p>
        </div>

        {/* FORM */}
        {!room ? (
          <div className="space-y-4">
            <Input
              placeholder="Home Team Name"
              value={homeTeam}
              onChange={setHomeTeam}
            />
            <Input
              placeholder="Away Team Name"
              value={awayTeam}
              onChange={setAwayTeam}
            />

            <button
              onClick={createRoom}
              disabled={!homeTeam || !awayTeam || loading}
              className="w-full py-2.5 rounded-lg font-semibold
                         bg-blue-600 hover:bg-blue-500
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition"
            >
              {loading ? "Creating Room…" : "Create Draft Room"}
            </button>
          </div>
        ) : (
          <>
            {/* TEAM INFO */}
            <div className="rounded-lg bg-neutral-800/60 p-4 text-sm">
              <p className="flex justify-between">
                <span className="text-neutral-400">Home</span>
                <span className="font-semibold">{room.homeTeam}</span>
              </p>
              <p className="flex justify-between">
                <span className="text-neutral-400">Away</span>
                <span className="font-semibold">{room.awayTeam}</span>
              </p>
            </div>

            {/* LINKS */}
            <div className="space-y-3">
              <LinkRow
                label="🎮 Host"
                url={`${origin}/draft/${room.id}?role=host`}
              />
              <LinkRow
                label={`🏠 ${room.homeTeam} (Home Team)`}
                url={`${origin}/draft/${room.id}?role=home`}
              />
              <LinkRow
                label={`🚗 ${room.awayTeam} (Away Team)`}
                url={`${origin}/draft/${room.id}?role=away`}
              />

              <div className="pt-2 border-t border-neutral-700 space-y-3">
                <LinkRow
                  label="👀 Spectator"
                  url={`${origin}/draft/${room.id}?role=spec`}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function Input({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2.5 rounded-lg
                 bg-neutral-800 border border-neutral-700
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 transition"
    />
  );
}

function LinkRow({
  label,
  url,
  highlight,
}: {
  label: string;
  url: string;
  highlight?: boolean;
}) {
  function copy() {
    navigator.clipboard.writeText(url);
  }

  return (
    <div
      className={`rounded-lg p-3 flex flex-col gap-2 border
        ${
          highlight
            ? "border-blue-500/50 bg-blue-500/10"
            : "border-neutral-700 bg-neutral-800/40"
        }`}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{label}</span>
        {highlight && (
          <span className="text-xs px-2 py-0.5 rounded bg-blue-600 text-white">
            LIVE
          </span>
        )}
      </div>

      <div className="flex gap-2">
        <input
          readOnly
          value={url}
          className="flex-1 px-3 py-2 rounded bg-neutral-900 border border-neutral-700 text-xs"
        />
        <button
          onClick={copy}
          className="px-3 py-2 rounded bg-neutral-700 hover:bg-neutral-600 text-xs"
        >
          Copy
        </button>
      </div>
    </div>
  );
}
