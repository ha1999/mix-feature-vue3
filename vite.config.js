import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@cp' : path.resolve(__dirname, './src/components'),
      '@api' : path.resolve(__dirname, './src/utils/api'),
    },
  },
  plugins: [vue()],
  server: {
    host: true
  }
})
