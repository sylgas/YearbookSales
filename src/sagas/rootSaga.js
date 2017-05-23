import {all} from "redux-saga/effects";
import salesSaga from "./salesSagas";
import deadlinesSaga from "./deadlinesSaga";

export default function* rootSaga() {
    yield all([
        salesSaga(),
        deadlinesSaga()
    ]);
}