import initialState from "./initialState";
import * as actions from "../constants/actions";
import {filter, map} from "lodash";

const duplicatesReducer = (state = initialState.duplicates, action) => {
    switch (action.type) {
        case actions.FETCH_DUPLICATES_SUCCESS:
            return action.payload.duplicates;
        case actions.MERGE_DUPLICATES:
            return map(state, (duplicate) => {
                if (duplicate.id === action.payload.id) {
                    return Object.assign({}, duplicate, {isMerging: true});
                }
                return duplicate;
            });
        case actions.MERGE_DUPLICATES_SUCCESS:
            return map(state, (duplicate) => {
                if (duplicate.id === action.payload.id) {
                    return Object.assign({}, duplicate, {data: [action.payload.mergedItem], isMerging: false});
                }
                return duplicate;
            });
        case actions.IGNORE_DUPLICATES:
            return map(state, (duplicate) => {
                if (duplicate.id === action.payload.id) {
                    return Object.assign({}, duplicate, {isIgnoring: true});
                }
                return duplicate;
            });
        case actions.IGNORE_DUPLICATES_SUCCESS:
            return filter(state, (duplicate) => duplicate.id !== action.payload.id);
    }
    return state;
};

export default duplicatesReducer;