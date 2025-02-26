import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path"; // Use node:path to avoid issues

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Ensure this path is correct
    },
  },
});
