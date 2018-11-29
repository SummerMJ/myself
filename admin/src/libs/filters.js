const role = function changeRole(role) {
    let res = "";
    switch (role) {
        case 1: res = "管理员";break;
        case 2: res = "用户";break;
        default: res = "用户";break;
    }
    return res;
}

export {
    role
}