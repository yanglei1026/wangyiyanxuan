import  * as Types from "../action-types"
let actions = {
    add:(count)=>{
        return {type:Types.ADD, count }
    }
};
export default actions;