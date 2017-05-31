import * as actions from "../constants/actions";

export const fetchDuplicates = () => ({
    type: actions.FETCH_DUPLICATES
});

export const fetchDuplicatesSuccess = (duplicates) => ({
    type: actions.FETCH_DUPLICATES_SUCCESS,
    payload: {duplicates}
});

export const fetchDuplicatesError = (error) => ({
    type: actions.FETCH_DUPLICATES_ERROR,
    payload: {error}
});

export const mergeDuplicates = (id, duplicatesIds, mergedItem) => ({
    type: actions.MERGE_DUPLICATES,
    payload: {id, duplicatesIds, mergedItem}
});

export const mergeDuplicatesSuccess = (id, mergedItem) => ({
    type: actions.MERGE_DUPLICATES_SUCCESS,
    payload: {id, mergedItem}
});

export const mergeDuplicatesError = (error) => ({
    type: actions.MERGE_DUPLICATES_ERROR,
    payload: {error}
});

export const ignoreDuplicates = (id, duplicatesIds) => ({
    type: actions.IGNORE_DUPLICATES,
    payload: {id, duplicatesIds}
});

export const ignoreDuplicatesSuccess = (id) => ({
    type: actions.IGNORE_DUPLICATES_SUCCESS,
    payload: {id}
});

export const ignoreDuplicatesError = (error) => ({
    type: actions.IGNORE_DUPLICATES_ERROR,
    payload: {error}
});

export default {fetchDuplicates, mergeDuplicates, ignoreDuplicates}