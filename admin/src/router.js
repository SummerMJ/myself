import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: "/cesium",
            name: "Cesium",
            component: () => import('./views/Cesium.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/user',
            name: 'user',
            component: () => import( /* webpackChunkName: "about" */ './views/User.vue')
        },
    ]
})