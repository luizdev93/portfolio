"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { NAV_LINKS } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "@/components/ui/LanguageSelector";

const NAV_KEYS = ["skills", "projects", "testimonials", "about", "contact"] as const;

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLabels = {
    about: t.nav.about,
    skills: t.nav.skills,
    projects: t.nav.projects,
    testimonials: t.nav.testimonials,
    contact: t.nav.contact,
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled && "bg-background/80 backdrop-blur-md border-b border-white/5"
      )}
    >
      <nav className="max-w-[1200px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-semibold text-lg text-foreground hover:text-accent transition-colors"
        >
          Luiz
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {navLabels[NAV_KEYS[i]]}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSelector />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <LanguageSelector />
          <button
            type="button"
            className="p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? t.footer.menuClose : t.footer.menuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-white/5 py-4 px-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navLabels[NAV_KEYS[i]]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
