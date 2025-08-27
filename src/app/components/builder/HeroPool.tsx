"use client";
import React from "react";
import { Hero } from "../../data/s3/hero";
import { DraggableHero } from "./DraggableHero";

interface HeroPoolProps {
  heroes: Hero[];
}

export function HeroPool({ heroes }: HeroPoolProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-2 justify-center max-w-6xl bg-gray-800/40 p-4 rounded-md">
      {heroes.map((hero) => (
        <DraggableHero
          key={`pool-${hero.id}`}
          id={`pool-${hero.id}`}
          hero={hero}
          source="pool"
        />
      ))}
    </div>
  );
}
