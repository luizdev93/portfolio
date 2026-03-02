"use client";

import { useScrollProgress } from "@/animations/hooks/useScrollProgress";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-accent/80 z-[60] origin-left"
      style={{ scaleX: progress }}
      aria-hidden
    />
  );
}
