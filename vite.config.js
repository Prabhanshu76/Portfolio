import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Adjust this based on your GitHub Pages URL
  plugins: [react()],
});
