import axios from "./index";

export  function  getData(category) {
    return axios.get(`/fenlei/${category}`)
}
