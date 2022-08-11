import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: 'Components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'Models', replacement: path.resolve(__dirname, 'src/models') },
      { find: 'Routes', replacement: path.resolve(__dirname, 'src/routes') },
      { find: 'Utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: 'Data', replacement: path.resolve(__dirname, 'src/data') },
      { find: 'Pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'Redux', replacement: path.resolve(__dirname, 'src/redux') }
    ]
  }
});

