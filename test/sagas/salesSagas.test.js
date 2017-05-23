import {fetchSalesSaga} from "../../src/sagas/salesSagas";
import watchSalesSaga from "../../src/sagas/salesSagas";
import {fetchSales} from "../../src/api/salesApi";
import {call, put, takeLatest} from "redux-saga/effects";
import {fetchSalesError, fetchSalesSuccess} from "../../src/actions/salesEvents";
import {FETCH_SALES} from "../../src/constants/actions";

describe('SAGA salesSagas.js', () => {
    describe('fetchSalesSaga', () => {
        let fetchSalesSagaGen = fetchSalesSaga();
        const mockResponse = {
            sales: {
                campus: 0,
                online: 0,
                max: 1500
            }
        };
        const mockError = 'Could not fetch sales';
        it('fetchSalesSaga should call API to retrieve sales', () => {
            expect(fetchSalesSagaGen.next().value).toEqual(call(fetchSales))
        });
        it('fetchSalesSaga should dispatch fetch success effect', () => {
            expect(fetchSalesSagaGen.next(mockResponse).value).toEqual(put(fetchSalesSuccess(mockResponse.sales)))
        });
        it('fetchSalesSaga should dispatch fetch error effect', () => {
            expect(fetchSalesSagaGen.throw('error').value).toEqual(put(fetchSalesError(mockError)))
        });
    });

    describe('watchSalesSaga', () => {
        let watchSalesSagaGen = watchSalesSaga();
        it('watchSalesSaga should take latest of FETCH_SALES', () => {
            expect(watchSalesSagaGen.next().value).toEqual(takeLatest(FETCH_SALES, fetchSalesSaga));
        });
    });
});