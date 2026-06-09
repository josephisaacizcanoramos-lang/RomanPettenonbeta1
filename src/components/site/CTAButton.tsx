import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

export function CTAButton({
  to,
  children,
  variant = "primary",
  withArrow = true,
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  withArrow?: boolean;
}) {
  const cls =
    variant === "primary"
      ? `${base} bg-gradient-primary text-primary-foreground glow-primary hover:scale-105`
      : `${base} border border-border text-foreground hover:border-primary hover:text-primary`;

  return (
    <Link to={to} className={cls}>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}
