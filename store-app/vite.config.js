import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    watch: {
      // Use polling to improve file-watch reliability on networked/OneDrive folders
      usePolling: true,
      // Poll every 1000ms
      interval: 1000,
    },
  },
})
