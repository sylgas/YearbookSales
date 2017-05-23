import {all} from "redux-saga/effects";
import salesSaga from './salesSagas';

export default function* rootSaga() {
    yield all([
        salesSaga()
    ]);
}