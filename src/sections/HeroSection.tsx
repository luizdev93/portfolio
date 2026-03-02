"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/shared/GradientText";
import { Glow } from "@/components/shared/Glow";
import { SITE_CONFIG } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/animations/variants";
import { transitions } from "@/animations/transitions";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />
      <Glow className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" size="lg" />
      <Glow className="top-20 right-20 opacity-20" size="md" />
      <Glow className="bottom-20 left-20 opacity-20" size="sm" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--background)_80%)]" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative max-w-[1200px] mx-auto px-4 md:px-8 text-center z-10"
      >
        <motion.p
          variants={staggerItem}
          transition={transitions.normal}
          className="text-accent text-sm font-medium tracking-wider uppercase mb-4"
        >
          {SITE_CONFIG.title}
        </motion.p>

        <motion.h1
          variants={staggerItem}
          transition={transitions.normal}
          className="font-display text-display font-bold mb-6 max-w-4xl mx-auto"
        >
          <span className="block">
            <GradientText>{SITE_CONFIG.name}</GradientText>
          </span>
          <span className="block text-foreground mt-2">
            Desenvolvedor que transforma ideias em produtos.
          </span>
        </motion.h1>

        <motion.p
          variants={staggerItem}
          transition={transitions.normal}
          className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
        >
          {SITE_CONFIG.tagline}
        </motion.p>

        <motion.p
          variants={staggerItem}
          transition={transitions.normal}
          className="text-sm text-muted-foreground/80 mb-12"
        >
          Trusted by 10+ clients
        </motion.p>

        <motion.div
          variants={staggerItem}
          transition={transitions.normal}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#contact" size="lg">
            Vamos conversar
          </Button>
          <Button href="#projects" variant="secondary" size="lg">
            Ver projetos
          </Button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </div>
    </section>
  );
}
