"use client";

import { useState } from "react";

export default function LobbyForm({
  onCreated,
}: {
  onCreated: (room: any) => void;
}) {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [loading, setLoading] = useState(false);

  async function createRoom() {
    setLoading(true);

    const res = await fetch("/api/draft", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ homeTeam, awayTeam }),
    });

    const data = await res.json();
    onCreated(data);
    setLoading(false);
  }

  return (
    <div className="space-y-4">
      <input
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Home Team Name"
        value={homeTeam}
        onChange={(e) => setHomeTeam(e.target.value)}
      />

      <input
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Away Team Name"
        value={awayTeam}
        onChange={(e) => setAwayTeam(e.target.value)}
      />

      <button
        disabled={!homeTeam || !awayTeam || loading}
        onClick={createRoom}
        className="w-full py-2 rounded-md bg-blue-600 text-white font-medium
                   disabled:opacity-50 disabled:cursor-not-allowed
                   hover:bg-blue-700 transition"
      >
        {loading ? "Creating..." : "Create Room"}
      </button>
    </div>
  );
}
