export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    { src: '/styles/globals.scss', lang: 'sass' },
    { src: '/styles/reset.scss', lang: 'sass' }
  ],
  render: {
    csp: {
      reportOnly: false,
      policies: {
        'script-src': [
          "'self'",
          'https:',
          "'unsafe-inline'",
          "'unsafe-eval'", // Add this line
          "'strict-dynamic'",
          "'nonce-lYJC0UCk24D6+PTa1yON6g=='"
        ]
      }
    }
  },
  nitro: {
    routeRules: {
      "/api/**": { proxy: "https://equidado-008c032b8ff0.herokuapp.com/api/**", cors: false },
    },
  },
  app: {
    head: {
      title: "Equidado",
    }
  },
  proxy: {
    '/api/': {
      target: 'https://equidado-008c032b8ff0.herokuapp.com',
      pathRewrite: { '^/api/': '' },
      changeOrigin: true
    }
  },
  modules: ['nuxt-icon', "@nuxt/image"],
  axios: {
    baseURL: 'https://equidado-008c032b8ff0.herokuapp.com',
    proxyHeaders: false,
    credentials: false,
  },
})