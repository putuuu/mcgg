import Image from "next/image";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Hero } from "../../../data/s5/hero";

function ring(cost: number) {
  return [
    "ring-neutral-500/60",
    "ring-green-500/70",
    "ring-blue-500/70",
    "ring-purple-500/70",
    "ring-orange-400/80",
  ][cost - 1];
}

export default function DraggableHeroCard({
  hero,
  disabled,
  onClick,
}: {
  hero: Hero;
  disabled?: boolean;
  onClick: () => void;
}) {
  const { setNodeRef, listeners, attributes, transform } = useDraggable({
    id: `pool-${hero.id}`,
    data: { hero },
    disabled,
  });

  return (
    <button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      onClick={onClick}
      disabled={disabled}
      style={{
        transform: CSS.Translate.toString(transform),
      }}
      className={`
        relative
        w-[76px] h-[76px]
        rounded-lg
        overflow-hidden
        bg-neutral-800
        ring-2 ${ring(hero.cost)}
        ${disabled ? "grayscale opacity-40" : "hover:scale-[1.04]"}
      `}
    >
      <Image
        src={hero.image}
        alt={hero.name}
        fill
        unoptimized
        sizes="76px"
        style={{
          objectFit: "cover",
          objectPosition: "50% 15%",
        }}
      />
    </button>
  );
}
