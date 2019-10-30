const path = require('path')
import val from './i18n/val.js'
import cas from './i18n/cas.js'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Compromís - Más País: Acordar, la política útil',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { property: 'og:image', content: 'https://mes.compromis.net/images/thumbnail_generic.jpg' }
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
    { src: '~plugins/vue-carousel', ssr: false },
    { src: '~plugins/vue-fullscreen', ssr: false }
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
          icons: ['faFacebookSquare', 'faTwitter', 'faInstagram', 'faWhatsapp', 'faTelegram']
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faArrowLeft', 'faArrowRight']
        }
      ]
    }],
    'vue-scrollto/nuxt'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    extend (config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'content'),
        options: {
          vue: {
            root: 'dynamicMarkdown'
          }
        }
      })
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
