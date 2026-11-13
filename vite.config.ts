import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/book-my-show',
  server: {
    port: 3000,
    open: true
  },
  build: {
    sourcemap: false
  }
})