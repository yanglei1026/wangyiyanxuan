import * as Types from "../action-types";

let initState = {
    data:{}
};

function home(state = initState, action) {
    switch (action.type) {
        case Types.SET_HOME_DATA: {
            return {data:action.payload.data}
        }
    }
    return state;
}

export default home;