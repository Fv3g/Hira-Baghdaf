import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import path from 'node:path'

export default defineConfig({
  plugins: [
    tanstackStart({
      prerender: { enabled: true, crawlLinks: true },
      spa: { enabled: false },
    }),
    react(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
