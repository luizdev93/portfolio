# Próximos passos para um portfólio ainda mais profissional

Este documento lista ações prioritárias para elevar o portfólio a um nível de produto comercial e aumentar a conversão de visitantes em clientes.

---

## 1. Conteúdo e personalização

### 1.1 Dados reais
- [ ] **constants.ts**: Substituir todos os placeholders por dados reais (email, WhatsApp, Calendly, LinkedIn, GitHub).
- [ ] **projects.ts**: Incluir 3–6 projetos reais com:
  - Título e descrição focados em problema/solução/resultado.
  - Imagens reais (screenshots ou mockups) em boa resolução.
  - Tags coerentes (Bubble, APIs usadas, integrações).
  - Link para o projeto ou para um case study.
- [ ] **experience.ts**: Atualizar anos, empresas e descrições com sua trajetória real.
- [ ] **testimonials.ts**: Incluir depoimentos reais (com autorização), nome, cargo e, se possível, foto ou logo da empresa.

### 1.2 Copywriting
- [ ] Revisar tom de voz: profissional mas acessível, sem jargão excessivo.
- [ ] Hero: testar variações de headline (ex.: “Transformo ideias em produtos no Bubble”).
- [ ] About: 2–3 parágrafos que destaquem certificação, APIs e Vibe Coding de forma única.
- [ ] Contact: mensagem que deixe claro o próximo passo (ex.: “Agende uma call de 15 min”).

---

## 2. SEO e descoberta

### 2.1 Metadados
- [ ] Ajustar `metadata` em `layout.tsx`: title e description únicos e com palavras-chave (Bubble.io, no-code, APIs, etc.).
- [ ] Adicionar `openGraph` e `twitter` cards para boa aparência ao compartilhar.
- [ ] Criar `favicon.ico` e apple-touch-icon no `app/`.

### 2.2 Estrutura
- [ ] Garantir um único `<h1>` por página (Hero).
- [ ] Usar hierarquia correta: `h2` para títulos de seção, `h3` para cards.
- [ ] Incluir `sitemap.xml` e `robots.txt` (Next.js pode gerar automaticamente).

---

## 3. Case studies (projetos)

### 3.1 Páginas de projeto
- [ ] Criar rota dinâmica `app/projetos/[slug]/page.tsx` para case studies.
- [ ] Estrutura sugerida: contexto do cliente, desafio, solução (Bubble + APIs), resultado (métricas ou depoimento), tecnologias, CTA para contato.
- [ ] Fotos/screenshots de alta qualidade e, se possível, vídeo curto ou GIF do produto.

### 3.2 Destaque no grid
- [ ] No grid de projetos, o link “View Case Study” deve apontar para a página do case study quando existir; caso contrário, para o projeto ao vivo ou para um resumo na própria home.

---

## 4. Design e polish

### 4.1 Visual
- [ ] Substituir imagens placeholder (placehold.co) por imagens reais dos projetos.
- [ ] Definir uma foto sua para a seção About (opcional, mas aumenta confiança).
- [ ] Revisar contraste de texto (WCAG AA) em todos os fundos.

### 4.2 Micro-interactions
- [ ] Garantir que todos os botões e links tenham estado de foco visível (acessibilidade).
- [ ] Testar animações com “Reduced motion” ativado no sistema e ajustar se necessário.
- [ ] Considerar cursor glow no Hero apenas em desktop e com throttle (conforme plano).

### 4.3 Consistência
- [ ] Conferir espaçamento entre seções (ex.: py-24 / py-32) em mobile e desktop.
- [ ] Alinhar bordas, raios e sombras dos cards em todas as seções.

---

## 5. Performance e técnico

### 5.1 Imagens
- [ ] Usar apenas `next/image` para imagens; manter `sizes` adequados por breakpoint.
- [ ] Converter imagens para WebP/AVIF quando possível; Next.js faz otimização, mas a origem pode ser já otimizada.
- [ ] Definir `priority` apenas para imagens above the fold (ex.: Hero, se houver).

### 5.2 Bundle e carregamento
- [ ] Manter dynamic imports nas seções abaixo do fold.
- [ ] Rodar `npm run build` e analisar o output; verificar se não há chunks desnecessariamente grandes.
- [ ] Avaliar adicionar Lenis (ou similar) para scroll suave apenas se o bundle permitir e o ganho de UX for claro.

### 5.3 Lighthouse
- [ ] Executar Lighthouse em produção (Performance, Accessibility, Best Practices).
- [ ] Meta: Performance ≥ 95, Accessibility 100; corrigir itens apontados (labels, contraste, etc.).

---

## 6. Contato e conversão

### 6.1 CTAs
- [ ] Contact: manter um único CTA principal (ex.: “Agendar conversa” para Calendly).
- [ ] Incluir CTA secundário (ex.: WhatsApp) para quem prefere mensagem rápida.
- [ ] Evitar formulário complexo na primeira versão; preferir link direto para Calendly/WhatsApp.

### 6.2 Confiança
- [ ] Exibir “Trusted by X clients” ou logos de clientes (com permissão) logo abaixo do Hero.
- [ ] Garantir que depoimentos tenham nome e contexto (cargo/empresa) claros.

---

## 7. Deploy e domínio

### 7.1 Produção
- [ ] Deploy na Vercel (ou outro host) conectado ao repositório Git.
- [ ] Configurar domínio próprio (ex.: seunome.com ou seunome.dev).
- [ ] Ativar HTTPS e redirecionar www para não-www (ou o contrário) de forma consistente.

### 7.2 Monitoramento (opcional)
- [ ] Configurar analytics (ex.: Vercel Analytics, Plausible ou Google Analytics) para entender tráfego e scroll.
- [ ] Opcional: ferramenta de heatmap ou gravação de sessão para melhorar UX e conversão.

---

## 8. Acessibilidade

- [ ] Navegação completa por teclado (Tab, Enter, Escape no menu mobile).
- [ ] Skip link testado e visível ao receber foco.
- [ ] Textos alternativos em todas as imagens (`alt` descritivo).
- [ ] Verificar leitores de tela nas seções principais (Hero, Projetos, Contact).

---

## 9. Manutenção contínua

- [ ] Atualizar projetos e depoimentos quando houver novos trabalhos.
- [ ] Revisar dependências (npm) periodicamente e atualizar com cuidado.
- [ ] Guardar backup do conteúdo (textos, links) fora do código para facilitar futuras mudanças.

---

## Ordem sugerida de execução

1. **Imediato**: Dados reais em `constants.ts` e `projects.ts`; metadados e favicon.
2. **Curto prazo**: Case studies (páginas de projeto); depoimentos e imagens reais; Lighthouse e ajustes de acessibilidade.
3. **Médio prazo**: Deploy + domínio; analytics; polish visual e micro-interactions.
4. **Contínuo**: Novos projetos, depoimentos e pequenos refinamentos de copy e design.

---

*Documento alinhado ao [plano de implementação](.cursor/plans/portfolio_premium_implementation_4e583a9d.plan.md) e às [regras do projeto](rules.md).*
