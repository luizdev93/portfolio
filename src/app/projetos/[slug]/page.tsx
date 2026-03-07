import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/projects";
import { ProjectPageClient } from "./ProjectPageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Projeto não encontrado" };
  return {
    title: `${project.title} | Luiz - Portfólio`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const images =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];

  return <ProjectPageClient project={project} images={images} />;
}
