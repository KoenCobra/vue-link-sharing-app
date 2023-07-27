import {createRouter, createWebHistory} from 'vue-router'
import App from "@/App.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: 'links'
        },
        {
            path: '/links',
            name: 'links',
            component: () => import('../views/Links.vue')
        },
    ]
})

export default router
 