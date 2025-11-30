// src/data/commanders.ts
export type Commander = {
  id: string;
  name: string;
  avatarUrl: string;
  role: "aggro" | "eco" | "utility" | "other";
};

export const commanders: Commander[] = [
  {
    id: "remy",
    name: "Remy",
    avatarUrl: "/images/commanders/remy.png",
    role: "eco",
  },
  {
    id: "benny",
    name: "Benny",
    avatarUrl: "/images/commanders/benny.png",
    role: "utility",
  },
  {
    id: "angela",
    name: "Angela",
    avatarUrl: "/images/commanders/angela.png",
    role: "aggro",
  },
  // tambahin lainnya...
];
