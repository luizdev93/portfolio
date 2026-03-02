"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  external = false,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-accent text-background hover:bg-accent/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25",
    secondary:
      "border border-white/20 bg-white/5 text-foreground hover:bg-white/10 hover:border-white/30",
    ghost: "text-foreground hover:bg-white/5 hover:text-accent",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm rounded-lg",
    md: "h-11 px-6 text-base rounded-xl",
    lg: "h-14 px-8 text-lg rounded-xl",
  };

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  const motionProps = {
    whileHover: { scale: 1.02, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  };

  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={combinedClassName}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type="button"
      {...motionProps}
      onClick={onClick}
      className={combinedClassName}
    >
      {children}
    </motion.button>
  );
}
