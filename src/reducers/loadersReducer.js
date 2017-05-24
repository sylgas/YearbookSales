import {ENABLE_SALES_LOADER} from "../constants/actions";
import initialState from "./initialState";

export default (state = initialState.loaders, action) => {
    if (action.type === ENABLE_SALES_LOADER) {
        return Object.assign({}, state, {sales: action.payload.enabled})
    }
    return state;
};