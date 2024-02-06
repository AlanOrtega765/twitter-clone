// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
    },
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
    },
  },
  colorMode: {
    preference: 'light',
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
    },
  },
});
