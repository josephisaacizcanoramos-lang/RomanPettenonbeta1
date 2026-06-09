/**
 * Centralized asset URLs.
 * All media is served from Cloudflare R2 (CDN) so the site works
 * outside Lovable's platform (e.g. Vercel deployment).
 */
const CDN = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev";

export const assets = {
  // Hero section
  heroVideoMp4: `${CDN}/a/v1/88c07485-c58e-41da-a12e-e7326828ae17/bde745b5-e4ef-4b95-9cc6-67a82fb74550/hero-video.mp4`,
  heroVideoWebm: `${CDN}/a/v1/88c07485-c58e-41da-a12e-e7326828ae17/7b95ea61-0b74-4e6f-af88-32445fa7d730/hero-video.webm`,
  heroPoster: `${CDN}/a/v1/88c07485-c58e-41da-a12e-e7326828ae17/af74b9c0-0a5f-4eec-ae2f-9512b984aba6/hero-poster.jpg`,

  // Nosotros / About
  nosotros: `${CDN}/a/v1/88c07485-c58e-41da-a12e-e7326828ae17/f5353b7f-3533-47b0-9772-016f7960764a/img1-nosotros.jpg`,
  nosotrosImagen: `${CDN}/a/v1/88c07485-c58e-41da-a12e-e7326828ae17/4218d4c4-697e-4758-bf6f-635cc9978d74/nosotros-imagen.jpg`,

  // Project gallery
  tablero: `${CDN}/a/v1/88c07485-c58e-41da-a12e-e7326828ae17/eb78d553-ac91-4a86-928f-7a3f7fd76795/img2-tablero.jpg`,
  scada: `${CDN}/a/v1/88c07485-c58e-41da-a12e-e7326828ae17/55bbab26-9e44-4611-aa70-1ab71933b69c/img3-scada.jpg`,
  bombeo: `${CDN}/a/v1/88c07485-c58e-41da-a12e-e7326828ae17/fda7219e-bf40-42e9-98b5-3203685fcc90/img4-bombeo.jpg`,
  grupo: `${CDN}/a/v1/88c07485-c58e-41da-a12e-e7326828ae17/d68a623c-498c-4d6d-a7a2-a0548382a4c7/img5-grupo.jpg`,
  plc: `${CDN}/a/v1/88c07485-c58e-41da-a12e-e7326828ae17/c7519020-f2c3-40c0-8ab6-730e25a390cb/img6-plc.jpg`,
  reconversion: `${CDN}/a/v1/88c07485-c58e-41da-a12e-e7326828ae17/aba1d3e1-cb04-463e-b7e7-f857f4f7e846/img7-reconversion.jpg`,

  // Sector logos (used in proyectos/servicios)
  agro: `${CDN}/a/v1/88c07485-c58e-41da-a12e-e7326828ae17/a86a8523-2088-4f1f-9176-3025915135e8/agro.png`,
  agro2: `${CDN}/a/v1/88c07485-c58e-41da-a12e-e7326828ae17/50b8b912-dd07-4f41-9355-1d3b18e1dcc9/agro-2.png`,
  frigorifico: `${CDN}/a/v1/88c07485-c58e-41da-a12e-e7326828ae17/7bd12a6d-3878-4fff-9c1e-400bd84e8996/frigorifico.png`,
  lacteos: `${CDN}/a/v1/88c07485-c58e-41da-a12e-e7326828ae17/b8723a8c-728d-4e5a-81b0-486e5ee8766d/lacteos.png`,
  metalurgica: `${CDN}/a/v1/88c07485-c58e-41da-a12e-e7326828ae17/916a643e-13e3-417c-b379-c729892c0242/metalurgica.png`,
  plantaDeSilos: `${CDN}/a/v1/88c07485-c58e-41da-a12e-e7326828ae17/f5e2c7cd-0eab-4ce6-a0fd-04b4855c46fa/planta-de-silos.png`,
} as const;
