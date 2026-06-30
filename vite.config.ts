import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// `base: "./"` makes the build use relative asset URLs, so the same
// `dist/` works on GitHub Pages regardless of the repo subpath
// (e.g. https://<user>.github.io/<repo>/).
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    host: true,
    port: 8080,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 8080,
    strictPort: true,
  },
});
