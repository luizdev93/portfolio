"use client";

import { cn } from "@/lib/cn";

interface GlowProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Glow({ className, size = "md" }: GlowProps) {
  const sizes = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
  };

  return (
    <div
      className={cn(
        "absolute rounded-full bg-accent/20 blur-3xl -z-10",
        sizes[size],
        className
      )}
      aria-hidden
    />
  );
}
