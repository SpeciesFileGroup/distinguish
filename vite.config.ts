import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL("./src", import.meta.url))
    },
  },

  plugins: [vue()],

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts'
  },

  build:{
    lib: {
      entry: path.resolve(__dirname, 'src/lib/main.ts'),
      name: 'InteractiveKey',
      fileName: format => `interactive-key.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'pinia'],
      output: {
        dir: "dist",
        globals: {
          vue: 'Vue',
          pinia: 'pinia'
        }
      }
    }
  }
})
