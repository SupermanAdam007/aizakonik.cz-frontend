// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/cookiepolicy',
        name: 'CookiePolicy',
        component: () => import(/* webpackChunkName: "cookiepolicy" */ '@/views/CookiePolicy.vue'),
      },
      {
        path: '/odpoved',
        name: 'Answer',
        component: () => import(/* webpackChunkName: "answer" */ '@/views/Answer.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
