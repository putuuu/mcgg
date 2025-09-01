import { Equipment } from "./equipment";

export interface BoardHero {
  id: number;
  name: string;
  image: string;
  synergies: string[];
  equipments: Equipment[]; // max 3
}
