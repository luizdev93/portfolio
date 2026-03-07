# Fotos dos projetos

Este README explica como funcionam as pastas de imagens dos projetos.

---

## Estrutura das pastas

```
public/projetos/
│
├── README.md                    ← este arquivo (explicação)
│
├── plataforma-saas/            ← Projeto 1: "Plataforma SaaS Completa"
│   └── (coloque aqui: capa.jpg, slide-1.jpg, slide-2.jpg, ...)
│
├── marketplace-b2b/            ← Projeto 2: "Marketplace B2B"
│   └── (coloque aqui: capa.jpg, slide-1.jpg, ...)
│
└── dashboard-analytics/        ← Projeto 3: "Dashboard de Analytics"
    └── (coloque aqui: capa.jpg, slide-1.jpg, ...)
```

Cada **pasta** = **um projeto**. O nome da pasta tem que ser **igual ao slug** do projeto em `src/data/projects.ts`.

---

## Como funciona

### 1. Nome da pasta = slug do projeto

No código (`src/data/projects.ts`) cada projeto tem um **slug** (identificador único na URL):

| Slug (nome da pasta)   | Título do projeto            |
|------------------------|-----------------------------|
| `plataforma-saas`      | Plataforma SaaS Completa    |
| `marketplace-b2b`       | Marketplace B2B            |
| `dashboard-analytics`   | Dashboard de Analytics      |

A pasta **precisa** ter exatamente o mesmo nome do slug. Assim o caminho das imagens fica organizado e fácil de achar.

### 2. O que colocar dentro de cada pasta

Dentro da pasta do projeto você coloca as **imagens** (jpg, png, etc.). Sugestão de nomes:

| Arquivo    | Onde é usado |
|-----------|---------------|
| **capa.jpg** (ou capa.png) | Card do projeto na **página inicial** (lista de projetos). |
| **slide-1.jpg**, **slide-2.jpg**, ... | Fotos do **slider** na **página do projeto** (quando o visitante clica no projeto). |

- **image** no `projects.ts` → normalmente a capa (ex.: `capa.jpg`).
- **images** no `projects.ts` → lista dos slides (ex.: `slide-1.jpg`, `slide-2.jpg`).

### 3. Como o Next.js serve os arquivos

Tudo que está em **`public/`** é servido na **raiz** do site:

- Arquivo: `public/projetos/plataforma-saas/capa.jpg`  
- URL no site: **`/projetos/plataforma-saas/capa.jpg`**

Por isso no código você usa caminhos que começam com **`/`** (sem "public"):

```ts
image: "/projetos/plataforma-saas/capa.jpg",
images: [
  "/projetos/plataforma-saas/slide-1.jpg",
  "/projetos/plataforma-saas/slide-2.jpg",
],
```

### 4. Resumo do fluxo

1. Você cria a pasta com o **nome do slug** (ex.: `plataforma-saas`).
2. Coloca as fotos dentro (ex.: `capa.jpg`, `slide-1.jpg`).
3. Em **`src/data/projects.ts`** você aponta **image** e **images** para esses caminhos com **`/projetos/...`**.
4. O Next.js busca as imagens em **`public/projetos/...`** e exibe no card da home e no slider da página do projeto.

---

## Exemplo completo (projeto 1)

**Pastas e arquivos:**

```
public/projetos/plataforma-saas/
├── capa.jpg      ← imagem do card na home
├── slide-1.jpg   ← 1ª foto do slider na página do projeto
├── slide-2.jpg   ← 2ª foto
└── slide-3.jpg   ← 3ª foto
```

**No `src/data/projects.ts`:**

```ts
{
  slug: "plataforma-saas",
  title: "Plataforma SaaS Completa",
  image: "/projetos/plataforma-saas/capa.jpg",
  images: [
    "/projetos/plataforma-saas/slide-1.jpg",
    "/projetos/plataforma-saas/slide-2.jpg",
    "/projetos/plataforma-saas/slide-3.jpg",
  ],
  // ... resto dos campos
}
```

Assim o card na home usa `capa.jpg` e a página do projeto mostra o slider com as 3 fotos.

---

## Dica de tamanho

- **Capa (card):** ex.: 600×400 ou 800×450 px (proporção 3:2 ou 16:9).
- **Slides:** ex.: 800×500 ou 1200×675 px (16:9). O Next.js redimensiona; use imagens nítidas.
