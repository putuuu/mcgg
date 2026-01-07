import Image from "next/image";
import { useDroppable, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Hero } from "../../../data/s5/hero";

export default function BoardSlot({
  id,
  hero,
  onRemove,
}: {
  id: string;
  hero: Hero | null;
  onRemove: () => void;
}) {
  const { setNodeRef: dropRef } = useDroppable({ id });

  const {
    setNodeRef: dragRef,
    listeners,
    attributes,
    transform,
    isDragging,
  } = useDraggable({
    id,
    data: { hero },
    disabled: !hero,
  });

  return (
    <div
      ref={dropRef}
      className="board-slot w-[96px] h-[96px] rounded-lg relative"
    >
      {hero && (
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          {/* IMAGE (CLICK = REMOVE) */}
          <div
            onClick={onRemove}
            className="absolute inset-0 cursor-pointer z-10"
          >
            <Image
              src={hero.image}
              alt={hero.name}
              fill
              unoptimized
              sizes="96px"
              style={{
                objectFit: "cover",
                objectPosition: "50% 15%",
              }}
            />
          </div>

          {/* DRAG HANDLE */}
          <div
            ref={dragRef}
            {...listeners}
            {...attributes}
            style={{
              transform: CSS.Translate.toString(transform),
              opacity: isDragging ? 0.4 : 1,
            }}
            className="
              absolute bottom-1 right-1 z-20
              w-5 h-5 rounded
              bg-black/60
              flex items-center justify-center
              cursor-grab
              select-none
            "
            title="Drag"
          >
            ⠿
          </div>
        </div>
      )}
    </div>
  );
}
