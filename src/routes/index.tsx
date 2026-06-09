import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-automation.jpg";
import { assets } from "@/assets/index";
import { Reveal } from "@/components/site/Reveal";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { CTAButton } from "@/components/site/CTAButton";
import { metrics, services, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RPIS — Ingeniería y Servicios Industriales de Vanguardia" },
      {
        name: "description",
        content:
          "Automatización, PLC, ingeniería eléctrica y soluciones industriales de alta tecnología. Soporte 24/7 para el interior productivo argentino.",
      },
      { property: "og:title", content: "RPIS — Soluciones de Vanguardia" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="overflow-x-clip">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={assets.heroPoster}
            preload="metadata"
            aria-hidden="true"
          >
            <source src={assets.heroVideoWebm} type="video/webm" />
            <source src={assets.heroVideoMp4} type="video/mp4" />
          </video>
          {/* Tinte azul corporativo para mantener el tono del sitio */}
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 mix-blend-color bg-primary/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
          {/* Vignette de luces */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.13_0.004_264)_88%)]" />

          {/* Rejilla técnica en movimiento */}
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-[0.18] grid-pattern"
            animate={{ backgroundPosition: ["0px 0px", "48px 48px"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Línea de escaneo futurista */}
          <motion.div
            className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_24px_2px_oklch(0.53_0.17_262/0.6)]"
            animate={{ top: ["-5%", "105%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Brillo animado tipo barrido de luz */}
          <motion.div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.53_0.17_262/0.35),transparent_55%)]"
            animate={{ opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Partículas flotantes */}
          {[
            { left: "12%", top: "30%", d: 7, delay: 0 },
            { left: "22%", top: "70%", d: 9, delay: 1.2 },
            { left: "48%", top: "22%", d: 6, delay: 0.6 },
            { left: "68%", top: "62%", d: 10, delay: 0.3 },
            { left: "82%", top: "34%", d: 8, delay: 1.6 },
            { left: "90%", top: "75%", d: 7.5, delay: 0.9 },
          ].map((p, i) => (
            <motion.span
              key={i}
              className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-primary/80 shadow-[0_0_12px_2px_oklch(0.53_0.17_262/0.7)]"
              style={{ left: p.left, top: p.top }}
              animate={{ y: [0, -26, 0], opacity: [0.2, 0.9, 0.2] }}
              transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            />
          ))}
        </div>

        {/* Brackets tipo HUD en las esquinas */}
        {[
          "left-6 top-24 border-l-2 border-t-2",
          "right-6 top-24 border-r-2 border-t-2",
          "left-6 bottom-10 border-l-2 border-b-2",
          "right-6 bottom-10 border-r-2 border-b-2",
        ].map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 + i * 0.1 }}
            className={`pointer-events-none absolute hidden h-10 w-10 border-primary/60 sm:block ${pos}`}
          />
        ))}

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 glass px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-ring" />
            Ingeniería · Automatización · Energía
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Soluciones de Vanguardia en{" "}
            <motion.span
              className="text-gradient inline-block"
              initial={{ backgroundPositionX: "0%" }}
              animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              Automatización e Ingeniería
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            Tecnología industrial precisa, confiable y eficiente para la industria que no se detiene.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <CTAButton to="/servicios">Ver servicios</CTAButton>
            <a
              href={whatsappLink("Hola RPIS, quiero solicitar una cotización.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Solicitar cotización <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="h-10 w-6 rounded-full border border-primary/50 p-1.5">
            <motion.div
              className="h-2 w-full rounded-full bg-primary"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          </div>
        </div>
      </section>


      {/* METRICS */}
      <section className="relative border-y border-border bg-card/30">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 py-14 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.1} className="px-4 text-center">
              <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                <AnimatedCounter value={m.value} suffix={m.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES MOSAIC */}
      <section className="relative grid-pattern">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Qué hacemos
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Un ecosistema completo de servicios industriales
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <Link
                  to="/servicios"
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,oklch(0.55_0.13_245/0.18),transparent_60%)]" />
                  <div className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:glow-primary">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Conocer más <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-5xl">
              ¿Listo para automatizar tu industria?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Conversemos sobre tu proyecto. Respuesta técnica rápida y soluciones a medida.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <CTAButton to="/contacto">Contactar al equipo</CTAButton>
              <CTAButton to="/proyectos" variant="outline" withArrow={false}>
                Ver proyectos
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
