import  * as Types from "../action-types"
import {homeContent,getSliders} from "../../api/home";
let actions = {
    add:(count)=>{
        return {type:Types.ADD, count }
    },
    getHomeData(category){
        return (dispatch, getState)=>{
            dispatch({type:Types.SET_HOME_DATA, payload:homeContent(category)})
        }
    }
};
export default actions;