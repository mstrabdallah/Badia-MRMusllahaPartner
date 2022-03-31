import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _14c0bb3b = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _138cda9e = () => interopDefault(import('../pages/account/index.vue' /* webpackChunkName: "pages/account/index" */))
const _34789600 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _05d06b9a = () => interopDefault(import('../pages/forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _03bf8dd2 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _5389ec58 = () => interopDefault(import('../pages/my-earnings.vue' /* webpackChunkName: "pages/my-earnings" */))
const _b747467a = () => interopDefault(import('../pages/my-work/index.vue' /* webpackChunkName: "pages/my-work/index" */))
const _6a2bddd4 = () => interopDefault(import('../pages/notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _46e177c8 = () => interopDefault(import('../pages/privcy-policy.vue' /* webpackChunkName: "pages/privcy-policy" */))
const _b3b69736 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _43f2e6fa = () => interopDefault(import('../pages/terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _14c0bb3b,
    name: "about___en"
  }, {
    path: "/account",
    component: _138cda9e,
    name: "account___en"
  }, {
    path: "/ar",
    component: _34789600,
    name: "index___ar"
  }, {
    path: "/forgot-password",
    component: _05d06b9a,
    name: "forgot-password___en"
  }, {
    path: "/login",
    component: _03bf8dd2,
    name: "login___en"
  }, {
    path: "/my-earnings",
    component: _5389ec58,
    name: "my-earnings___en"
  }, {
    path: "/my-work",
    component: _b747467a,
    name: "my-work___en"
  }, {
    path: "/notifications",
    component: _6a2bddd4,
    name: "notifications___en"
  }, {
    path: "/privcy-policy",
    component: _46e177c8,
    name: "privcy-policy___en"
  }, {
    path: "/register",
    component: _b3b69736,
    name: "register___en"
  }, {
    path: "/terms-condition",
    component: _43f2e6fa,
    name: "terms-condition___en"
  }, {
    path: "/ar/about",
    component: _14c0bb3b,
    name: "about___ar"
  }, {
    path: "/ar/account",
    component: _138cda9e,
    name: "account___ar"
  }, {
    path: "/ar/forgot-password",
    component: _05d06b9a,
    name: "forgot-password___ar"
  }, {
    path: "/ar/login",
    component: _03bf8dd2,
    name: "login___ar"
  }, {
    path: "/ar/my-earnings",
    component: _5389ec58,
    name: "my-earnings___ar"
  }, {
    path: "/ar/my-work",
    component: _b747467a,
    name: "my-work___ar"
  }, {
    path: "/ar/notifications",
    component: _6a2bddd4,
    name: "notifications___ar"
  }, {
    path: "/ar/privcy-policy",
    component: _46e177c8,
    name: "privcy-policy___ar"
  }, {
    path: "/ar/register",
    component: _b3b69736,
    name: "register___ar"
  }, {
    path: "/ar/terms-condition",
    component: _43f2e6fa,
    name: "terms-condition___ar"
  }, {
    path: "/",
    component: _34789600,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
