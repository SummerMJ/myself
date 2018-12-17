// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/css/base.css'
import store from './vuex/store'
import './components/componentsRegister'
import axios from 'axios'
import 'iview/dist/styles/iview.css';

Vue.prototype.$axios = axios
// Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
