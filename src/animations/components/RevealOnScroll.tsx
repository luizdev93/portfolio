"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../variants";
import { transitions } from "../transitions";
import { cn } from "@/lib/cn";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  delay?: number;
}

export function RevealOnScroll({
  children,
  className,
  once = true,
  delay = 0,
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={fadeUp}
      transition={{ ...transitions.normal, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
