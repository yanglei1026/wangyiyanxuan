import * as Types from '../action-types';
function choose(state={},action){

        switch (action.type){
            case Types.CHOOSE:
                return {...action.size}
        }
        return state;
}
export default choose