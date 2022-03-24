
const env = require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mr.Musllaha ',
    htmlAttrs: {
      lang: 'en',
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

    ]

  },

  env: env.parsed,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

    'vue-phone-number-input/dist/vue-phone-number-input.css',
    '@fortawesome/fontawesome-svg-core/styles.css'

  ],

  styleResources: {
    scss: [
      '~assets/scss/mixins.scss',
      '~assets/scss/variables.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/vuetify.js',
    '~/plugins/fontawesome.js',
    '~/plugins/VuePhoneNumberInput.js',
  ],


  router: {
    middleware: ['auth'],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,



  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules



  buildModules: [
  //   ['@nuxtjs/vuetify',{rtl:true}],
    '@nuxtjs/vuetify',
    '@nuxtjs/fontawesome'

  ],

 
  image: {
    // Options
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    'cookie-universal-nuxt',
    '@nuxtjs/dotenv',
    '@nuxt/image',
 
  ],


 

  i18n: {
    defaultLocale: 'en',
    seo: true,
    locales:
      [
        { code: 'en', iso: 'en', file: 'en.json', dir: 'ltr' },
        { code: 'ar', iso: 'ar', file: 'ar.json', dir: 'rtl' },
      ],
    lazy: true,
    langDir: 'lang/',
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  //   baseURL: 'https://support.tecbadia.com/api',
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  }
}
