import {combineReducers} from "redux";
import salesReducer from "./salesReducer";
import loadersReducer from "./loadersReducer";
import deadlinesReducer from "./deadlinesReducer";
import duplicatesReducer from "./duplicatesReducer";

const rootReducer = combineReducers({
    sales: salesReducer,
    loaders: loadersReducer,
    deadlines: deadlinesReducer,
    duplicates: duplicatesReducer
});

export default rootReducer;