import initialState from "../../src/reducers/initialState";
import loadersReducer from "../../src/reducers/loadersReducer";
import {enableDuplicatesLoader, enableSalesLoader} from "../../src/actions/loadersEvents";

describe('REDUCER loadersReducer.js', () => {
    const loaders = {
        sales: false,
        duplicates: false
    };

    it('should return initial state', () => {
        expect(loadersReducer(undefined, {})).toEqual(initialState.loaders);
    });

    it('should handle ENABLE_SALES_LOADER', () => {
        expect(loadersReducer({duplicates: false}, enableSalesLoader(loaders.sales))).toEqual(loaders);
    });

    it('should not handle incorrect action', () => {
        expect(loadersReducer({}, {type: 'any', payload: loaders})).toEqual({});
    })

    it('should handle ENABLE_DUPLICATES_LOADER', () => {
        expect(loadersReducer({sales: false}, enableDuplicatesLoader(loaders.duplicates))).toEqual(loaders);
    });
});