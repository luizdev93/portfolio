export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  descriptionEn?: string;
  descriptionEs?: string;
  image: string;
  images?: string[];
  longDescription?: string;
  longDescriptionEn?: string;
  longDescriptionEs?: string;
  tags: readonly string[];
  link: string;
  caseStudy?: string;
}

export function getProjectDescription(project: Project, locale: "pt" | "en" | "es"): string {
  if (locale === "en" && project.descriptionEn) return project.descriptionEn;
  if (locale === "es" && project.descriptionEs) return project.descriptionEs;
  return project.description;
}

export function getProjectLongDescription(project: Project, locale: "pt" | "en" | "es"): string {
  const long = project.longDescription ?? project.description;
  if (locale === "en" && project.longDescriptionEn) return project.longDescriptionEn;
  if (locale === "es" && project.longDescriptionEs) return project.longDescriptionEs;
  return long;
}

export interface ExperienceItem {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  image?: string;
}
