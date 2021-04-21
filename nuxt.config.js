const pkg = require('./package');

module.exports = {
  mode: 'universal',

  head: {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'nuxt, vue, ssr'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  loading: {
    color: '#409EFF '
  },

  css: [
    './assets/base.scss',
  ],

  plugins: [
    '@/plugins/axios',
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
  },

  build: {
    extend(config, ctx) {
    }
  }
};
