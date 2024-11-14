import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
router.beforeEach((to, from, next) => {
    if (!window.history.state.current) window.history.state.current = to.fullPath
    if (!window.history.state.back) window.history.state.back = from.fullPath
    return next()
  })

app.use(router)
app.mount('#app')
