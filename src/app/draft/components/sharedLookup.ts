import { commanders } from "../../data/commanders";

export function findCommander(id: number) {
  return commanders.find((c) => c.id === id);
}

export function findIcon(id: number) {
  return findCommander(id)?.icon || "";
}

export function findImage(id: number) {
  return findCommander(id)?.image || "";
}
