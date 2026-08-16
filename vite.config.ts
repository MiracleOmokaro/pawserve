import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import { VitePWA } from 'vite-plugin-pwa'

// Custom plugin to handle ?import&react syntax (alias to ?react)
const svgImportPlugin = () => ({
  name: 'svg-import-alias',
  resolveId(id: string) {
    // Transform ?import&react to ?react for vite-plugin-svgr
    if (id.includes('?import&react')) {
      return id.replace('?import&react', '?react');
    }
    return null;
  },
});

// https://vite.dev/config/
export default defineConfig(() => ({
  base: '/pawserve/',
  plugins: [
    react(),
    tailwindcss(),
    svgImportPlugin(),
    svgr({
      // Support named ReactComponent export (for ?react syntax)
      svgrOptions: {
        exportType: 'named',
        namedExport: 'ReactComponent',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: '**/*.svg?react',
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['pawserve-logo.svg'],
      manifest: {
        name: 'PawServe',
        short_name: 'PawServe',
        description: 'Everything your dog needs, in one place — AI symptom checker, vet directory, pet supply shop, and care guides.',
        theme_color: '#5C4033',
        background_color: '#FDF8F3',
        display: 'standalone',
        scope: '/pawserve/',
        start_url: '/pawserve/',
        icons: [
          {
            src: 'pawserve-logo.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  server: {
    allowedHosts: true as const,
    hmr: false,
  },
}))
