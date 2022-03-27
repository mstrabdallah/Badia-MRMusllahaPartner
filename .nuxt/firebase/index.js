import createApp from './app.js'

import messagingService from './service.messaging.js'

const appConfig = {"apiKey":"AIzaSyDXbTa3UZqb6IJgRjm9E665dgblRriSvPw","authDomain":"mstare-musallha.firebaseapp.com","projectId":"mstare-musallha","storageBucket":"mstare-musallha.appspot.com","messagingSenderId":"843576382095","appId":"1:843576382095:web:89f0d188aa0cb7250a96fa"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.client) {
    servicePromises = [
      messagingService(session, firebase, ctx, inject),

    ]
  }

  const [
    messaging
  ] = await Promise.all(servicePromises)

  const fire = {
    messaging: messaging
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}