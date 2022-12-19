import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/login" },
    {
      path: '/home',
      name: 'home',
      component: () => import('../presenters/cryptoPresenter.vue')
    },

    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../presenters/profilePresenter.vue')
    },

    {
      path: '/loggedinProfile',
      name: 'loggedinProfile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../presenters/loggedinProfilePresenter.vue')
    },

    {
      path: '/findUsers',
      name: 'CryptoSearchFormView',
      component: () => import('../presenters/userSearchPresenter.vue')
    },
    {
      path: '/details',
      name: 'coinDetails',
      component: () => import('../presenters/coinDetailsPresenter.vue')
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
  ]
})

export default router