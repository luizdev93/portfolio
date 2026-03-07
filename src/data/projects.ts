import type { Project } from "@/types";
import { linkai } from "./projetos/linkai";
import { aiTeller } from "./projetos/ai-teller";
import { dashboardAnalytics } from "./projetos/dashboard-analytics";
import { lojaBecker } from "./projetos/loja-becker";
import { sarueUrbana } from "./projetos/sarue-urbana";
import { sparkusEad } from "./projetos/sparkus-ead";
import { arenaCriativa } from "./projetos/arena-criativa";
import { appSerralheiro } from "./projetos/app-serralheiro";
import { valeo } from "./projetos/valeo";
import { serNissan } from "./projetos/ser-nissan";
import { naFaixa } from "./projetos/na-faixa";
import { solarStart } from "./projetos/solar-start";

// Lista de projetos: cada um está em src/data/projetos/[nome].ts
// Imagens: coloque capa.jpg e slide-1.jpg, slide-2.jpg... em public/projetos/[slug]/

export const projects: Project[] = [
  linkai,
  aiTeller,
  dashboardAnalytics,
  lojaBecker,
  sarueUrbana,
  sparkusEad,
  arenaCriativa,
  appSerralheiro,
  valeo,
  serNissan,
  naFaixa,
  solarStart,
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
