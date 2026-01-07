"use client";

import {
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { Hero } from "../../../data/s5/hero";
import BoardSlot from "./BoardSlot";

const COLS = 7;
const ROWS = 3;

export default function Board({
  board,
  onChange,
}: {
  board: (Hero | null)[];
  onChange: (b: (Hero | null)[]) => void;
}) {
  const sensors = useSensors(useSensor(PointerSensor, { distance: 6 }));

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const hero: Hero | undefined = active.data.current?.hero;

    const from =
      typeof active.id === "string" && active.id.startsWith("slot-")
        ? Number(active.id.replace("slot-", ""))
        : -1;

    const to =
      typeof over.id === "string" && over.id.startsWith("slot-")
        ? Number(over.id.replace("slot-", ""))
        : -1;

    if (to < 0) return;

    const next = [...board];

    // FROM POOL → BOARD
    if (hero && from === -1) {
      next[to] = hero;
      onChange(next);
      return;
    }

    // MOVE / SWITCH DI BOARD
    if (from >= 0 && to >= 0 && from !== to) {
      [next[from], next[to]] = [next[to], next[from]];
      onChange(next);
    }
  };

  return (
    <div className="panel board-frame">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-semibold">Board</h3>
        <button
          onClick={() => onChange(Array(21).fill(null))}
          className="text-xs text-red-400"
        >
          Clear Board
        </button>
      </div>

      <DndContext sensors={sensors} onDragEnd={onDragEnd}>
        <div className="flex justify-center">
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: `repeat(${COLS}, 96px)`,
              gridTemplateRows: `repeat(${ROWS}, 96px)`,
            }}
          >
            {board.map((hero, i) => (
              <BoardSlot
                key={i}
                id={`slot-${i}`}
                hero={hero}
                onRemove={() => {
                  const next = [...board];
                  next[i] = null;
                  onChange(next);
                }}
              />
            ))}
          </div>
        </div>
      </DndContext>
    </div>
  );
}
