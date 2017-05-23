import salesReducer from "../../src/reducers/salesReducer";
import initialState from "../../src/reducers/initialState";
import {fetchSalesSuccess} from "../../src/actions/salesEvents";

describe('REDUCER salesReducer.js', () => {
    const sales = {
        finalDate: new Date(2018, 5, 1),
        personalizationDate: new Date(2017, 9, 15),
        exactQuantityDate: new Date(2017, 9, 15),
        campus: 150,
        online: 419,
        max: 1500
    };

    it('salesReducer should return the initial state', () => {
        expect(salesReducer(undefined, {})).toEqual(initialState.sales);
    });

    [undefined, null, {}, {campus: 1}].forEach((initialState) =>
        it('salesReducer should handle FETCH_SALES_SUCCESS for initial state ' + initialState, () => {
            expect(salesReducer(initialState, fetchSalesSuccess(sales))).toEqual(sales);
        })
    );

    it('salesReducer should not handle action if not FETCH_SALES_SUCCESS', () => {
        expect(salesReducer(sales, {})).toEqual(sales);
    });
});