import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/gcp-de-exam-simulator/",
  plugins: [react()],
});
