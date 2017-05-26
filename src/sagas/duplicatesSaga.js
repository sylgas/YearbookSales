import {fetchDuplicatesError, fetchDuplicatesSuccess} from "../actions/duplicatesEvents";
import {fetchDuplicates} from "../api/duplicatesApi";
import {call, put, takeLatest} from "redux-saga/effects";
import {FETCH_DUPLICATES} from "../constants/actions";

function* fetchDuplicatesSaga() {
    try {
        const response = yield call(fetchDuplicates);
        yield put(fetchDuplicatesSuccess(response.duplicates));
    } catch (e) {
        yield put(fetchDuplicatesError('Could not fetch duplicates'));
    }
}

export default function* watchDuplicatesSaga() {
    yield* [
        takeLatest(FETCH_DUPLICATES, fetchDuplicatesSaga)
    ]
}