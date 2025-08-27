"use client";
import React from "react";
import { useDroppable } from "@dnd-kit/core";

interface DroppableCellProps {
  id: string;
  children: (props: {
    setNodeRef: (node: HTMLElement | null) => void;
    isOver: boolean;
  }) => React.ReactNode;
}

export function DroppableCell({ id, children }: DroppableCellProps) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return <>{children({ setNodeRef, isOver })}</>;
}
