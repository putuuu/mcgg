"use client";
import React from "react";
import { Hero } from "../../data/s3/hero";
import { DroppableCell } from "./DroppableCell";
import { DraggableHero } from "./DraggableHero";

interface BoardProps {
  board: (Hero | null)[];
}

export function Board({ board }: BoardProps) {
  return (
    <div className="flex-1 bg-gray-800/60 p-4 rounded-md flex justify-center">
      <div className="grid grid-cols-7 gap-2 auto-rows-[5rem]">
        {board.map((cell, idx) => (
          <DroppableCell key={idx} id={`cell-${idx}`}>
            {({ setNodeRef, isOver }) => (
              <div
                ref={setNodeRef}
                className={`w-20 h-20 border rounded-md flex items-center justify-center ${
                  isOver ? "bg-blue-600" : "bg-gray-900"
                }`}
              >
                {cell && (
                  <DraggableHero
                    id={`cell-${idx}`}
                    hero={cell}
                    source="board"
                    index={idx}
                  />
                )}
              </div>
            )}
          </DroppableCell>
        ))}
      </div>
    </div>
  );
}
