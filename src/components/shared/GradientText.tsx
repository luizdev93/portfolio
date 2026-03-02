import { cn } from "@/lib/cn";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-accent via-cyan-300 to-accent bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
