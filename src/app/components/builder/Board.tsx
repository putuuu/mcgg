"use client";

import React from "react";
import { Hero } from "../../data/s3/hero";
import { Equipment } from "../../data/equipment";
import { DroppableCell } from "./DroppableCell";
import { DraggableHero } from "./DraggableHero";

export interface BoardHero extends Hero {
  equipments: Equipment[];
}

interface BoardProps {
  board: (BoardHero | null)[];
  onEquip: (heroIndex: number, equipment: Equipment) => void;
  onUnequip: (heroIndex: number, eqId: number) => void;
}

export function Board({ board, onEquip, onUnequip }: BoardProps) {
  return (
    <div className="flex-1 bg-gray-800/60 p-4 rounded-md flex justify-center">
      <div className="grid grid-cols-7 gap-2 auto-rows-[6rem]">
        {board.map((cell, idx) => (
          <DroppableCell key={idx} id={`cell-${idx}`}>
            {({ setNodeRef, isOver }) => (
              <div
                ref={setNodeRef}
                className={`w-24 h-24 border rounded-md relative flex items-center justify-center ${
                  isOver ? "bg-blue-600" : "bg-gray-900"
                }`}
                onDrop={(e) => {
                  const data = e.dataTransfer.getData("equipment");
                  if (data && cell) {
                    const eq = JSON.parse(data) as Equipment;
                    if (!cell.equipments.find((x) => x.id === eq.id))
                      onEquip(idx, eq);
                  }
                }}
                onDragOver={(e) => e.preventDefault()}
              >
                {cell && (
                  <>
                    {/* Equipment di depan hero */}
                    <div className="absolute bottom-1 left-1 flex gap-1 flex-wrap z-10">
                      {cell.equipments.map((eq) => (
                        <div
                          key={eq.id}
                          className="w-6 h-6 bg-black/50 rounded cursor-pointer"
                          onClick={() => onUnequip(idx, eq.id)}
                        >
                          <img
                            src={eq.icon}
                            alt={eq.name}
                            className="w-6 h-6"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Hero */}
                    <DraggableHero
                      id={`cell-${idx}`}
                      hero={cell}
                      source="board"
                      index={idx}
                    />
                  </>
                )}
              </div>
            )}
          </DroppableCell>
        ))}
      </div>
    </div>
  );
}
