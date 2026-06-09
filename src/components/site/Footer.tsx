import { Link } from "@tanstack/react-router";
import { MapPin, Mail, MessageCircle } from "lucide-react";
import { navLinks, CONTACT, whatsappLink } from "@/data/site";
import logo from "@/assets/rpis-logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="RPIS" className="h-12 w-auto" loading="lazy" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Ingeniería y servicios industriales de vanguardia. Automatización, energía y control
              para el interior productivo argentino.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Navegación
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-primary" /> {CONTACT.region}
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4 text-primary" /> {CONTACT.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} RPIS — Román Pettenón Ingeniería y Servicios.</p>
          <p>
            Developers:{" "}
            <span className="font-semibold text-gradient">Agencia Web 504</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
