import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { assets } from "@/assets/index";
import { Reveal } from "@/components/site/Reveal";
import { CTAButton } from "@/components/site/CTAButton";
import { values, timeline } from "@/data/site";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Quiénes Somos — RPIS Ingeniería y Servicios" },
      {
        name: "description",
        content:
          "Conocé la historia, los valores y el equipo de RPIS. Ingeniería industrial con experiencia y compromiso en el interior productivo argentino.",
      },
      { property: "og:title", content: "Quiénes Somos — RPIS" },
      { property: "og:image", content: assets.nosotros },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="overflow-x-clip">
      {/* INTRO */}
      <section className="relative pt-36 pb-20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Quiénes somos
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Ingeniería con <span className="text-gradient">propósito y precisión</span>
            </h1>
            <p className="mt-5 max-w-md text-muted-foreground">
              Somos un equipo técnico apasionado por resolver desafíos industriales reales. Unimos
              experiencia de campo con tecnología de última generación.
            </p>
            <div className="mt-8">
              <CTAButton to="/contacto">Trabajemos juntos</CTAButton>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <img
                src={assets.nosotros}
                alt="Operario trabajando en planta industrial"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1080}
                height={1920}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Nuestra trayectoria
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Una línea de tiempo de crecimiento
            </h2>
          </Reveal>

          <div className="relative mt-14">
            <div className="absolute left-0 top-6 hidden h-px w-full bg-border lg:block" />
            <div className="grid gap-8 lg:grid-cols-4">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.12}>
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className="relative z-10 flex h-3 w-3 items-center justify-center rounded-full bg-primary glow-primary" />
                      <span className="font-display text-2xl font-bold text-gradient">{t.year}</span>
                    </div>
                    <div className="mt-5 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary">
                      <h3 className="font-display text-lg font-semibold">{t.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Lo que nos define
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Nuestros valores</h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
