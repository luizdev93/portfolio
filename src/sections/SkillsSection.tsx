"use client";

import { motion } from "framer-motion";
import {
  Workflow,
  Zap,
  Code2,
  GitBranch,
  Sparkles,
  Layout,
  Smartphone,
  Mail,
  CreditCard,
  FileText,
  Palette,
  Video,
  Package,
  Globe,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { StaggerChildren, StaggerItem } from "@/animations/components/StaggerChildren";
import { skills } from "@/data/skills";
import type { Skill } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  bubble: Workflow,
  api: Code2,
  zap: Zap,
  cursor: Sparkles,
  layout: Layout,
  smartphone: Smartphone,
  mail: Mail,
  creditcard: CreditCard,
  github: GitBranch,
  filetext: FileText,
  figma: Palette,
  video: Video,
  package: Package,
  globe: Globe,
};

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = iconMap[skill.icon] ?? Code2;
  const levelPercent =
    skill.level === "Expert" ? 90 : skill.level === "Advanced" ? 75 : 60;

  return (
    <StaggerItem>
      <Card className="h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4 min-h-[3rem]">
          <div className="flex-shrink-0 p-2 rounded-lg bg-accent/10 text-accent">
            <Icon className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-sm md:text-base break-words leading-tight">{skill.name}</h3>
            <span className="text-xs text-muted-foreground">{skill.level}</span>
          </div>
        </div>
        <div className="mt-auto">
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${levelPercent}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full bg-accent rounded-full"
            />
          </div>
        </div>
      </Card>
    </StaggerItem>
  );
}

export function SkillsSection() {
  const { t } = useLanguage();
  return (
    <Section id="skills" alternateBg>
      <div className="max-w-[1200px] mx-auto">
        <StaggerChildren>
          <StaggerItem>
            <h2 className="font-display text-h1 font-semibold mb-4">{t.skills.title}</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              {t.skills.description}
            </p>
          </StaggerItem>
        </StaggerChildren>

        <StaggerChildren>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </StaggerChildren>
      </div>
    </Section>
  );
}
