"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/animations/components/RevealOnScroll";
import { experience } from "@/data/experience";
import { useLanguage } from "@/contexts/LanguageContext";
import { staggerContainer, staggerItem } from "@/animations/variants";

export function ExperienceSection() {
  const { t } = useLanguage();
  return (
    <Section id="experience" alternateBg>
      <div className="max-w-[1200px] mx-auto">
        <RevealOnScroll>
          <h2 className="font-display text-h1 font-semibold mb-4">{t.experience.title}</h2>
          <p className="text-muted-foreground mb-16 max-w-2xl">
            {t.experience.description}
          </p>
        </RevealOnScroll>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent -translate-x-px" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {experience.map((item, index) => {
              const isLeft = index % 2 === 0;
              const content = (
                <>
                  <span className="text-accent text-sm font-medium">{item.year}</span>
                  <h3 className="font-semibold text-lg mt-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.company}</p>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </>
              );
              return (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  className="relative flex flex-col md:flex-row"
                >
                  <div
                    className={`flex-1 min-w-0 pl-12 md:pl-0 ${
                      isLeft ? "md:pr-6 md:w-1/2" : "hidden"
                    }`}
                  >
                    {isLeft ? content : null}
                  </div>
                  <div
                    className={`flex-1 min-w-0 pl-12 md:pl-6 md:w-1/2 ${
                      isLeft ? "hidden md:block" : "md:text-right"
                    }`}
                  >
                    {isLeft ? null : content}
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent -translate-x-1/2 mt-1.5" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
