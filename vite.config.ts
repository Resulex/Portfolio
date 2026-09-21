import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// GitHub Pages serves project sites from https://<owner>.github.io/<repo>/, so the
// bundle must be built with a matching base path. GitHub Actions exposes the repo name
// as GITHUB_REPOSITORY ("owner/repo"), so no hardcoding is needed. A user site repo
// (<owner>.github.io) is served from the domain root and must keep the default "/".
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base =
  process.env.GITHUB_ACTIONS &&
  repositoryName &&
  !repositoryName.toLowerCase().endsWith('.github.io')
    ? `/${repositoryName}/`
    : '/'

export default defineConfig({
  base,
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
