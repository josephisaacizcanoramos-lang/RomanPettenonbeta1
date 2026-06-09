import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y Cobertura — RPIS" },
      {
        name: "description",
        content:
          "Contactá a RPIS para tu proyecto industrial. Cobertura desde el sur de Córdoba hacia todo el interior productivo de Argentina.",
      },
      { property: "og:title", content: "Contacto — RPIS" },
    ],
  }),
  component: ContactPage,
});

const fieldCls =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40";

function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Mensaje enviado", {
        description: "Nuestro equipo técnico se pondrá en contacto a la brevedad.",
      });
    }, 900);
  };

  return (
    <div className="overflow-x-clip">
      <section className="relative pt-36 pb-12">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Hablemos</p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Contacto y <span className="text-gradient">cobertura</span>
            </h1>
            <p className="mt-4 max-w-md text-muted-foreground">
              Contanos tu proyecto. Respuesta técnica rápida y soluciones a medida.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* FORM */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input className={fieldCls} placeholder="Nombre" required />
                <input className={fieldCls} placeholder="Empresa" />
              </div>
              <input type="email" className={`${fieldCls} mt-4`} placeholder="Email" required />
              <input className={`${fieldCls} mt-4`} placeholder="Teléfono / WhatsApp" />
              <textarea
                className={`${fieldCls} mt-4 min-h-32 resize-none`}
                placeholder="Contanos sobre tu proyecto…"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-primary transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {loading ? "Enviando…" : "Enviar mensaje"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>

          {/* INFO + MAP */}
          <Reveal delay={0.12}>
            <div className="flex h-full flex-col gap-4">
              <div className="grid gap-3 sm:grid-cols-1">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                      WhatsApp
                    </span>
                    <span className="font-medium">{CONTACT.whatsappDisplay}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                      Email
                    </span>
                    <span className="font-medium">{CONTACT.email}</span>
                  </span>
                </a>
              </div>

              {/* Animated coverage map */}
              <div className="relative flex-1 overflow-hidden rounded-2xl border border-border bg-[radial-gradient(circle_at_50%_30%,oklch(0.22_0.01_264),oklch(0.16_0.004_264))] p-6">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="relative flex items-center gap-2 text-sm font-medium text-primary">
                  <MapPin className="h-4 w-4" /> {CONTACT.region}
                </div>
                <CoverageMap />
                <p className="relative mt-2 text-center text-xs text-muted-foreground">
                  Cobertura hacia todo el interior productivo argentino
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function CoverageMap() {
  const nodes = [
    { x: 50, y: 62, hub: true },
    { x: 42, y: 40 },
    { x: 64, y: 35 },
    { x: 35, y: 70 },
    { x: 70, y: 64 },
    { x: 55, y: 80 },
  ];
  return (
    <svg viewBox="0 0 100 110" className="relative mx-auto h-56 w-auto">
      {/* stylized Argentina silhouette */}
      <path
        d="M48 6 L60 14 L58 26 L66 32 L60 46 L66 60 L58 74 L60 90 L52 104 L46 96 L48 84 L40 72 L46 58 L38 46 L44 32 L40 18 Z"
        fill="oklch(0.55 0.13 245 / 0.06)"
        stroke="oklch(0.55 0.13 245 / 0.4)"
        strokeWidth="0.6"
      />
      {nodes.slice(1).map((n, i) => (
        <motion.line
          key={i}
          x1={nodes[0].x}
          y1={nodes[0].y}
          x2={n.x}
          y2={n.y}
          stroke="oklch(0.55 0.13 245 / 0.5)"
          strokeWidth="0.5"
          strokeDasharray="2 2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          {n.hub && (
            <motion.circle
              cx={n.x}
              cy={n.y}
              r="3"
              fill="oklch(0.55 0.13 245 / 0.3)"
              animate={{ r: [3, 6, 3], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
          <circle
            cx={n.x}
            cy={n.y}
            r={n.hub ? 1.8 : 1.2}
            fill={n.hub ? "oklch(0.66 0.20 257)" : "oklch(0.53 0.17 262)"}
          />
        </g>
      ))}
    </svg>
  );
}
