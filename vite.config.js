import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const base = command === 'build' ? '/terpafy-lp/' : '/'
  
  return {
    base: base,
    plugins: [react()],
    server: {
      port: 5173,
      host: true
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
      assetsDir: 'assets'
    }
  }
})
