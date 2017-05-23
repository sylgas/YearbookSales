import initialState from "./initialState";
import {FETCH_DEADLINES_SUCCESS} from "../constants/actions";

export default function deadlineReducer(state = initialState.deadlines, action) {
    if (action.type === FETCH_DEADLINES_SUCCESS) {
        return Object.assign({}, state, action.payload.deadlines);
    }
    return state;
}