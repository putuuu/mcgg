import Image from "next/image";
import { useDroppable, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Hero } from "../../../data/s5/hero";
import clsx from "clsx";

export default function BoardSlot({
  id,
  hero,
  onRemove,
}: {
  id: string; // slot-0, slot-1, ...
  hero: Hero | null;
  onRemove: () => void;
}) {
  // ✅ SLOT = DROPPABLE
  const { setNodeRef, isOver } = useDroppable({ id });

  // ✅ HERO = DRAGGABLE
  const {
    setNodeRef: dragRef,
    listeners,
    attributes,
    transform,
    isDragging,
  } = useDraggable({
    id,
    data: { hero, fromSlot: Number(id.replace("slot-", "")) },
    disabled: !hero,
  });

  return (
    <div
      ref={setNodeRef}
      className={clsx(
        "relative w-[96px] h-[96px] rounded-lg transition-all",
        "border border-neutral-700",
        // 🎯 HOVER INI SEKARANG PASTI NYALA
        isOver && "ring-2 ring-yellow-400 bg-yellow-400/10"
      )}
    >
      {hero && (
        <>
          {/* IMAGE — ❗ TIDAK BOLEH TERIMA POINTER */}
          <div className="absolute inset-0 pointer-events-none">
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

          {/* REMOVE CLICK LAYER */}
          <button
            onClick={onRemove}
            className="absolute inset-0 z-10"
            title="Remove"
          />

          {/* DRAG HANDLE — SATU-SATUNYA YANG INTERACTIVE */}
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
        </>
      )}
    </div>
  );
}
