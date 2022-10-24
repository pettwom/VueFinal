import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import InitHomeView from '../views/InitHomeView.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'inicio',
        component: InitHomeView
    },
    {
        path: '/areaTrabajo',
        name: 'areaTrabajo',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "areaTrabajo" */ '../views/AreaView.vue')
    },
    {
        path: '/activo',
        name: 'activo',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "activo" */ '../views/ActivoView.vue')
    },
    {
        path: '/activo/:id/editar',
        name: 'editarActivo',
        component: () => import(/* webpackChunkName: "editarActivo" */ '../views/editarActivoView.vue')
    },
    {
        path: '/activo/adicionar',
        name: 'adicionarActivo',
        component: () => import(/* webpackChunkName: "adicionarActivo" */ '../views/adicionarActivoView.vue')
    },
    {
        path: '/area/:id/editar',
        name: 'editarArea',
        component: () => import(/* webpackChunkName: "editarArea" */ '../views/editarAreaView.vue')
    },
    {
        path: '/area/adicionar',
        name: 'adicionarArea',
        component: () => import(/* webpackChunkName: "adicionarArea" */ '../views/adicionarAreaView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
