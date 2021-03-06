import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loadingStatus: false,
        userInfo: {}
    },
    getters: {
        loading(state) {
            return state.loadingStatus;
        },
        userInfo (state) {
            return state.userInfo;
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