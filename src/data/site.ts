import {
  Zap,
  Gauge,
  Cpu,
  Droplets,
  PanelsTopLeft,
  Waves,
  Activity,
  BatteryCharging,
  Network,
  type LucideIcon,
} from "lucide-react";

export const CONTACT = {
  whatsapp: "543585187423",
  whatsappDisplay: "+54 358 518-7423",
  email: "contacto@rpis.com.ar",
  region: "Sur de Córdoba, Argentina",
};

export const whatsappLink = (msg?: string) =>
  `https://wa.me/${CONTACT.whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

export const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Quiénes Somos" },
  { to: "/servicios", label: "Servicios" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/contacto", label: "Contacto" },
] as const;

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  points: [string, string, string];
}

export const services: Service[] = [
  {
    slug: "ingenieria-electrica",
    title: "Ingeniería Eléctrica",
    tagline: "Diseño y cálculo de instalaciones de baja y media tensión.",
    icon: Zap,
    points: ["Proyectos llave en mano", "Cálculo de cargas y protección", "Normativa vigente"],
  },
  {
    slug: "instrumentacion",
    title: "Instrumentación",
    tagline: "Medición y control de variables de proceso en tiempo real.",
    icon: Gauge,
    points: ["Calibración de sensores", "Lazos de control", "Monitoreo continuo"],
  },
  {
    slug: "automatizacion-plc",
    title: "Automatización / PLC",
    tagline: "Programación y puesta en marcha de sistemas automatizados.",
    icon: Cpu,
    points: ["Lógica PLC y SCADA", "Optimización de procesos", "HMI intuitivas"],
  },
  {
    slug: "bombas-dosificadoras",
    title: "Bombas Dosificadoras",
    tagline: "Dosificación precisa para procesos productivos.",
    icon: Droplets,
    points: ["Selección técnica", "Instalación y ajuste", "Mantenimiento"],
  },
  {
    slug: "tableros-electricos",
    title: "Tableros Eléctricos",
    tagline: "Fabricación de tableros de comando y potencia.",
    icon: PanelsTopLeft,
    points: ["Armado a medida", "Cableado certificado", "Ensayos finales"],
  },
  {
    slug: "sistemas-de-bombeo",
    title: "Sistemas de Bombeo",
    tagline: "Soluciones hidráulicas eficientes y automatizadas.",
    icon: Waves,
    points: ["Diseño de bombeo", "Control de presión", "Eficiencia energética"],
  },
  {
    slug: "diagnostico-industrial",
    title: "Diagnóstico Industrial",
    tagline: "Detección temprana de fallas y mantenimiento predictivo.",
    icon: Activity,
    points: ["Análisis de fallas", "Termografía", "Informes técnicos"],
  },
  {
    slug: "generacion-electrica",
    title: "Generación Eléctrica",
    tagline: "Respaldo y generación para continuidad operativa.",
    icon: BatteryCharging,
    points: ["Grupos electrógenos", "Transferencia automática", "Puesta en servicio"],
  },
  {
    slug: "soporte-cooperativas",
    title: "Soporte para Cooperativas",
    tagline: "Acompañamiento técnico al interior productivo.",
    icon: Network,
    points: ["Asesoramiento integral", "Mantenimiento de red", "Respuesta rápida"],
  },
];

export const metrics = [
  { value: 24, suffix: "/7", label: "Soporte técnico" },
  { value: 180, suffix: "+", label: "Proyectos completados" },
  { value: 15, suffix: "+", label: "Años de experiencia" },
  { value: 9, suffix: "", label: "Servicios especializados" },
];

export const values = [
  { title: "Responsabilidad", desc: "Compromiso total con cada proyecto y plazo.", icon: Activity },
  { title: "Innovación", desc: "Tecnología de vanguardia aplicada a la industria.", icon: Cpu },
  { title: "Eficiencia", desc: "Procesos optimizados que reducen costos.", icon: Gauge },
  { title: "Soluciones", desc: "Respuestas concretas a desafíos reales.", icon: Zap },
];

export const timeline = [
  { year: "2009", title: "Los inicios", desc: "Primeros servicios de mantenimiento eléctrico en el sur de Córdoba." },
  { year: "2014", title: "Automatización", desc: "Incorporación de programación PLC y sistemas de control." },
  { year: "2018", title: "Expansión regional", desc: "Cobertura hacia todo el interior productivo argentino." },
  { year: "2024", title: "Ingeniería integral", desc: "Soluciones llave en mano para industria y cooperativas." },
];

export const projectCategories = ["Todos", "Tableros", "Automatización", "Bombeo", "Generación"] as const;

export const projects = [
  { title: "Tablero de comando automatizado", category: "Tableros", tag: "Industria láctea" },
  { title: "Sistema SCADA de planta", category: "Automatización", tag: "Cooperativa" },
  { title: "Estación de bombeo", category: "Bombeo", tag: "Agro" },
  { title: "Grupo electrógeno con TTA", category: "Generación", tag: "Frigorífico" },
  { title: "Migración de PLC", category: "Automatización", tag: "Metalúrgica" },
  { title: "Reconversión de tablero", category: "Tableros", tag: "Planta de silos" },
];
