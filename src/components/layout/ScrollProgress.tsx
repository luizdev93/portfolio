"use client";

import { useEffect, useState } from "react";
import { useScrollProgress } from "@/animations/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="fixed top-0 left-0 right-0 h-0.5 bg-accent/80 z-[60] origin-left"
        style={{ transform: "scaleX(0)" }}
        aria-hidden
      />
    );
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 h-0.5 bg-accent/80 z-[60] origin-left"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden
    />
  );
}
