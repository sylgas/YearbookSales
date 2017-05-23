import {fetchSales} from "../api/salesApi";
import {fetchSalesError, fetchSalesSuccess} from "../actions/salesEvents";
import { put, call, takeLatest } from 'redux-saga/effects'
import {FETCH_SALES} from "../constants/actions";

export function* fetchSalesSaga() {
    try {
        const response = yield call(fetchSales);
        yield put(fetchSalesSuccess(response.sales));
    } catch (e) {
        yield put(fetchSalesError("Could not fetch sales"))
    }
}

export default function* watchSalesSaga() {
    yield takeLatest(FETCH_SALES, fetchSalesSaga)
}