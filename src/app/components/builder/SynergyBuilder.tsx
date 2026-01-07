// SynergyBuilder.tsx
"use client";

import React, { useState, useMemo } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { heroes, Hero } from "../../data/s5/hero";
import { synergies, Synergy } from "../../data/s5/sinergi";
import { equipments, Equipment } from "../../data/equipment";
import { Board, BoardHero } from "./Board";
import { ActiveSynergyList } from "./ActiveSynergyList";
import { Filters } from "./Filters";
import { DraggableHero } from "./DraggableHero";
import { DraggableEquipment } from "./DraggableEquipment";

export default function SynergyBuilder() {
  const [board, setBoard] = useState<(BoardHero | null)[]>(
    Array(21).fill(null)
  );

  // Hero filters
  const [search, setSearch] = useState("");
  const [costFilter, setCostFilter] = useState<number | null>(null);
  const [factionFilter, setFactionFilter] = useState<string | null>(null);
  const [roleFilter, setRoleFilter] = useState<string | null>(null);

  // Equipment filter
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const filteredHeroes = useMemo(
    () =>
      heroes.filter((h) => {
        if (costFilter !== null && h.cost !== costFilter) return false;
        if (search && !h.name.toLowerCase().includes(search.toLowerCase()))
          return false;
        if (factionFilter && !h.synergies.faction.includes(factionFilter))
          return false;
        if (roleFilter && !h.synergies.roles.includes(roleFilter)) return false;
        return true;
      }),
    [search, costFilter, factionFilter, roleFilter]
  );

  const filteredEquipments = useMemo(
    () =>
      equipments.filter((eq) => {
        if (categoryFilter && eq.category !== categoryFilter) return false;
        return true;
      }),
    [categoryFilter]
  );

  // Active synergies
  const activeSynergies = useMemo(() => {
    const counts: Record<string, number> = {};
    const uniqueHeroes = new Set<number>();

    board.forEach((cell) => {
      if (!cell || uniqueHeroes.has(cell.id)) return;
      uniqueHeroes.add(cell.id);

      if (cell.synergies.faction)
        cell.synergies.faction.forEach(
          (faction) => (counts[faction] = (counts[faction] || 0) + 1)
        );
      cell.synergies.roles.forEach(
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

  // Drag end handler for heroes
  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    const data = active.data.current as {
      hero: Hero;
      source: "pool" | "board";
      index?: number;
    };
    if (!data?.hero) return;

    const next = [...board];

    if (over?.id.toString().startsWith("cell-")) {
      const idx = parseInt(over.id.toString().replace("cell-", ""), 10);
      if (!Number.isNaN(idx)) {
        if (data.source === "pool") {
          next[idx] = { ...data.hero, equipments: [] };
        } else if (data.source === "board" && data.index !== undefined) {
          if (idx === data.index) return;
          const fromHero = next[data.index];
          const toHero = next[idx];
          next[idx] = fromHero;
          next[data.index] = toHero ?? null;
        }
        setBoard(next);
      }
    } else if (!over && data.source === "board" && data.index !== undefined) {
      next[data.index] = null;
      setBoard(next);
    }
  };

  // Equip / Unequip handlers
  const handleEquip = (heroIndex: number, equipment: Equipment) => {
    setBoard((prev) =>
      prev.map((cell, idx) => {
        if (idx !== heroIndex || !cell) return cell;
        if (cell.equipments.find((x) => x.id === equipment.id)) return cell;
        if (cell.equipments.length >= 3) return cell;
        return { ...cell, equipments: [...cell.equipments, equipment] };
      })
    );
  };

  const handleUnequip = (heroIndex: number, eqId: number) => {
    setBoard((prev) =>
      prev.map((cell, idx) => {
        if (idx !== heroIndex || !cell) return cell;
        return {
          ...cell,
          equipments: cell.equipments.filter((eq) => eq.id !== eqId),
        };
      })
    );
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen">
      <div className="bg-black/50 rounded-lg p-6 max-w-7xl w-full">
        <h1 className="text-2xl font-extrabold text-yellow-300 mb-2 text-center">
          ⚡ Build Your Perfect Synergy
        </h1>
        <p className="text-sm text-gray-300 italic mb-6 text-center">
          Drag, drop, and discover the strongest combos.
        </p>

        <DndContext onDragEnd={handleDragEnd}>
          {/* Board + Active Synergy */}
          <div className="flex flex-row gap-4">
            <Board
              board={board}
              onEquip={handleEquip}
              onUnequip={handleUnequip}
            />
            <ActiveSynergyList activeSynergies={activeSynergies} />
          </div>

          {/* Clear Board */}
          <button
            onClick={() => setBoard(Array(21).fill(null))}
            className="px-3 py-1 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded mt-4"
          >
            Clear Board
          </button>

          {/* Filters */}
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
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            equipments={equipments}
          />

          {/* Pools */}
          <div className="mt-6 flex gap-4 overflow-x-auto">
            {/* Hero Pool */}
            <div className="flex-1 min-w-[300px] bg-gray-900/80 p-4 rounded-md">
              <h2 className="text-lg font-bold text-yellow-300 mb-2">
                Hero Pool
              </h2>
              <div className="grid grid-cols-8 gap-2">
                {filteredHeroes.map((hero) => (
                  <DraggableHero
                    key={hero.id}
                    id={`pool-${hero.id}`}
                    hero={hero}
                    source="pool"
                  />
                ))}
              </div>
            </div>

            {/* Equipment Pool */}
            {/* <div className="flex-1 min-w-[300px] bg-gray-900/80 p-4 rounded-md">
              <h2 className="text-lg font-bold text-green-300 mb-2">
                Equipment Pool
              </h2>
              <div className="grid grid-cols-8 gap-2">
                {filteredEquipments.map((eq) => (
                  <DraggableEquipment key={eq.id} equipment={eq} />
                ))}
              </div>
            </div> */}
          </div>
        </DndContext>
      </div>
    </div>
  );
}
