// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/css/base.css'
import store from './vuex/store'
import './components/componentsRegister'
import 'iview/dist/styles/iview.css';
import { axios } from "./fetch/api"
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'highlight.js/styles/rainbow.css' //样式文件

// Vue.use(iView);
 window.onkeydown = function () {
  if (event.keyCode == 13) console.log(1231231)
}


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
