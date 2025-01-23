import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePagePage from '@/pages/HomePage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePagePage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
