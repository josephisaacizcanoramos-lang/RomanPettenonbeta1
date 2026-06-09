import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      router: { entry: "src/router.ts" },
      client: { entry: "src/client.tsx" },
      server: { entry: "src/server.ts" },
    }),
    react(),
  ],
});
