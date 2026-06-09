import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import beforeImg from "@/assets/project-before.jpg";
import afterImg from "@/assets/project-after.jpg";
import { assets } from "@/assets/index";
import { Reveal } from "@/components/site/Reveal";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { projects, projectCategories } from "@/data/site";

const projectImageMap: Record<string, string> = {
  "Tablero de comando automatizado": assets.tablero,
  "Sistema SCADA de planta": assets.scada,
  "Estación de bombeo": assets.bombeo,
  "Grupo electrógeno con TTA": assets.grupo,
  "Migración de PLC": assets.plc,
  "Reconversión de tablero": assets.reconversion,
};

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — Antes y Después | RPIS" },
      {
        name: "description",
        content:
          "Resultados reales: arrastrá el deslizador para ver la transformación de tableros e instalaciones industriales modernizadas por RPIS.",
      },
      { property: "og:title", content: "Proyectos RPIS — Antes / Después" },
      { property: "og:image", content: afterImg },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<string>("Todos");
  const visible =
    filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="overflow-x-clip">
      <section className="relative pt-36 pb-12">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Resultados reales
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              La <span className="text-gradient">transformación</span> en acción
            </h1>
            <p className="mt-4 max-w-md text-muted-foreground">
              Arrastrá la barra para comparar el estado original y el resultado modernizado.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Reveal>
          <BeforeAfterSlider before={beforeImg} after={afterImg} />
        </Reveal>
      </section>

      {/* GALLERY */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Reveal className="flex flex-wrap items-center justify-between gap-6">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Galería de campo</h2>
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                    filter === c
                      ? "border-primary bg-gradient-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          <motion.div layout className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <motion.article
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={projectImageMap[p.title] ?? afterImg}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width={1280}
                      height={960}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{p.tag}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold">{p.title}</h3>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
