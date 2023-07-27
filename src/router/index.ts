import {createRouter, createWebHistory} from 'vue-router'
import {authGuard} from "@auth0/auth0-vue";
import MainLayout from "@/layouts/main-layout.vue";
import PreviewLayout from "@/layouts/preview-layout.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: 'links',
        },
        {
            path: '/links',
            name: 'links',
            meta: {layout: MainLayout},
            component: () => import('../views/Links.vue'),
            beforeEnter: authGuard
        },
        {
            path: '/preview',
            name: 'preview',
            meta: {layout: PreviewLayout},
            component: () => import('../views/Preview.vue'),
            beforeEnter: authGuard
        },
    ]
})

export default router
 