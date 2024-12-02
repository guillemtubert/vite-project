import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: 'https://guillemtubert.github.io/vite-project/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});