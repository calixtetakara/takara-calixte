import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),  
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      // CORRECTION 1 : On ajoute explicitement vos images principales dans les assets de base
      includeAssets: ['favicon.ico', 'logo1.png', 'apple-touch-icon.png', 'My.jpg', 'calixte.png'],
      
      // CORRECTION 2 : Configuration de Workbox pour mettre en cache TOUTES les images automatiquement
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}'], // Cache tous les formats d'images du projet
      },
      manifest: {
        name: 'TAKARA K. Calixte — Portfolio',
        short_name: 'Takara Calixte',
        description: 'Portfolio de TAKARA K. Calixte — Développeur Architecture Logicielle & Graphiste',
        theme_color: '#FFFFFF',       
        background_color: '#FFFFFF',  
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'logo1.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo1.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'logo1.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable' 
          }
        ]
      }
    })
  ],
})
