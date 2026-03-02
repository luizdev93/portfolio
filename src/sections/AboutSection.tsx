"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/animations/components/RevealOnScroll";

export function AboutSection() {
  return (
    <Section id="about">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
          <RevealOnScroll className="flex-shrink-0">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/avatar.jpeg"
                alt="Luiz - Desenvolvedor Bubble.io"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 10rem, 12rem"
                priority
              />
            </div>
          </RevealOnScroll>
          <div className="flex-1 min-w-0">
            <RevealOnScroll>
              <h2 className="font-display text-h1 font-semibold mb-8">Sobre mim</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="max-w-3xl space-y-6 text-muted-foreground text-body leading-relaxed">
            <p>
              Com mais de 2 anos de experiência em Bubble.io e certificação oficial, especializo-me
              em transformar ideias em produtos funcionais. Meu trabalho combina a velocidade do
              no-code com a robustez de integrações de API bem arquitetadas.
            </p>
            <p>
              Integro REST, GraphQL, Zapier, Make e APIs customizadas para criar fluxos que
              automatizam processos e conectam sistemas. Utilizo Cursor AI e Vibe Coding para
              acelerar o desenvolvimento sem sacrificar qualidade.
            </p>
            <p>
              Acredito que a melhor ferramenta é aquela que resolve o problema do cliente.
              Bubble.io é minha base, mas não meu limite — quando precisar de mais, integro,
              automatizo e entrego.
            </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </Section>
  );
}
