import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import istanbul from 'vite-plugin-istanbul'
import dns from 'dns'
dns.setDefaultResultOrder('ipv4first')

export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false
    })
  ],

  server: {
    proxy: {
      '/movies': 'http://localhost:3000'
    }
  }
})
