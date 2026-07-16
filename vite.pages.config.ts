import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/morrow-living-portfolio/",
  root: "github-pages",
  publicDir: "../public",
  plugins: [react()],
  build: {
    outDir: "../pages-dist",
    emptyOutDir: true,
  },
});
