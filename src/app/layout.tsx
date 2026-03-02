import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luiz | Bubble Certified Developer | APIs & Vibe Coding",
  description:
    "Desenvolvedor Bubble.io certificado com 2+ anos de experiência em integrações de API, automação e projetos Vibe Coding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased noise-overlay`}
        suppressHydrationWarning
      >
        <a
          href="#main"
          className="skip-link"
        >
          Pular para o conteúdo
        </a>
        <ScrollProgress />
        <main id="main" className="min-w-0 overflow-x-hidden">
        <Header />
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
