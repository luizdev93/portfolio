import dynamic from "next/dynamic";
import { HeroSection } from "@/sections/HeroSection";

const AboutSection = dynamic(() =>
  import("@/sections/AboutSection").then((mod) => ({ default: mod.AboutSection }))
);
const SkillsSection = dynamic(() =>
  import("@/sections/SkillsSection").then((mod) => ({
    default: mod.SkillsSection,
  }))
);
const ProjectsSection = dynamic(() =>
  import("@/sections/ProjectsSection").then((mod) => ({
    default: mod.ProjectsSection,
  }))
);
const ExperienceSection = dynamic(() =>
  import("@/sections/ExperienceSection").then((mod) => ({
    default: mod.ExperienceSection,
  }))
);
const TestimonialsSection = dynamic(() =>
  import("@/sections/TestimonialsSection").then((mod) => ({
    default: mod.TestimonialsSection,
  }))
);
const ContactSection = dynamic(() =>
  import("@/sections/ContactSection").then((mod) => ({
    default: mod.ContactSection,
  }))
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
