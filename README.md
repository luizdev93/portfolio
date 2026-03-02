# Portfolio Premium

Portfólio personalizado para desenvolvedor Bubble.io certificado, com design premium inspirado em Vercel, Stripe e Linear.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **TailwindCSS**
- **Framer Motion**

## Começar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificar lint

## Lighthouse Audit

Para executar o audit de performance:

```bash
npm run build
npm run start
# Em outro terminal:
npx lighthouse http://localhost:3000 --view
```

Target: Performance 95+, Accessibility 100.

## Personalização

Edite os arquivos em `src/data/` para personalizar:
- `constants.ts` - Links, contatos, configuração do site
- `projects.ts` - Projetos em destaque
- `experience.ts` - Timeline de experiência
- `skills.ts` - Skills e níveis
- `testimonials.ts` - Depoimentos de clientes

## Estrutura

```
src/
├── app/           # Layout e páginas
├── components/    # UI, layout, shared
├── sections/      # Seções da home
├── animations/    # Variants, hooks, wrappers
├── data/          # Dados estáticos
├── lib/           # Utilitários
└── types/         # TypeScript
```
