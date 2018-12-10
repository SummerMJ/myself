import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/reset.scss";
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import * as filters from './libs/filters';
import { Loading } from "element-ui"
Vue.use(Loading.directive);


Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')