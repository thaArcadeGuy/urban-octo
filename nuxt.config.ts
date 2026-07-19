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

  googleFonts: {
  families: {
    Inter: [400, 500, 600, 700],
    Manrope: [500, 600, 700, 800],
  },
  display: "swap",
  preload: true,
  },
})