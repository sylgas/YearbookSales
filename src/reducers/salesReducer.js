import initialState from "./initialState";
import {FETCH_SALES_SUCCESS} from "../constants/actions";

export default function salesReducer(state=initialState.sales, action) {
    if (action.type === FETCH_SALES_SUCCESS) {
        return Object.assign({}, state, action.payload.sales);
    }
    return state;
}