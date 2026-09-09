import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  plugins: [vue()],

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts'
  },

  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/lib/main.ts', import.meta.url)),
      name: 'Distinguish',
      fileName: (format) => `distinguish.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        dir: 'dist',
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
