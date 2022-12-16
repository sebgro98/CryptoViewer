import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: '/home',
      name: 'home',
      component: () => import('../presenters/cryptoPresenter.vue')
    },

    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../presenters/cryptoSearchPresenter.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfileView.vue')
    },

    {
      path: '/findUsers',
      name: 'CryptoSearchFormView',
      component: () => import('../presenters/UserPresenter.vue')
    },
    {
      path: '/details',
      name: 'coinDetails',
      component: () => import('../views/coinDetailsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../presenters/logInPresenter.vue')
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../presenters/signUpPresenter.vue')
    },

    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ShowCrypto.vue')
    },
  ]
})

export default router