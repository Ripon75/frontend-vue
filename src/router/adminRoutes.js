import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/admin',
    name: 'admin',
    meta: {
      layout: 'admin',
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
