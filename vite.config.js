import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';
import cmsSave from './vite-plugins/cms-save.js';

export default defineConfig({
  plugins: [react(), cmsSave()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
