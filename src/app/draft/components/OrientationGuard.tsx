"use client";

import { useEffect, useState } from "react";

export default function OrientationGuard() {
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const check = () => {
      // anggap mobile / tablet kalau lebar < 1024
      const isMobile = window.innerWidth < 1024;
      const isLandscape = window.innerWidth > window.innerHeight;
      setBlocked(isMobile && !isLandscape);
    };

    check();
    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);

    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, []);

  if (!blocked) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#05060a] text-white p-6 text-center">
      <div className="mb-6 flex flex-col items-center gap-2">
        <div className="text-5xl opacity-70 rotate-90">📱</div>
      </div>
      <h2 className="text-lg font-semibold tracking-wide mb-2">
        Rotate your device
      </h2>
      <p className="text-sm text-slate-400 max-w-xs">
        This draft interface is designed for landscape mode on mobile. Please
        rotate your screen to continue.
      </p>
      <div className="mt-6 text-xs text-slate-500">
        If it doesn&apos;t update, unlock orientation in your phone settings.
      </div>
    </div>
  );
}
