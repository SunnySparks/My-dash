import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isGitHubPages = process.env.BUILD_TARGET === "gh-pages";

// https://vitejs.dev/config/
export default defineConfig({
  base: isGitHubPages ? "/My-dash/" : "./",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
