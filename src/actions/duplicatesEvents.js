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

export const mergeDuplicates = (id, duplicatesIds, mergedItem) => ({
    type: MERGE_DUPLICATES,
    payload: {id, duplicatesIds, mergedItem}
});

export const mergeDuplicatesSuccess = (id, mergedItem) => ({
    type: MERGE_DUPLICATES_SUCCESS,
    payload: {id, mergedItem}
});

export const mergeDuplicatesError = (error) => ({
    type: MERGE_DUPLICATES_ERROR,
    payload: {error}
});

export default {fetchDuplicates, fetchDuplicatesSuccess, fetchDuplicatesError, mergeDuplicates}