export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'signifly-teams',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Material+Icons+Outlined'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Oswald:wght@200;300;400;500;600;700&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/db'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://firebase.nuxtjs.org/
    '@nuxtjs/firebase'
  ],

  firebase: {
    config: {
      apiKey: 'AIzaSyA6UUiit4HOKWfad_C-La9GPUqrBkNnlcY',
      authDomain: 'signifly-teams.firebaseapp.com',
      databaseURL: 'https://signifly-teams-default-rtdb.firebaseio.com',
      projectId: 'signifly-teams',
      storageBucket: 'signifly-teams.appspot.com',
      messagingSenderId: '78551624108',
      appId: '1:78551624108:web:4dbc5b571dec663a427209',
      measurementId: 'G-GZS334P7B8'
    },
    services: {
      database: true,
      analytics: true
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
