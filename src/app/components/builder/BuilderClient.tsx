"use client";

// import SynergyBuilder from "./SynergyBuilder";
import dynamic from "next/dynamic";

export default function BuilderClient() {
  const SynergyBuilder = dynamic(() => import("./SynergyBuilder"), {
    ssr: false,
  });

  return <SynergyBuilder />;
}
