import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Mini-Project1-React/', // 👈 importante: debe tener slash inicial y final
})