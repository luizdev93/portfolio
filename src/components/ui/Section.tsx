import { cn } from "@/lib/cn";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  alternateBg?: boolean;
}

export function Section({
  id,
  children,
  className,
  alternateBg = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-32 px-4 md:px-8",
        alternateBg && "bg-white/[0.02]",
        className
      )}
    >
      {children}
    </section>
  );
}
