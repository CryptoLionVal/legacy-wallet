export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  env: {
    ON_MAIN_NET: true,
    RPC: 'https://mainnet.crypto.org:26657',
    T_VALIDATOR: '8F7012771B173B8DD2E7A9FBC9EAF7B1E3C055FB',
    VALIDATOR: 'crocncl17xjefmgzd9k2k065289nktklj706zhk4nr7495',
    HD_PATH: "m/44'/394'/0'/0/0",
    PREFIX: 'cro',
    EXPLORER: 'https://crypto.org/explorer',
    TESTNET_RPC: 'https://testnet-croeseid.crypto.com:26657',
    TESTNET_T_VALIDATOR: '15CDB1DCB71FE74CB7EA971E2CC17751F21984E8',
    TESTNET_VALIDATOR: 'tcrocncl1valsdtujgugsfhwuh8twkqpuxhr5486nlvk4ew',
    TESTNET_HD_PATH: "m/44'/1'/0'/0/0",
    TESTNET_PREFIX: 'tcro',
    TESTNET_EXPLORER: 'https://crypto.org/explorer/croeseid',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: 'leading-normal tracking-normal text-white gradient source-sans',
    },
  },

  router: {
    linkExactActiveClass: 'font-bold',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/main.css'],
  tailwindcss: {},

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/chain.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-i18n', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxtjs/axios'],

  // i18n https://i18n.nuxtjs.org
  i18n: {
    seo: true,
    locales: [
      {
        name: 'Turkish',
        code: 'tr',
        iso: 'tr',
        file: 'tr.js',
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en',
        file: 'en.js',
      },
    ],
    lazy: true,
    defaultLocale: 'tr',
    langDir: 'languages/',
    vueI18n: {
      fallbackLocale: 'en',
    },
    parsePages: false,
    pages: {
      'how-to-stake-cro': {
        en: '/how-to-stake-cro',
        tr: '/cro-nasil-stake-edilir',
      },
    },
  },

  sitemap: {
    hostname: 'https://cryptolion.finance',
    gzip: true,
  },

  robots: {
    UserAgent: '*',
    Disallow: '',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
