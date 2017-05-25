import {fetchSales} from "../api/salesApi";
import {fetchSalesError, fetchSalesSuccess} from "../actions/salesEvents";
import {call, put, takeLatest} from "redux-saga/effects";
import {FETCH_SALES} from "../constants/actions";
import {enableSalesLoader} from "../actions/loadersEvents";

export function* fetchSalesSaga() {
    try {
        const response = yield call(fetchSales);
        yield put(fetchSalesSuccess(response.sales));
        yield put(enableSalesLoader(false));
    } catch (e) {
        yield put(fetchSalesError("Could not fetch sales"));
        yield put(enableSalesLoader(false));
    }
}

export default function* watchSalesSaga() {
    yield* [
        takeLatest(FETCH_SALES, fetchSalesSaga)
    ];
}