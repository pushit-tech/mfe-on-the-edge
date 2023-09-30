import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], 
  base: "https://d1wub6s1ympoc5.cloudfront.net/mfe/pokemon/"
  
})
