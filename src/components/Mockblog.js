import {SET_DATA_MOCKBLOG} from "../actions/mockblog";
const initialState = {
    data: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_DATA_MOCKBLOG:
            return {
                data: action.payload
            };
        default:
            return state.data || [];
    }
};