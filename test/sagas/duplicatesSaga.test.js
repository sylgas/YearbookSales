import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import {FETCH_DUPLICATES, IGNORE_DUPLICATES, MERGE_DUPLICATES} from "../../src/constants/actions";
import watchDuplicatesSaga, {
    fetchDuplicatesSaga,
    ignoreDuplicatesSaga,
    mergeDuplicatesSaga
} from "../../src/sagas/duplicatesSaga";
import {fetchDuplicates, ignoreDuplicates, mergeDuplicates} from "../../src/api/duplicatesApi";
import {
    fetchDuplicatesError,
    fetchDuplicatesSuccess,
    ignoreDuplicatesError,
    ignoreDuplicatesSuccess,
    mergeDuplicatesError,
    mergeDuplicatesSuccess
} from "../../src/actions/duplicatesEvents";
import {enableDuplicatesLoader} from "../../src/actions/loadersEvents";

describe('SAGA duplicatesSaga.js', () => {
    describe('fetchDuplicatesSaga', () => {
        const response = {
            duplicates: ['duplicates1']
        };

        const fetchDeadlinesGenerator = fetchDuplicatesSaga();
        it('fetchDuplicatesSaga should call API', () => {
            expect(fetchDeadlinesGenerator.next().value).toEqual(call(fetchDuplicates));
        });
        it('fetchDuplicatesSaga should dispatch FETCH_DUPLICATES_SUCCESS', () => {
            expect(fetchDeadlinesGenerator.next(response).value).toEqual(put(fetchDuplicatesSuccess(response.duplicates)));
        });
        it('fetchDuplicatesSaga should dispatch ENABLE_DUPLICATES_LOADER with false value', () => {
            expect(fetchDeadlinesGenerator.next(response).value).toEqual(put(enableDuplicatesLoader(false)));
        });
        it('fetchDuplicatesSaga should dispatch FETCH_DUPLICATES_ERROR on error', () => {
            expect(fetchDeadlinesGenerator.throw('error').value).toEqual(put(fetchDuplicatesError('Could not fetch duplicates')));
        });
        it('fetchDuplicatesSaga should dispatch ENABLE_DUPLICATES_LOADER with false value', () => {
            expect(fetchDeadlinesGenerator.next(response).value).toEqual(put(enableDuplicatesLoader(false)));
        });
    });

    describe('mergeDuplicatesSaga', () => {
        const action = {
            payload: {
                id: 'id',
                duplicatesIds: ['id1', 'id2'],
                mergedItem: 'mergedItem'
            }
        };

        const mergeDuplicatesGenerator = mergeDuplicatesSaga(action);
        it('mergeDuplicatesSaga should call API', () => {
            expect(mergeDuplicatesGenerator.next().value).toEqual(call(mergeDuplicates, action.payload.duplicatesIds,
                action.payload.mergedItem));
        });
        it('mergeDuplicatesSaga should dispatch MERGE_DUPLICATES_SUCCESS', () => {
            expect(mergeDuplicatesGenerator.next({}).value).toEqual(put(mergeDuplicatesSuccess(action.payload.id,
                action.payload.mergedItem)));
        });
        it('mergeDuplicatesSaga should dispatch FETCH_DUPLICATES_ERROR on error', () => {
            expect(mergeDuplicatesGenerator.throw('error').value).toEqual(put(mergeDuplicatesError('Could not merge duplicates')));
        });
    });

    describe('ignoreDuplicatesSaga', () => {
        const action = {
            payload: {
                id: 'id',
                duplicatesIds: ['id1', 'id2'],
            }
        };

        const ignoreDuplicatesSagaGenerator = ignoreDuplicatesSaga(action);
        it('ignoreDuplicatesSaga should call API', () => {
            expect(ignoreDuplicatesSagaGenerator.next().value).toEqual(call(ignoreDuplicates, action.payload.duplicatesIds));
        });
        it('ignoreDuplicatesSaga should dispatch MERGE_DUPLICATES_SUCCESS', () => {
            expect(ignoreDuplicatesSagaGenerator.next({}).value).toEqual(put(ignoreDuplicatesSuccess(action.payload.id)));
        });
        it('ignoreDuplicatesSaga should dispatch FETCH_DUPLICATES_ERROR on error', () => {
            expect(ignoreDuplicatesSagaGenerator.throw('error').value).toEqual(put(ignoreDuplicatesError('Could not ignore duplicates')));
        });
    });

    describe('watchDuplicatesSaga', () => {
        const watchDeadlinesSagaGenerator = watchDuplicatesSaga();
        it('watchDeadlinesSagaGenerator should take latest of FETCH_DEADLINES', () => {
            expect(watchDeadlinesSagaGenerator.next().value).toEqual(takeLatest(FETCH_DUPLICATES, fetchDuplicatesSaga));
        });
        it('watchDeadlinesSagaGenerator should take every MERGE_DUPLICATES', () => {
            expect(watchDeadlinesSagaGenerator.next().value).toEqual(takeEvery(MERGE_DUPLICATES, mergeDuplicatesSaga));
        });
        it('watchDeadlinesSagaGenerator should take every IGNORE_DUPLICATES', () => {
            expect(watchDeadlinesSagaGenerator.next().value).toEqual(takeEvery(IGNORE_DUPLICATES, ignoreDuplicatesSaga));
        });
    });
});