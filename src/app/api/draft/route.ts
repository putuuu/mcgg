import { NextResponse } from "next/server";
import { rtdb } from "@/lib/firebase";
import { ref, push, set, serverTimestamp } from "firebase/database";

export async function POST(req: Request) {
  const { homeTeam, awayTeam } = await req.json();

  if (!homeTeam || !awayTeam) {
    return NextResponse.json({ error: "Team name required" }, { status: 400 });
  }

  const roomRef = push(ref(rtdb, "rooms"));
  const roomId = roomRef.key!;

  const roomData = {
    id: roomId,
    homeTeam,
    awayTeam,
    createdAt: serverTimestamp(),
    status: "lobby",
  };

  await set(roomRef, roomData);

  return NextResponse.json(roomData);
}
