import type { Project } from "@/types";
import { linkai } from "./projetos/linkai";
import { aiTeller } from "./projetos/ai-teller";
import { dashboardAnalytics } from "./projetos/dashboard-analytics";
import { lojaBecker } from "./projetos/loja-becker";
import { sarueUrbana } from "./projetos/sarue-urbana";

// Lista de projetos: cada um está em src/data/projetos/[nome].ts
// Imagens: coloque capa.jpg e slide-1.jpg, slide-2.jpg... em public/projetos/[slug]/

export const projects: Project[] = [
  linkai,
  aiTeller,
  dashboardAnalytics,
  lojaBecker,
  sarueUrbana,
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
