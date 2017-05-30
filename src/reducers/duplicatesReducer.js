import initialState from "./initialState";
import {FETCH_DUPLICATES_SUCCESS, MERGE_DUPLICATES_SUCCESS} from "../constants/actions";
import _ from "lodash";
import {getDuplicatesIds} from "../utils/duplicates";

const duplicatesReducer = (state = initialState.duplicates, action) => {
    switch (action.type) {
        case FETCH_DUPLICATES_SUCCESS:
            return action.payload.duplicates;
        case MERGE_DUPLICATES_SUCCESS:
            return state.filter((duplicatesSet) => !_.includes(getDuplicatesIds(duplicatesSet), action.payload.id));
    }
    return state;
};

export default duplicatesReducer;