import {FETCH_SALES, FETCH_SALES_ERROR, FETCH_SALES_SUCCESS} from "../constants/actions";

export const fetchSales = () => ({
        type: FETCH_SALES
    }
);

export const fetchSalesSuccess = (sales) => ({
        type: FETCH_SALES_SUCCESS,
        payload: {sales}
    }
);

export const fetchSalesError = (error) => ({
        type: FETCH_SALES_ERROR,
        payload: {error}
    }
);