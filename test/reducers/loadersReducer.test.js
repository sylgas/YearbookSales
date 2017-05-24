import initialState from "../../src/reducers/initialState";
import loadersReducer from "../../src/reducers/loadersReducer";
import {enableSalesLoader} from "../../src/actions/loadersEvents";

describe('REDUCER loadersReducer.js', () => {
    const loaders = {
        sales: false
    };

    it('should return initial state', () => {
        expect(loadersReducer(undefined, {})).toEqual(initialState.loaders);
    });

    [undefined, null, {}, loaders].forEach((state) => {
            it('should handle ENABLE_SALES_LOADER for  state' + state, () => {
                expect(loadersReducer(state, enableSalesLoader(loaders.sales))).toEqual(loaders);
            });
        }
    );

    it('should not handle action different than ENABLE_SALES_LOADER', () => {
        expect(loadersReducer({}, {type: 'any', payload: loaders})).toEqual({});
    })
});