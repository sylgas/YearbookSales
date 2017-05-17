import {FETCH_SALES, FETCH_SALES_SUCCESS} from "../constants/actions";

export function fetchSales() {
    return {
        type: FETCH_SALES
    }
}

export function fetchSalesSuccess(sales) {
    return {
        type: FETCH_SALES_SUCCESS,
        payload: {sales: sales}
    }
}