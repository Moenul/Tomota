import { createMemoryHistory, createRouter } from 'vue-router'
import vueHome from '../views/vueHome.vue'
import vueDashboard from '../views/Dashboard/vueDashboard.vue'


const routes = [
    {
        path: '/',
        name: "Home",
        component: vueHome
    },
    {
        path: '/dashboard',
        name: "Dashboard",
        component: vueDashboard
    },
]

const router =  createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;