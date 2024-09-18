import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  server: {
    host: true,  // allow access
    port: 3000,   // port set 3000
    watch: {
      usePolling: true,  // Enable polling
    }
  }
})
