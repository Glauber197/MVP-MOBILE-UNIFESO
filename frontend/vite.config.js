import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'Terê Verde',
        short_name: 'Terê Verde',
        description:
          'Guia digital de parques, trilhas, eventos e biodiversidade de Teresópolis.',
        theme_color: '#2f6b3d',
        background_color: '#eef5ea',
        display: 'standalone',
        start_url: '/',

        icons: [
          {
            src: '/icons.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: '/icons.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
        ],
      },

      workbox: {
        cleanupOutdatedCaches: true,

        runtimeCaching: [
          {
            urlPattern:
              /^http:\/\/(127\.0\.0\.1|localhost):8000\/api\/.*/i,

            handler: 'NetworkFirst',

            options: {
              cacheName: 'tere-verde-api-cache',

              networkTimeoutSeconds: 3,

              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24,
              },

              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },

          {
            urlPattern:
              /^http:\/\/(127\.0\.0\.1|localhost):8000\/media\/.*/i,

            handler: 'CacheFirst',

            options: {
              cacheName: 'tere-verde-media-cache',

              expiration: {
                maxEntries: 150,
                maxAgeSeconds: 60 * 60 * 24 * 7,
              },

              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
})