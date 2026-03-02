"use client";

import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/animations/components/RevealOnScroll";

export function AboutSection() {
  return (
    <Section id="about">
      <div className="max-w-[1200px] mx-auto">
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
    </Section>
  );
}
