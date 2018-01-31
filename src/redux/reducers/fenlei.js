import * as Types from "../action-types";
let initState= {
   data : {}
};
function fenlei(state=initState, action) {
    switch (action.type){
        case Types.SET_FENLEI_DATA :{
            return {data:action.payload}
        }
    }
    return state;
}
export default  fenlei