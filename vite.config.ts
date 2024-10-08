import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
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
      entry: path.resolve(__dirname, 'src/lib/main.ts'),
      name: 'Distinguish',
      fileName: (format) => `distinguish.${format}.js`
    },
    rollupOptions: {
      external: ['pinia', 'vue'],
      output: {
        dir: 'dist',
        globals: {
          vue: 'Vue',
          pinia: 'Pinia'
        }
      }
    }
  }
})
