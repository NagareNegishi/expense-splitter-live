import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  // The deployed build lives under a subpath of the portfolio site, so asset
  // URLs need the prefix. Dev stays at `/` so `npm run dev` opens at the root.
  base: command === 'build' ? '/rapid-prototypes/expense-splitter/' : '/',
  plugins: [react(), tailwindcss()],
  server: { host: true, port: 5173, strictPort: true },
}))
