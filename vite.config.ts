import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      api: path.resolve(__dirname, "src/api"),
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components"),
      ["design-system"]: path.resolve(__dirname, "src/design-system"),
      pages: path.resolve(__dirname, "src/pages"),
      routes: path.resolve(__dirname, "src/routes"),
      stores: path.resolve(__dirname, "src/stores"),
    },
  },
});
