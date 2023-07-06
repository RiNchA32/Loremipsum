import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Page from '../components/Page/Page.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Page,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

// eslint-disable-next-line no-restricted-syntax
export default router
