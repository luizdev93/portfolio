"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? { scale: 1.02, y: -4, transition: { duration: 0.2 } }
          : undefined
      }
      transition={{ duration: 0.2 }}
      className={cn(
        "rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-shadow",
        hover && "hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
