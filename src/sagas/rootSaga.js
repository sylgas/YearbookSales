import {all} from "redux-saga/effects";
import salesSaga from "./salesSagas";
import deadlinesSaga from "./deadlinesSaga";
import duplicatesSaga from "./duplicatesSaga";

export default function* rootSaga() {
    yield all([
        salesSaga(),
        deadlinesSaga(),
        duplicatesSaga()
    ]);
}