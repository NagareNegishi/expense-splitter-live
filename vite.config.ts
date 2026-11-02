import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  // GitHub Pages serves a project repo at /<repo-name>/, so the deployed build
  // needs that prefix. Dev stays at `/` so `npm run dev` opens at the root.
  base: command === 'build' ? '/expense-splitter-live/' : '/',
  plugins: [react(), tailwindcss()],
  server: { host: true, port: 5173, strictPort: true },
}))
