import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history:  createWebHistory(
    import.meta.env.MODE === 'production' ? '/main1/' : '/'
  ),
  routes: [
    {
      path: '/',
      redirect: '/subapp1'
    },
    {
      path: '/subapp2',
      name: 'subapp2',
      meta: {},
    }
  ]
})

export default router

