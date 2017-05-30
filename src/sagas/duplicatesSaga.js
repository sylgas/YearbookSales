import {
    fetchDuplicatesError,
    fetchDuplicatesSuccess,
    ignoreDuplicatesError,
    ignoreDuplicatesSuccess,
    mergeDuplicatesError,
    mergeDuplicatesSuccess
} from "../actions/duplicatesEvents";
import {fetchDuplicates, ignoreDuplicates, mergeDuplicates} from "../api/duplicatesApi";
import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import {FETCH_DUPLICATES, IGNORE_DUPLICATES, MERGE_DUPLICATES} from "../constants/actions";
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

function* mergeDuplicatesSaga(action) {
    try {
        const {id, duplicatesIds, mergedItem} = action.payload;
        yield call(mergeDuplicates, duplicatesIds, mergedItem);
        yield put(mergeDuplicatesSuccess(id, mergedItem));
    } catch (e) {
        yield put(mergeDuplicatesError('Could not merge duplicates'));
    }
}

function* ignoreDuplicatesSaga(action) {
    try {
        const {id, duplicatesIds} = action.payload;
        yield call(ignoreDuplicates, duplicatesIds);
        yield put(ignoreDuplicatesSuccess(id));
    } catch (e) {
        yield put(ignoreDuplicatesError('Could not merge duplicates'));
    }
}

export default function* watchDuplicatesSaga() {
    yield* [
        takeLatest(FETCH_DUPLICATES, fetchDuplicatesSaga),
        takeEvery(MERGE_DUPLICATES, mergeDuplicatesSaga),
        takeEvery(IGNORE_DUPLICATES, ignoreDuplicatesSaga)
    ]
}