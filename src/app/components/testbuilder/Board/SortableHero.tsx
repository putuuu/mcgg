import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Hero } from "../../../data/s5/hero";
import Image from "next/image";

type Props = {
  hero: Hero;
};

export default function SortableHero({ hero }: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: hero.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="aspect-square rounded overflow-hidden border border-neutral-700 cursor-grab active:cursor-grabbing"
      title="Drag to move • Drag out to remove"
    >
      <Image
        src={hero.image}
        alt={hero.name}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
