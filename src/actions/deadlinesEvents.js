import {FETCH_DEADLINES, FETCH_DEADLINES_ERROR, FETCH_DEADLINES_SUCCESS} from "../constants/actions";

export const fetchDeadlines = () => ({
    type: FETCH_DEADLINES
});

export const fetchDeadlinesSuccess = (deadlines) => ({
    type: FETCH_DEADLINES_SUCCESS,
    payload: {deadlines}
});

export const fetchDeadlinesError = (error) => ({
    type: FETCH_DEADLINES_ERROR,
    payload: {error}
});