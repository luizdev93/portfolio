"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface ProjectSliderProps {
  images: string[];
  title: string;
  className?: string;
}

export function ProjectSlider({ images, title, className }: ProjectSliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 prev, 1 next
  const total = images.length;

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((i) => (i === 0 ? total - 1 : i - 1));
  }, [total]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((i) => (i === total - 1 ? 0 : i + 1));
  }, [total]);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }, [current]);

  useEffect(() => {
    if (total <= 1) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((i) => (i === total - 1 ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  if (total === 0) return null;

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0.6 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0.6 }),
  };

  return (
    <div className={cn("relative rounded-2xl overflow-hidden bg-white/5", className)}>
      <div className="relative aspect-square w-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`${title} - imagem ${current + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
              priority={current === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-10"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-10"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  i === current ? "bg-accent" : "bg-white/50 hover:bg-white/70"
                )}
                aria-label={`Ir para imagem ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
