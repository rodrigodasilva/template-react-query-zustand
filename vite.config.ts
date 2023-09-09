import react from '@vitejs/plugin-react';
import path from 'path';
import checker from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      exclude: ['/virtual:/**', 'node_modules/**'],
    }),
    checker({ typescript: true }),
    svgr({
      exportAsDefault: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/lib/test/setup.ts',
    // coverage: {
    //   provider: 'v8',
    //   exclude: ['src/shared/api/**'],
    // },
  },
  server: { host: false },
  preview: { open: true },
  resolve: {
    alias: {
      '~api': path.resolve('src/api'),
      '~lib': path.resolve('src/lib'),
      '~services': path.resolve('src/services'),
      '~utils': path.resolve('src/utils'),
      '~constants': path.resolve('src/constants'),
      '~store': path.resolve('src/store'),
      '~models': path.resolve('src/models'),
      '~providers': path.resolve('src/providers'),
      '~pages': path.resolve('src/pages'),
      '~components': path.resolve('src/components'),
      '~assets': path.resolve('src/assets'),
    },
  },
});
