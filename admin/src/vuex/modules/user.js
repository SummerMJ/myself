import api from "../../../../myself/src/fetch/api";
import * as types from "../type"
import { type } from "os";


const state = {
    //用户登录状态
    loginStatus: JSON.parse(localStorage.getItem('loginStatus')) || false,
    //用户登录信息
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    //用户数据信息
    userData: []
};

const actions = {
    /**
     * 用户登录
     */
    setUserInfo({commit}, res) {
        localStorage.setItem('userInfo', JSON.stringify(res));
        localStorage.setItem('loginStatus', true);
        commit(types.SET_USER_INFO, res);
        commit(types.SET_LOGIN_STATUS, true);
    },
    
    /**
     * 退出登录
     */
    setSignOut({commit}, res) {
        localStorage.setItem('userInfo', {});
        localStorage.setItem('loginStatus', false);
        commit(types.SET_USER_INFO, {});
        commit(types.SET_LOGIN_STATUS, false);
    }
};

const getter = {
    getUserData: state => state.userData,
    loginStatus: state => state.loginStatus,
    userInfo: state => state.userInfo
};

const mutations = {
    [types.SET_LOGIN_STATUS] (state, res) {
        state.loginStatus = res;
    },
    [types.SET_USER_INFO] (state, res) {
        state.userInfo = res;
    },
    [types.GET_USER_DATA] (state, res) {
        state.userData = res;
    }
};

export default {
    state,
    actions,
    getter,
    mutations
}