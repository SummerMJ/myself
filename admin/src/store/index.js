import Vue from 'vue'
import Vuex from 'vuex'
import * as type from "@/store/types"

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
        userInfo(state) {
            if (!state.userInfo) {
                return JSON.parse(localStorage.getItem("userInfo"));
            }
            return state.userInfo;
        }
    },
    actions: {},
    mutations: {
        SHOWLOADING(state) {
            state.loadingStatus = true;
        },
        HIDELOADING(state) {
            state.loadingStatus = false;
        },
        [type.SETUSERINFO](state, playload) {            
            state.userInfo = playload;
            localStorage.setItem("userInfo", JSON.stringify(playload));
        }
    }
})