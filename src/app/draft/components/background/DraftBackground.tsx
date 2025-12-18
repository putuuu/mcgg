"use client";

import Image from "next/image";

interface DraftBackgroundProps {
  /** optional: ganti background image */
  imageSrc?: string;
}

export default function DraftBackground({
  imageSrc = "/images/bg/draft-arcade.png",
}: DraftBackgroundProps) {
  return (
    <div
      className="
        pointer-events-none
        fixed inset-0
        -z-10
        overflow-hidden
      "
    >
      {/* Background image */}
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        className="object-cover opacity-40"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#05060a]/35" />

      {/* Soft gradient for depth */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/40
          via-transparent
          to-black/60
        "
      />
    </div>
  );
}
