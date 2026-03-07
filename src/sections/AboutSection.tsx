"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/animations/components/RevealOnScroll";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <Section id="about">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
          <RevealOnScroll className="flex-shrink-0">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/avatar.jpeg"
                alt={t.about.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 10rem, 12rem"
                priority
              />
            </div>
          </RevealOnScroll>
          <div className="flex-1 min-w-0">
            <RevealOnScroll>
              <h2 className="font-display text-h1 font-semibold mb-8">{t.about.title}</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="max-w-3xl space-y-6 text-muted-foreground text-body leading-relaxed">
                <p>{t.about.paragraph1}</p>
                <p>{t.about.paragraph2}</p>
                <p>{t.about.paragraph3}</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </Section>
  );
}
