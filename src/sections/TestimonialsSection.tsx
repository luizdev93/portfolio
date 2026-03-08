"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/animations/components/RevealOnScroll";
import { useLanguage } from "@/contexts/LanguageContext";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const { t } = useLanguage();
  return (
    <Section id="testimonials">
      <div className="max-w-[1200px] mx-auto">
        <RevealOnScroll>
          <h2 className="font-display text-h1 font-semibold mb-4">{t.testimonials.title}</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            {t.testimonials.description}
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll key={testimonial.id} delay={index * 0.1}>
              <Card hover className="h-full flex flex-col">
                <blockquote className="flex-1 text-muted-foreground italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  {testimonial.image ? (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/10">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  ) : null}
                  <div className="min-w-0">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
}
