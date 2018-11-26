import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loadingStatus: false,
    },
    getters: {
        loading(state) {
            return state.loadingStatus;
        }
    },
    mutations: {
        SHOWLOADING(state) {
            state.loadingStatus = true;
        },
        HIDELOADING(state) {
            state.loadingStatus = false;
        },
    },
    actions: {

    }
})