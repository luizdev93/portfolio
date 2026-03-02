"use client";

import type { MotionValue } from "framer-motion";
import { useTransform, useScroll } from "framer-motion";

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function useScrollParallax(distance: number) {
  const { scrollYProgress } = useScroll();
  return useTransform(scrollYProgress, [0, 1], [0, distance]);
}
