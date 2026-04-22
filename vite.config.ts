import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginSvgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSvgr()],
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "src/api"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
    },
  },
});
