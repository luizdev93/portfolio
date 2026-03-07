"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

const NAV_KEYS = ["about", "skills", "projects", "experience", "testimonials", "contact"] as const;

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const navLabels = {
    about: t.nav.about,
    skills: t.nav.skills,
    projects: t.nav.projects,
    experience: t.nav.experience,
    testimonials: t.nav.testimonials,
    contact: t.nav.contact,
  };

  return (
    <footer className="border-t border-white/10 py-12 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground text-center md:text-left order-2 md:order-1">
          © {currentYear} {SITE_CONFIG.name}. {t.footer.rights}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-6 order-1 md:order-2">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground hover:text-accent transition-colors whitespace-nowrap"
              >
                {navLabels[NAV_KEYS[i]]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
