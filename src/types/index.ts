export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: readonly string[];
  link: string;
  caseStudy?: string;
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
