import { db } from "./firebase";
import { ref, update, get, onValue } from "firebase/database";

export const getState = async (roomId: string) => {
  const snap = await get(ref(db, `rooms/${roomId}/state`));
  return snap.exists() ? snap.val() : null;
};

export const setState = (roomId: string, newState: any) => {
  return update(ref(db, `rooms/${roomId}/state`), newState);
};

export const listenState = (roomId: string, callback: (s: any) => void) => {
  return onValue(ref(db, `rooms/${roomId}/state`), (snap) => {
    callback(snap.val());
  });
};
