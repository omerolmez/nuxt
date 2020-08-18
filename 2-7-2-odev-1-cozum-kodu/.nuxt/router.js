import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bdb95532 = () => interopDefault(import('../pages/products.vue' /* webpackChunkName: "pages/products" */))
const _6e041aac = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _870a53f4 = () => interopDefault(import('../pages/products/_productId/index.vue' /* webpackChunkName: "pages/products/_productId/index" */))
const _4aa916f4 = () => interopDefault(import('../pages/products/_productId/edit.vue' /* webpackChunkName: "pages/products/_productId/edit" */))
const _1356aedf = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/products",
    component: _bdb95532,
    children: [{
      path: "",
      component: _6e041aac,
      name: "products"
    }, {
      path: ":productId",
      component: _870a53f4,
      name: "products-productId"
    }, {
      path: ":productId/edit",
      component: _4aa916f4,
      name: "products-productId-edit"
    }]
  }, {
    path: "/",
    component: _1356aedf,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
