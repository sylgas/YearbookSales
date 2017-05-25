import {combineReducers} from "redux";
import salesReducer from "./salesReducer";
import loadersReducer from "./loadersReducer";
import deadlinesReducer from "./deadlinesReducer";

const rootReducer = combineReducers({
    sales: salesReducer,
    loaders: loadersReducer,
    deadlines: deadlinesReducer
});

export default rootReducer;