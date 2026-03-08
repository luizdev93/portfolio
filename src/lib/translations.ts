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
tagline: "Integrações de API • Automação • Vibe Coding • No Code",
    subtitle: "Desenvolvedor que transforma ideias em produtos.",
      trusted: "Confiado por mais de 10 clientes",
      ctaPrimary: "Vamos conversar",
      ctaSecondary: "Ver projetos",
    },
    about: {
      title: "Sobre mim",
      alt: "Luiz - Desenvolvedor Bubble.io",
      paragraph1:
        "Desenvolvo com Vibe Coding: uso Cursor AI e IA como ferramenta principal para construir plataformas de forma ágil, sem perder qualidade. Ao mesmo tempo, tenho mais de 2 anos de experiência em Bubble.io e certificação oficial — domínio completo do no-code para CRMs, EAD, e-commerce, marketplaces, landing pages e apps.",
      paragraph2:
        "O Bubble.io é onde materializo a maior parte dos projetos: integrações com Stripe, APIs de pagamento e entrega, automações com n8n, e quando o cliente precisa de mais, combino com Supabase, Xano, Firebase e código customizado. Também desenvolvo identidade visual e painéis administrativos completos.",
      paragraph3:
        "Já trabalhei em projetos como o CRM da Nissan para concessionárias na América Latina, plataformas EAD, lojas online e apps para criadores de conteúdo. Vibe Code para iterar rápido; Bubble.io para entregar no-code que escala. Quando o cliente precisa de mais, integro, automatizo e entrego.",
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
        "Pronto para transformar sua ideia em produto. Conte sobre seu projeto abaixo para eu poder elaborar melhor a resposta.",
      ctaCalendar: "Agendar conversa",
      ctaWhatsApp: "WhatsApp",
      ctaEmail: "Enviar por email",
      form: {
        name: "Nome",
        namePlaceholder: "Seu nome",
        email: "Email",
        emailPlaceholder: "seu@email.com",
        projectType: "Tipo de projeto",
        projectTypeApp: "App",
        projectTypeSite: "Site",
        projectTypeApi: "API / Integração",
        projectTypeAutomation: "Automação",
        projectTypeOther: "Outro",
        description: "Descreva seu projeto",
        descriptionPlaceholder: "O que você precisa? Objetivo, funcionalidades principais, referências...",
      },
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
tagline: "API Integrations • Automation • Vibe Coding • No Code",
    subtitle: "Developer who turns ideas into products.",
      trusted: "Trusted by 10+ clients",
      ctaPrimary: "Let's talk",
      ctaSecondary: "View projects",
    },
    about: {
      title: "About me",
      alt: "Luiz - Bubble.io Developer",
      paragraph1:
        "I develop with Vibe Coding: Cursor AI and AI as my main tools to build platforms quickly without sacrificing quality. At the same time, I have over 2 years of experience in Bubble.io and official certification — full command of no-code for CRMs, e-learning, e-commerce, marketplaces, landing pages and apps.",
      paragraph2:
        "Bubble.io is where most projects take shape: integrations with Stripe, payment and delivery APIs, automations with n8n, and when the client needs more, I combine it with Supabase, Xano, Firebase and custom code. I also develop visual identity and complete admin panels.",
      paragraph3:
        "I've worked on projects like the Nissan CRM for dealerships in Latin America, e-learning platforms, online stores and apps for content creators. Vibe Code to iterate fast; Bubble.io to deliver no-code that scales. When the client needs more, I integrate, automate and deliver.",
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
        "Ready to turn your idea into a product. Tell me about your project below so I can prepare a better response.",
      ctaCalendar: "Schedule a call",
      ctaWhatsApp: "WhatsApp",
      ctaEmail: "Send by email",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@email.com",
        projectType: "Project type",
        projectTypeApp: "App",
        projectTypeSite: "Website",
        projectTypeApi: "API / Integration",
        projectTypeAutomation: "Automation",
        projectTypeOther: "Other",
        description: "Describe your project",
        descriptionPlaceholder: "What do you need? Goal, main features, references...",
      },
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
tagline: "Integraciones de API • Automatización • Vibe Coding • No Code",
    subtitle: "Desarrollador que transforma ideas en productos.",
      trusted: "Con la confianza de más de 10 clientes",
      ctaPrimary: "Hablemos",
      ctaSecondary: "Ver proyectos",
    },
    about: {
      title: "Sobre mí",
      alt: "Luiz - Desarrollador Bubble.io",
      paragraph1:
        "Desarrollo con Vibe Coding: uso Cursor AI e IA como herramienta principal para construir plataformas de forma ágil, sin perder calidad. Al mismo tiempo, tengo más de 2 años de experiencia en Bubble.io y certificación oficial — dominio completo del no-code para CRMs, EAD, e-commerce, marketplaces, landing pages y apps.",
      paragraph2:
        "Bubble.io es donde materializo la mayor parte de los proyectos: integraciones con Stripe, APIs de pago y entrega, automatizaciones con n8n, y cuando el cliente necesita más, combino con Supabase, Xano, Firebase y código personalizado. También desarrollo identidad visual y paneles administrativos completos.",
      paragraph3:
        "He trabajado en proyectos como el CRM de Nissan para concesionarias en América Latina, plataformas EAD, tiendas online y apps para creadores de contenido. Vibe Code para iterar rápido; Bubble.io para entregar no-code que escala. Cuando el cliente necesita más, integro, automatizo y entrego.",
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
        "Listo para transformar tu idea en producto. Cuéntame sobre tu proyecto abajo para poder elaborar mejor la respuesta.",
      ctaCalendar: "Agendar conversación",
      ctaWhatsApp: "WhatsApp",
      ctaEmail: "Enviar por correo",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Email",
        emailPlaceholder: "tu@email.com",
        projectType: "Tipo de proyecto",
        projectTypeApp: "App",
        projectTypeSite: "Sitio web",
        projectTypeApi: "API / Integración",
        projectTypeAutomation: "Automatización",
        projectTypeOther: "Otro",
        description: "Describe tu proyecto",
        descriptionPlaceholder: "¿Qué necesitas? Objetivo, funcionalidades principales, referencias...",
      },
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
