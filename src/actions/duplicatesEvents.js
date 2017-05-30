import {
    FETCH_DUPLICATES,
    FETCH_DUPLICATES_ERROR,
    FETCH_DUPLICATES_SUCCESS,
    MERGE_DUPLICATES,
    MERGE_DUPLICATES_ERROR,
    MERGE_DUPLICATES_SUCCESS
} from "../constants/actions";

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

export const mergeDuplicates = (duplicates, selectedFields) => ({
    type: MERGE_DUPLICATES,
    payload: {duplicates, selectedFields}
});

export const mergeDuplicatesSuccess = (id) => ({
    type: MERGE_DUPLICATES_SUCCESS,
    payload: {id}
});

export const mergeDuplicatesError = (error) => ({
    type: MERGE_DUPLICATES_ERROR,
    payload: {error}
});

export default {fetchDuplicates, fetchDuplicatesSuccess, fetchDuplicatesError, mergeDuplicates}