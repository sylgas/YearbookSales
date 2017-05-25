import apiMiddleware from "../../src/midlewares/apiMiddleware";
import {fetchSales} from "../../src/actions/salesEvents";
import * as searchApi from '../../src/api/salesApi';

jest.mock('../../src/api/salesApi');

describe('MIDDLEWARE apiMiddleware.js', () => {
   let next, dispatch, middleware, response;
    beforeEach(() => {
        dispatch = jest.fn();
        next = jest.fn();
        middleware = apiMiddleware({dispatch})(next);
        response = {};
    });
    it('apiMiddleware call next', () => {
        middleware({});
        expectFunctionCalledWithParam(next, {});
    });

    it('apiMiddleware call next on FETCH_SALES', () => {
        const mockData = {sales: 'sales'};
        searchApi.fetchSales.mockImplementationOnce(() => new Promise((resolve) => {
            resolve(mockData);
        }));
        middleware(fetchSales());
        expectFunctionCalledWithParam(next, fetchSales());
        expectFunctionCalledWithParam(searchApi.fetchSales);
    });
});

function expectFunctionCalledWithParam(fun, ...param) {
    const calls = fun.mock.calls;
    expect(calls.length).toEqual(1);
    expect(calls[0].length).toEqual(param.length);
    for(let i = 0; i < param.length; i++) {
        expect(calls[0][i]).toEqual(param[i]);
    }
}