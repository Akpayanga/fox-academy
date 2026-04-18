import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://fox-academy-8g7o.onrender.com",
        changeOrigin: true,
      },
    },
  },
})
