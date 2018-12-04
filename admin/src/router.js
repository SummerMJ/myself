import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import * as utils from "@/libs/utils"

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        redirect: 'cesium'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./views/Login.vue')
    },
    {
        path: "/cesium",
        name: "Cesium",
        component: () => import('./views/Cesium.vue')
    },
    {
        path: "/home",
        name: "Home",
        component: () => import("./views/Home.vue"),
        children: [{
            path: "dashboard",
            name: "Dashboard",
            component: () => import("./views/Dashboard.vue")
        },
        {
            path: "user",
            name: "User",
            component: () => import("./views/User.vue")
        }, {
            path: "artical",
            name: "Artical",
            component: () => import('./views/ArticalManager.vue')
        }]
    }]
})

router.beforeEach((to, from, next) => {

    const session = utils.getCookie("ticket");
    console.log(session);
    if (to.path == "/login") {
        next();
        return;
    }
    if (!session) {
        next({path: "/login"});
    } else {
        next();
    }
    // next();
})

export default router;
