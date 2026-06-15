import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';
import cmsSave from './vite-plugins/cms-save.js';
import spaFallback from './vite-plugins/spa-fallback.js';

// On GitHub Pages this project is served from /thetaxlink/. In dev we use '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/thetaxlink/' : '/',
  plugins: [react(), cmsSave(), spaFallback()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));
