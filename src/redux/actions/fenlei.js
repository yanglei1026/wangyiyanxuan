import {getData} from "../../api/fenlei";
import {CHANGETYPE} from "../action-types";
let actions = {
    tochangdata:(newval)=>{
        return (dispatch,getStates)=>{
            getData(newval).then((res)=>{
                dispatch({type:CHANGETYPE, payload:res.data})
            });
        }
    }
};
export default actions;