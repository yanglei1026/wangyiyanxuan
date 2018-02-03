import * as Types from "../action-types";

function fenlei( state ={val:{
    top_img:'',
    title_name:'',
    product_list:[]
}}, action) {
    switch (action.type){
        case Types.CHANGETYPE: {
            return {val:action.payload}
        }
    }
    return state;
}
export default fenlei;