import {FETCH_DUPLICATES, FETCH_DUPLICATES_ERROR, FETCH_DUPLICATES_SUCCESS} from "../constants/actions";

export const fetchDuplicates = () => ({
    type: FETCH_DUPLICATES
});

export const fetchDuplicatesSuccess = (duplicates) => ({
    type: FETCH_DUPLICATES_SUCCESS,
    payload: {duplicates}
});

export const fetchDuplicatesError = (error) => ({
    type: FETCH_DUPLICATES_ERROR,
    payload: {error}
});

export default {fetchDuplicates, fetchDuplicatesSuccess, fetchDuplicatesError}