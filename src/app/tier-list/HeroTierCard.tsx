"use client";

import { useState } from "react";
import Image from "next/image";
import { Hero } from "../data/s5/hero";
import HeroCardModal from "./HeroCardModal";

const costBorderColor: Record<number, string> = {
  1: "border-white",
  2: "border-green-500",
  3: "border-blue-500",
  4: "border-purple-500",
  5: "border-yellow-400",
};

export default function HeroTierCard({ hero }: { hero: Hero }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className={`relative w-16 aspect-square rounded border-2 cursor-pointer overflow-hidden
        ${costBorderColor[hero.cost] ?? "border-white/30"}`}
      >
        <Image
          src={hero.image}
          alt={hero.name}
          fill
          sizes="64px"
          className="object-cover object-top"
        />
      </div>

      {open && <HeroCardModal hero={hero} onClose={() => setOpen(false)} />}
    </>
  );
}
