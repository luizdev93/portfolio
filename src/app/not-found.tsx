import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-h1 text-4xl font-bold">404</h1>
      <p className="text-muted-foreground">Página não encontrada</p>
      <Link
        href="/"
        className="text-accent hover:underline transition-colors"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
