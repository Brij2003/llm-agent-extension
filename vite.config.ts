import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // Define the popup entry point
        popup: resolve(__dirname, 'popup.html'),
        // We will add other entry points like background/content scripts later
      },
      output: {
        // Ensure entry file names are predictable if needed,
        // otherwise Vite handles hashing etc.
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
    // Optional: Set output directory if you prefer something other than 'dist'
    // outDir: 'build'
  },
});