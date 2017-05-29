import {fetchDuplicatesError, fetchDuplicatesSuccess} from "../actions/duplicatesEvents";
import {fetchDuplicates} from "../api/duplicatesApi";
import {call, put, takeLatest} from "redux-saga/effects";
import {FETCH_DUPLICATES} from "../constants/actions";
import {enableDuplicatesLoader} from "../actions/loadersEvents";

function* fetchDuplicatesSaga() {
    try {
        const response = yield call(fetchDuplicates);
        yield put(fetchDuplicatesSuccess(response.duplicates));
        yield put(enableDuplicatesLoader(false));
    } catch (e) {
        yield put(fetchDuplicatesError('Could not fetch duplicates'));
        yield put(enableDuplicatesLoader(false));
    }
}

export default function* watchDuplicatesSaga() {
    yield* [
        takeLatest(FETCH_DUPLICATES, fetchDuplicatesSaga)
    ]
}