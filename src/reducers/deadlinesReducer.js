import initialState from "./initialState";
import {FETCH_DEADLINES_SUCCESS} from "../constants/actions";

export default function deadlineReducer(state = initialState.deadlines, action) {
    if (action.type === FETCH_DEADLINES_SUCCESS) {
        const ordered = action.payload.deadlines;
        return Object.assign({}, state, {ordered});
    }
    return state;
}