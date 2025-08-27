"use client";

import React, { useState, useMemo } from "react";
import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { heroes, Hero } from "../data/s3/hero";
import { synergies, Synergy } from "../data/s3/sinergi";
import Image from "next/image";

// ===== Draggable Component =====
interface DraggableProps<T> {
  id: string;
  data: T;
  children: (props: {
    attributes: Record<string, unknown>;
    listeners: Record<string, unknown>;
    setNodeRef: (node: HTMLElement | null) => void;
    transform: { x: number; y: number } | null;
    isDragging: boolean;
  }) => React.ReactNode;
}

function Draggable<T>({ id, data, children }: DraggableProps<T>) {
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

function Droppable({ id, children }: DroppableProps) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return <>{children({ setNodeRef, isOver })}</>;
}

// ===== Main Component =====
export default function SynergyBuilder() {
  const [board, setBoard] = useState<(Hero | null)[]>(Array(21).fill(null));

  // Hitung sinergi aktif
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

  // Handle drag end
  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    const hero = (
      active.data.current as { hero: Hero; source: string; index?: number }
    )?.hero;
    const source = (
      active.data.current as { hero: Hero; source: string; index?: number }
    )?.source;
    const fromIndex = (
      active.data.current as { hero: Hero; source: string; index?: number }
    )?.index;

    if (!hero) return;

    const next = [...board];

    if (over?.id.toString().startsWith("cell-")) {
      const idx = parseInt(over.id.toString().replace("cell-", ""), 10);
      if (!Number.isNaN(idx)) {
        if (source === "pool") next[idx] = { ...hero };
        else if (source === "board" && fromIndex !== undefined) {
          next[fromIndex] = null;
          next[idx] = hero;
        }
        setBoard(next);
      }
    } else if (!over && source === "board" && fromIndex !== undefined) {
      next[fromIndex] = null;
      setBoard(next);
    }
  };

  // Filters
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
          {/* Board + Synergies */}
          <div className="flex gap-6 w-full max-w-6xl">
            {/* Board */}
            <div className="flex-1 bg-gray-800/60 p-4 rounded-md flex justify-center">
              <div className="grid grid-cols-7 gap-2">
                {board.map((cell, idx) => (
                  <Droppable key={idx} id={`cell-${idx}`}>
                    {({ setNodeRef, isOver }) => (
                      <div
                        ref={setNodeRef}
                        className={`w-20 h-20 border rounded-md flex items-center justify-center ${
                          isOver ? "bg-blue-600" : "bg-gray-900"
                        }`}
                      >
                        {cell && (
                          <Draggable
                            id={`cell-${idx}`}
                            data={{ hero: cell, source: "board", index: idx }}
                          >
                            {({
                              attributes,
                              listeners,
                              setNodeRef,
                              transform,
                              isDragging,
                            }) => (
                              <div
                                ref={setNodeRef}
                                {...listeners}
                                {...attributes}
                                className="relative group w-20 h-20"
                                style={{
                                  transform: transform
                                    ? `translate(${transform.x}px, ${transform.y}px)`
                                    : "none",
                                  opacity: isDragging ? 0.5 : 1,
                                }}
                              >
                                <div className="relative w-20 h-20">
                                  <Image
                                    src={cell.image}
                                    alt={cell.name}
                                    fill
                                    className="object-cover object-top rounded"
                                  />
                                </div>
                                {/* Hover Panel */}
                                <div className="absolute z-50 hidden group-hover:block left-24 top-0 w-64 bg-gray-900/95 text-white rounded-md shadow-lg p-3">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Image
                                      src={cell.skill.icon}
                                      alt="Skill Icon"
                                      width={20}
                                      height={20}
                                    />
                                    <h3 className="font-bold text-yellow-300">
                                      {cell.name}
                                    </h3>
                                    <span className="ml-auto text-sm text-gray-300">
                                      Cost {cell.cost}
                                    </span>
                                  </div>
                                  <p className="text-sm text-green-300 font-semibold">
                                    {cell.skill.name}
                                  </p>
                                  <p className="text-xs text-gray-300">
                                    {cell.skill.description}
                                  </p>
                                  <div className="flex gap-2 mt-2 text-xs text-blue-300 flex-wrap">
                                    {cell.synergies.faction && (
                                      <span className="bg-gray-700 px-2 py-0.5 rounded">
                                        {cell.synergies.faction}
                                      </span>
                                    )}
                                    {cell.synergies.roles.map((role) => (
                                      <span
                                        key={role}
                                        className="bg-gray-700 px-2 py-0.5 rounded"
                                      >
                                        {role}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        )}
                      </div>
                    )}
                  </Droppable>
                ))}
              </div>
            </div>

            {/* Active Synergies */}
            <div className="w-64 bg-gray-800/60 p-4 rounded-md">
              <h2 className="text-lg font-bold text-yellow-400 mb-2">
                Active Synergies
              </h2>
              {activeSynergies.length === 0 ? (
                <p className="text-gray-400">No synergies</p>
              ) : (
                <ul className="space-y-2">
                  {activeSynergies.map((syn) => (
                    <li
                      key={syn.id}
                      className="relative group flex items-center gap-2 cursor-pointer"
                    >
                      <div className="relative w-8 h-8">
                        <Image
                          src={syn.icon}
                          alt={syn.name}
                          fill
                          className="object-cover object-top rounded"
                        />
                      </div>
                      <span className="text-white">{syn.name}</span>
                      <span className="text-green-400 ml-auto">
                        {syn.count}/{syn.nextRequired}
                      </span>
                      {/* Hover Tooltip */}
                      <div className="absolute hidden group-hover:block z-50 left-10 top-0 w-72 bg-gray-900/95 text-white rounded-md shadow-lg p-3">
                        <h3 className="font-bold text-yellow-300">
                          {syn.name}
                        </h3>
                        <p className="text-sm text-gray-300 mb-2">
                          {syn.description}
                        </p>
                        <ul className="space-y-1">
                          {syn.effects.map((eff, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-gray-200 flex gap-2 items-start"
                            >
                              <span className="text-green-400 font-semibold">
                                {eff.units} Units:
                              </span>
                              <span>{eff.effect}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Filters */}
          <div className="mt-6 w-full max-w-4xl bg-gray-800/40 p-3 rounded-md">
            <div className="flex items-center gap-4 justify-center">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-3 py-1 rounded bg-gray-700 text-white w-48"
              />
              <select
                value={costFilter ?? ""}
                onChange={(e) =>
                  setCostFilter(e.target.value ? Number(e.target.value) : null)
                }
                className="px-2 py-1 rounded bg-gray-700 text-white"
              >
                <option value="">All Costs</option>
                {[1, 2, 3, 4, 5].map((c) => (
                  <option key={c} value={c}>
                    {c} Cost
                  </option>
                ))}
              </select>
              <select
                value={factionFilter ?? ""}
                onChange={(e) => setFactionFilter(e.target.value || null)}
                className="px-2 py-1 rounded bg-gray-700 text-white"
              >
                <option value="">All Factions</option>
                {synergies
                  .filter((s) => s.type === "Faction")
                  .map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
              </select>
              <select
                value={roleFilter ?? ""}
                onChange={(e) => setRoleFilter(e.target.value || null)}
                className="px-2 py-1 rounded bg-gray-700 text-white"
              >
                <option value="">All Roles</option>
                {synergies
                  .filter((s) => s.type === "Role")
                  .map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Hero Pool */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center max-w-6xl bg-gray-800/40 p-4 rounded-md">
            {filteredHeroes.map((hero) => (
              <Draggable
                key={`pool-${hero.id}`}
                id={`pool-${hero.id}`}
                data={{ hero, source: "pool" }}
              >
                {({
                  attributes,
                  listeners,
                  setNodeRef,
                  transform,
                  isDragging,
                }) => (
                  <div
                    ref={setNodeRef}
                    {...listeners}
                    {...attributes}
                    className="relative group w-16 h-16 bg-gray-700 rounded-md flex items-center justify-center m-2"
                    style={{
                      transform: transform
                        ? `translate(${transform.x}px, ${transform.y}px)`
                        : "none",
                      opacity: isDragging ? 0.5 : 1,
                    }}
                  >
                    <div className="relative w-16 h-16">
                      <Image
                        src={hero.image}
                        alt={hero.name}
                        fill
                        className="object-cover object-top rounded"
                      />
                    </div>
                    {/* Hover Panel */}
                    <div className="absolute z-50 hidden group-hover:block left-20 top-0 w-64 bg-gray-900/95 text-white rounded-md shadow-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Image
                          src={hero.skill.icon}
                          alt="Skill Icon"
                          width={20}
                          height={20}
                        />
                        <h3 className="font-bold text-yellow-300">
                          {hero.name}
                        </h3>
                        <span className="ml-auto text-sm text-gray-300">
                          Cost {hero.cost}
                        </span>
                      </div>
                      <p className="text-sm text-green-300 font-semibold">
                        {hero.skill.name}
                      </p>
                      <p className="text-xs text-gray-300">
                        {hero.skill.description}
                      </p>
                      <div className="flex gap-2 mt-2 text-xs text-blue-300 flex-wrap">
                        {hero.synergies.faction && (
                          <span className="bg-gray-700 px-2 py-0.5 rounded">
                            {hero.synergies.faction}
                          </span>
                        )}
                        {hero.synergies.roles.map((role) => (
                          <span
                            key={role}
                            className="bg-gray-700 px-2 py-0.5 rounded"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        </DndContext>
      </div>
    </div>
  );
}
