import Vue from 'vue'
import store from '../vuex/store'
import Router from 'vue-router'
import login from '@/pages/login'
import Home from '@/pages/Home'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/login',
            name: 'login',
            component: login
        }
    ]
});
// debugger
router.beforeEach((to, from, next) => {  
    console.log(store.state.user)  
    if (localStorage.getItem('loginStatus') || to.path == "/login") {
        next();
    } else {
        next({ path: '/login' });
    }
})
export default router