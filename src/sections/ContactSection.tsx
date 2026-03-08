"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/animations/components/RevealOnScroll";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/cn";

type ProjectType = "app" | "site" | "api" | "automation" | "other";

function buildMessage(data: {
  name: string;
  email: string;
  projectType: string;
  description: string;
}): string {
  return [
    `*Nome:* ${data.name}`,
    `*Email:* ${data.email}`,
    `*Tipo de projeto:* ${data.projectType}`,
    "",
    `*Descrição:*`,
    data.description || "(não informado)",
  ].join("\n");
}

function buildEmailBody(data: {
  name: string;
  email: string;
  projectType: string;
  description: string;
}): string {
  return [
    `Nome: ${data.name}`,
    `Email: ${data.email}`,
    `Tipo de projeto: ${data.projectType}`,
    "",
    `Descrição do projeto:`,
    data.description || "(não informado)",
  ].join("\n");
}

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "app" as ProjectType,
    description: "",
  });
  const [projectTypeOpen, setProjectTypeOpen] = useState(false);
  const projectTypeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (projectTypeRef.current && !projectTypeRef.current.contains(e.target as Node)) {
        setProjectTypeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const projectTypeLabels: Record<ProjectType, string> = {
    app: t.contact.form.projectTypeApp,
    site: t.contact.form.projectTypeSite,
    api: t.contact.form.projectTypeApi,
    automation: t.contact.form.projectTypeAutomation,
    other: t.contact.form.projectTypeOther,
  };

  const message = buildMessage({
    ...formData,
    projectType: projectTypeLabels[formData.projectType],
  });
  const emailBody = buildEmailBody({
    ...formData,
    projectType: projectTypeLabels[formData.projectType],
  });
  const mailto = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
    `Novo projeto: ${formData.name || "Contato"}`
  )}&body=${encodeURIComponent(emailBody)}`;
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <Section id="contact" alternateBg>
      <div className="max-w-[640px] mx-auto min-h-[80vh] flex flex-col justify-center py-16">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="font-display text-h1 font-semibold mb-6">
              {t.contact.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t.contact.description}
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  {t.contact.form.name}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder={t.contact.form.namePlaceholder}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5",
                    "text-foreground placeholder:text-muted-foreground/60",
                    "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50"
                  )}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  {t.contact.form.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder={t.contact.form.emailPlaceholder}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5",
                    "text-foreground placeholder:text-muted-foreground/60",
                    "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50"
                  )}
                />
              </div>
            </div>

            <div ref={projectTypeRef} className="relative">
              <label
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                {t.contact.form.projectType}
              </label>
              <button
                type="button"
                onClick={() => setProjectTypeOpen(!projectTypeOpen)}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3 rounded-lg border border-white/10 bg-white/5",
                  "text-foreground hover:border-white/20 transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50"
                )}
                aria-expanded={projectTypeOpen}
                aria-haspopup="listbox"
              >
                <span>{projectTypeLabels[formData.projectType]}</span>
                <ChevronDown
                  className={cn("w-4 h-4 text-muted-foreground transition-transform", projectTypeOpen && "rotate-180")}
                />
              </button>
              {projectTypeOpen && (
                <ul
                  role="listbox"
                  className="absolute left-0 right-0 top-full mt-1 py-1 rounded-lg border border-white/10 bg-background shadow-xl z-50"
                >
                  {(["app", "site", "api", "automation", "other"] as const).map(
                    (value) => (
                      <li key={value} role="option" aria-selected={formData.projectType === value}>
                        <button
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, projectType: value }));
                            setProjectTypeOpen(false);
                          }}
                          className={cn(
                            "w-full text-left px-4 py-2 text-sm transition-colors",
                            formData.projectType === value
                              ? "text-accent bg-accent/10"
                              : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                          )}
                        >
                          {projectTypeLabels[value]}
                        </button>
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-description"
                className="block text-sm font-medium text-foreground mb-1.5"
              >
                {t.contact.form.description}
              </label>
              <textarea
                id="contact-description"
                rows={4}
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder={t.contact.form.descriptionPlaceholder}
                className={cn(
                  "w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 resize-none",
                  "text-foreground placeholder:text-muted-foreground/60",
                  "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50"
                )}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <Button
                href={whatsappUrl}
                size="lg"
                external
                className="flex-1 justify-center"
              >
                {t.contact.ctaWhatsApp}
              </Button>
              <Button
                href={mailto}
                variant="secondary"
                size="lg"
                external
                className="flex-1 justify-center"
              >
                {t.contact.ctaEmail}
              </Button>
            </div>
          </form>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
