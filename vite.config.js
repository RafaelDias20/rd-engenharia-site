import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/functions/v1/site/",
  plugins: [react()],
});
