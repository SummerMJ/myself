import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import resume from './modules/resume'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        resume
    }
})