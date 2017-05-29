import {ENABLE_DUPLICATES_LOADER, ENABLE_SALES_LOADER} from "../constants/actions";
import initialState from "./initialState";

export default (state = initialState.loaders, action) => {
    switch (action.type) {
        case ENABLE_SALES_LOADER:
            return Object.assign({}, state, {sales: action.payload.enabled});
        case ENABLE_DUPLICATES_LOADER:
            return Object.assign({}, state, {duplicates: action.payload.enabled});
    }
    return state;
};