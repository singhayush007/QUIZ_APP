import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import path from "path"

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
