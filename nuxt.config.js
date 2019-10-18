import val from './i18n/val.js'
import cas from './i18n/cas.js'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/sass/global.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/vue-carousel', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt',
    ['nuxt-i18n',{
      locales: ['val', 'cas'],
      defaultLocale: 'val',
      vueI18n: {
        fallbackLocale: 'val',
        messages: { val, cas }
      }
    }],
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faFacebookSquare', 'faTwitterSquare', 'faInstagram', 'faWhatsapp', 'faTelegram']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faArrowLeft']
        }
      ]
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  /*
  ** Bootstrap config
  */
  bootstrapVue: {
    componentPlugins: [
      'CarouselPlugin',
      'NavbarPlugin',
      'ButtonPlugin'
    ],
    bootstrapCSS: false,
    bootstrapVueCSS: false
  }
}
