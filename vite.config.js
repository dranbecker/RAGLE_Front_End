import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // target: 'https://ragle.onrender.com',
        target: 'http://localhost:3000', // ⬅️ Lokaler Node.js-Server
        changeOrigin: true,
      },
    },
  },
})
