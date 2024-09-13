import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // 允许通过网络访问
    port: 3000,   // 设置端口为3000
    watch: {
      usePolling: true,  // 啟用輪詢
    }
  }
})
