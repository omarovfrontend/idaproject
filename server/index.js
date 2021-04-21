const express = require('express')
const {Nuxt, Builder} = require('nuxt')

let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

const app = express()

async function start() {
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(nuxt.render)

  app.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`)
  })
}

start()
