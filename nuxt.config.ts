// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts'
  ],
  colorMode: {
    classSuffix: ''
  },
  googleFonts: {
    families: {
      'Roboto+Mono': true
    }
  }
})
