"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { RevealOnScroll } from "@/animations/components/RevealOnScroll";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const { t } = useLanguage();
  return (
    <Section id="projects">
      <div className="max-w-[1200px] mx-auto">
        <RevealOnScroll>
          <h2 className="font-display text-h1 font-semibold mb-4">{t.projects.title}</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            {t.projects.description}
          </p>
        </RevealOnScroll>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 0.1}>
              <Link
                href={`/projetos/${project.slug}`}
                className="group block rounded-xl bg-white/5 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 379px"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-base mb-1.5 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs text-accent font-medium group-hover:gap-2 transition-all">
                    {t.projects.viewDetails}
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
}
