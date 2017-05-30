import {
    fetchDuplicatesError,
    fetchDuplicatesSuccess,
    mergeDuplicatesError,
    mergeDuplicatesSuccess
} from "../actions/duplicatesEvents";
import {fetchDuplicates, mergeDuplicates} from "../api/duplicatesApi";
import {call, put, takeLatest} from "redux-saga/effects";
import {FETCH_DUPLICATES, MERGE_DUPLICATES} from "../constants/actions";
import {enableDuplicatesLoader} from "../actions/loadersEvents";
import {buildMergedItem, getDuplicatesIds} from "../utils/duplicates";

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
        const {duplicates, selectedFields} = action.payload;
        const mergedItem = buildMergedItem(duplicates, selectedFields);
        yield call(mergeDuplicates, getDuplicatesIds(duplicates), mergedItem);
        yield put(mergeDuplicatesSuccess(mergedItem.studentId));
    } catch (e) {
        yield put(mergeDuplicatesError('Could not merge duplicates'));
    }
}

export default function* watchDuplicatesSaga() {
    yield* [
        takeLatest(FETCH_DUPLICATES, fetchDuplicatesSaga),
        takeLatest(MERGE_DUPLICATES, mergeDuplicatesSaga)
    ]
}