"use client";

import SoloDraftPage from "./SoloDraftPage";

export default function Page() {
  return (
    <div
      className="fixed inset-0 bg-black "
      style={{
        width: "100dvw",
        height: "100dvh",
        overscrollBehavior: "none",
      }}
    >
      <style>{`nav { display: none !important; }`}</style>
      <style>{`footer { display: none !important; }`}</style>

      <SoloDraftPage />
    </div>
  );
}
