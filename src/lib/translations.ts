export type Locale = "pt" | "en" | "es";

export const locales: { value: Locale; label: string }[] = [
  { value: "pt", label: "Português" },
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
];

export const translations = {
  pt: {
    skipLink: "Pular para o conteúdo",
    nav: {
      about: "Sobre",
      skills: "Ferramentas e Tecnologias",
      projects: "Projetos",
      experience: "Experiência",
      testimonials: "Depoimentos",
      contact: "Contato",
    },
    hero: {
      title: "Bubble Certified Developer",
      tagline: "API Integrations • Automation • Vibe Coding",
      subtitle: "Desenvolvedor que transforma ideias em produtos.",
      trusted: "Confiado por mais de 10 clientes",
      ctaPrimary: "Vamos conversar",
      ctaSecondary: "Ver projetos",
    },
    about: {
      title: "Sobre mim",
      alt: "Luiz - Desenvolvedor Bubble.io",
      paragraph1:
        "Com mais de 2 anos de experiência em Bubble.io e certificação oficial, especializo-me em transformar ideias em produtos funcionais. Meu trabalho combina a velocidade do no-code com a robustez de integrações de API bem arquitetadas.",
      paragraph2:
        "Integro REST, GraphQL, Zapier, Make e APIs customizadas para criar fluxos que automatizam processos e conectam sistemas. Utilizo Cursor AI e Vibe Coding para acelerar o desenvolvimento sem sacrificar qualidade.",
      paragraph3:
        "Acredito que a melhor ferramenta é aquela que resolve o problema do cliente. Bubble.io é minha base, mas não meu limite — quando precisar de mais, integro, automatizo e entrego.",
    },
    projects: {
      title: "Projetos",
      description:
        "Seleção de trabalhos que demonstram expertise em Bubble, APIs e automações.",
      viewDetails: "Ver detalhes",
    },
    skills: {
      title: "Ferramentas e Tecnologias",
      description:
        "Ferramentas e tecnologias que domino para entregar projetos de alta qualidade.",
    },
    experience: {
      title: "Experiência",
      description: "Trajetória em desenvolvimento no-code e integrações de API.",
    },
    testimonials: {
      title: "Depoimentos",
      description: "O que clientes dizem sobre o trabalho entregue.",
    },
    contact: {
      title: "Vamos construir algo?",
      description:
        "Pronto para transformar sua ideia em produto. Entre em contato e vamos conversar sobre seu projeto.",
      ctaCalendar: "Agendar conversa",
      ctaWhatsApp: "WhatsApp",
    },
    footer: {
      rights: "Todos os direitos reservados",
      menuOpen: "Abrir menu",
      menuClose: "Fechar menu",
    },
    projectPage: {
      back: "Voltar aos projetos",
      projectLabel: "Projeto",
      viewProject: "Ver projeto",
      moreProjects: "Mais projetos",
    },
  },
  en: {
    skipLink: "Skip to content",
    nav: {
      about: "About",
      skills: "Tools & Technologies",
      projects: "Projects",
      experience: "Experience",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    hero: {
      title: "Bubble Certified Developer",
      tagline: "API Integrations • Automation • Vibe Coding",
      subtitle: "Developer who turns ideas into products.",
      trusted: "Trusted by 10+ clients",
      ctaPrimary: "Let's talk",
      ctaSecondary: "View projects",
    },
    about: {
      title: "About me",
      alt: "Luiz - Bubble.io Developer",
      paragraph1:
        "With over 2 years of experience in Bubble.io and official certification, I specialize in turning ideas into functional products. My work combines the speed of no-code with the robustness of well-architected API integrations.",
      paragraph2:
        "I integrate REST, GraphQL, Zapier, Make and custom APIs to create flows that automate processes and connect systems. I use Cursor AI and Vibe Coding to speed up development without sacrificing quality.",
      paragraph3:
        "I believe the best tool is the one that solves the client's problem. Bubble.io is my base, but not my limit — when you need more, I integrate, automate and deliver.",
    },
    projects: {
      title: "Projects",
      description:
        "Selection of work showcasing expertise in Bubble, APIs and automation.",
      viewDetails: "View details",
    },
    skills: {
      title: "Tools & Technologies",
      description:
        "Tools and technologies I use to deliver high-quality projects.",
    },
    experience: {
      title: "Experience",
      description: "Journey in no-code development and API integrations.",
    },
    testimonials: {
      title: "Testimonials",
      description: "What clients say about the work delivered.",
    },
    contact: {
      title: "Let's build something?",
      description:
        "Ready to turn your idea into a product. Get in touch and let's talk about your project.",
      ctaCalendar: "Schedule a call",
      ctaWhatsApp: "WhatsApp",
    },
    footer: {
      rights: "All rights reserved",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    projectPage: {
      back: "Back to projects",
      projectLabel: "Project",
      viewProject: "View project",
      moreProjects: "More projects",
    },
  },
  es: {
    skipLink: "Saltar al contenido",
    nav: {
      about: "Sobre mí",
      skills: "Herramientas y tecnologías",
      projects: "Proyectos",
      experience: "Experiencia",
      testimonials: "Testimonios",
      contact: "Contacto",
    },
    hero: {
      title: "Bubble Certified Developer",
      tagline: "API Integrations • Automation • Vibe Coding",
      subtitle: "Desarrollador que transforma ideas en productos.",
      trusted: "Con la confianza de más de 10 clientes",
      ctaPrimary: "Hablemos",
      ctaSecondary: "Ver proyectos",
    },
    about: {
      title: "Sobre mí",
      alt: "Luiz - Desarrollador Bubble.io",
      paragraph1:
        "Con más de 2 años de experiencia en Bubble.io y certificación oficial, me especializo en transformar ideas en productos funcionales. Mi trabajo combina la velocidad del no-code con la solidez de integraciones de API bien diseñadas.",
      paragraph2:
        "Integro REST, GraphQL, Zapier, Make y APIs personalizadas para crear flujos que automatizan procesos y conectan sistemas. Uso Cursor AI y Vibe Coding para acelerar el desarrollo sin sacrificar calidad.",
      paragraph3:
        "Creo que la mejor herramienta es la que resuelve el problema del cliente. Bubble.io es mi base, pero no mi límite — cuando necesites más, integro, automatizo y entrego.",
    },
    projects: {
      title: "Proyectos",
      description:
        "Selección de trabajos que demuestran experiencia en Bubble, APIs y automatizaciones.",
      viewDetails: "Ver detalles",
    },
    skills: {
      title: "Herramientas y tecnologías",
      description:
        "Herramientas y tecnologías que domino para entregar proyectos de alta calidad.",
    },
    experience: {
      title: "Experiencia",
      description: "Trayectoria en desarrollo no-code e integraciones de API.",
    },
    testimonials: {
      title: "Testimonios",
      description: "Lo que dicen los clientes sobre el trabajo entregado.",
    },
    contact: {
      title: "¿Construimos algo?",
      description:
        "Listo para transformar tu idea en producto. Contáctame y hablemos de tu proyecto.",
      ctaCalendar: "Agendar conversación",
      ctaWhatsApp: "WhatsApp",
    },
    footer: {
      rights: "Todos los derechos reservados",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
    },
    projectPage: {
      back: "Volver a proyectos",
      projectLabel: "Proyecto",
      viewProject: "Ver proyecto",
      moreProjects: "Más proyectos",
    },
  },
} as const;
