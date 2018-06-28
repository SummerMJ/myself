import config from "../../../myself/src/fetch/api";

export default {
    //登录
    login (param) {
        return config.config.post('/api/login', param);
    },
    //登出
    signOut () {
        return config.config.get('/api/signOut')
    }
}