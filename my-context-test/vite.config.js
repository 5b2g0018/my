import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my/', // 🌟 補上這一行！讓 Vite 知道網頁要部署在 /my/ 子路徑下
})