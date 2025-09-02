// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://b-sobol.github.io' {plugins: [tailwindcss()]},
  base: '/devportf'
});
