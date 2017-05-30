import initialState from "../../src/reducers/initialState";
import duplicatesReducer from "../../src/reducers/duplicatesReducer";
import {
    fetchDuplicatesSuccess,
    ignoreDuplicates,
    ignoreDuplicatesSuccess,
    mergeDuplicates,
    mergeDuplicatesSuccess
} from "../../src/actions/duplicatesEvents";

describe('REDUCER duplicatesReducer;.js', () => {
    it("duplicatesReducer should return initial state", () => {
        expect(duplicatesReducer(undefined, {})).toEqual(initialState.duplicates);
    });

    const duplicates = [
        {id: 1},
        {id: 2}
    ];

    [[], duplicates].forEach((state) => {
        it("duplicatesReducer should handle FETCH_DUPLICATES_SUCCESS for state" + state, () => {
            expect(duplicatesReducer(state, fetchDuplicatesSuccess(duplicates))).toEqual(duplicates);
        })
    });


    it("duplicatesReducer should handle MERGE_DUPLICATES", () => {
        expect(duplicatesReducer(duplicates, mergeDuplicates(1, [0], 'mergedItem'))).toEqual([
            {id: 1, isMerging: true},
            {id: 2}
        ]);
    });

    it("duplicatesReducer should handle MERGE_DUPLICATES_SUCCESS", () => {
        expect(duplicatesReducer(duplicates, mergeDuplicatesSuccess(1, 'merged'))).toEqual([
            {id: 1, data: ['merged'], isMerging: false},
            {id: 2}
        ]);
    });

    it("duplicatesReducer should handle IGNORE_DUPLICATES", () => {
        expect(duplicatesReducer(duplicates, ignoreDuplicates(1, [0]))).toEqual([
            {id: 1, isIgnoring: true},
            {id: 2}
        ]);
    });

    it("duplicatesReducer should handle IGNORE_DUPLICATES_SUCCESS", () => {
        expect(duplicatesReducer(duplicates, ignoreDuplicatesSuccess(1))).toEqual([{id: 2}]);
    });
});