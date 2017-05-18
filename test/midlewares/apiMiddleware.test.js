import apiMiddleware from "../../src/midlewares/apiMiddleware";
import {fetchSales} from "../../src/actions/salesEvents";

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
        middleware(fetchSales());
        expectFunctionCalledWithParam(next, fetchSales());
    });
});

function expectFunctionCalledWithParam(fun, param) {
    expect(fun.mock.calls.length).toEqual(1);
    expect(fun.mock.calls[0].length).toEqual(1);
    expect(fun.mock.calls[0][0]).toEqual(param);
}