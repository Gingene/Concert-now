import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Concert-now/' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    open: true,
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // 可以把 id 印出來看，會更清楚知道他的內容
          // console.log('id', id.includes('node_modules/lottie-web'));
          // if (id.includes('node_modules')) {
          //   const arr = id.toString().split('node_modules/')[1].split('/');
          // }
        },
      },
    },
  },
});
