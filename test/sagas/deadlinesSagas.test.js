import {fetchDeadlinesError, fetchDeadlinesSuccess} from "../../src/actions/deadlinesEvents";
import watchDeadlinesSaga, {fetchDeadlinesSaga} from "../../src/sagas/deadlinesSaga";
import {fetchDeadlines} from "../../src/api/deadlinesApi";
import {call, put, takeLatest} from "redux-saga/effects";
import {FETCH_DEADLINES} from "../../src/constants/actions";

describe('SAGA deadlinesSagas.js', () => {
    describe('fetchDeadlinesSaga', () => {
        const response = {
            deadlines: ['deadline1']
        };

        const fetchDeadlinesGenerator = fetchDeadlinesSaga();
        it('fetchDeadlinesSaga should call API', () => {
            expect(fetchDeadlinesGenerator.next().value).toEqual(call(fetchDeadlines));
        });
        it('fetchDeadlinesSaga should dispatch FETCH_DEADLINES_SUCCESS', () => {
            expect(fetchDeadlinesGenerator.next(response).value).toEqual(put(fetchDeadlinesSuccess(response.deadlines)));
        });
        it('fetchDeadlinesSaga should dispatch FETCH_DEADLINES_ERROR on error', () => {
            expect(fetchDeadlinesGenerator.throw('error').value).toEqual(put(fetchDeadlinesError('Could not fetch deadlines')));
        });
    });

    describe('watchDeadlinesSaga', () => {
        const watchDeadlinesSagaGenerator = watchDeadlinesSaga();
        it('watchDeadlinesSagaGenerator should take latest of FETCH_DEADLINES', () => {
            expect(watchDeadlinesSagaGenerator.next().value).toEqual(takeLatest(FETCH_DEADLINES, fetchDeadlinesSaga));
        });
    });
});