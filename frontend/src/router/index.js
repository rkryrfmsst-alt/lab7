import { createRouter, createWebHistory } from 'vue-router'

import LastNews from '@/views/LastNews.vue'
import MostViewed from '@/views/MostViewed.vue'

const routes = [
    {
        path: '/',
        component: LastNews
    },
    {
        path: '/most-viewed',
        component: MostViewed
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router