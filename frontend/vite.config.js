import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'

const BUILD = String(Date.now())
// writes dist/version.json: open tabs compare it with their own build and reload themselves after a deploy
const versionFile = () => ({ name: 'version-file', apply: 'build', closeBundle() { fs.writeFileSync('dist/version.json', JSON.stringify({ build: BUILD })) } })

export default defineConfig({
  plugins: [react(), versionFile()],
  define: { __BUILD__: JSON.stringify(BUILD) },
  server: { proxy: { '/api': 'http://127.0.0.1:8710', '/t/': 'http://127.0.0.1:8710', '/media': 'http://127.0.0.1:8710' } },
  build: { outDir: 'dist', assetsDir: 'assets', sourcemap: false }
})
