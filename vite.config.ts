import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Cambia esto al prefijo correcto, por ejemplo, "/mi-subcarpeta/" si tienes una subcarpeta
  build: {
    outDir: 'dist', // o el directorio de salida que prefieras
  },
});