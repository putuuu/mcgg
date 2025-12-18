"use client";

import { useEffect, useState } from "react";

export default function OrientationGuard() {
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const check = () => {
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
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center text-center px-6">
      <div className="text-5xl mb-4">📱</div>
      <h2 className="text-lg font-semibold text-white">Rotate your device</h2>
      <p className="mt-2 text-sm text-slate-400 max-w-xs">
        Draft mode is designed for landscape orientation.
      </p>
    </div>
  );
}
