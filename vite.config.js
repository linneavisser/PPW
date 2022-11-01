// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        borsen: resolve(__dirname, "src/borsen.html"),
        customiseme: resolve(__dirname, "src/customiseme.html"),
        eurowoman: resolve(__dirname, "src/eurowoman.html"),
        kraess: resolve(__dirname, "src/kraess.html"),
       silfen: resolve(__dirname, "src/silfen.html"),
       styleby: resolve(__dirname, "src/styleby.html"),
       vildskud: resolve(__dirname, "src/vildskud.html"),
       vogue: resolve(__dirname, "src/vogue.html"),
      },
    },
  },
});
