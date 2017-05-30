import initialState from "./initialState";
import {FETCH_DUPLICATES_SUCCESS, MERGE_DUPLICATES, MERGE_DUPLICATES_SUCCESS} from "../constants/actions";

const duplicatesReducer = (state = initialState.duplicates, action) => {
    switch (action.type) {
        case FETCH_DUPLICATES_SUCCESS:
            return action.payload.duplicates;
        case MERGE_DUPLICATES_SUCCESS:
            return state.map((duplicate) => {
                if (duplicate.id === action.payload.id) {
                    return Object.assign({}, duplicate, {data: [action.payload.mergedItem], isMerging: false});
                }
                return duplicate;
            });
        case MERGE_DUPLICATES:
            return state.map((duplicate) => {
                if (duplicate.id === action.payload.id) {
                    return Object.assign({}, duplicate, {isMerging: true});
                }
                return duplicate;
            })
    }
    return state;
};

export default duplicatesReducer;