const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Köşe Yazısı Uygulaması | NuxtJS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'}
    ],
    script: [
      //{src: 'blabalbal'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  //loading: false, // bu da kullanılabilir eğer istenmiyorsa....
  loading: {
    color: '#FF0000',
    height: '20px',
    failedColor: "orange" // başarısız isteklerde bu renk oluyor default red mesela...
  },/*
  loadingIndicator: { // eğer spa olarak seçilirse uygulama bu çalışıyor :)
    name: "circle",
    color: "red"
  }*/

  /*
  ** Global CSS
  */
  css: [
    //"~/assets/style/bootstrap.min.css"
    "~/assets/style/transition.css"
  ],

  //dev: false,
  env: { // global değişkenleri buradan tanımlıyorsun...
    baseURL: 'https://kose-yazilari-nuxt-js.firebaseio.com/'
  },
  //rootDir: 'application-folder',
  //srcDir: "tekfolderhalegetirir",
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/custom-route',
        component: resolve(__dirname, "pages/test.vue")// resolve lazy load için
      })
    }
  },
  transition: {// geçişlerdeki effect :) yukarıda css altında transitions.css tanımlanmalı!
    name: "layout",
    mode: "out-in"
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      "@/plugins/Components"
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
      "@nuxtjs/axios"
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
