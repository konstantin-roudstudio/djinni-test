const path = require('path')
import { defineConfig } from 'vite';
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  base: '/djinni-test/',
  build: {
    outDir: '../dist'
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },

  server: {
    port: 8080,
    hot: true
  }
})
