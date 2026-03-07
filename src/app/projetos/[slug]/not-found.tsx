import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="min-h-screen pt-20 pb-24 flex flex-col items-center justify-center px-4">
      <h1 className="font-display text-h1 font-semibold mb-4">Projeto não encontrado</h1>
      <p className="text-muted-foreground mb-8 text-center">
        O projeto que você procura não existe ou foi removido.
      </p>
      <Link
        href="/#projects"
        className="text-accent hover:underline font-medium"
      >
        Ver todos os projetos
      </Link>
    </main>
  );
}
