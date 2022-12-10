import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
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
      path: '/searchResults',
      name: 'searchResults',
      component: () => import('../views/SearchResults.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../views/SignUpView.vue')
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
