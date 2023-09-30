import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      transformAssetUrls: {
        base: '/src'
      }
    }
  }), basicSsl()],
  server: {
    port: 8089,
    host: true,
    cors: true,
    base: "https://localhost:8089/"
  },
  preview: {
    port: 8089,
    host: true,
    cors: true,
  },
  build: {
    outDir: path.join(__dirname, "dist"),
    rollupOptions: {
      input: 'src/main.js',
      output:{
        format: 'system',
        entryFileNames: `js/[name].js`,
        chunkFileNames: `js/[name].js`,
        assetFileNames: `js/[name].[ext]`
      },
      preserveEntrySignatures: "strict"
    },
  }
})
