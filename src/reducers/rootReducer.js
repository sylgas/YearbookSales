import {combineReducers} from "redux";
import salesReducer from "./salesReducer";
import loadersReducer from "./loadersReducer";

const rootReducer = combineReducers({
    sales: salesReducer,
    loaders: loadersReducer
});

export default rootReducer;