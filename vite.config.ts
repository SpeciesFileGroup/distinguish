import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'


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
  }
})
