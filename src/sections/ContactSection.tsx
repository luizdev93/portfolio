"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/animations/components/RevealOnScroll";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  return (
    <Section id="contact" alternateBg>
      <div className="max-w-[1200px] mx-auto min-h-[80vh] flex items-center justify-center">
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-h1 font-semibold mb-6">
              {t.contact.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              {t.contact.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={SITE_CONFIG.calendly}
                size="lg"
                external
              >
                {t.contact.ctaCalendar}
              </Button>
              <Button
                href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, "")}`}
                variant="secondary"
                size="lg"
                external
              >
                {t.contact.ctaWhatsApp}
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
