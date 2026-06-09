import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { services, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Catálogo Técnico Interactivo | RPIS" },
      {
        name: "description",
        content:
          "Ingeniería eléctrica, instrumentación, automatización PLC, tableros, sistemas de bombeo, generación y más. Explorá los 9 servicios de RPIS.",
      },
      { property: "og:title", content: "Servicios Industriales — RPIS" },
    ],
  }),
  component: ServicesPage,
});

type Service = (typeof services)[number];

function ServiceDetail({ service }: { service: Service }) {
  const Icon = service.icon as LucideIcon;
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card">
      {/* Animated technical visor */}
      <div className="relative grid h-56 place-items-center overflow-hidden bg-[radial-gradient(circle_at_center,oklch(0.22_0.01_264),oklch(0.16_0.004_264))]">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        {[0, 1, 2].map((r) => (
          <motion.span
            key={r}
            className="absolute rounded-full border border-primary/30"
            style={{ width: 80 + r * 70, height: 80 + r * 70 }}
            animate={{ rotate: r % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 18 + r * 6, repeat: Infinity, ease: "linear" }}
          />
        ))}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative z-10 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground glow-primary"
        >
          <Icon className="h-10 w-10" />
        </motion.div>
      </div>

      <div className="p-7">
        <h2 className="font-display text-2xl font-bold">{service.title}</h2>
        <p className="mt-2 text-muted-foreground">{service.tagline}</p>

        <ul className="mt-6 space-y-3">
          {service.points.map((p) => (
            <li key={p} className="flex items-center gap-3 text-sm">
              <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check className="h-3 w-3" />
              </span>
              {p}
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink(`Hola RPIS, quiero cotizar el servicio de ${service.title}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-primary transition-transform hover:scale-[1.02]"
        >
          Solicitar cotización <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function ServicesPage() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <div className="overflow-x-clip">
      <section className="relative pt-36 pb-12">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Catálogo técnico
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Servicios de <span className="text-gradient">alto impacto</span>
            </h1>
            <p className="mt-4 max-w-md text-muted-foreground">
              Seleccioná un servicio para ver su detalle. Soluciones modulares para cada necesidad.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* SELECTOR */}
          <div className="flex flex-col gap-2">
            {services.map((s, i) => {
              const ItemIcon = s.icon as LucideIcon;
              const isActive = i === active;
              return (
                <div key={s.slug} className="flex flex-col gap-2">
                  <button
                    onClick={() => setActive((prev) => (prev === i ? prev : i))}
                    className={`group flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-primary bg-card glow-primary"
                        : "border-border bg-card/40 hover:border-primary/50"
                    }`}
                  >
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isActive
                          ? "bg-gradient-primary text-primary-foreground"
                          : "bg-secondary text-primary"
                      }`}
                    >
                      <ItemIcon className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-sm font-semibold sm:text-base">
                        {s.title}
                      </span>
                    </span>
                    <span
                      className={`h-2 w-2 rounded-full transition-all ${
                        isActive ? "bg-primary animate-pulse-ring" : "bg-border"
                      }`}
                    />
                  </button>

                  {/* MOBILE: detail unfolds right below the selected option */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key={`${s.slug}-mobile`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden lg:hidden"
                      >
                        <div className="pb-2 pt-1">
                          <ServiceDetail service={s} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* DESKTOP: sticky detail on the right */}
          <div className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <ServiceDetail service={current} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
