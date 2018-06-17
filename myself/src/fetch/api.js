import axios from "axios";
import  qs from "qs";
require('es6-promise').polyfill();

//axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


function ajax(type, url, options) {
    return new Promise((resolve, reject) => {
        axios({
            method: type, 
            url: url,
            params: options,
            data: qs.stringify(options)
        })
        .then(_res => {
            if (200 === _res.status) {
                resolve(_res.data);
            } else {
                reject("request error in" + url);
            }
        })
        .catch((err) => {
            reject(err);
        })
    })
}

const config = {
    get(url, options) {
        return new Promise((resolve, reject) => {
            ajax("GET", url, options).then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            })
        })
    },
    post(url, options) {
        return new Promise((resolve, reject) => {
            ajax("POST", url, options).then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            })
        })
    }
}

export default {
    //获取文章列表
    getArtical (param) {
        return config.get('/api/getArtical', param);
    }
}