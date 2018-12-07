/**
 * @function 深拷贝
 * @param {传入的对象} obj 
 */
export function deepClone(obj) {
    //判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
    var objClone = Array.isArray(obj) ? [] : {};
    //进行深拷贝的不能为空，并且是对象或者是
    if (obj && typeof obj === "object") {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] && typeof obj[key] === "object") {
                    objClone[key] = deepClone1(obj[key]);
                } else {
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}
/**
 * @function 格式化日期
 * @param {需要格式化的格式} fmt 
 * @param {需要被格式化的日期} date 
 */
export function dateFtt(fmt, date) { //author: meizz   
    var o = {
        "M+": date.getMonth() + 1, //月份   
        "d+": date.getDate(), //日   
        "H+": date.getHours(), //小时   
        "m+": date.getMinutes(), //分   
        "s+": date.getSeconds(), //秒   
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
        "S": date.getMilliseconds() //毫秒   
    };
    if (/(Y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
/**
 * @function 获取cookie
 * @param {要获取的cookie的key} cookieName 
 */
export function getCookie(cookieName) {
    const strCookie = document.cookie;
    const arrCookie = strCookie.split("; ");
    for (let i = 0; i < arrCookie.length; i++) {
        let arr = arrCookie[i].split("=");
        if (cookieName == arr[0]) {
            return arr[1];
        }
    }
    return "";
}

/**
 * @function 删除cookie
 * @param {需要删除的cookie的key} cookieName 
 */
export function deleteCookie(cookieName) {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1000);
    var cval = getCookie(cookieName);
    if (cval != null) document.cookie = cookieName + "=" + cval + ";expires=" + exp.toGMTString() + "; path=/";
}