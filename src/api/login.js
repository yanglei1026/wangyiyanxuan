import axios from "./index";

export function toReg(username, password) {
    return axios.post("/register",{username,password});
}

// 登录接口
export function toLogin(username,password) {
    return axios.post("/login",{username, password});
}

// 校验 是否登录过
export function toValidate() {
    return axios.get("/validate");
};
