"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../variants";
import { cn } from "@/lib/cn";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
}

export function StaggerChildren({
  children,
  className,
  itemClassName,
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={cn(className)}>
      {children}
    </motion.div>
  );
}
