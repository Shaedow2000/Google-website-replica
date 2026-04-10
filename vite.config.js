import { defineConfig } from "vite";

export default defineConfig({
  base: "/Google-website-replica/",
  root: ".",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "./index.html",
    },
  },
});
