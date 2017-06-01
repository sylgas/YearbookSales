import initialState from "./initialState";
import * as actions from "../constants/actions";
import {filter, map} from "lodash";

const duplicatesReducer = (state = initialState.duplicates, action) => {
    switch (action.type) {
        case actions.FETCH_DUPLICATES_SUCCESS:
            return action.payload.duplicates;

        case actions.MERGE_DUPLICATES:
            return map(state, (duplicate) => duplicate.id === action.payload.id ?
                {...duplicate, isMerging: true} : duplicate);
        case actions.MERGE_DUPLICATES_SUCCESS:
            return map(state, (duplicate) => duplicate.id === action.payload.id ?
                {...duplicate, data: [action.payload.mergedItem], isMerging: false} : duplicate);
        case actions.MERGE_DUPLICATES_ERROR:
            return map(state, (duplicate) => duplicate.id === action.payload.id ?
                {...duplicate, isMerging: false} : duplicate);

        case actions.IGNORE_DUPLICATES:
            return map(state, (duplicate) => duplicate.id === action.payload.id ?
                {...duplicate, isIgnoring: true} : duplicate);
        case actions.IGNORE_DUPLICATES_SUCCESS:
            return filter(state, (duplicate) => duplicate.id !== action.payload.id);
        case actions.IGNORE_DUPLICATES_ERROR:
            return map(state, (duplicate) => duplicate.id === action.payload.id ?
                {...duplicate, isIgnoring: false} : duplicate);
    }
    return state;
};

export default duplicatesReducer;