import initialState from "./initialState";
import {FETCH_DUPLICATES_SUCCESS} from "../constants/actions";

const duplicatesReducer = (state = initialState.duplicates, action) => {
    if (action.type === FETCH_DUPLICATES_SUCCESS) {
        return action.payload.duplicates;
    }
    return state;
};

export default duplicatesReducer;