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
import hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css' //样式文件
Vue.use(Loading.directive);
Vue.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');
    setTimeout(() =>{
        blocks.forEach((block)=>{
        hljs.highlightBlock(block)
        })
    }, 200)
})

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')