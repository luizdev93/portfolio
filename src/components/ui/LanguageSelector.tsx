"use client";

import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/contexts/LanguageContext";
import { locales, type Locale } from "@/lib/translations";

export function LanguageSelector() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = locales.find((l) => l.value === locale);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Selecionar idioma"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{current?.label ?? locale}</span>
      </button>
      {isOpen && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-1 py-1 min-w-[140px] rounded-lg border border-white/10 bg-background shadow-xl z-50"
        >
          {locales.map(({ value, label }) => (
            <li key={value} role="option" aria-selected={locale === value}>
              <button
                type="button"
                onClick={() => {
                  setLocale(value as Locale);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full text-left px-4 py-2 text-sm transition-colors",
                  locale === value
                    ? "text-accent bg-accent/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
