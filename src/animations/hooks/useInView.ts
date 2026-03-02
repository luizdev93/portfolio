"use client";

import { useInView as useFramerInView } from "framer-motion";
import { useRef } from "react";

interface UseInViewOptions {
  once?: boolean;
  amount?: number;
}

export function useInView(options: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useFramerInView(ref, {
    once: options.once ?? true,
    amount: options.amount ?? 0.2,
  });

  return { ref, isInView };
}
