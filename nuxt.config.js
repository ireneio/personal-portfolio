export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'IreneHub',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Irene\'s Portfolio Showcase & Demonstration' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios',
    '~/plugins/fontawesome'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  // router: {
  //   base: '/personal-portfolio/'
  // },
  env: {
    API_URL: process.env.NUXT_ENV_API_URL || 'http://localhost:8081',
    BLOB_URL: process.env.NUXT_ENV_BLOB_URL || null,
    TIMEOUT_LIMIT: process.env.NUXT_ENV_TIMEOUT_LIMIT,
  },
  // loading: '~/components/BaseLoading.vue',
  loading: {
    color: '#ffa31a'
  },
  server: {
    port: process.env.PORT || 3000
  }
}
