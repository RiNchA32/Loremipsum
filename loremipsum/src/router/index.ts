import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Page from '../components/Page/Page.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'business',
        component: Page,
    },
    {
        path: '/about',
        name: 'about',
        component: Page,
    }, {
        path: '/prices',
        name: 'prices',
        component: Page,
    }, {
        path: '/checkout',
        name: 'checkout',
        component: Page,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

// eslint-disable-next-line no-restricted-syntax
export default router
