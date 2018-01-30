import axios from "./index"

// 获取轮播图


// 每个接口的返回值 都是 promise
export function getSliders() {
    return axios.get("/sliders")
}
