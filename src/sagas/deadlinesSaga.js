import {call, put, takeLatest} from "redux-saga/effects";
import {FETCH_DEADLINES} from "../constants/actions";
import {fetchDeadlines} from "../api/deadlinesApi";
import {fetchDeadlinesError, fetchDeadlinesSuccess} from "../actions/deadlinesEvents";

function* fetchDeadlinesSaga() {
    try {
        const response = yield call(fetchDeadlines);
        yield put(fetchDeadlinesSuccess(response.deadlines));
    } catch (e) {
        yield put(fetchDeadlinesError(e));
    }
}

export default function* watchDeadlinesSaga() {
    yield* [
        takeLatest(FETCH_DEADLINES, fetchDeadlinesSaga)
    ];
}