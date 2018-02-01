import * as Types from "../action-types";

let initState = {
    num: 0,
    type:"tuijian",
    data:{}
};

function home(state = initState, action) {
    switch (action.type) {
        case Types.ADD: {
            return {...state,num: action.count}
        }
        case Types.SET_HOME_DATA: {
            return {...state,data:action.payload}
        }
    }
    return state;
}

export default home;