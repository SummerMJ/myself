import axios from "axios";
import qs from "qs"
import store from "../store"
import { Message } from "element-ui"
// import { resolve } from "dns";


let cancel, promiseArr = {};

axios.defaults.timeout = 5000; //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; //配置请求头
axios.defaults.baseURL = "http://192.168.0.101:8086/"; //配置接口地址
// axios.defaults.baseURL = process.env.VUE_APP_API + "/api";   //配置接口地址

//axios拦截
axios.interceptors.request.use(config => {
    //发送请求的时候,取消相同的请求
    if (promiseArr[config.url]) promiseArr[config.url]("取消请求");
    promiseArr[config.url] = cancel;

    if (config.method == "post") config.data = qs.stringify(config.data);
    // store.commit("SHOWLOADING");
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    if (response && response.data.code == 200) {
        // store.commit("HIDELOADING");
        return response;
    } else if (response) {
        console.log(response)
        Message({
            message: response.msg,
            type: 'warning'
        });
        // store.commit("HIDELOADING");
        return response;
    }

}, error => {
    store.commit("HIDELOADING");
    let text = "服务器错误,请稍后重试...";
    if (error.response) {
        switch (error.response.status) {
            case "500":
                text = "服务器错误,请稍后重试...";
                break;
            case "400":
                text = "请求未响应,请重试....";
                break;
            case "404":
                text = "资源找不到,请重试....";
                break;
            default:
                text = "服务器错误,请稍后重试...";
                break;
        }
    }
    Message.error(text);
    return Promise.reject(error)
});

export function post(url, param) {
    return new Promise((resolve, reject) => {
        axios.post(url, param)
            .then(res => {
                resolve(res.data);
            }, err => {
                reject(err);
            })
            .catch(err => {
                reject(err);
            })
    })
}

export function get(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: param })
            .then(res => {
                resolve(res.data);
            }, err => {
                reject(err);
            })
            .catch(error => {
                reject(error);
            })
    })
}

export default {
    get(url, params) {
        return get(url, params);
    },
    post(url, param) {
        return post(url, param)
    }
}