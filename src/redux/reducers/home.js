import * as Types from "../action-types";
let initState= {num:0}

function home( state =initState, action) {
    switch (action.type){
        case Types.ADD: {
            return {num:action.count}
        }
    }
    return state;
}
export default home;