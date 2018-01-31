import * as Types from "../action-types";
import {getData} from "../../api/fenlei";

let actions = {
    getFenlei(type) {
        return (dispatch, getState) => {
            dispatch({type: Types.SET_FENLEI_DATA, payload: getData(type)})
        }
    }
}

export default actions