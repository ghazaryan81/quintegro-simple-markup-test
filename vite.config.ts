/*prettier-ignore*/ import { defineConfig }  from "vite";
/*prettier-ignore*/ import react             from "@vitejs/plugin-react-swc";
/*prettier-ignore*/ import { fileURLToPath } from "url";
/*prettier-ignore*/ import svgr              from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
      include: "src/svg/**/*.svg?react"
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: {
        app: "./index.html"
      }
    }
  },
  server: {
    open: "./index.html"
  }
});
