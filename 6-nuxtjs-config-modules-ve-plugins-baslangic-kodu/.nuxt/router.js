import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _41c80c16 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _0e56af9a = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _2c43f184 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _547160ce = () => interopDefault(import('../pages/admin/new-post.vue' /* webpackChunkName: "pages/admin/new-post" */))
const _3b7d297e = () => interopDefault(import('../pages/admin/_postId/index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _46c64ac5 = () => interopDefault(import('../pages/posts/_postId/index.vue' /* webpackChunkName: "pages/posts/_postId/index" */))
const _6ab89bd6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/admin",
    component: _41c80c16,
    name: "admin"
  }, {
    path: "/posts",
    component: _0e56af9a,
    name: "posts"
  }, {
    path: "/test",
    component: _2c43f184,
    name: "test"
  }, {
    path: "/admin/new-post",
    component: _547160ce,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _3b7d297e,
    name: "admin-postId"
  }, {
    path: "/posts/:postId",
    component: _46c64ac5,
    name: "posts-postId"
  }, {
    path: "/",
    component: _6ab89bd6,
    name: "index"
  }, {
    path: "/custom-route",
    component: _2c43f184
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
