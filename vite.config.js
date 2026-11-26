import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/random-joke': {
        target: 'https://official-joke-api.appspot.com',
        changeOrigin: true,
        rewrite: () => '/random_joke',
      },
    },
  },
})
