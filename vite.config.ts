import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
// Importation du plugin PWA compatible avec votre version de Vite
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),  
    tailwindcss(),
    // Ajout et configuration de la PWA sans toucher à vos autres plugins
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'logo1.png', 'apple-touch-icon.png'],
      manifest: {
        name: 'TAKARA K. Calixte — Portfolio',
        short_name: 'Takara Calixte',
        description: 'Portfolio de TAKARA K. Calixte — Développeur Architecture Logicielle & Graphiste',
        theme_color: '#FFFFFF',       // Supprime la barre noire du navigateur sur téléphone
        background_color: '#FFFFFF',  // Remplace l'écran noir de chargement par du blanc pur
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
            purpose: 'any maskable' // Permet d'adapter la forme de l'icône sur Android (rond, carré)
          }
        ]
      }
    })
  ],
})
