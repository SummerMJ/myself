import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import * as utils from "@/libs/utils"
import store from "./store/index"
Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: 'login'
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('./views/Login.vue')
        },
        // {
        //     path: "/cesium",
        //     name: "Cesium",
        //     component: () => import('./views/Cesium.vue')
        // },
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
            }, {
                path: "message",
                name: "Message",
                component: () => import('./views/Message.vue')
            }]
        }
    ]
})

router.beforeEach((to, from, next) => {

    const session = utils.getCookie("ticket");
    console.log(session);
    const path = to.path;
    if (to.path == "/login") {        
        if (session) {
            router.push("/home/dashboard");
        } else {
            next();
        }    
        return;              
    }
    if (session) {        
        console.log(session)
        store.commit("setUserInfo", JSON.parse(localStorage.getItem("userInfo")));
        if (path === "/") {
            next({path: "/home/dashboard"});
        } else {
            next();
        }        
    } else {
        next({path: "/login"});
    }
    // next();
})

export default router;