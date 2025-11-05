import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import stringHash from 'string-hash'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') }
    ]
  },
  plugins: [vue()],
  base: '/vue3-mindmap/',
  build: {
    outDir: 'docs'
  },
  css: {
    modules: {
      generateScopedName: (name, filename, css) => {
        const f = filename.split('?')[0].split('.')[0]
        const file = path.basename(f)
        const hash = stringHash(css).toString(36).substr(0, 5);
        return `${file}_${name}_${hash}`
      }
    }
  },
  server: {
    port: 3002,  // اضافه کردن این خط
    host: true   // اختیاری: برای دسترسی از دستگاه‌های دیگر در شبکه
  },

})