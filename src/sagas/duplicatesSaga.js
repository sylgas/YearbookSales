import * as duplicatesEvents from "../actions/duplicatesEvents";
import {fetchDuplicates, ignoreDuplicates, mergeDuplicates} from "../api/duplicatesApi";
import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import {FETCH_DUPLICATES, IGNORE_DUPLICATES, MERGE_DUPLICATES} from "../constants/actions";
import {enableDuplicatesLoader} from "../actions/loadersEvents";

export function* fetchDuplicatesSaga() {
    try {
        yield put(enableDuplicatesLoader(true));
        const response = yield call(fetchDuplicates);
        yield put(duplicatesEvents.fetchDuplicatesSuccess(response.duplicates));
        yield put(enableDuplicatesLoader(false));
    } catch (e) {
        yield put(duplicatesEvents.fetchDuplicatesError('Could not fetch duplicates'));
        yield put(enableDuplicatesLoader(false));
    }
}

export function* mergeDuplicatesSaga(action) {
    const {id, duplicatesIds, mergedItem} = action.payload;
    try {
        yield call(mergeDuplicates, duplicatesIds, mergedItem);
        yield put(duplicatesEvents.mergeDuplicatesSuccess(id, mergedItem));
    } catch (e) {
        yield put(duplicatesEvents.mergeDuplicatesError(id, 'Could not merge duplicates'));
    }
}

export function* ignoreDuplicatesSaga(action) {
    const {id, duplicatesIds} = action.payload;
    try {
        yield call(ignoreDuplicates, duplicatesIds);
        yield put(duplicatesEvents.ignoreDuplicatesSuccess(id));
    } catch (e) {
        yield put(duplicatesEvents.ignoreDuplicatesError(id, 'Could not ignore duplicates'));
    }
}

export default function* watchDuplicatesSaga() {
    yield* [
        takeLatest(FETCH_DUPLICATES, fetchDuplicatesSaga),
        takeEvery(MERGE_DUPLICATES, mergeDuplicatesSaga),
        takeEvery(IGNORE_DUPLICATES, ignoreDuplicatesSaga)
    ]
}