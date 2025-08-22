import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "node:url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const isProduction = process.env.NODE_ENV === "production";
const isReplit = process.env.REPL_ID !== undefined;

export default defineConfig({
  plugins: [
    react(),
    ...(!isProduction ? [runtimeErrorOverlay()] : []),
    ...(!isProduction && isReplit
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
