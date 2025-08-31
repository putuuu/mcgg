"use client";

import React, { useState, useMemo } from "react";
import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
  DraggableAttributes,
  DraggableSyntheticListeners,
} from "@dnd-kit/core";
import { heroes, Hero } from "../../data/s3/hero";
import { synergies, Synergy } from "../../data/s3/sinergi";
import { Board } from "./Board";
import { ActiveSynergyList } from "./ActiveSynergyList";
import { Filters } from "./Filters";
import { HeroPool } from "./HeroPool";

// ===== Draggable Data Type =====
interface HeroDraggableData {
  hero: Hero;
  source: "board" | "pool";
  index?: number;
}

// ===== Draggable Component =====
interface DraggableChildrenProps {
  attributes: DraggableAttributes;
  listeners: DraggableSyntheticListeners;
  setNodeRef: (node: HTMLElement | null) => void;
  transform: { x: number; y: number } | null;
  isDragging: boolean;
}

interface DraggableProps {
  id: string;
  data: HeroDraggableData;
  children: (props: DraggableChildrenProps) => React.ReactNode;
}

export function Draggable({ id, data, children }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id, data });

  return (
    <>
      {children({ attributes, listeners, setNodeRef, transform, isDragging })}
    </>
  );
}

// ===== Droppable Component =====
interface DroppableProps {
  id: string;
  children: (props: {
    setNodeRef: (node: HTMLElement | null) => void;
    isOver: boolean;
  }) => React.ReactNode;
}

export function Droppable({ id, children }: DroppableProps) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return <>{children({ setNodeRef, isOver })}</>;
}

// ===== Main SynergyBuilder =====
export default function SynergyBuilder() {
  const [board, setBoard] = useState<(Hero | null)[]>(Array(21).fill(null));

  // Compute active synergies client-side
  const activeSynergies = useMemo(() => {
    const counts: Record<string, number> = {};
    const uniqueHeroes = new Set<number>();

    board.forEach((hero) => {
      if (!hero || uniqueHeroes.has(hero.id)) return;
      uniqueHeroes.add(hero.id);

      if (hero.synergies.faction)
        counts[hero.synergies.faction] =
          (counts[hero.synergies.faction] || 0) + 1;
      hero.synergies.roles.forEach(
        (role) => (counts[role] = (counts[role] || 0) + 1)
      );
    });

    return synergies
      .map((syn) => {
        const count = counts[syn.name] || 0;
        if (count === 0) return null;
        const sortedEffects = [...syn.effects].sort(
          (a, b) => a.units - b.units
        );
        const nextEffect =
          sortedEffects.find((e) => e.units > count) ??
          sortedEffects[sortedEffects.length - 1];
        return { ...syn, count, nextRequired: nextEffect.units };
      })
      .filter(Boolean) as (Synergy & { count: number; nextRequired: number })[];
  }, [board]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    const data = active.data.current as HeroDraggableData;
    if (!data?.hero) return;

    const next = [...board];

    // === Drop ke dalam board cell ===
    if (over?.id.toString().startsWith("cell-")) {
      const idx = parseInt(over.id.toString().replace("cell-", ""), 10);
      if (!Number.isNaN(idx)) {
        if (data.source === "pool") {
          // dari pool → masuk, replace kalau ada
          next[idx] = { ...data.hero };
        } else if (data.source === "board" && data.index !== undefined) {
          if (idx === data.index) {
            // drag ke cell sama → tidak berubah
            return;
          }
          const fromHero = next[data.index];
          const toHero = next[idx];

          if (toHero) {
            // ada hero di target → swap
            next[data.index] = toHero;
            next[idx] = fromHero;
          } else {
            // target kosong → pindah
            next[data.index] = null;
            next[idx] = fromHero;
          }
        }
        setBoard(next);
      }
    }

    // === Drop keluar board ===
    else if (!over && data.source === "board" && data.index !== undefined) {
      next[data.index] = null;
      setBoard(next);
    }
  };

  const [search, setSearch] = useState("");
  const [costFilter, setCostFilter] = useState<number | null>(null);
  const [factionFilter, setFactionFilter] = useState<string | null>(null);
  const [roleFilter, setRoleFilter] = useState<string | null>(null);

  const filteredHeroes = useMemo(
    () =>
      heroes.filter((h) => {
        if (costFilter !== null && h.cost !== costFilter) return false;
        if (search && !h.name.toLowerCase().includes(search.toLowerCase()))
          return false;
        if (factionFilter && h.synergies.faction !== factionFilter)
          return false;
        if (roleFilter && !h.synergies.roles.includes(roleFilter)) return false;
        return true;
      }),
    [search, costFilter, factionFilter, roleFilter]
  );

  return (
    <div className="flex flex-col items-center p-6 min-h-screen">
      <div className="bg-black/50 rounded-lg p-6 max-w-7xl w-full">
        <h1 className="text-2xl font-extrabold text-yellow-300 mb-2 text-center">
          ⚡ Build Your Perfect Synergy
        </h1>
        <p className="text-sm text-gray-300 italic mb-6 text-center">
          “Drag, drop, and discover the strongest combos.”
        </p>

        <DndContext onDragEnd={handleDragEnd}>
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            <div>
              <Board board={board} />
              <Filters
                search={search}
                setSearch={setSearch}
                costFilter={costFilter}
                setCostFilter={setCostFilter}
                factionFilter={factionFilter}
                setFactionFilter={setFactionFilter}
                roleFilter={roleFilter}
                setRoleFilter={setRoleFilter}
                synergies={synergies}
              />
              <button
                onClick={() => setBoard(Array(21).fill(null))}
                className="px-3 py-1 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded"
              >
                Clear Board
              </button>
            </div>
            <ActiveSynergyList activeSynergies={activeSynergies} />
          </div>

          <HeroPool heroes={filteredHeroes} />
        </DndContext>
      </div>
    </div>
  );
}
