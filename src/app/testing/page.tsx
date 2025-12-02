"use client";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";

export default function TestFirebase() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const ref = doc(db, "test", "hello");

    // realtime listener
    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        setMsg(snap.data().text);
      }
    });

    // update data setiap 3 detik
    setInterval(() => {
      setDoc(ref, { text: "Updated at " + Date.now() });
    }, 3000);

    return () => unsub();
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>Realtime Firestore</h1>
      <p>Incoming: {msg}</p>
    </main>
  );
}
