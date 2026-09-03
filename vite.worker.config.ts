import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist/server',
    emptyOutDir: false,
    lib: {
      entry: 'server/index.ts',
      formats: ['es'],
      fileName: () => 'index.js',
    },
  },
});
