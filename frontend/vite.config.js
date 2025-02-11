import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // ✅ Pfad-Modul importieren

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ✅ Alias für `src/`
    },
  },
});
