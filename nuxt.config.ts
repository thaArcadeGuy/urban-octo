import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ["./app/assets/css/main.css"],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  
  modules: [
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
  ],

   image: {
    provider: "ipx",
  },

  googleFonts: {
  families: {
    Inter: [400, 500, 600, 700],
    Manrope: [500, 600, 700, 800],
  },
  display: "swap",
  preload: true,
  },
  app: {
    head: {
      title: 'SCINTL | Technology Solutions',
      titleTemplate: '%s | SCINTL',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        { name: 'description', content: 'SCINTL is a Ugandan-owned ICT enterprise delivering cloud, cybersecurity, technology implementation, and enterprise solutions across Africa.' },
        { name: 'theme-color', content: '#7DBD4A' },
     
        { property: 'og:title', content: 'SCINTL | Technology Solutions' },
        { property: 'og:description', content: 'Ugandan-owned ICT enterprise delivering cloud, security, and enterprise technology solutions.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://www.scintl.co.ug' },
        { property: 'og:image', content: 'https://www.scintl.co.ug/img/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'SCINTL | Technology Solutions' },
        { name: 'twitter:description', content: 'Ugandan-owned ICT enterprise delivering cloud, security, and enterprise technology solutions.' },
        { name: 'twitter:image', content: 'https://www.scintl.co.ug/img/og-image.jpg' },

        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
})