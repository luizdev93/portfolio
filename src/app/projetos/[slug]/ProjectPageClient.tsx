"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { ProjectSlider } from "@/components/shared/ProjectSlider";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectPageClientProps {
  project: Project;
  images: string[];
}

export function ProjectPageClient({ project, images }: ProjectPageClientProps) {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen pt-20 pb-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.projectPage.back}
        </Link>

        <div className="grid lg:grid-cols-[1fr,400px] gap-8 lg:gap-12 items-start">
          <div className="min-w-0">
            <ProjectSlider
              images={images}
              title={project.title}
              className="w-full"
            />
          </div>

          <div className="lg:sticky lg:top-24 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              {t.projectPage.projectLabel}
            </p>
            <h1 className="font-display text-2xl md:text-3xl font-semibold mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-lg bg-white/10 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="space-y-4 text-muted-foreground text-body leading-relaxed mb-8">
              <p>
                {project.longDescription ?? project.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {project.link && project.link !== "#" && (
                <Button
                  href={project.link}
                  external
                  variant="primary"
                  size="md"
                  className="inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.projectPage.viewProject}
                </Button>
              )}
              <Button
                href="/#projects"
                variant="secondary"
                size="md"
              >
                {t.projectPage.moreProjects}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
