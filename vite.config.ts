import path from 'path';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      exclude: ['/virtual:/**', 'node_modules/**'],
    }),
    checker({ typescript: true }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/shared/lib/test/setup.ts',
    // coverage: {
    //   provider: 'v8',
    //   exclude: ['src/shared/api/**'],
    // },
  },
  server: { host: false },
  preview: { open: true },
  resolve: {
    alias: {
      '~app': path.resolve('src/app'),
      '~pages': path.resolve('src/pages'),
      '~shared': path.resolve('src/shared'),
    },
  },
});
