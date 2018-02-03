import axios from "./index";

export function toRegister(username, password) {
    return axios.post("/register", {username,password})
}