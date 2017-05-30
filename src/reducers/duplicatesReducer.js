import initialState from "./initialState";
import {
    FETCH_DUPLICATES_SUCCESS,
    IGNORE_DUPLICATES,
    IGNORE_DUPLICATES_SUCCESS,
    MERGE_DUPLICATES,
    MERGE_DUPLICATES_SUCCESS
} from "../constants/actions";

const duplicatesReducer = (state = initialState.duplicates, action) => {
    switch (action.type) {
        case FETCH_DUPLICATES_SUCCESS:
            return action.payload.duplicates;
        case MERGE_DUPLICATES_SUCCESS:
            return state.map((duplicate) => {
                if (duplicate.id === action.payload.id) {
                    return Object.assign({}, duplicate, {data: [action.payload.mergedItem], isLoading: false});
                }
                return duplicate;
            });
        case MERGE_DUPLICATES:
        case IGNORE_DUPLICATES:
            return state.map((duplicate) => {
                if (duplicate.id === action.payload.id) {
                    return Object.assign({}, duplicate, {isLoading: true});
                }
                return duplicate;
            });
        case IGNORE_DUPLICATES_SUCCESS:
            return state.filter((duplicate) => duplicate.id !== action.payload.id);
    }
    return state;
};

export default duplicatesReducer;