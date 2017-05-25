import deadlineReducer from "../../src/reducers/deadlinesReducer";
import initialState from "../../src/reducers/initialState";
import {fetchDeadlinesSuccess} from "../../src/actions/deadlinesEvents";

describe('REDUCER deadlinesReducer;.js', () => {
    it("deadlinesReducer should return initial state", () => {
        expect(deadlineReducer(undefined, {})).toEqual(initialState.deadlines);
    });

    const deadlines = {
        ordered: [{
            dueDate: new Date(2017, 9, 23),
            submitted: 16,
            pages: 20
        }],
        totalSubmitted: 1
    };

    [undefined, null, {}, {ordered: []}].forEach((state) => {
        it("deadlineReducer should handle FETCH_DEADLINES_SUCCESS for state" + state, () => {
            expect(deadlineReducer(state, fetchDeadlinesSuccess(deadlines))).toEqual(deadlines);
        })
    });

    it("deadlinesReducer should not handle different action than FETCH_DEADLINES_SUCCESS", () => {
        expect(deadlineReducer(deadlines, {})).toEqual(deadlines);
    });
});