import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/", // 👈 use just "/" because it's now the root domain
  plugins: [react()],
})
