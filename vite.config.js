import { defineConfig } from 'vite';
import path from 'path';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Set src folder as an alias
      '@scss': path.resolve(__dirname, 'src/scss'), // Set scss folder as an alias
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});